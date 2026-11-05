import {build} from 'esbuild';
import {cp,mkdir,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
await cp('src','dist',{recursive:true});
await build({entryPoints:['src/cloud-entry.js'],outfile:'dist/cloud-bundle.js',bundle:true,format:'iife',platform:'browser',target:['es2022'],minify:true,legalComments:'eof'});
console.log('Built dist/ for Vercel.');
