import {PDFDocument, rgb} from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import {Document, Packer, Paragraph, TextRun, HeadingLevel, Footer, PageNumber} from 'docx';

const TITLE='Willow Admin Services practice case study';
const INTRO='Fictional educational exercise. This document contains the learner’s practice analysis and proposals, not verified client results.';
export const EXPORT_FORMATS={pdf:{extension:'pdf',mime:'application/pdf'},docx:{extension:'docx',mime:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}};
const cleanText=value=>String(value??'').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g,'').replace(/\r\n?/g,'\n');
export function caseStudySnapshot(project,fields){return {title:TITLE,intro:INTRO,sections:fields.map(([key,title])=>({title:cleanText(title).replace(/&/g,'and').replace(/-/g,' '),text:cleanText(project[key]).trim()?cleanText(project[key]):'[Not yet completed]'}))};}

export async function makeWord(snapshot){
 const children=[new Paragraph({text:snapshot.title,heading:HeadingLevel.TITLE}),new Paragraph({children:[new TextRun({text:'Operations Lab',color:'52655F',size:22})],spacing:{after:180}}),new Paragraph({text:snapshot.intro,spacing:{after:300}})];
 snapshot.sections.forEach((section,i)=>{children.push(new Paragraph({text:`${i+1} ${section.title}`,heading:HeadingLevel.HEADING_1,keepNext:true}));for(const line of section.text.split('\n'))children.push(new Paragraph({children:[new TextRun({text:line})],spacing:{after:100,line:320},widowControl:true}));});
 const footer=new Footer({children:[new Paragraph({children:[
  new TextRun({text:'Operations Lab | Fictional practice case study | Page ',size:18,color:'52655F'}),
  new TextRun({children:[PageNumber.CURRENT],size:18,color:'52655F'})
 ]})]});
 const doc=new Document({
  creator:'Operations Lab',title:snapshot.title,description:snapshot.intro,
  styles:{default:{
   document:{run:{font:'Arial',size:22,color:'182A25'},paragraph:{spacing:{line:320,after:100}}},
   title:{run:{font:'Arial',size:48,color:'000000',bold:false},paragraph:{spacing:{after:200},keepNext:true}},
   heading1:{run:{font:'Arial',size:28,bold:true,color:'000000'},paragraph:{spacing:{before:280,after:140},keepNext:true}}
  }},
  sections:[{
   properties:{page:{size:{width:11906,height:16838},margin:{top:1080,bottom:1080,left:1080,right:1080}}},
   footers:{default:footer},children
  }]
 });
 const blob=await Packer.toBlob(doc);return new Uint8Array(await blob.arrayBuffer());
}

async function fontBytes(name){const response=await fetch(new URL(`./fonts/${name}`,import.meta.url));if(!response.ok)throw Error('PDF fonts could not be loaded. Please retry.');return new Uint8Array(await response.arrayBuffer());}
export async function makePdf(snapshot,suppliedFonts){
 const bytes=suppliedFonts||await Promise.all([fontBytes('DejaVuSans.ttf'),fontBytes('DejaVuSans-Bold.ttf')]);
 const doc=await PDFDocument.create();doc.registerFontkit(fontkit);doc.setTitle(snapshot.title);doc.setAuthor('Operations Lab');doc.setSubject(snapshot.intro);
 const normal=await doc.embedFont(bytes[0],{subset:true}),bold=await doc.embedFont(bytes[1],{subset:true});
 const allowed=new Set(normal.getCharacterSet());const missing=[...new Set(Array.from([snapshot.title,snapshot.intro,...snapshot.sections.flatMap(x=>[x.title,x.text])].join('')).filter(c=>!/[\n\t]/.test(c)&&!allowed.has(c.codePointAt(0))))];
 if(missing.length)throw Error('This PDF font cannot display some characters in your answers. Choose Word (.docx) to preserve them, or replace those characters and retry.');
 const W=595.28,H=841.89,M=54,width=W-2*M,bottom=58;let page,y;
 const newPage=()=>{page=doc.addPage([W,H]);y=H-M;};newPage();
 const room=height=>{if(y-height<bottom)newPage();};
 function wrap(text,font,size){
  const result=[];let line='';
  // Split long uninterrupted strings as well as normal words, retaining input spaces.
  const tokens=text.replace(/\t/g,'    ').match(/\s+|\S+/g)||[''];
  for(const token of tokens){if(font.widthOfTextAtSize(line+token,size)<=width){line+=token;continue;}if(line.trim()){result.push(line.trimEnd());line='';}if(!token.trim())continue;let chunk='';const segments=typeof Intl.Segmenter==='function'?[...new Intl.Segmenter(undefined,{granularity:'grapheme'}).segment(token)].map(s=>s.segment):Array.from(token);for(const ch of segments){if(chunk&&font.widthOfTextAtSize(chunk+ch,size)>width){result.push(chunk);chunk='';}chunk+=ch;}line=chunk;}
  result.push(line.trimEnd());return result;
 }
 function textBlock(text,font,size,lineHeight,color=rgb(.09,.16,.14)){for(const raw of text.split('\n')){const lines=wrap(raw,font,size);room(Math.min(lines.length,lines.length<=3?3:2)*lineHeight);for(let i=0;i<lines.length;i++){room((lines.length-i===2?2:1)*lineHeight);const line=lines[i];if(line)page.drawText(line,{x:M,y:y-size,font,size,color});y-=lineHeight;}}}
 textBlock('OPERATIONS LAB',normal,9,16,rgb(.25,.38,.33));y-=10;
 textBlock(snapshot.title,normal,24,31,rgb(0,0,0));y-=10;textBlock(snapshot.intro,normal,10.5,16);y-=16;
 snapshot.sections.forEach((section,i)=>{const heading=`${i+1} ${section.title}`;room(wrap(heading,bold,14).length*21+5+Math.min(wrap(section.text.split('\n')[0],normal,10.5).length,3)*16);textBlock(heading,bold,14,21,rgb(0,0,0));y-=5;textBlock(section.text,normal,10.5,16);y-=18;});
 const pages=doc.getPages();pages.forEach((p,i)=>p.drawText(`Operations Lab | Fictional practice case study | ${i+1} / ${pages.length}`,{x:M,y:30,font:normal,size:8,color:rgb(.33,.4,.37)}));
 return doc.save();
}
export async function createCaseStudy(format,project,fields,options={}){if(!EXPORT_FORMATS[format])throw Error('Choose PDF or Word document.');const snapshot=caseStudySnapshot(project,fields);const bytes=format==='pdf'?await makePdf(snapshot,options.fonts):await makeWord(snapshot);return {bytes,name:`operations-lab-practice-case-study.${EXPORT_FORMATS[format].extension}`,mime:EXPORT_FORMATS[format].mime};}
