const weeks=[
['How a business works','Understand what creates value, how money moves, and why people, processes, data and tools must work together.',[
['The business behind the tools','Explain a business model and connect a customer need to value, delivery and payment.','Map a fictional service business from customer need to paid delivery.'],
['Revenue, costs & profit','Distinguish sales from profit and calculate a simple operating result.','Compare two improvement options using contribution and fixed costs.'],
['Profit is not cash','Explain why a profitable business can struggle to pay its bills.','Build a short cash timeline and investigate overdue invoices.'],
['Departments are connected','Trace how one team’s actions affect another team and the customer.','Sequence a lead-to-payment workflow and repair a weak handoff.'],
['People, process, data & tools','Diagnose a recurring problem before selecting a tool.','Separate ownership, process, data and technology issues in a case.']]],
['Understanding workflows','Make invisible work visible before trying to change it.',[
['Triggers, inputs and outputs','Define where a process starts and ends.','Map a booking request: trigger, required inputs, output and boundary.'],['Decisions and exceptions','Separate the normal path from judgment calls.','Draw accepted, incomplete and unusual request branches.'],['Handoffs and ownership','Assign a responsible person and a decision owner.','Create a handoff checklist with a receiving owner and deadline.'],['Write a usable SOP','Turn a repeatable task into clear instructions.','Write a one-page procedure with exceptions and escalation.'],['Map the current process','Capture actual work rather than the ideal version.','Interview fictional staff and map queues, systems and wait time.']]],
['Core business operations','Follow the customer journey across commercial, delivery and support work.',[
['Marketing, sales and leads','Distinguish attention, qualified interest and a sale.','Trace a missed inquiry and define lead ownership.'],['Onboarding and delivery','Translate a promise into reliable service.','Build a checklist from signed proposal to delivery readiness.'],['Customer support','Separate a one-off request from a recurring service defect.','Categorize complaints and propose an escalation route.'],['Invoices and collections','Explain the path from delivered work to collected payment.','Audit a fictional invoice for missing information and approval delays.'],['Reporting and administration','Choose useful reports and reliable internal routines.','Replace a vague weekly report with three decision-focused measures.']]],
['Diagnosing operational problems','Find evidence and causes before proposing a solution.',[
['Bottlenecks and queues','Identify the step limiting flow.','Compare arrival volume and capacity across three work stages.'],['Duplicate work and rework','Distinguish repeated entry from correction work.','Track how one missing field creates three rounds of effort.'],['Follow-ups and missing information','Investigate why work needs chasing.','Trace a stalled request to an absent input or owner.'],['Symptoms versus causes','Test competing explanations without jumping to conclusions.','Create a five-whys chain and identify evidence that could disprove it.'],['Visibility and responsibility','Make work status actionable.','Design an owner, next action and due-date view for a shared queue.']]],
['Evaluating automation opportunities','Choose between process change, rules, AI, analysis and human judgment.',[
['Task suitability and stability','Assess repeatability, rules and exception frequency.','Sort six tasks into automate, improve first and human-led.'],['Volume, effort and data quality','Weigh expected benefit against cleanup effort.','Score two opportunities using volume and missing-data rates.'],['Systems and integrations','Identify access, field matching and failure risks.','Create a data-flow inventory including permissions and retries.'],['Rules, AI and analytics','Select a method that fits the decision.','Compare deterministic reminders, draft classification and trend analysis.'],['Exceptions and human review','Design a safe fallback and maintenance owner.','Write approval, failure alert and rollback paths for a pilot.']]],
['Measuring business value','Use transparent assumptions and outcomes to assess improvement.',[
['Choose a baseline','Define a measure with a numerator, denominator and time window.','Calculate response time and turnaround time from fictional records.'],['Errors and conversion','Avoid misleading percentages.','Compare error and conversion rates using matched definitions.'],['Time and capacity','Distinguish freed hours from realized cash savings.','Estimate repetitive hours and state how capacity would be used.'],['Costs, benefits and ROI','Calculate a simple return with clear assumptions.','Model setup, recurring costs and monthly benefit with a sensitivity range.'],['Measure after the pilot','Compare like with like and investigate unintended effects.','Build a pilot scorecard including exception rate and service quality.']]],
['Client discovery and solution design','Move from a complaint to an evidence-based small pilot.',[
['Ask better discovery questions','Explore goals and actual work without leading the client.','Rewrite tool-first questions into open process questions.'],['Map and establish a baseline','Combine staff accounts with process evidence.','Create a current-state map and a request for five sample records.'],['Stakeholders and scope','Agree who decides, uses and maintains a change.','Write a scope statement with explicit exclusions and responsibilities.'],['Design a small pilot','Test one workflow with bounded risk.','Specify trigger, inputs, review point, fallback and stop conditions.'],['Present the recommendation','Explain a decision in business language.','Write a one-page proposal with options, assumptions and success measures.']]],
['Industry application & content','Apply judgment to industry cases and communicate without invented results.',[
['Services, agencies and shops','Adapt a framework to different business models.','Compare intake problems in an agency, repair shop and consultancy.'],['Healthcare administration','Explore access, scheduling and administrative handoffs.','Map a fictional referral using invented non-identifying information.'],['Medical billing operations','Separate denial prevention, follow-up and aging prioritization.','Investigate fictional denial categories and a payer deadline without assuming cause.'],['Teach through credible content','Turn an observation into an insight with appropriate evidence.','Draft LinkedIn and Facebook posts clearly labeled as practice examples.'],['Present your practice case study','Bring process, diagnosis, pilot and content together.','Complete the final project and score your reasoning with the rubric.']]]];
const lessons=[
{title:'The business behind the tools',eyebrow:'See the whole business',objective:'Describe how a business creates value for a specific customer, delivers that value, and earns money. Identify a customer problem before suggesting software.',scenario:'Maya runs BrightDesk, a fictional agency that sets up simple websites for local service businesses. Inquiries arrive by email. Maya wants an AI chatbot because “we need more sales.” Her designer says they already have more inquiries than they can follow up.',explain:`A business is a coordinated way of solving a customer’s problem in exchange for payment. A business model explains who pays, what they receive, how it is delivered, and how the business earns enough to continue. A customer is the person or organization buying the service; the user may be someone else. A value proposition is the reason that customer would choose this offer. “We build websites” describes an activity. “We help local tradespeople turn inquiries into booked jobs with a clear, easy-to-use website” explains intended value. It is a promise to investigate, not a guaranteed result.<br><br>Revenue is money earned from sales before subtracting costs. Costs are resources used to run and deliver the business. Delivery is the work that fulfills the promise. Acquisition is how customers find and choose the business. Retention is why customers stay or return. These parts must fit together: more inquiries help only if the business can qualify, sell to, and serve them. A tool can speed up one step while the overall business still struggles.`,worked:`BrightDesk sells a fictional $800 website package to independent service providers. Its buyer wants a professional way to receive inquiries. Maya attracts prospects through referrals, checks fit, agrees the scope, collects a deposit, gathers content, builds the site, obtains approval and collects the balance. Before recommending a chatbot, ask how many inquiries arrived, how many received a response, how many were qualified, and why others did not proceed. If 12 of 20 inquiries were never assigned, the first problem may be ownership rather than a lack of leads. All figures are invented for learning.`,flow:['Customer need','Clear offer','Sales conversation','Deliver service','Collect payment'],perspective:'Maya feels pressure to grow. The designer feels overwhelmed. A prospect feels ignored when nobody replies. Each sees a different part of the same system. Ask each person what happened to one recent inquiry rather than assuming their preferred solution is the diagnosis.',assessment:'Improve first. Agree who checks the inbox and how a lead is assigned. Then a simple rule could create a lead record and notify the owner when a complete inquiry arrives. Keep unusual requests and sales judgment with a person. Measure response coverage before assuming automation will increase sales.',pain:{quote:'“We get inquiries, but nothing seems to turn into business.”',symptom:'Inquiries do not consistently reach a sales conversation.',causes:'No owner; poor fit; unclear offer; slow responses; insufficient capacity.',questions:'How many inquiries arrive? Who responds? What counts as qualified? Where do prospects stop? Can we inspect ten recent inquiries?',consequence:'Lost opportunities, wasted marketing effort and a frustrating first impression. Do not assume the value of an unanswered inquiry equals a completed sale.',improve:'Define qualification, assign an owner and set a response expectation.',automation:'Create and assign a lead record from a structured intake form after the process is agreed.',evidence:'Arrival time, assigned owner, first response time, qualification and outcome for a defined period.'},exercise:'Choose a fictional service business. Write its customer, problem, offer, payment model and delivery steps. Then name one uncertainty you would investigate before automating anything.',rubric:['Names a specific buyer and their actual problem.','Connects the offer to delivery and payment.','Identifies an uncertainty and evidence, without assuming a tool is needed.'],sample:'A fictional bookkeeping service sells a monthly reconciliation package to small shop owners. The owner needs reliable records for decisions. Delivery runs from receiving transaction records through reconciliation, review and a monthly report. Payment is a monthly fee. Before automating reminders, I would check whether late reports are caused by missing records, review capacity or unclear deadlines.',quiz:[{q:'Maya wants more sales. Twelve inquiries have no assigned owner. What should you do first?',options:['Install an AI sales chatbot','Investigate inquiry handling and agree ownership','Increase advertising spend'],answer:1,why:['A chatbot could add another channel without fixing who follows up.','Correct. Verify the cause, define responsibility and then assess a repeatable task.','More inquiries could make an unmanaged queue larger.']},{q:'Which statement best explains customer value?',options:['We use n8n and Airtable','We send 100 emails a day','We help owners receive and manage customer inquiries'],answer:2,why:['Tools describe implementation, not the customer’s benefit.','Activity volume does not establish a useful outcome.','Correct. This connects the service to a customer need; results still need evidence.']}],decision:'improve',decisionWhy:'The evidence points to an undefined handling process. Clarify ownership before automating assignment.',insight:'An automation recommendation becomes stronger when you can explain the business outcome it supports.',hooks:['More leads will not fix an inbox nobody owns.','Before asking which tool, ask what the customer needs.','The first automation question is a business question.'],linkedin:['Open with the unanswered-inquiry scenario, labeled fictional.','Explain the customer → offer → delivery → payment chain.','Share three discovery questions and one modest process improvement.'],facebook:['Tell the short story of a customer waiting for a reply.','Explain why a clear owner matters in everyday language.','Invite business owners to describe where inquiries get stuck.'],conversation:'Who owns a new inquiry from the moment it arrives?',claims:'Verify any claims about conversion, response speed or sales growth. This scenario is educational, not a client result.',recap:'A business connects a customer need, an offer, delivery and payment. A tool is only one part of that system.',reflection:'What would you need to learn about a business before naming a tool?',deeper:'Spend five extra minutes comparing a subscription business with a one-off project business. How does each get paid, deliver value and retain customers?'},
{title:'Revenue, costs & profit',eyebrow:'Follow the economics',objective:'Calculate a simple profit estimate and distinguish revenue growth, cost reduction and capacity improvement.',scenario:'BrightDesk sells more projects this month, yet Maya has little money left after paying contractors. She wants to automate email replies because they look repetitive. The more expensive problem might be repeated design revisions.',explain:`Revenue is earned from sales. Profit is what remains after relevant costs are deducted over a period. In this simplified lesson, operating profit = revenue − variable costs − fixed operating costs. Real accounts can include other items; always define what your calculation includes.<br><br>Variable costs change with the amount of work delivered: for example a contractor fee for each project. Fixed costs stay broadly unchanged within the capacity range you are considering: for example a monthly office subscription. A cost can behave differently at a larger scale, so “fixed” is not “fixed forever.” Contribution per project is selling price minus variable cost per project. Contribution helps cover fixed costs before creating profit. Margin expresses profit as a share of revenue. Revenue, contribution and profit are different measures.<br><br>Time saved can free capacity. It does not automatically reduce payroll or create extra sales. To claim a cash saving, identify a cost that would actually disappear. To claim extra revenue, show both available demand and delivery capacity.`,worked:`Hypothetical month: 10 projects × $800 = $8,000 revenue. Contractor costs are $300 per project, so total variable costs are $3,000. Fixed operating costs are $2,000. Estimated operating profit = $8,000 − $3,000 − $2,000 = $3,000; operating margin = $3,000 ÷ $8,000 = 37.5%. Contribution is $500 per project. One additional project would add $500 contribution only if price and variable cost remain the same and no extra fixed costs arise.<br><br>Suppose revisions cost an additional $100 per project because the brief is unclear. A better brief could protect up to $1,000 in this hypothetical month, but that estimate needs evidence about which revisions could really be prevented.`,flow:['$8,000 revenue','− $3,000 variable costs','− $2,000 fixed costs','= $3,000 operating profit'],perspective:'The owner may celebrate sales while worrying about thin returns. Staff may feel punished for revisions that arose from unclear promises. A client may feel a second revision was necessary because the original brief was misunderstood.',assessment:'Improve scope and approval rules first. Automating reminders may help collect a completed brief, but it cannot decide an ambiguous scope fairly. Do not count freed employee time as a cash saving unless spending changes. Use analytics to classify revision reasons before selecting an automation.',pain:{quote:'“We’re busier than ever, but the numbers don’t feel better.”',symptom:'Revenue rises while profit per project weakens.',causes:'Underpricing; unpaid scope changes; rework; higher contractor costs; poor project mix.',questions:'What costs vary per job? How many revisions occur? What was promised? Are cost records complete?',consequence:'Lower funds available for reinvestment and a team using capacity on unpriced work.',improve:'Clarify deliverables, revision limits, approval criteria and change requests.',automation:'Prompt the project owner when an approved scope change needs a quote; keep approval human-led.',evidence:'Project price, actual delivery costs, revision causes and agreed scope.'},exercise:'For eight fictional projects priced at $600 each, variable cost is $250 per project and fixed operating cost is $1,500. Calculate revenue, contribution per project, total contribution and operating profit. Explain why four hours saved would not automatically increase profit.',rubric:['Uses the correct units and separates per-project from monthly amounts.','Subtracts both variable and fixed costs.','Distinguishes capacity from an actual reduction in cash spending.'],sample:'Revenue = 8 × $600 = $4,800. Contribution per project = $600 − $250 = $350. Total contribution = $2,800. Operating profit = $2,800 − $1,500 = $1,300. Four hours saved create capacity. Profit changes only if a cost falls or additional profitable work is actually sold and delivered.',quiz:[{q:'Which change directly increases contribution per project, with selling price unchanged?',options:['Lower variable cost per project','More followers','A faster report with no cost change'],answer:0,why:['Correct. Selling price minus variable cost determines contribution.','Followers might help acquisition, but do not directly change contribution.','A faster report can be useful, but no financial change has been established.']},{q:'A salaried employee saves five hours. What can you safely say?',options:['Payroll spending fell by five hours of pay','The business gained potential capacity','Revenue increased automatically'],answer:1,why:['Salary may remain unchanged. There is no established cash saving.','Correct. What happens to that capacity determines any realized benefit.','Extra revenue requires demand, sales and delivery.']}],calc:{q:'Eight projects at $600, $250 variable cost per project, $1,500 fixed cost. What is operating profit in dollars?',answer:1300,explanation:'8 × (600 − 250) − 1,500 = $1,300. Revenue alone is $4,800.'},decision:'improve',decisionWhy:'Clarify scope and gather revision costs before automating the revision process.',insight:'Busy is an activity signal; profitable is an economic result.',hooks:['A full calendar can hide an expensive process.','Time saved is not automatically money saved.','Your sales figure tells only part of the story.'],linkedin:['Introduce a labeled hypothetical revenue-versus-profit example.','Show the simple cost calculation.','Explain why rework deserves investigation before automation.'],facebook:['Use an everyday example of charging for work but repeating it unpaid.','Explain money in minus delivery costs.','Ask where repeated work is eating into a normal week.'],conversation:'Which repeated task consumes capacity without adding customer value?',claims:'Verify prices, cost figures and savings claims. Label calculations hypothetical and specify cost inclusions.',recap:'Revenue is not profit. Contribution helps cover fixed costs. Saved hours are potential capacity until a concrete benefit is realized.',reflection:'What evidence would make a time-saving claim financially credible?',deeper:'Calculate how profit changes if variable cost rises to $300 per project. State which assumptions stay unchanged.'},
{title:'Profit is not cash',eyebrow:'Understand the timing',objective:'Distinguish earned revenue from money received and build a simple cash timeline.',scenario:'BrightDesk has delivered $5,000 of work and expects $2,000 profit in a simplified report. Customers have not paid yet. Contractor payments are due on Friday, before customers’ promised payment dates.',explain:`Cash flow is the movement of money into and out of the business. A cash balance is the amount available at a particular time. In a simplified accrual view, revenue can be recognized when work is earned even if payment has not arrived. That means profit and cash can move differently. An invoice requests payment; it is not proof of payment. Accounts receivable is money customers owe for billed or earned sales, depending on the record and accounting treatment. An overdue invoice has passed its agreed due date.<br><br>A business can be profitable over a month but unable to pay a bill today. Timing matters: deposits, supplier terms, payment approval and collection delays affect the gap. Aging groups unpaid balances by how long they have been outstanding. Define whether age starts at invoice date or due date; those views answer different questions. Before reminding a customer, verify the invoice is valid, reached the right person, and is not already paid or disputed.<br><br>A cash forecast estimates expected receipts and payments over time. It is an assumption-based plan, not a guarantee. Treat uncertain receipts as uncertain.`,worked:`Hypothetical week: opening cash $1,000. Monday receipts $0. Wednesday contractor payment $1,500. Friday customer receipt $3,000. Wednesday’s estimated balance is $1,000 − $1,500 = −$500; Friday’s is $2,500. The Friday receipt does not prevent Wednesday’s shortage. A signed deposit agreement, earlier invoice delivery or negotiated supplier terms might change timing, but each needs an agreement rather than an automation assumption.<br><br>For an overdue invoice, ask: was the service accepted, was the invoice accurate, does the customer have a purchase-order requirement, and has payment already been recorded elsewhere? A reminder is appropriate only after those checks fit the agreed process.`,flow:['Opening $1,000','Wednesday: pay $1,500','Gap: $500 short','Friday: receive $3,000'],perspective:'The owner fears missing payroll despite a strong sales report. A staff member spends hours chasing payments. A customer may resent reminders for an invoice they disputed or already paid.',assessment:'Automate only a stable, verified reminder path with payment reconciliation, dispute flags and human escalation. If invoices lack required details, improve invoice quality first. Forecasting is analysis; reminders are rules; negotiating a disputed payment remains human-led.',pain:{quote:'“The sales report looks healthy, but I’m chasing money every week.”',symptom:'Unpaid balances and short-term cash pressure.',causes:'Late invoicing; inaccurate invoices; approval delays; disputes; unrecorded payments; agreed long payment terms.',questions:'When is work billed? What are the terms? Which balances are disputed? Are receipts reconciled? Who owns collection?',consequence:'Uncertain cash timing, collection effort and possible late supplier payments. Unpaid amounts are not automatically lost revenue.',improve:'Invoice accurately and promptly, verify recipient details and maintain a dispute path.',automation:'Send agreed reminders only for eligible outstanding invoices, stopping when paid or disputed.',evidence:'Invoice date, due date, delivery confirmation, dispute status, receipt date and reconciled balance.'},exercise:'Opening cash is $900. A $1,200 payment is due Tuesday; $2,000 is expected Thursday. Write the balance after each event, identify the largest gap, and propose two questions before suggesting automated reminders.',rubric:['Places events in time order.','Identifies the Tuesday shortfall separately from Thursday’s closing balance.','Checks invoice validity, terms or reconciliation before recommending reminders.'],sample:'Tuesday balance = $900 − $1,200 = −$300. Thursday balance = −$300 + $2,000 = $1,700, assuming the receipt arrives. The gap is $300 on Tuesday. I would ask whether invoices reached the correct approver and whether payments or disputes are recorded accurately. I would investigate agreed terms and an appropriate cash plan with the owner.',quiz:[{q:'An invoice was sent yesterday. What does that establish?',options:['Cash is available','A payment request was issued','The customer is overdue'],answer:1,why:['Sending an invoice does not mean payment arrived.','Correct. Check receipt and payment status separately.','Overdue depends on the agreed due date, not merely sending.']},{q:'Which invoice should leave the automatic reminder path?',options:['An eligible unpaid invoice after its due date','An invoice marked disputed','An undisputed invoice with a verified balance'],answer:1,why:['It may qualify if the reminder policy and records are reliable.','Correct. A person should investigate the dispute before routine chasing.','A verified balance can support reminders if other policy conditions are met.']}],calc:{q:'Opening cash $900, Tuesday payment $1,200. What is Tuesday’s balance? Use a negative number for a shortage.',answer:-300,explanation:'900 − 1,200 = −$300. The later receipt does not change Tuesday’s gap.'},decision:'human',decisionWhy:'For a disputed invoice, a person must clarify facts and agree the next action. Routine reminders should pause.',insight:'An unpaid invoice may be a process problem long before it becomes a reminder problem.',hooks:['An invoice is not money in the bank.','A profitable month can still contain a cash shortage.','Before chasing a payment, check what is blocking it.'],linkedin:['Show the fictional Wednesday-versus-Friday cash timeline.','Explain profit and payment timing in plain language.','Offer three checks before automating collections.'],facebook:['Tell the story of money expected Friday and a bill due Wednesday.','Explain why timing matters even when sales look good.','Ask what usually slows invoice approval.'],conversation:'What has to happen between sending an invoice and receiving payment?',claims:'Verify financial terminology for the intended context. All cash figures here are hypothetical, not financial advice or client results.',recap:'Cash is about timing as well as amount. Accurate invoices, reconciliation and dispute handling come before a reminder system.',reflection:'How could a reminder make the customer experience worse?',deeper:'Build a seven-day cash table with one delayed receipt. Compare the expected and delayed cases.'},
{title:'Departments are connected',eyebrow:'Follow the handoffs',objective:'Explain the roles of major business functions and map how work and information pass between them.',scenario:'BrightDesk’s salesperson promises delivery in five days. The designer has not received the client’s logo or approved text. Finance sends an invoice, but the client says the work is incomplete. Three teams each believe another team caused the problem.',explain:`A business function is a type of work, even when one person performs several functions. Marketing attracts attention and explains the offer. Sales helps suitable buyers decide and agrees what will be delivered. Operations organizes delivery. Customer support helps resolve questions and problems. Finance records money owed, paid and spent. Administration supports the routines, access, scheduling and records that make other work possible.<br><br>A workflow is a sequence of steps that moves a case toward an outcome. A handoff transfers work or responsibility between people or teams. A weak handoff can look like laziness when the actual problem is missing information or an unclear acceptance condition. Ownership means someone is accountable for the next action; being copied on an email does not establish ownership.<br><br>Define the trigger that starts a step, its required inputs, its owner, its output and what the receiving person needs to accept it. A service business might have a perfectly fast sales team and a slow overall delivery experience because incomplete work waits between teams. Track the whole customer journey rather than only one team’s activity count.`,worked:`A better BrightDesk sequence: inquiry received → sales qualifies need → scope and terms agreed → onboarding gathers content → delivery checks readiness → design work → customer approval → eligible invoice and collection. The exact invoice timing follows the contract; deposits may come earlier. At the sales-to-delivery handoff, required fields include approved scope, agreed date, customer contact, content readiness and named project owner. Missing content should trigger a clear request or revised schedule, not a silent queue.<br><br>Finance should know when an invoice is eligible and how disputes are flagged. Support needs project context so customers do not have to repeat the story.`,flow:['Marketing & sales','Agreed scope','Ready for delivery','Customer approval','Finance & support'],perspective:'The salesperson wants to keep a promise. The designer wants complete inputs. Finance wants an accurate basis for billing. The customer wants one clear answer. A shared handoff standard aligns these needs.',assessment:'Improve first by agreeing readiness criteria and delivery promises. A rule can then check required fields, create the next task and notify its owner. Do not automatically promise a date without checking capacity or customer dependencies. Human review belongs on unusual scope or scheduling conflicts.',pain:{quote:'“Everyone is working hard, but customers still have to chase us.”',symptom:'Work waits between teams and customers repeat information.',causes:'Unclear handoffs; missing inputs; inconsistent status; promises made without capacity checks.',questions:'Who owns the next step? What must be complete? How does the receiver know? Where does work wait?',consequence:'Longer turnaround, repeated updates, rework and damaged trust.',improve:'Agree a readiness checklist, one owner and a visible next action.',automation:'Create a delivery task only when agreed readiness fields pass validation; route exceptions for review.',evidence:'Handoff timestamps, missing-field rate, queue age and customer follow-up count.'},exercise:'Map inquiry → qualification → agreed scope → onboarding → delivery → approval → payment. For two handoffs, name the sender, receiving owner, required input and what happens if the input is missing. Explain one consequence for a different team.',rubric:['Shows work in a meaningful order while stating payment-term assumptions.','Names an owner and acceptance criteria for two handoffs.','Explains an upstream issue’s downstream effect.'],sample:'Sales hands approved scope and timing to project owner Lina. If content is missing, Lina requests it and confirms the schedule before starting. Delivery hands customer approval and agreed billable items to finance owner Musa. If approval is disputed, finance holds the routine collection path while Lina resolves it. Missing scope at sales can later cause an invoice dispute.',quiz:[{q:'What makes a handoff usable?',options:['Copy everyone on an email','Name a receiver and define required inputs and next action','Buy a shared dashboard before defining the process'],answer:1,why:['Visibility without responsibility can leave work unowned.','Correct. The receiver must know what to do and have what they need.','A dashboard can display ambiguity rather than solve it.']},{q:'A team replies quickly but projects still take weeks. What should you inspect?',options:['Only the number of emails sent','Wait time and incomplete inputs between teams','Only the designer’s typing speed'],answer:1,why:['Activity counts do not explain end-to-end delay.','Correct. Fast individual tasks can be separated by long queues.','This narrows the investigation before evidence supports it.']}],sequence:['Inquiry received','Scope agreed','Content collected','Service delivered','Customer approval'],decision:'improve',decisionWhy:'Agree handoff criteria and realistic promises before automating task creation.',insight:'A slow customer journey can be caused by the spaces between teams.',hooks:['Copied on an email does not mean responsible.','The delay may be between teams, not inside them.','A handoff needs more than a notification.'],linkedin:['Use the fictional five-day promise as the opening.','Show the handoff checklist: owner, inputs, next action.','Explain how incomplete scope becomes a finance dispute.'],facebook:['Describe a customer repeating the same request to three people.','Show how a named owner and checklist help.','Invite examples of work that falls between teams.'],conversation:'What does the next person need before they can actually start?',claims:'Verify any turnaround or customer satisfaction claims before publishing. A process map shows a hypothesis, not measured improvement.',recap:'Functions connect through handoffs. Clear ownership and complete inputs help the whole business serve the customer.',reflection:'Where might a fast local task hide a slow overall process?',deeper:'Add an exception branch for a customer who changes scope after work begins. Who decides the next step?'},
{title:'People, process, data & tools',eyebrow:'Diagnose before you automate',objective:'Separate people, process, data and tool issues and choose whether to automate, improve first or keep a decision human-led.',scenario:'BrightDesk has two client spreadsheets, three people sending updates and inconsistent project status labels. Maya asks for an n8n workflow to synchronize everything. Nobody agrees which record is authoritative.',explain:`People bring skills, capacity and judgment. Process defines the order, rules, responsibilities and exceptions of work. Data is the information used to make decisions and move work forward. Tools store information or perform actions. These four parts interact. A reliable tool cannot infer an ownership rule the business has never agreed.<br><br>A symptom is what you observe: duplicate updates, late delivery or missing records. A root cause is an underlying condition that helps explain the symptom. It is a hypothesis to test, not a label to attach after one conversation. A single issue may have several contributing causes. Ask what happened, where it happened and what evidence would support or challenge each explanation.<br><br>Rule-based automation follows defined conditions: if an approved project is ready, create a delivery task. AI assistance may draft or classify ambiguous text, but can make mistakes and may need review. Analytics examines patterns to support decisions. Process redesign changes how work is organized. Human-led work remains appropriate for sensitive judgment, negotiation and unusual cases. The best answer can combine methods, beginning with a smaller process change.<br><br>Use the assessment checklist: goal → current work → owners → friction → evidence → cause → stability → data and systems → exceptions → pilot → measures → maintenance. A pilot is a limited test, not a promise to automate the whole business.`,worked:`Classify BrightDesk’s problems. People: nobody is assigned to reconcile conflicting updates. Process: status changes lack shared rules. Data: project identifiers differ and records are incomplete. Tools: separate spreadsheets lack a controlled integration. First agree one authoritative record, a project ID, status definitions, update rights and an owner. Test a small set of fictional records manually.<br><br>Then pilot a one-way notification when a validated project becomes “ready.” Exclude disputed scope and incomplete records; send these to an owner. Compare time to assign, missing-data rate and duplicate messages against a baseline. Name who handles failed runs and how to stop the workflow. Two-way synchronization would add conflict rules and should not be the first assumption.`,flow:['Observe friction','Test the cause','Stabilize the process','Pilot one task','Measure & maintain'],perspective:'Employees may fear automation will multiply errors or remove their ability to explain exceptions. The owner wants a dependable view. Clients want accurate updates. Involve the people doing the work and ask what they currently do when the standard path fails.',assessment:'Improve first for conflicting sources and undefined status rules. Automate a stable notification after validation. Keep unusual scope disputes human-led. Use analytics to inspect error patterns. Nursing experience can help you notice unsafe handoffs, but a healthcare workflow also requires organizational privacy and security review; a familiar tool is not proof of suitability.',pain:{quote:'“We have all these tools, but nobody trusts the numbers.”',symptom:'Conflicting status, repeated messages and inconsistent reports.',causes:'No authoritative record; missing identifiers; unclear update rights; insufficient training; integration errors.',questions:'Which record wins? Who may update it? What does each status mean? How are exceptions and failures handled?',consequence:'Poor decisions, repeated checking, customer confusion and unreliable reporting.',improve:'Agree record ownership, field definitions, validation rules and a correction path.',automation:'A limited, one-way update from a validated authoritative record with logs and a named maintainer.',evidence:'Duplicate rate, missing-field rate, conflicting updates, failure logs and owner response time.'},exercise:'Assess a fictional agency with duplicate customer records and conflicting updates. Use all 12 assessment questions to draft a small pilot. Identify one people, process, data and tool issue, and one task you would keep human-led.',rubric:['Separates symptoms from possible causes and asks for evidence.','Addresses ownership, data quality, exceptions and maintenance.','Limits the pilot and defines measurable success without invented results.'],sample:'Goal: reliable delivery updates. Current process: staff edit two sheets. Owners: agree one project owner and one record maintainer. Friction: duplicates and conflicting statuses. Evidence: inspect ten fictional projects. Cause hypothesis: no shared ID or status rule. Stability: agree and trial rules first. Systems/data: authoritative table with project ID and validated status. Exceptions: conflicting scope goes to Maya. Pilot: notify one team for five validated projects. Measure: duplicate messages and assignment time before/after. Maintenance: named owner checks failures daily and can disable the workflow. Negotiating scope remains human-led.',quiz:[{q:'Two systems disagree and nobody has defined which record wins. What comes first?',options:['Build two-way synchronization','Agree authoritative data, ownership and conflict rules','Ask AI to silently choose a record'],answer:1,why:['This can spread contradictory records faster.','Correct. A reliable integration needs explicit business and data rules.','A model cannot replace an authorized source-of-truth decision.']},{q:'Which is the best first pilot?',options:['Automate all client communication at once','One validated status notification with exception review and a maintainer','Deploy without a baseline because the task is repetitive'],answer:1,why:['Broad scope makes causes of failures and benefits harder to isolate.','Correct. It is bounded, observable and maintainable.','Repetition alone does not prove stability, suitability or benefit.']}],decision:'automate',decisionWhy:'A validated status notification with clear rules, exceptions and an owner is a reasonable narrow automation candidate. Monitor failures and compare the outcome against a baseline.',insight:'Automation scales the rules you have, including the unclear ones.',hooks:['Before connecting two systems, decide which record is right.','The tool may be working exactly as the broken process tells it to.','A small pilot needs an owner after launch.'],linkedin:['Describe the fictional conflicting-spreadsheet problem.','Separate people, process, data and tool issues.','Share a small pilot with a baseline and human exception path.'],facebook:['Tell the story of three people sending different updates.','Explain why one trusted record matters.','Ask where people still double-check information manually.'],conversation:'If two records disagree today, who decides which one is correct?',claims:'Do not claim compliance, accuracy or savings from a tool choice. Verify any real organizational results, permissions and evidence before publishing.',recap:'Investigate first. Fix ownership and data rules, then pilot a bounded task with exception handling, measurement and maintenance.',reflection:'What is one problem you would deliberately avoid automating today?',deeper:'Apply the framework to a fictional clinic’s appointment reminders using invented names only. List what privacy, access and communication policies the organization would need to review.'}
];
const glossary={ 'Business model':'How a business creates, delivers and earns money from value.','Value proposition':'Why a particular customer would choose an offer.','Revenue':'Money earned from sales before costs are deducted.','Variable cost':'A cost that changes with delivery volume within the range considered.','Fixed cost':'A cost that stays broadly unchanged within a defined capacity range.','Contribution':'Selling price minus variable costs; helps cover fixed costs.','Profit':'Revenue minus the costs included in a defined calculation and period.','Cash flow':'Money moving into and out of a business over time.','Accounts receivable':'Amounts customers owe; check how the business defines and records them.','Aging':'Grouping outstanding balances by age from a stated reference date.','Workflow':'Steps moving work from a trigger to an outcome.','Trigger':'The event that starts a workflow.','Input':'Information or materials needed to perform a step.','Output':'The result of a step or process.','Handoff':'Transfer of work or responsibility to the next owner.','SOP':'Standard operating procedure: written steps, responsibilities and exceptions.','Exception':'A case that cannot follow the normal path.','Bottleneck':'A step that constrains flow through the process.','Rework':'Work repeated to correct or revise an earlier output.','Baseline':'A defined measurement before a change.','ROI':'Return on investment: net benefit divided by investment, with a specified period and cost definition.','Pilot':'A limited test of a proposed change.','Integration':'A connection that exchanges data or actions between systems.','Reconciliation':'Checking records against each other and resolving differences.','Denial':'In a billing example, a payer’s refusal to pay a submitted claim as presented; reasons and next steps need investigation.','Human review':'A defined person checks a decision or output before or after a specified action.'};
const framework=['What is the business trying to achieve?','How does the process work today?','Who performs and owns each step?','Where do delays, errors or repeated effort occur?','What evidence shows the problem exists?','What is the likely root cause?','Is the process stable enough to automate?','What data and systems are involved?','What exceptions require human judgment?','What would a useful small pilot look like?','How would we measure improvement?','Who maintains the solution after implementation?'];
const challenges=[
'BrightDesk receives 20 inquiries weekly. Eight have no owner; five lack a service requirement. Staff maintain two lists. Customers wait for updates and some invoices are disputed because scope is unclear. Map customer → offer → delivery → payment. Diagnose three issues, identify evidence, separate cash from profit and choose one process improvement before considering tools.',
'Map a fictional repair shop from booking request to completed repair. Include a trigger, inputs, owner, two decisions, one exception and a receiving checklist. Explain where a customer might wait.',
'A fictional agency doubles lead volume while delivery dates slip and support tickets rise. Trace the cross-team effects and recommend one handoff repair rather than more marketing.',
'A fictional office repeatedly requests missing documents. Compare three possible causes, request evidence and distinguish rework from a capacity bottleneck.',
'Compare reminders, complaint resolution and report aggregation. Choose rules, AI assistance, analytics, redesign or human judgment and explain stability, data access and exceptions.',
'For an invented 200 cases per month, assume five minutes of repetitive effort per case, 60% safely removable, a $30 hourly planning value, $900 setup and $80 monthly running cost. Calculate potential capacity value and a three-month net return; state why capacity is not automatically cash savings.',
'Write a one-page discovery brief for a fictional service business: goal, stakeholders, current map, baseline, questions, pilot scope, exclusions, stop condition and maintainer.',
'Analyze fictional billing follow-ups without real patient information. Separate missing inputs from payer decisions; avoid automatic appeals. Produce a practice case study and five posts with assumptions and verification needs.'
];
lessons[4].quiz.push({q:'Staff send conflicting updates. Which statement is a cause hypothesis worth testing?',options:['The business needs AI because updates conflict','Two lists lack shared project IDs and update ownership','Conflicting updates prove staff are careless'],answer:1,why:['This jumps from a symptom to a tool without explaining the mechanism.','Correct. Compare records and observe how staff choose which list to update; that evidence can support or challenge the hypothesis.','This blames people without evidence and overlooks process and data conditions.']});

// Week 2: full daily lessons. Week 1 content and IDs remain unchanged.
lessons.push(...[
  {
    "title": "Triggers, inputs and outputs",
    "eyebrow": "Give the workflow a clear boundary",
    "objective": "Define a process boundary, distinguish a trigger from an input, and describe an output that the next person can actually use.",
    "scenario": "FixWell is a fictional laptop repair shop. Booking requests arrive through a form and email. The owner, Amina, says, “Automate our bookings.” Receptionist Jo means recording a request; technician Ben means accepting a device for assessment. Customers think a submitted form means they already have a confirmed appointment. Before choosing tools, you need to agree which process is being discussed.",
    "explain": "A process is a repeatable set of activities intended to achieve an outcome. A workflow describes how a particular piece of work moves through those activities, including who does what and what happens at decisions. A process boundary states where your investigation starts and where it ends. “Booking” is too broad if people disagree about what is included.<br><br>A trigger is an event that starts a workflow instance: a booking request arrives, a payment is received, or a scheduled review time is reached. An input is something needed to do the work, such as a contact method, device type or requested service. The event “form submitted” is the trigger; the fields submitted are inputs. A trigger can fire even when the inputs are incomplete. That difference matters when designing automation.<br><br>An output is the result of a step. A useful output has acceptance criteria: conditions that make it usable by its recipient. “We sent an email” is an activity. “The customer received a proposed appointment with a reference and next steps” describes a more meaningful output. Even then, a proposal is not a confirmed booking. Completion must match what the business has agreed to deliver.<br><br>Use verbs and nouns to make the boundary specific: “Receive a repair request” to “send a confirmed appointment or a clear reason it cannot be booked.” Within that boundary, list steps before naming software. Keep diagnosis, repair and payment outside this first map unless the booking decision genuinely depends on them. A boundary narrows the investigation; it does not mean other parts of the business do not matter.",
    "worked": "For FixWell, define the trigger as a new repair request received through an agreed channel. Required inputs are a safe contact method, device category, a short problem description and availability. Jo checks completeness and whether the requested service is within scope. If anything is missing, Jo asks for it; there is no promise of an appointment yet. If complete and eligible, Jo proposes a slot, receives the customer’s acceptance, then sends a confirmation with a request reference.<br><br>The intake step outputs a usable request record. Its acceptance criteria are a unique reference, readable contact details, service category and a named owner. The booking workflow outputs a confirmed appointment or a documented non-booking outcome. An automated acknowledgement should say “request received,” not “appointment confirmed.” This is a fictional design exercise; no improved results have been measured.",
    "flow": [
      "Request received",
      "Check required inputs",
      "Propose an eligible slot",
      "Customer accepts",
      "Confirm appointment"
    ],
    "visual": "<table><caption>One workflow, three different concepts</caption><thead><tr><th>Concept</th><th>FixWell example</th><th>How to check it</th></tr></thead><tbody><tr><td>Trigger</td><td>A new request arrives</td><td>Can you name the event and its timestamp?</td></tr><tr><td>Input</td><td>Contact method and problem description</td><td>Is each required field usable?</td></tr><tr><td>Output</td><td>Confirmed appointment with reference</td><td>Has the customer accepted, and is the record complete?</td></tr></tbody></table>",
    "perspective": "Amina wants reliable demand and a manageable diary. Jo wants to know when a request is ready to move forward. Ben needs enough information to assess whether the shop can help. Customers need to distinguish a request acknowledgement from a promise. A poorly named output can create a service failure even when every message is delivered successfully.",
    "assessment": "Acknowledge receipt and create a request record using rules once the agreed channels, fields and wording are stable. Missing inputs should create a follow-up task, not a confirmed appointment. Keep unusual service eligibility decisions with a person. Start by checking whether existing messages already promise more than staff can deliver.",
    "pain": {
      "quote": "“Customers keep saying they booked, but we have no confirmed slot for them.”",
      "symptom": "Submitted requests are mistaken for confirmed appointments.",
      "causes": "Ambiguous acknowledgement wording; no acceptance step; different definitions of “booked”; missing inputs.",
      "questions": "What exactly does the first message promise? What event confirms a slot? Which fields are required? Can we trace one disputed booking?",
      "consequence": "Unexpected arrivals, time spent resolving misunderstandings, unused or double-promised capacity and loss of trust. Do not assume every confused request is lost revenue.",
      "improve": "Agree the boundary, completion conditions and clear wording for received, proposed and confirmed states.",
      "automation": "Create a record and send an accurate receipt acknowledgement; propose or confirm only when the defined conditions are met.",
      "evidence": "Request and confirmation timestamps, message wording, completeness, acceptance records and disputed-booking counts."
    },
    "exercise": "Map a fictional laundry pickup request from first contact to an agreed pickup slot. State the trigger, four required inputs, the owner, the final output and two acceptance criteria. Add a path for missing information. Keep washing, delivery and payment outside this boundary, and explain one dependency on those later steps.",
    "rubric": [
      "Separates the starting event from the information it carries.",
      "Defines an observable end state and two usable acceptance criteria.",
      "Shows missing-input handling, ownership and a clear scope boundary."
    ],
    "sample": "Trigger: a pickup request arrives. Inputs: service area, contact method, pickup address and availability. Owner: intake coordinator. Map: receive request → check completeness and service area → propose slot → receive acceptance → confirm pickup reference. Missing address returns to the customer for clarification. Acceptance criteria: an available slot is accepted and the address is validated for the service area. Washing is outside this map, but the pickup offer depends on downstream capacity being available.",
    "quiz": [
      {
        "q": "A customer submits a repair form with no contact details. Which statement is most accurate?",
        "options": [
          "The trigger occurred, but a required input is missing",
          "No trigger occurred because the form is incomplete",
          "The form submission proves the booking is confirmed"
        ],
        "answer": 0,
        "why": [
          "Correct. The arrival event happened; the workflow needs an incomplete-input path.",
          "Completeness affects how the case is handled, not whether the event happened.",
          "Confirmation needs the agreed booking conditions, not merely a submitted form."
        ]
      },
      {
        "q": "Which output definition is most useful for the booking workflow?",
        "options": [
          "Reception sent three messages",
          "An accepted available slot is recorded and confirmation sent with a reference",
          "The booking tool ran without an error"
        ],
        "answer": 1,
        "why": [
          "An activity count does not establish that a booking exists.",
          "Correct. It connects a business state, record and communication to completion.",
          "Technical execution is not proof that the intended business outcome occurred."
        ]
      }
    ],
    "sequence": [
      "Request received",
      "Check required inputs",
      "Propose an eligible slot",
      "Customer accepts",
      "Confirm appointment"
    ],
    "sequenceIntro": "Order the complete-input, in-scope path. Missing inputs and unusual services use separate branches. Check order to save this attempt.",
    "sequenceExplanation": "Receive the request before checking its inputs; check eligibility and availability before proposing a slot; obtain acceptance before confirming. The incomplete-input branch asks for clarification instead of continuing.",
    "decision": "automate",
    "decisionPrompt": "The shop has agreed its required fields and acknowledgement wording. Should a complete form create a request reference and send “request received,” while leaving appointment approval to Jo?",
    "decisionWhy": "This is a bounded, rule-based capture and acknowledgement task. It can be automated with duplicate checks and a failure owner; it must not imply that a booking is confirmed.",
    "insight": "A submitted form and a confirmed service are different business states. Clear boundaries prevent automated promises the business cannot keep.",
    "hooks": [
      "A form submission is not always a booking.",
      "Before automating intake, define what “done” means.",
      "Your first workflow problem may be an unclear promise."
    ],
    "linkedin": [
      "Open with FixWell as a fictional request-versus-confirmation example.",
      "Explain trigger, required inputs and confirmed output in three short points.",
      "Share a checklist for agreeing completion before choosing a tool."
    ],
    "facebook": [
      "Tell a short fictional story about arriving for an appointment that was never confirmed.",
      "Explain the difference between “we received your request” and “your slot is booked.”",
      "Ask what customers are told immediately after they send a request."
    ],
    "conversation": "What does your customer think has happened when your first automatic message arrives?",
    "claims": "Verify any actual booking-error rates, lost-sales estimates or customer quotes. The FixWell story is fictional, not a client engagement.",
    "recap": "Define a workflow’s start and finish. A trigger is an event, inputs enable work, and the output needs clear acceptance criteria. Automating receipt is different from automating a promise.",
    "reflection": "Which word in a client’s process—booked, approved, ready or complete—would you ask them to define?",
    "deeper": "Compare the booking boundary with a wider repair-to-payment process. List three additional owners or dependencies the wider map would need."
  },
  {
    "title": "Decisions and exceptions",
    "eyebrow": "Map the paths that do not go straight through",
    "objective": "Write explicit decision conditions, distinguish missing information from a definite answer, and route exceptions to a named person.",
    "scenario": "FixWell’s standard repair form works for familiar devices, but one customer requests work on an unsupported model. Another leaves the model field blank. A third mentions a safety concern. Jo currently puts all three into a folder called “other.” Amina suggests letting AI approve whatever looks similar to past jobs.",
    "explain": "A decision point chooses the next path according to a condition. Phrase it as a question the owner can actually answer: “Is the device category in the approved service list?” Each outgoing path needs a label and a next action. A decision is not simply a diamond drawn on a map; it needs a rule, evidence and someone authorized to handle uncertainty.<br><br>A yes/no rule is useful only when the necessary information exists. “Model unknown” is not the same as “model unsupported.” Treating missing data as a definite no can wrongly reject a suitable customer; treating it as yes can create an unsuitable promise. For many processes, use three states: yes, no and unknown. Unknown usually requires clarification or review.<br><br>An exception is a case that cannot follow the normal path. Exceptions may arise from unusual requests, conflicting records, system failures or decisions outside the normal owner’s authority. Some are predictable and deserve an explicit branch. Others need an escalation path: who reviews the case, what context they receive, and how the customer is kept informed. Escalation means passing a decision to someone with the necessary authority or expertise; it does not mean copying everyone on an email.<br><br>Not every rare situation should become a complex automated branch. A manual review queue can be better when cases vary widely or occur infrequently. That queue still needs an owner, a response expectation, visible status and a way back into the main process. Otherwise, “manual review” becomes a place where work disappears.",
    "worked": "Use an approved service list maintained by Amina. Known supported category: continue to the normal booking check. Known unsupported category: Jo uses the agreed explanation and records the outcome. Unknown category: request clarification, then check again. A safety concern follows the shop’s approved escalation policy to a qualified person; the form must not generate diagnostic or handling advice.<br><br>Now test three fictional requests. Request A has a supported category and complete information: continue. Request B has no model: ask for the missing information rather than declining. Request C falls outside the list but may be assessable by a specialist: Amina reviews before any promise. AI could help draft a summary for that reviewer only under approved data handling and human checking. It should not silently approve unfamiliar work.",
    "flow": [
      "Request received",
      "Check service eligibility",
      "Supported → booking check",
      "Unknown → clarify",
      "Unusual concern → qualified review"
    ],
    "visual": "<table><caption>Make each branch actionable</caption><thead><tr><th>Condition</th><th>Route</th><th>Owner and next action</th></tr></thead><tbody><tr><td>Complete and on approved service list</td><td>Normal path</td><td>Jo checks available slots</td></tr><tr><td>Information missing</td><td>Clarification</td><td>Jo requests the missing field and records a follow-up</td></tr><tr><td>Definitely unsupported</td><td>Non-booking outcome</td><td>Jo uses the approved explanation</td></tr><tr><td>Outside Jo’s authority</td><td>Exception review</td><td>Amina or an appropriate qualified reviewer decides</td></tr></tbody></table>",
    "perspective": "The customer wants an accurate answer, not a fast guess. Jo wants permission to pause cases that need judgment. Amina wants staff to follow consistent rules without accepting work the shop cannot responsibly deliver. A clear “waiting for clarification” status reduces the pressure to manufacture a yes or no.",
    "assessment": "Keep unusual eligibility and sensitive concerns human-led. Use rules to route well-defined categories and create review tasks. Improve the exception queue before adding AI classification. Measure false routes and time waiting for review, not just the percentage of requests processed automatically.",
    "pain": {
      "quote": "“The easy jobs move quickly, but anything unusual gets forgotten.”",
      "symptom": "Non-standard cases wait in an unmanaged “other” category.",
      "causes": "Rules lack an unknown state; reviewer unclear; no review expectation; no route back into normal work.",
      "questions": "Which cases enter “other”? Who checks them? What facts are missing? Who may approve an exception? What tells the customer they are waiting?",
      "consequence": "Delayed replies, unsuitable promises, repeated chasing and avoidable escalation. Any financial effect needs actual case outcomes.",
      "improve": "Define supported, unsupported, unknown and review-required routes with owners and next actions.",
      "automation": "Create and notify a review task containing required context; pause ordinary confirmation until a person decides.",
      "evidence": "Reason for review, routing accuracy, review wait time, decision and whether the case returns to an owned next step."
    },
    "exercise": "A fictional design agency receives three requests: a standard package with a complete brief; a request with no budget or deadline; and an unusual contract condition staff cannot approve. Build a decision table with the condition, information needed, owner, next action and customer message for each. Include what happens if the reviewer is unavailable.",
    "rubric": [
      "Distinguishes missing data from a known mismatch.",
      "Gives each branch a named role, next action and communication.",
      "Keeps authority-dependent judgment human-led and provides an escalation fallback."
    ],
    "sample": "Standard complete brief: coordinator checks package fit and capacity, then proposes the next step. Missing budget or deadline: coordinator asks for clarification; the message says the request is under review, not accepted. Unusual contract condition: send the exact clause and business context to the authorized owner; pause agreement until approval. If the owner is unavailable, the coordinator uses the agreed backup reviewer or informs the customer of the delay without making a new promise.",
    "quiz": [
      {
        "q": "A required field is blank. How should an eligibility decision treat it?",
        "options": [
          "Assume the most common value",
          "Treat it as unknown and request clarification or review",
          "Automatically reject the customer as unsuitable"
        ],
        "answer": 1,
        "why": [
          "A frequent value is not evidence about this particular case.",
          "Correct. Missing evidence needs an explicit route rather than a fabricated answer.",
          "A rejection needs a justified rule; missing data alone may be fixable."
        ]
      },
      {
        "q": "Which exception path is best designed?",
        "options": [
          "Send unusual cases to “other” indefinitely",
          "Let AI approve them unless a customer complains",
          "Assign an authorized reviewer, send the necessary context and track the next action"
        ],
        "answer": 2,
        "why": [
          "A label without ownership and a next step is not a working exception path.",
          "This substitutes an unchecked guess for an authority-dependent decision.",
          "Correct. Review needs responsibility, information and a route toward resolution."
        ]
      }
    ],
    "decision": "human",
    "decisionPrompt": "A request includes a contract condition outside the coordinator’s authority. Should a workflow automatically accept it because similar jobs were accepted previously?",
    "decisionWhy": "Keep the acceptance decision with an authorized person. Prior examples do not establish authority or suitability for this case. Automation can assemble context and route the review without making the decision.",
    "insight": "The quality of an automation often depends on what happens when the normal path cannot continue.",
    "hooks": [
      "Where do your unusual requests go to wait?",
      "Missing information is not the same as a “no.”",
      "An exception queue needs more than a label."
    ],
    "linkedin": [
      "Introduce the fictional unmanaged “other” queue.",
      "Compare known yes, known no and unknown with a short decision table.",
      "Explain why a named reviewer is part of the workflow design."
    ],
    "facebook": [
      "Describe the frustration of being told a request is “with someone.”",
      "Show three simple questions: who owns it, what is missing, what happens next?",
      "Invite examples of exceptions that regularly need chasing."
    ],
    "conversation": "Who owns a case when it cannot follow your standard process?",
    "claims": "Verify any stated AI accuracy, automatic-approval safety, review times or customer outcomes. Do not present this practice case as a completed implementation.",
    "recap": "Decisions need conditions, evidence and named routes. Missing information requires an unknown path. Exceptions need authorized review, visible ownership and a way back into work.",
    "reflection": "Which decision would become unsafe or unfair if “unknown” were silently treated as “yes”?",
    "deeper": "Add a system-failure branch to your decision table. If the service list cannot be loaded, what should pause, who is notified and how can work resume?"
  },
  {
    "title": "Handoffs and ownership",
    "eyebrow": "Make responsibility travel with the work",
    "objective": "Design a handoff with a sender, receiving owner, required information, acceptance criteria and a fallback when ownership is not accepted.",
    "scenario": "At FixWell, Jo marks a device “ready for assessment” and sends a message to a shared technician channel. Ben assumes another technician will take it. The device waits overnight. Jo says it was handed over; technicians say no one was assigned. The customer only sees that the promised update did not arrive.",
    "explain": "A handoff transfers work or responsibility to the next person or team. A notification only announces that something happened. It does not prove that responsibility transferred. A usable handoff answers five questions: what is being passed, who sends it, who receives it, what must be included, and how acceptance is recorded.<br><br>An owner is the person or role accountable for moving a particular case to its next agreed state. A process owner has a broader responsibility: keeping the overall process effective and resolving gaps between steps. One person may fill both roles in a small business. “The technicians” can describe a team, but a case still needs a rule for assigning a specific receiving owner or an explicitly managed queue.<br><br>Acceptance criteria tell the receiver whether the work is ready. Required context might include the request reference, agreed scope, available information and any known exception. If inputs are incomplete, the receiver should reject the handoff with a specific reason and return it to a named owner. A silent refusal creates an invisible queue. Record the waiting state and customer impact while the gap is resolved.<br><br>Responsibility also needs a time expectation. Agree what “acknowledge promptly” means for this workflow and operating hours; do not invent a service promise without checking capacity. An escalation is triggered when the agreed expectation is missed. Design a backup for absence and overload. Ownership rules should support work, not become a mechanism for blaming whichever person was last mentioned in a message.",
    "worked": "Define FixWell’s handoff as Jo passing a complete assessment-ready request to Ben or the named technician on duty. Required fields: request reference, device category, problem description, customer contact route and current status. A receiving technician records acceptance or a rejection reason. The shared channel may carry a notification, but the request record remains the place where ownership and next action are recorded.<br><br>In a fictional trace, request F-12 becomes ready at 10:00, is assigned at 10:05, and is accepted at 10:40. Handoff waiting time from readiness to acceptance is 40 minutes. It is not 40 minutes of technician work. If the assigned person is absent, the duty lead reassigns according to an agreed backup rule. A duplicate notification should not create a second assessment task for F-12.",
    "flow": [
      "Jo checks readiness",
      "Assign named receiver",
      "Receiver accepts or rejects",
      "Record next action",
      "Escalate if overdue"
    ],
    "visual": "<table><caption>A usable handoff record</caption><thead><tr><th>Field</th><th>Example</th><th>Why it matters</th></tr></thead><tbody><tr><td>Case reference</td><td>F-12</td><td>Keeps repeated messages tied to one case</td></tr><tr><td>Sender / receiver</td><td>Jo / duty technician Ben</td><td>Defines who is passing and accepting work</td></tr><tr><td>Acceptance condition</td><td>Required assessment information present</td><td>Separates ready work from incomplete work</td></tr><tr><td>Next action</td><td>Ben acknowledges assignment</td><td>Shows what must happen next</td></tr><tr><td>Fallback</td><td>Duty lead handles absence or overdue acceptance</td><td>Prevents silent waiting</td></tr></tbody></table>",
    "perspective": "Jo feels that a message should have been enough. Ben may have an overloaded queue or no clear assignment rule. Amina needs reliable accountability without blaming staff for an undefined process. The customer should not have to discover the internal ownership gap by asking for an update.",
    "assessment": "Improve the responsibility and acceptance rules first. Then rules can assign an eligible case and notify its owner, using the case reference to avoid duplicates. Keep reassignment for unusual capacity or skill constraints with the duty lead until those rules are explicit. Measure accepted handoffs and queue age, not messages sent.",
    "pain": {
      "quote": "“I thought someone else was handling it.”",
      "symptom": "A case is visible to a group but has no accepted receiving owner.",
      "causes": "Shared notifications treated as assignments; no acceptance step; missing inputs; absence or overload with no backup.",
      "questions": "Who is accountable now? How do they accept work? What makes it ready? What happens if they reject it or are absent?",
      "consequence": "Waiting time, duplicated effort, missed updates and customer chasing. The financial effect depends on the delayed work and actual outcomes.",
      "improve": "Define the receiving owner, readiness checklist, acceptance state and escalation path.",
      "automation": "Assign one case once, notify its owner and flag unaccepted work after the agreed expectation.",
      "evidence": "Ready, assignment and acceptance timestamps; rejection reasons; duplicate tasks; overdue queue counts."
    },
    "exercise": "Design a sales-to-delivery handoff for a fictional agency. Specify the sender, receiver, five required fields, acceptance criteria, rejection route, time expectation and backup owner. Trace what happens when the customer’s approved brief is missing. Explain why sending a Slack message alone is insufficient.",
    "rubric": [
      "Names the current case owner and receiving role, including absence cover.",
      "Defines completeness and how acceptance or rejection is recorded.",
      "Connects the handoff to a visible next action and a reasonable escalation rule."
    ],
    "sample": "Sender: salesperson. Receiver: named project coordinator assigned by the delivery lead. Fields: project reference, approved scope, agreed date, customer contact and brief status. Accept only when required inputs are complete and timing has been checked. If the brief is missing, return the case to the salesperson with that reason and a follow-up date; do not leave it unowned. The lead agrees an acknowledgement expectation during working hours and acts as backup when the coordinator is absent. Slack carries a notification; the project record carries the accepted owner and next action.",
    "quiz": [
      {
        "q": "A request was posted to a shared channel. What evidence best shows that responsibility transferred?",
        "options": [
          "Several people saw the message",
          "A named receiver accepted the case and recorded the next action",
          "The automation reported that the message was delivered"
        ],
        "answer": 1,
        "why": [
          "Visibility does not establish accountability.",
          "Correct. Acceptance and a next action make the handoff operationally meaningful.",
          "Delivery confirms a technical event, not that someone owns the work."
        ]
      },
      {
        "q": "The receiver finds a required input missing. What should happen?",
        "options": [
          "Silently leave the case untouched",
          "Reject the handoff with a specific reason and return it to a named owner",
          "Start work and guess the missing information"
        ],
        "answer": 1,
        "why": [
          "Silent waiting hides the problem and leaves responsibility ambiguous.",
          "Correct. Make the missing information and next responsible person explicit.",
          "Guessing can turn missing information into rework or an inappropriate promise."
        ]
      }
    ],
    "calc": {
      "q": "A request is ready at 10:00 and accepted at 10:40. How many minutes elapsed from readiness to acceptance?",
      "answer": 40,
      "explanation": "10:40 minus 10:00 is 40 minutes of elapsed handoff waiting. It is not a measure of active assessment time."
    },
    "decision": "improve",
    "decisionPrompt": "The shop has no assignment rule and nobody accepts responsibility for the shared technician queue. Should you immediately automate more channel notifications?",
    "decisionWhy": "Define assignment, acceptance, backup ownership and escalation first. More notifications can increase noise while the case remains unowned.",
    "insight": "A message can be delivered successfully while the work itself goes nowhere.",
    "hooks": [
      "A notification is not a handoff.",
      "“Everyone can see it” does not mean someone owns it.",
      "Measure accepted work, not just messages sent."
    ],
    "linkedin": [
      "Start with the fictional overnight waiting case.",
      "Explain sender, receiver, readiness and acceptance in a compact checklist.",
      "Show how to measure waiting without calling it working time."
    ],
    "facebook": [
      "Tell the short story of a customer waiting while two teams assume the other is responsible.",
      "Explain why every case needs a clear next person.",
      "Ask how the business knows someone has taken responsibility."
    ],
    "conversation": "How does your team know that the next person has actually accepted the work?",
    "claims": "Verify claimed response expectations, waiting times and customer effects. Forty minutes is an invented example, not a measured client delay or a recommended universal target.",
    "recap": "Ownership must move with the case. A good handoff defines readiness, a receiving owner, acceptance or rejection, and a fallback. Notifications can support these rules but do not replace them.",
    "reflection": "What record would you inspect to distinguish “message delivered” from “work accepted”?",
    "deeper": "Add a handoff rejection to your map and track who owns the case during clarification. Does the customer receive an accurate update?"
  },
  {
    "title": "Write a usable SOP",
    "eyebrow": "Turn repeatable work into a usable standard",
    "objective": "Write and test a short standard operating procedure with a purpose, trigger, owner, steps, checks, exceptions and maintenance responsibility.",
    "scenario": "FixWell hires a second receptionist. Jo’s instructions are “check the request, book it, then tell the technician.” The new receptionist books a slot before checking whether the shop supports the device. Amina asks for an automation to make staff follow the same process, but the agreed process is not written down.",
    "explain": "An SOP, or standard operating procedure, is a usable description of how a repeatable task should be performed. It helps staff carry out agreed work consistently. A process map shows the route; an SOP supplies enough detail to perform the steps. Neither should be treated as a substitute for observation, training or appropriate judgment.<br><br>A short SOP should state its purpose, scope, trigger, responsible role and required inputs. Use numbered actions with one meaningful action per step. State what must be checked before a promise or irreversible action. Define the output and how the worker knows the task is complete. Include decision conditions and exception routes rather than instructions such as “use common sense” with no authority or escalation guidance.<br><br>Write for the person doing the task. “Check that all required fields are readable and present” is clearer than “ensure process integrity.” A screenshot can help with a specific interface, but a document consisting only of screenshots becomes fragile when the interface changes. Keep the business rule distinct from the button used to execute it.<br><br>An SOP needs an owner, a version, a review date and a change route. These make it possible to tell which instructions are current. Test the draft with someone who did not write it, using a normal case and an exception. Observe where they hesitate or interpret a step differently. If trained staff cannot reliably follow the procedure, investigate whether it is unclear, inaccessible, unrealistic or inconsistent with actual capacity. A signed training form alone does not prove that the process works.",
    "worked": "Draft a fictional FixWell intake SOP, version 0.1, owned by the intake lead. Purpose: turn a received request into an eligible booking proposal or an owned exception. Trigger: new request in an approved channel. Required inputs: contact route, device category, problem description and availability.<br><br>Steps: (1) create or locate the request reference; (2) check required inputs and request missing information; (3) check the approved service list, routing uncertain cases to the duty lead; (4) check availability and propose an eligible slot; (5) record customer acceptance and send confirmation; (6) record the receiving owner and readiness for the next handoff. Missing data is not a confirmed booking. A duplicate submission should update or link to the existing request rather than create a second appointment.<br><br>Completion: one accurate booking outcome and an owned next step. Change control: the intake lead updates the procedure after an approved rule change and checks that staff can find the current version. The exact operating expectations must be agreed with the shop; this is a practice SOP, not an industry standard.",
    "flow": [
      "Define purpose and boundary",
      "Write actionable steps",
      "Add checks and exceptions",
      "Test with a new reader",
      "Assign version owner"
    ],
    "visual": "<table><caption>Improve the instruction, not just the formatting</caption><thead><tr><th>Vague instruction</th><th>More usable instruction</th></tr></thead><tbody><tr><td>Check the request</td><td>Confirm contact route, device category, problem description and availability are present</td></tr><tr><td>Book it</td><td>Check service eligibility and availability, then obtain acceptance before confirming</td></tr><tr><td>Handle unusual cases</td><td>Pause confirmation, assign the duty lead and record the review reason</td></tr><tr><td>Keep the SOP up to date</td><td>Name the intake lead as owner and review after approved rule changes</td></tr></tbody></table>",
    "perspective": "A new worker wants instructions they can follow without guessing. Experienced staff may know unwritten exceptions but feel the document ignores reality. Amina wants consistent service without documenting every possible circumstance. Testing the SOP with both new and experienced staff helps find that balance.",
    "assessment": "Improve and test the procedure first. A checklist or required-field validation may then support consistent execution. Automate only stable steps whose rules are agreed. Use human training and review when the issue is understanding or authority, rather than turning unclear instructions into rigid software.",
    "pain": {
      "quote": "“The process changes depending on who is on shift.”",
      "symptom": "Similar requests are handled differently by different staff.",
      "causes": "Unwritten rules; outdated instructions; inaccessible procedure; training gaps; conflicting expectations.",
      "questions": "Which version do people use? Where do steps differ? Can a new worker follow a normal and an unusual case? Are the rules realistic?",
      "consequence": "Errors, rework, inconsistent promises and more dependence on a few experienced staff. Benefits from a new SOP need measurement.",
      "improve": "Write a short owned SOP, test it with staff and provide practical training.",
      "automation": "Use validated checklists, structured intake and controlled task creation after the business rules are stable.",
      "evidence": "Observed deviations, missing inputs, staff questions, exception handling and use of the current procedure."
    },
    "exercise": "Write a one-page SOP for a fictional agency’s new-client intake. Include purpose, boundary, trigger, owner, required inputs, five numbered steps, an exception, completion criteria and version ownership. Then write two test cases: one normal request and one missing an approved scope.",
    "rubric": [
      "Uses actionable steps in a safe, meaningful order and defines completion.",
      "Includes a missing-input or authority exception with a named next owner.",
      "States who maintains the procedure and how the two test cases would check it."
    ],
    "sample": "Purpose: prepare an accepted client for delivery. Scope: signed agreement received to intake accepted by project coordinator. Trigger: agreement receipt. Owner: intake coordinator. Inputs: approved scope, customer contact, agreed timing and required materials. Steps: locate client reference; validate inputs; resolve missing items with sales; confirm delivery readiness with the receiving owner; record acceptance and send next steps. Missing scope returns to the salesperson and pauses readiness. Complete only when the receiver accepts the record. Version 0.1 is owned by the operations lead. Test a complete case and verify it reaches acceptance; test a missing-scope case and verify it pauses with an owner instead of proceeding.",
    "quiz": [
      {
        "q": "Which instruction is easiest for a new worker to apply consistently?",
        "options": [
          "Handle incomplete requests appropriately",
          "Ensure operational excellence",
          "If the contact route is missing, mark “waiting for information” and ask the intake owner to obtain it"
        ],
        "answer": 2,
        "why": [
          "“Appropriately” leaves the condition, action and owner undefined.",
          "This is an aspiration rather than an executable instruction.",
          "Correct. It identifies the condition, status, next action and owner."
        ]
      },
      {
        "q": "An SOP is followed inconsistently. What should you investigate first?",
        "options": [
          "Whether the current instructions are clear, accessible, trained and workable",
          "Which tool can enforce every line immediately",
          "How to remove all exceptions from customer requests"
        ],
        "answer": 0,
        "why": [
          "Correct. Inconsistent behavior may reflect unclear or unrealistic instructions rather than a software gap.",
          "Enforcement can make an untested process harder to correct.",
          "Exceptions are part of real operations; they need handling rather than denial."
        ]
      }
    ],
    "sequence": [
      "Define purpose and boundary",
      "Write actionable steps",
      "Add checks and exceptions",
      "Test with a new reader",
      "Assign version owner"
    ],
    "sequenceIntro": "Order this simplified SOP drafting exercise. Ownership should be involved throughout; the final step records who maintains the approved version. Check order to save your attempt.",
    "sequenceExplanation": "Agree the scope before describing actions, then add checks and exception routes. Test the draft with someone using it, revise it, and record ownership of the approved version. Real drafting can loop back after a test fails.",
    "decision": "improve",
    "decisionPrompt": "Staff disagree about the correct intake steps and the only instructions are “check it and book it.” Should you build a workflow that enforces those instructions immediately?",
    "decisionWhy": "Write, agree and test the SOP first. Training or clearer rules may solve much of the inconsistency. Software should enforce stable, useful conditions rather than ambiguous instructions.",
    "insight": "A workflow cannot consistently enforce a process the business has not agreed.",
    "hooks": [
      "Could a new team member follow your process without guessing?",
      "An SOP is useful only if someone can use it.",
      "Before enforcing the process, test the instructions."
    ],
    "linkedin": [
      "Introduce the fictional shift-to-shift inconsistency.",
      "Compare one vague instruction with a specific condition, action and owner.",
      "Offer a short SOP checklist and recommend testing with a new reader."
    ],
    "facebook": [
      "Describe a new worker hearing “that’s just how we do it.”",
      "Explain why a clear checklist and practical training help.",
      "Ask which step everyone interprets differently."
    ],
    "conversation": "Which instruction in your current process still requires an experienced colleague to translate it?",
    "claims": "Verify any claimed reduction in training time, errors or rework. A written procedure alone does not prove an improvement, and this sample is fictional.",
    "recap": "An SOP turns agreed rules into usable actions. Include checks, exceptions, completion criteria and an owner. Test and teach the procedure before enforcing it through automation.",
    "reflection": "How would you know that your SOP improved real work rather than simply creating another document?",
    "deeper": "Ask a friend to read your fictional SOP without extra explanation. Record two points where the wording could lead to different actions, then revise those steps."
  },
  {
    "title": "Map the current process",
    "eyebrow": "Show actual work, including the waiting",
    "objective": "Build a current-state map from a fictional case trace, distinguish active work from waiting, and choose a small improvement supported by evidence.",
    "scenario": "FixWell’s ideal booking map is short, but an ordinary request took 95 minutes to confirm during one fictional working morning. Jo says the tools are slow; Ben says the missing details were the problem. Amina wants a “faster booking system.” You need to trace what actually happened before deciding what to change.",
    "explain": "A current-state map describes how work happens now, including workarounds, repeated steps, queues and exceptions. A future-state map describes a proposed way of working. Label them clearly. Presenting an ideal procedure as the current process hides the very delays you need to understand.<br><br>Start with one concrete case. Ask the people who handled it to show each event, record and handoff. Record the trigger, actions, decisions, owner, system and output. Add timestamps when available. Mark missing or disputed information as unknown rather than filling the gaps with your preferred explanation. Then compare additional cases to discover whether the trace is typical, unusual or one of several valid routes.<br><br>Active work time is time someone is performing the task. Waiting time is time the case is not being actively worked, such as waiting for information or acceptance. Elapsed turnaround time measures the total duration between defined start and end events. In a simple, non-overlapping trace, active time plus waiting equals elapsed time. In parallel workflows the relationship is more complex, so avoid adding overlapping durations twice. Also define whether you use clock time or business hours.<br><br>A queue is a collection of work waiting for a step or resource. Long waiting can arise from missing information, batch habits, lack of ownership, external dependencies or insufficient capacity. One trace cannot prove which cause dominates. Use the map to ask better questions and choose what evidence to collect. It should reveal uncertainty and business consequences, not just produce a neat diagram.",
    "worked": "Fictional trace F-21 runs from 09:00 to 10:35, using clock minutes within the same working morning. Jo spends 5 minutes reviewing a request, then waits 40 minutes for missing availability. She spends 5 minutes updating the record; it waits 30 minutes for slot review. The slot review takes 5 minutes, the customer takes 5 minutes to accept, and confirmation takes 5 minutes. For this exercise, treat the customer acceptance interval as waiting and the four staff actions as active work.<br><br>Total elapsed time is 95 minutes. Staff active work is 5 + 5 + 5 + 5 = 20 minutes. Waiting is 40 + 30 + 5 = 75 minutes. The missing availability and slot-review queue are investigation targets; they are not automatically proven root causes across all requests. A hypothetical change saving 3 minutes of typing would address only a small part of this trace. Check several other cases before promising a turnaround reduction.",
    "flow": [
      "Receive & review: 5 min",
      "Wait for information: 40 min",
      "Update record: 5 min",
      "Wait for review: 30 min",
      "Review, acceptance & confirm: 15 min"
    ],
    "visual": "<table><caption>Fictional case F-21: trace the actual morning</caption><thead><tr><th>Time</th><th>Actual event</th><th>Owner / state</th><th>Minutes</th></tr></thead><tbody><tr><td>09:00–09:05</td><td>Review request; availability missing</td><td>Jo / active</td><td>5</td></tr><tr><td>09:05–09:45</td><td>Await availability</td><td>Customer response; Jo tracks / waiting</td><td>40</td></tr><tr><td>09:45–09:50</td><td>Update request</td><td>Jo / active</td><td>5</td></tr><tr><td>09:50–10:20</td><td>Await slot review</td><td>Review queue / waiting</td><td>30</td></tr><tr><td>10:20–10:25</td><td>Check and propose slot</td><td>Duty lead / active</td><td>5</td></tr><tr><td>10:25–10:30</td><td>Await acceptance</td><td>Customer response; Jo tracks / waiting</td><td>5</td></tr><tr><td>10:30–10:35</td><td>Confirm and record next owner</td><td>Jo / active</td><td>5</td></tr></tbody></table>",
    "perspective": "The customer experiences the whole 95-minute interval, not only staff activity. Jo experiences repeated checking. The duty lead may be batching reviews for a reason that is not visible on the map. Amina needs to know whether a change improves the end-to-end experience instead of only making one screen faster.",
    "assessment": "Improve the intake checklist and investigate slot-review ownership before automating the whole path. A bounded missing-field prompt may help after the requirement is agreed. Keep unusual eligibility decisions human-led. Record a baseline from multiple comparable cases, then pilot one change and monitor exceptions. No turnaround improvement is established by this single invented trace.",
    "pain": {
      "quote": "“It only takes a few minutes of work, so why does the customer wait so long?”",
      "symptom": "Elapsed turnaround is much longer than active staff work.",
      "causes": "Missing inputs; queueing; batch review habits; unclear next owner; customer response delays. These are hypotheses to test.",
      "questions": "Where do timestamps begin and end? Which periods are active or waiting? What makes this case typical? Who owns waiting cases? Can we compare five other traces?",
      "consequence": "Uncertain promises, repeated status checks and slower customer decisions. Do not translate all elapsed waiting into paid labor cost.",
      "improve": "Clarify required inputs, ownership and review expectations; distinguish waiting reasons in the record.",
      "automation": "Prompt for agreed missing fields or flag an owned review queue, with duplicate protection and a failure path.",
      "evidence": "Defined start/end timestamps, active and waiting intervals, waiting reasons, comparable case mix and post-change exceptions."
    },
    "exercise": "Use the F-21 trace to draw the current process with owners, two waiting states and the missing-information loop. Calculate active, waiting and elapsed minutes. Write two competing explanations for the 30-minute review queue and specify evidence that would distinguish them. Propose one small improvement and one measure, without promising an untested result.",
    "rubric": [
      "Represents the actual trace, including missing-input handling, owners and waiting.",
      "Calculates 20 active, 75 waiting and 95 elapsed minutes without treating all waiting as labor.",
      "Tests competing causes and chooses a bounded improvement with a baseline and exception measure."
    ],
    "sample": "Map: request → Jo reviews → availability missing? yes → request availability and wait under Jo’s ownership → update → wait for duty-lead slot review → propose slot → wait for acceptance → confirm and record next owner. Active = 20 minutes; waiting = 75; elapsed = 95. The 30-minute queue could reflect batch reviews or a lead already busy with other work. Compare review timestamps, staffing and incoming volume across several cases. First test a clearer availability field for one intake channel. Compare the missing-availability rate and median turnaround for similar requests, while checking incorrect confirmations and extra customer effort. This is a proposed test, not a proven result.",
    "quiz": [
      {
        "q": "Which evidence best supports a current-state map?",
        "options": [
          "The ideal SOP alone",
          "A tool vendor’s demo of the fastest possible path",
          "Actual case records and staff walkthroughs, with unknown steps marked"
        ],
        "answer": 2,
        "why": [
          "The SOP describes expected work, which may differ from actual behavior.",
          "A demo does not establish how this business operates.",
          "Correct. Use observable cases, staff context and explicit uncertainty."
        ]
      },
      {
        "q": "What can you conclude from the single fictional F-21 trace?",
        "options": [
          "All FixWell requests have the same root cause",
          "This case contains specific waiting intervals worth investigating",
          "Replacing the booking system will remove 75 minutes from every request"
        ],
        "answer": 1,
        "why": [
          "One case cannot establish the frequency or cause of delays across all work.",
          "Correct. The trace identifies hypotheses and where further evidence is useful.",
          "The map does not establish that software caused all waiting or that a replacement removes it."
        ]
      },
      {
        "q": "The review queue lasted 30 minutes. Which question best distinguishes possible causes?",
        "options": [
          "Why is the reviewer careless?",
          "Which AI tool should replace the reviewer?",
          "Were reviews batched, and what other work or incoming demand occupied the reviewer during that interval?"
        ],
        "answer": 2,
        "why": [
          "This assumes a people failure before gathering evidence.",
          "This jumps to a tool before establishing the work and constraint.",
          "Correct. The question tests plausible explanations using timing and capacity evidence."
        ]
      }
    ],
    "calc": {
      "q": "F-21 took 95 elapsed minutes and 20 minutes of active staff work. How many minutes were waiting, assuming no overlap?",
      "answer": 75,
      "explanation": "95 − 20 = 75 waiting minutes. The four active staff intervals total 20 minutes; the three waiting intervals total 40 + 30 + 5 = 75."
    },
    "decision": "improve",
    "decisionPrompt": "One trace shows a long review queue, but you have not checked ownership, batch rules or other demand. Should you replace the whole booking process with AI now?",
    "decisionWhy": "Investigate and improve first. Compare multiple cases, verify the cause of waiting, then test one bounded change. One trace is not enough evidence for a broad replacement.",
    "insight": "A process can contain little active work and still deliver a slow customer experience.",
    "hooks": [
      "The longest delay may happen while nobody is working on the case.",
      "A neat workflow diagram can hide an untidy reality.",
      "Before speeding up a task, find out where the case waits."
    ],
    "linkedin": [
      "Show the clearly labeled fictional 95-minute trace.",
      "Separate 20 minutes of active work from 75 minutes of waiting.",
      "Explain two competing queue hypotheses and the evidence you would request before recommending automation."
    ],
    "facebook": [
      "Use the familiar experience of being told “it only takes five minutes.”",
      "Explain how waiting for information and ownership extends the whole journey.",
      "Ask which waiting step customers most often chase."
    ],
    "conversation": "Where does a request spend time waiting, and who owns it while it waits?",
    "claims": "Label the 95, 20 and 75 minute figures hypothetical. Verify actual timing, sample size, business-hours definitions and causes before claiming savings or recovery.",
    "recap": "Map actual work, not only the ideal procedure. Separate active work, waiting and total elapsed time. Use case traces to test causes, then pilot a measured improvement.",
    "reflection": "What would make you change your first explanation for a delay after seeing another case?",
    "deeper": "Create a second fictional trace with complete inputs but a longer review queue. Compare the two cases and explain why a single average could hide different problems."
  }
]);

Object.assign(glossary, {"Process boundary": "The agreed start and finish of the work being investigated.", "Acceptance criteria": "Conditions that make a step’s output ready for its recipient.", "Current-state map": "A description of how work actually happens now, including queues, rework and exceptions.", "Future-state map": "A proposed description of how work should operate after a change.", "Active work time": "Time spent performing work on a case.", "Waiting time": "Time a case spends awaiting information, a decision, capacity or another dependency.", "Elapsed turnaround time": "Time between defined start and finish events; state whether clock time or business hours is used.", "Queue": "Cases waiting for a step, resource or decision.", "Escalation": "Routing a case to a named person with the authority or expertise to resolve it.", "Process owner": "The role responsible for the overall process and its improvement.", "Case owner": "The person or explicitly managed role accountable for moving a specific case to its next state."});

for (const lesson of lessons.slice(5,10)) { lesson.businessName='FixWell'; lesson.businessType='fictional repair shop'; }
challenges[1]='FixWell receives form and email requests. In fictional case F-21, staff review for 5 minutes, wait 40 for missing availability, update for 5, wait 30 for slot review, review for 5, wait 5 for customer acceptance and confirm for 5. Map the CURRENT request-to-confirmation process with owners, inputs, outputs and waiting states. Add supported, unsupported and unknown eligibility branches; design an accepted handoff; write a short intake SOP; calculate active/waiting/elapsed time. Compare two cause hypotheses and propose one small improvement with a baseline and an exception measure. Label any FUTURE map separately.';

// Full self-paced core-operations and diagnostic modules. Stable indices 10–19.
lessons.push(...[
  {
    "title": "Marketing, sales and leads",
    "eyebrow": "WEEK 03 · DAY 1 OF 5",
    "objective": "Trace an inquiry through qualification and sale, assign ownership, and calculate a conversion rate with the right denominator.",
    "scenario": "Cedar Studio, a fictional design agency, receives inquiries from social posts, referrals and its website. The owner celebrates 80 inquiries in a month but cannot explain why only eight become clients. Some inquiries never receive a reply. Others want a service the agency does not offer. The salesperson blames marketing; marketing says sales ignores good leads. You are asked to investigate before buying another lead-generation tool.",
    "explain": "Marketing helps suitable people discover and understand a business. Sales helps a prospective customer decide whether the offer fits their needs, then agrees the work and price. A lead is a person or organization expressing potential interest; it is not yet a customer or a payment. Qualification means checking agreed fit criteria, such as the service needed, timing and ability to meet the engagement terms. These criteria should help people reach the right next step, rather than encourage staff to guess someone’s value from appearances.<br><br>A funnel describes counts moving through defined stages. An inquiry can become qualified, attend a discovery call, receive a proposal, and become a customer. Stages need observable entry rules. “Interested” is too vague if two staff members use it differently. Also record declined, unresponsive and unsuitable cases rather than silently deleting them. A lead owner is accountable for the next action, even when someone else helps.<br><br>Conversion rate is the number reaching a chosen outcome divided by the relevant starting group, multiplied by 100. Always name the starting group and period. Calls-to-sales conversion answers a different question from inquiries-to-sales conversion. A low rate might reflect unsuitable inquiries, slow replies, limited capacity, pricing, or poor fit. It does not prove which team is at fault. Follow comparable groups over enough time, because inquiries received today may close next month. Investigate actual case histories before increasing demand or automating follow-ups.",
    "worked": "Hypothetical monthly cohort: 80 inquiries → 50 qualified inquiries → 20 completed calls → eight agreed sales. Calls-to-sales conversion is 8 ÷ 20 × 100 = 40%; inquiries-to-sales conversion is 8 ÷ 80 × 100 = 10%. Both are correct when labeled. Twelve inquiries lack a first-response timestamp, so you cannot assume they were ignored: compare email history and staff records. Define one intake record with source, received time, fit decision, owner and next action. Route unsupported requests to a clear explanation; do not push them into a sales sequence. Start with ownership and reliable timestamps, then consider a rule-based notification for newly assigned inquiries.",
    "flow": [
      "Inquiry received",
      "Check service fit",
      "Assign owner",
      "Discuss and propose",
      "Record outcome"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">80 inquiries</th><td>Check source and stage definitions.</td></tr><tr><th scope=\"row\">20 completed calls</th><td>Use 20 for calls-to-sales conversion.</td></tr><tr><th scope=\"row\">12 missing timestamps</th><td>Distinguish missing records from missing responses.</td></tr></tbody></table>",
    "businessName": "Cedar Studio",
    "businessType": "fictional service agency",
    "perspective": "The owner wants predictable work, the salesperson wants useful conversations, and the prospect wants an answer without repeating their needs. More inquiries can worsen the experience when nobody owns the reply.",
    "assessment": "A notification is suitable after intake and ownership rules are stable. Keep suitability disputes and negotiation human-led. Suppress duplicate alerts using the inquiry ID, log delivery failures, and give the sales lead responsibility for unresolved alerts.",
    "pain": {
      "quote": "“We get plenty of messages, but very few turn into clients.”",
      "symptom": "Inquiries pile up and outcomes are unclear.",
      "causes": "Poor fit, unclear ownership, slow replies, unrealistic promises or incomplete records.",
      "questions": "What counts as an inquiry? Show the last five cases. Who replies, by when, and how is the outcome recorded?",
      "consequence": "Lost opportunities, wasted sales time and disappointed prospects; revenue impact needs evidence of genuine fit and buying intent.",
      "improve": "Agree stages, lead ownership, fit criteria and a response expectation.",
      "automation": "Create a task for a validated new inquiry, with duplicate prevention and failed-task review.",
      "evidence": "Comparable cohorts, reliable timestamps, unassigned rate and correctly defined conversion."
    },
    "exercise": "Map Cedar’s inquiry-to-sale path. Name a lead owner and one next action for an unanswered inquiry. Calculate both conversion rates, then list two competing explanations for low overall conversion and the records you need to distinguish them.",
    "rubric": [
      "Uses named stages and a responsible owner.",
      "Labels both denominators and does not confuse inquiries with revenue.",
      "Tests at least two explanations using case evidence."
    ],
    "sample": "Inquiry → fit check → assigned discovery → proposal → decision. The sales coordinator owns the unanswered case and checks prior replies before responding. Overall conversion is 10%; completed-call conversion is 40%. Hypothesis one: many inquiries request unsupported services; inspect recorded needs and fit decisions. Hypothesis two: suitable inquiries wait too long; compare received and first-response timestamps for comparable leads. Do not assume the twelve missing timestamps prove twelve lost sales. Trial ownership rules first, then a notification in one intake channel.",
    "quiz": [
      {
        "q": "Which denominator measures conversion from completed calls to sales?",
        "options": [
          "80 inquiries",
          "20 completed calls",
          "50 qualified inquiries"
        ],
        "answer": 1,
        "why": [
          "This measures inquiry-to-sale conversion, a different question.",
          "Correct. Eight sales divided by twenty completed calls measures this stage.",
          "This measures qualified-inquiry-to-sale conversion, not completed calls."
        ]
      },
      {
        "q": "Twelve response timestamps are absent. What should you conclude?",
        "options": [
          "Twelve clients were lost",
          "The salesperson did nothing",
          "Check case evidence before deciding whether replies occurred"
        ],
        "answer": 2,
        "why": [
          "Missing data does not establish buying intent or a lost sale.",
          "A missing record does not prove staff did not reply.",
          "Correct. Email history and staff accounts can distinguish missing recording from missed work."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should Cedar immediately send automated follow-ups to every historical inquiry?",
    "decisionWhy": "Improve first: verify permission and contact preferences, deduplicate records, establish fit and ownership, and exclude closed or unsuitable cases before any follow-up pilot.",
    "insight": "A busy inbox measures attention; a defined, owned next step helps turn interest into a useful conversation.",
    "hooks": [
      "More leads can expose a response problem.",
      "Eight sales can mean 10% or 40% conversion.",
      "Who owns the inquiry after the notification arrives?"
    ],
    "linkedin": [
      "Label Cedar as a fictional example and show the two denominators.",
      "Explain three possible reasons for inquiry drop-off.",
      "Offer ownership and timestamp questions before suggesting a tool."
    ],
    "facebook": [
      "Describe the familiar experience of sending a message and hearing nothing.",
      "Show the difference between an inquiry and a suitable customer.",
      "Invite readers to name the step where inquiries wait."
    ],
    "conversation": "When a new inquiry arrives, who owns the next action and how can anyone see it?",
    "claims": "All counts are hypothetical. Verify actual cohorts, consent requirements and response records before publishing rates or claiming lost revenue.",
    "recap": "Marketing creates suitable attention; sales explores fit and agrees work. Define stages, owners and denominators before diagnosing conversion.",
    "reflection": "Which piece of evidence would most change your first explanation for a low conversion rate?",
    "deeper": "Compare referral and website cohorts using the same stage rules. Explain why small samples and unfinished buying decisions limit the comparison.",
    "calc": {
      "q": "Eight sales followed twenty completed calls. What is the calls-to-sales conversion percentage?",
      "answer": 40,
      "explanation": "8 ÷ 20 × 100 = 40%. Using eighty inquiries instead answers a different question: 10% inquiry-to-sale conversion."
    }
  },
  {
    "title": "Onboarding and delivery",
    "eyebrow": "WEEK 03 · DAY 2 OF 5",
    "objective": "Define a delivery-ready handoff and separate a sales promise from an accepted delivery commitment.",
    "scenario": "A fictional Cedar client signs a proposal on Monday. Sales promises a Friday launch. Delivery learns on Wednesday that the client has not approved the text, supplied images or nominated an approver. Everyone is busy chasing information. The client believes work started when they signed; the designer believes the project has not yet become ready. The owner asks whether automatic welcome messages will solve late delivery.",
    "explain": "Onboarding is the transition from an agreed sale to a customer who is ready to receive the service. Service delivery is the work that produces the promised result. A signed proposal can start onboarding without proving that delivery can begin. Define both milestones so the customer understands what happens next. A readiness checklist names the minimum information, approvals, access and capacity needed to start a particular stage.<br><br>Scope describes the work included in the agreement. Acceptance criteria describe how the output will be judged ready or complete. A handoff is successful when the receiving person can act on the information and accepts responsibility, not merely when someone sends an email. Sales should confirm feasible timing with delivery before making commitments. Delivery should explain dependencies in plain language, including which dates depend on customer inputs. Changing a deadline after the fact is different from agreeing the conditions in advance.<br><br>A checklist needs a named owner and a path for missing or unusual information. “Awaiting client” is insufficient without the missing item, the person requesting it and a review date. Distinguish an internal failure to ask for material from a customer’s delay after a clear request. Use evidence rather than blame. If the scope changes, the authorized person should agree the new work and timing before delivery proceeds. Automation can send approved instructions or create a task from an accepted handoff, but it cannot settle an unclear promise. First make the transition understandable to both the customer and the people doing the work.",
    "worked": "Hypothetical project C-14 has an approved price but lacks final text and an authorized approver. Its record should say “onboarding: awaiting approved text; owner Lia; request sent Tuesday; review Thursday.” A delivery lead checks scope, inputs and capacity, then accepts the handoff and confirms a realistic schedule with the customer. Record the original promise and the updated agreement instead of quietly overwriting history. Pilot one standard website package: approved welcome checklist → verified inputs → delivery acceptance → agreed start. Measure missing-input handoffs and time from signature to readiness separately from readiness to completion; otherwise a faster design task could hide longer onboarding delays.",
    "flow": [
      "Agreement confirmed",
      "Request required inputs",
      "Check readiness",
      "Delivery accepts handoff",
      "Confirm delivery plan"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">Signed proposal</th><td>Begins the agreed onboarding stage.</td></tr><tr><th scope=\"row\">Complete inputs</th><td>Ready for receiving-team review.</td></tr><tr><th scope=\"row\">Accepted delivery handoff</th><td>Named owner and feasible plan confirmed.</td></tr></tbody></table>",
    "businessName": "Cedar Studio",
    "businessType": "fictional service agency",
    "perspective": "The customer feels misled when a launch promise quietly changes. Staff feel pressured to rescue an impossible schedule. A clear readiness conversation prevents repeated chasing and makes dependencies visible.",
    "assessment": "Improve the promise and handoff rules first. Automate approved checklist delivery only after the right project, recipient and package are verified. A human resolves scope changes and contested dates.",
    "pain": {
      "quote": "“We sell the project quickly, then everything gets stuck.”",
      "symptom": "Signed work sits without a reliable start date.",
      "causes": "Missing inputs, unapproved scope, absent approver or promises made without capacity checks.",
      "questions": "What did the customer understand? Which inputs were requested, when, and who accepted the handoff?",
      "consequence": "Idle delivery slots, rework, delayed invoices and loss of trust; not all delay belongs to the customer.",
      "improve": "Define readiness, receiving acceptance, a customer-facing checklist and change authority.",
      "automation": "Create onboarding tasks from an approved agreement; stop reminders when inputs arrive or a dispute is open.",
      "evidence": "Signature-to-readiness time, incomplete handoffs, readiness-to-completion time and complaints."
    },
    "exercise": "Design a five-step onboarding checklist for C-14. Include required text and approval, an owner for missing inputs, a receiving-team acceptance step, and the communication needed when a promised date is infeasible. State one exception you would escalate.",
    "rubric": [
      "Separates signature, readiness and delivery completion.",
      "Makes dependencies, acceptance and ownership visible.",
      "Escalates scope or date disputes rather than letting software invent agreement."
    ],
    "sample": "Confirm agreed package and original date; Lia requests approved text and names the client approver; Lia checks completeness; delivery lead checks capacity and accepts the handoff; Lia agrees the feasible schedule with the client. Missing text stays owned by Lia with a Thursday review. A disputed extra page goes to the person authorized to agree scope and price. Record decisions in the project record. The pilot compares incomplete handoffs before and after the checklist, while also checking customer understanding and total lead time.",
    "quiz": [
      {
        "q": "What proves a handoff is ready?",
        "options": [
          "The email was sent",
          "The receiver can act and accepts ownership against agreed criteria",
          "The client paid something"
        ],
        "answer": 1,
        "why": [
          "Sending does not establish completeness or receiving acceptance.",
          "Correct. Handoff quality depends on usable information and an accepted next step.",
          "Payment alone does not establish complete inputs or delivery capacity."
        ]
      },
      {
        "q": "Sales promised a date delivery cannot meet. What comes first?",
        "options": [
          "An automated apology sequence",
          "Quietly replace the date",
          "Have the authorized people resolve the commitment with the customer"
        ],
        "answer": 2,
        "why": [
          "Messages cannot settle the underlying commitment or scope.",
          "Silently changing the record hides the problem and damages trust.",
          "Correct. Resolve the promise explicitly, then record the agreed plan."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Will automatic welcome emails fix Cedar’s unagreed launch dates?",
    "decisionWhy": "Improve first: align sales promises with readiness and capacity. A welcome email can support a clear agreement but cannot create one.",
    "insight": "A signed project is not always a delivery-ready project.",
    "hooks": [
      "The sale closed. Did the handoff open?",
      "“Awaiting client” needs an owner too.",
      "A welcome email cannot repair an impossible promise."
    ],
    "linkedin": [
      "Introduce fictional C-14 and its conflicting expectations.",
      "Show signature, readiness and completion as separate milestones.",
      "Share a short receiving-team acceptance checklist."
    ],
    "facebook": [
      "Tell the story of booking work without knowing what to send.",
      "Explain three things a clear welcome checklist should answer.",
      "Ask what customers repeatedly have to clarify."
    ],
    "conversation": "What must be true before the delivery team can confidently accept a new project?",
    "claims": "Label C-14 fictional. Verify contract terms, promised dates and actual delay records before attributing responsibility or financial loss.",
    "recap": "Onboarding creates readiness. A usable handoff includes inputs, ownership, receiving acceptance and an understood delivery plan.",
    "reflection": "Which dependency would you explain before a customer signs?",
    "deeper": "Adapt the checklist to a fictional clinic’s nonclinical supplier onboarding. Use invented data; identify permissions and approvals without copying patient information.",
    "sequence": [
      "Confirm scope and original agreement",
      "Request the required inputs",
      "Verify inputs and readiness",
      "Obtain delivery-team acceptance",
      "Confirm the accepted delivery plan"
    ],
    "sequenceIntro": "Arrange this standard onboarding path. Exceptions return to the responsible owner rather than skipping readiness.",
    "sequenceExplanation": "Start from the agreed scope, gather and verify inputs, secure receiving acceptance, then communicate the accepted delivery plan. A change requires explicit agreement."
  },
  {
    "title": "Customer support",
    "eyebrow": "WEEK 03 · DAY 3 OF 5",
    "objective": "Separate resolution of a customer’s case from investigation of a recurring service problem.",
    "scenario": "Cedar’s fictional support inbox contains six messages about the same broken download link, one billing question and a complaint about a missed launch. Staff answer whichever message looks easiest. Three people reply to one customer while another receives no response. The owner wants an AI agent to close the backlog, but nobody agrees what “resolved” means.",
    "explain": "Customer support helps customers use the service, resolve problems and understand next steps. A ticket is a tracked request or issue. A category describes its type, such as access, billing or a delivery question. Priority describes the order in which it should be handled, based on agreed impact and urgency. An angry tone alone does not establish severity, and a polite message can describe a serious interruption.<br><br>First response and resolution are different events. An automatic acknowledgment may confirm receipt, but it does not mean someone investigated or fixed the issue. Define a meaningful first response and a resolved outcome before measuring either. Keep the case owned while it waits for another team. An escalation sends the case to someone with the authority or expertise to decide, with enough context and a clear expected next action.<br><br>Several tickets can have one underlying cause. Fixing a broken link can prevent repeated contact, while answering each message without fixing the link leaves the workload in place. This feedback loop connects support to delivery, onboarding and product decisions. Track both individual customer outcomes and recurring issue themes. Do not close a ticket merely because a reply was sent; use an agreed resolution rule, including what happens when the customer stops responding.<br><br>Automation can acknowledge receipt, find duplicate cases, or route requests using reliable rules. It should not promise refunds, disclose sensitive records or make contested judgments without approved authority and controls. Start with ownership, priority definitions and a route for uncertain cases. A useful support system makes it easy for people to see who needs help and why the same problem keeps returning.",
    "worked": "In a hypothetical review, six download tickets share the same link. The support lead creates one linked issue for the delivery owner to investigate while retaining an owner and next-update time for each customer. The billing question goes to the finance contact; the missed-launch complaint goes to the manager authorized to discuss commitments. An acknowledgment says when a person will review the case, using a realistic approved expectation. It does not say the issue is solved. Measure meaningful response time, resolution time, repeat contact and incorrect closures together. A reduction in open tickets is weak evidence if cases were closed without helping customers.",
    "flow": [
      "Request recorded",
      "Assess impact and urgency",
      "Assign case owner",
      "Resolve or escalate",
      "Confirm and learn"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">Acknowledged</th><td>Receipt confirmed; investigation may not have started.</td></tr><tr><th scope=\"row\">Escalated</th><td>Specialist decides; case ownership stays explicit.</td></tr><tr><th scope=\"row\">Resolved</th><td>Agreed outcome recorded, with a reopening route.</td></tr></tbody></table>",
    "businessName": "Cedar Studio",
    "businessType": "fictional service agency",
    "perspective": "A customer wants continuity and an honest next update. Support staff need clear authority and escalation contacts. The delivery team needs evidence about recurring defects rather than a vague report that customers complain.",
    "assessment": "Keep contested complaint resolution human-led. Approved acknowledgments and bounded routing can be rule-based. Review uncertain categories, measure misroutes and provide a person customers can reach.",
    "pain": {
      "quote": "“We keep answering the same questions, and people still complain.”",
      "symptom": "Repeat contacts and an uneven support queue.",
      "causes": "Broken service steps, unclear instructions, duplicate replies, weak ownership or premature closure.",
      "questions": "Show repeated cases. What was actually fixed? What counts as resolved? Who can authorize a remedy?",
      "consequence": "Repeated staff effort, delayed service, customer frustration and possible cancellations; verify actual outcomes.",
      "improve": "Define categories and priorities, assign owners and feed recurring issues to the responsible team.",
      "automation": "Acknowledge receipt and route known categories, with uncertainty and urgent-case escalation.",
      "evidence": "Repeat-contact rate, meaningful response time, resolution quality and wrongly closed cases."
    },
    "exercise": "Categorize the three issue types in Cedar’s inbox. Give each a case owner and escalation destination. Define “resolved” for a download failure, then explain how you would link repeated tickets without losing the individual customers’ next updates.",
    "rubric": [
      "Separates category, priority and ownership.",
      "Defines a customer outcome instead of equating a reply with resolution.",
      "Connects recurring contacts to a shared problem investigation."
    ],
    "sample": "Access issue → support owns the case; delivery investigates the shared link. Billing question → finance contact, with support retaining coordination until transfer is accepted. Launch complaint → authorized manager, with a promised next update. A download failure is resolved when access is restored and the outcome is checked using an agreed rule, not simply when a link is resent. Link the six cases to a common issue record, but retain individual ownership and update times. Review repeat contact and a sample of closures during the pilot.",
    "quiz": [
      {
        "q": "Which metric alone can reward premature closure?",
        "options": [
          "Number of tickets marked closed",
          "Repeat-contact rate with case review",
          "Verified customer outcome"
        ],
        "answer": 0,
        "why": [
          "Correct. A closed label can rise without the underlying issue being resolved.",
          "Repeat-contact evidence helps reveal unresolved problems, although definitions still matter.",
          "Verified outcomes are closer to the purpose of support than an administrative label."
        ]
      },
      {
        "q": "Six customers report the same broken link. What is the best response?",
        "options": [
          "Send six replies and stop",
          "Track individual cases and investigate their shared cause",
          "Merge the records and remove customer follow-up"
        ],
        "answer": 1,
        "why": [
          "Replies alone leave a recurring defect in place.",
          "Correct. Resolve each customer’s need while fixing the source of repeated contact.",
          "Combining the issue must not erase individual ownership or communication."
        ]
      }
    ],
    "decision": "human",
    "decisionPrompt": "Should a system independently negotiate a remedy for a disputed launch complaint?",
    "decisionWhy": "Keep the decision human-led. The complaint involves commitments, context and authority. A system may organize evidence or draft an approved message for review, but the responsible manager decides.",
    "insight": "A smaller support queue is useful only if the customer’s problem is actually resolved.",
    "hooks": [
      "Closed does not always mean resolved.",
      "Six support tickets may be one delivery problem.",
      "An instant acknowledgment is not an instant solution."
    ],
    "linkedin": [
      "Show the fictional repeated-link scenario.",
      "Separate acknowledgment, ownership and resolution.",
      "Recommend one feedback loop from support to delivery."
    ],
    "facebook": [
      "Describe being sent the same unhelpful reply twice.",
      "Explain why fixing the common issue reduces repeated chasing.",
      "Ask which question customers keep having to ask."
    ],
    "conversation": "What recurring customer question points to a process you could improve upstream?",
    "claims": "Use hypothetical ticket counts. Verify actual resolution definitions and evidence before claiming customer satisfaction or reduced workload.",
    "recap": "Route requests with clear ownership, resolve customer outcomes and investigate repeated issues. Measure quality alongside speed.",
    "reflection": "Which support decision needs authority rather than a faster reply?",
    "deeper": "For a fictional healthcare administration team, separate a general opening-hours question from a complaint needing an authorized person. Never put real patient details into a practice workflow."
  },
  {
    "title": "Invoices and collections",
    "eyebrow": "WEEK 03 · DAY 4 OF 5",
    "objective": "Trace delivered work to payment and identify which balances are suitable for a reminder.",
    "scenario": "Cedar’s fictional finance assistant sees an invoice for 1,200 units and sends a reminder for the full amount. The customer has already paid 500 and disputed 200 of the remaining balance. Another invoice lacks the purchase reference needed by the customer’s finance team. The owner says “automate collections,” but the records do not yet agree.",
    "explain": "An invoice is a request for payment for specified work under agreed terms. Issuing it does not prove the money has arrived. Accounts receivable is the amount customers still owe for invoiced work. Collections is the activity of obtaining payment, including checking receipt, resolving questions and following up when appropriate. A due date is the agreed date payment should be made; overdue means unpaid beyond that date according to the relevant terms.<br><br>The invoice-to-payment path starts before a reminder. Confirm what was agreed, whether required delivery or approval occurred, which legal business entity is billed and what information the customer needs to process it. Missing references or an incorrect recipient can block payment even when the customer intends to pay. Do not assume every delay is unwillingness. Record payments against the correct invoice and check pending receipts before sending another message.<br><br>A dispute is a disagreement about an amount or obligation. It needs an authorized person and an explicit status. Reconciliation means comparing records, such as invoice balances and received payments, and explaining differences. It is a data and control step, not a new source of revenue. A reminder should use a verified eligible balance, appropriate recipient and approved wording. Disputed amounts, pending payments and special arrangements may require a different path.<br><br>Automation can help when these rules and records are reliable. Start with a reviewable candidate list rather than sending messages across all unpaid records. Keep negotiation, contested charges and exceptions with authorized people. Measure correct reminders and resolved blockers as well as payment timing, because faster messages can damage trust when the balance is wrong.",
    "worked": "Hypothetical invoice C-88: issued amount 1,200; received and matched payment 500; outstanding balance 700. Of that 700, 200 is disputed. Under this fictional company’s agreed policy, the maximum undisputed reminder candidate is 500, subject to due-date, recipient and pending-receipt checks. This is not proof the customer will pay 500 or that 500 is lost revenue. A finance owner reviews the 200 dispute separately. Another invoice is blocked by a missing purchase reference, so the next step is to obtain and correct that reference. A pilot first generates a daily review list for one approved customer segment; finance approves messages and logs exceptions.",
    "flow": [
      "Verify agreement and invoice",
      "Match received payment",
      "Check due date and exceptions",
      "Review eligible follow-up",
      "Record outcome and balance"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">1,200 issued − 500 received</th><td>700 outstanding.</td></tr><tr><th scope=\"row\">700 outstanding − 200 disputed</th><td>500 undisputed candidate under this fictional policy.</td></tr><tr><th scope=\"row\">Missing purchase reference</th><td>Correct the blocker before repeated reminders.</td></tr></tbody></table>",
    "businessName": "Cedar Studio",
    "businessType": "fictional service agency",
    "perspective": "The owner wants cash for operating costs. Finance wants trustworthy balances. The customer wants accurate requests and a person who can resolve disagreements without repeated automated pressure.",
    "assessment": "A verified, undisputed overdue reminder can be a rule-based pilot. Check current balances before send time, prevent repeat sends with a logged event ID, pause disputed cases and name a finance maintainer. No tool guarantees collection.",
    "pain": {
      "quote": "“We have unpaid invoices, but chasing them takes all morning.”",
      "symptom": "Repeated follow-ups and uncertain balances.",
      "causes": "Missing invoice fields, unmatched payments, disputes, wrong recipients or unagreed terms.",
      "questions": "Show one delayed invoice end to end. Was it received and accepted? What is disputed? Are payments fully matched?",
      "consequence": "Delayed cash, staff effort and damaged customer relationships; outstanding is not automatically uncollectible.",
      "improve": "Agree invoice checks, payment matching, dispute ownership and follow-up eligibility.",
      "automation": "Produce or send eligible reminders from verified balances with review and an audit trail.",
      "evidence": "Incorrect reminders, unresolved blockers, overdue balance by agreed definition and payment timing for comparable groups."
    },
    "exercise": "Calculate C-88’s outstanding and undisputed amounts. Write four checks before a reminder is eligible. Describe who owns the dispute and what happens if a payment arrives after the candidate list is produced but before messages are sent.",
    "rubric": [
      "Calculates 700 outstanding and 500 undisputed candidate.",
      "Checks timing, balances, recipient and exceptions.",
      "Rechecks before sending and routes disputes to a named person."
    ],
    "sample": "Outstanding = 1,200 − 500 = 700; undisputed candidate = 700 − 200 = 500. Verify the due date, matched and pending payments, approved recipient/contact preference, and absence of a dispute or payment arrangement affecting the candidate. Finance owns the 200 dispute and records the next review date. Recheck the current balance just before sending; cancel or update the message if a payment arrived. Log the eligibility reason and send event so a retry does not create a duplicate. These are hypothetical rules for a pilot, not a universal collections policy.",
    "quiz": [
      {
        "q": "What should happen when a payment arrives before the reminder is sent?",
        "options": [
          "Use yesterday’s balance",
          "Recheck eligibility and update or cancel the message",
          "Send now and apologize later"
        ],
        "answer": 1,
        "why": [
          "A stale balance can produce an incorrect demand.",
          "Correct. Eligibility depends on current verified information at the point of action.",
          "Avoidable inaccurate reminders harm trust and create more work."
        ]
      },
      {
        "q": "A customer cannot pay because a required purchase reference is missing. What helps first?",
        "options": [
          "Increase reminder frequency",
          "Treat the entire invoice as lost revenue",
          "Obtain the reference and correct the invoice route"
        ],
        "answer": 2,
        "why": [
          "More messages do not supply the missing processing information.",
          "A processing blocker does not establish a permanent loss.",
          "Correct. Remove the specific blocker and verify receipt of the corrected information."
        ]
      }
    ],
    "decision": "automate",
    "decisionPrompt": "A finance owner has verified an undisputed overdue balance, approved the recipient and wording, and defined current-balance checks. Is a small reminder pilot reasonable?",
    "decisionWhy": "Automate the bounded rule with the agreed checks, duplicate prevention, failure alerts and a finance owner. Keep disputes and arrangements outside that standard path and review incorrect messages as a stop condition.",
    "insight": "An unpaid invoice can be an information problem before it is a reminder problem.",
    "hooks": [
      "Before chasing payment, check whether the invoice can be processed.",
      "A 700 balance is not always a 700 reminder.",
      "Faster collections messages need more reliable balances."
    ],
    "linkedin": [
      "Use the fictional 1,200/500/200 example with transparent arithmetic.",
      "Explain why outstanding, disputed and eligible are different.",
      "List checks before automating a reminder."
    ],
    "facebook": [
      "Describe receiving a reminder after already paying.",
      "Explain matching payments and resolving missing references.",
      "Ask what blocks invoices from reaching the right person."
    ],
    "conversation": "Which unpaid invoices are waiting for missing information rather than another reminder?",
    "claims": "Figures and policy are hypothetical. Verify actual payment terms, communication rules and financial records before publication; never promise recovered revenue.",
    "recap": "Invoice, payment and dispute records must agree. Fix processing blockers and automate only eligible follow-up with current data and clear ownership.",
    "reflection": "What could make an apparently overdue invoice unsuitable for an automatic reminder?",
    "deeper": "Adapt the map to fictional medical billing administration: distinguish submitted claims, payer responses and payments. Investigate the actual reason for a pending item; do not equate submission with payment or fabricate reimbursement rules.",
    "calc": {
      "q": "An invoice is 1,200, matched payment is 500, and 200 of the outstanding amount is disputed. Under the stated practice policy, what is the undisputed reminder candidate before other checks?",
      "answer": 500,
      "explanation": "1,200 − 500 = 700 outstanding. 700 − 200 = 500 undisputed candidate. Due date, pending payments, recipient and arrangement checks still apply."
    }
  },
  {
    "title": "Reporting and administration",
    "eyebrow": "WEEK 03 · DAY 5 OF 5",
    "objective": "Design a report around a decision, define its measures, and connect reliable administration to reliable data.",
    "scenario": "Every Friday Cedar’s manager copies five spreadsheets into a report. Marketing counts inquiry messages; sales counts unique people. Delivery uses “complete” when work is sent, finance when it is approved. The report has attractive charts but nobody knows whether to change staffing. Meanwhile, a former contractor still appears on an access list. The manager asks for an AI dashboard.",
    "explain": "Reporting turns recorded activity into information people can use to make decisions. A metric is a defined measure, such as the proportion of new inquiries still without an owner after one business day. A useful definition includes what is counted, which records qualify, the time window, the source and the person responsible for checking it. A dashboard is a display of selected measures. Its appearance cannot make inconsistent definitions comparable.<br><br>Start with the decision: what would the manager do differently if the result changed? If the choice concerns assignment capacity, measure unassigned work and age, not only total messages received. A leading indicator may show a developing issue, such as incomplete handoffs; an outcome measure describes what happened, such as late delivery. Use both carefully, because an indicator is a clue rather than proof of cause. A cutoff is the agreed time at which the report describes the records. Late updates can change results, so record how corrections are handled.<br><br>Internal administration includes maintaining access, shared records, schedules and routine approvals. These tasks support the other departments. An outdated access list is not merely untidy; someone must verify whether the person still needs access and remove it through the approved procedure when appropriate. Data stewardship means taking responsibility for definitions and data quality. One authoritative field and a named steward can reduce hours of reconciliation.<br><br>Automated aggregation and simple analysis are often enough for a well-defined report. AI is optional and cannot decide whose conflicting definition is correct. Agree definitions, ownership, access and actions first, then test whether the report matches a manual sample and supports a real decision.",
    "worked": "Replace Cedar’s vague weekly pack with three hypothetical measures: (1) unique inquiries received this week still unassigned at Friday 16:00, divided by all unique inquiries received this week; (2) delivery handoffs missing a required input, divided by reviewed handoffs this week; (3) verified overdue undisputed invoice balance at Friday 16:00, in currency units. The first helps the sales lead allocate ownership, the second helps the delivery lead fix readiness, and the third helps finance prioritize review. Each definition names its source and steward. Review a sample against original records. Separately, the access owner checks the contractor’s need and records the approved access decision.",
    "flow": [
      "Name a decision",
      "Define measure and cutoff",
      "Check source records",
      "Review exceptions",
      "Act and assign follow-up"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">Message count versus unique inquiry count</th><td>Choose a consistent unit; deduplicate by an agreed ID.</td></tr><tr><th scope=\"row\">Sent versus approved</th><td>Keep distinct milestones rather than calling both complete.</td></tr><tr><th scope=\"row\">Chart without action owner</th><td>Specify who acts when a threshold is reached.</td></tr></tbody></table>",
    "businessName": "Cedar Studio",
    "businessType": "fictional service agency",
    "perspective": "The manager wants a decision they can defend. Staff resent rebuilding numbers nobody uses. Finance and delivery need clear definitions so a report does not wrongly suggest that they missed work.",
    "assessment": "Improve definitions and stewardship first, then automate repeatable aggregation. Compare the generated report with known records, show stale or missing inputs and keep an owner for data discrepancies and access reviews.",
    "pain": {
      "quote": "“We spend hours reporting, but still cannot see what needs attention.”",
      "symptom": "Repeated report preparation and contradictory totals.",
      "causes": "Inconsistent units, duplicate records, unclear cutoff, late updates or no decision owner.",
      "questions": "What decision uses this number? Show the definition, source, cutoff and one record behind it.",
      "consequence": "Wasted analysis time, poor staffing decisions and missed follow-up; do not infer causation from a chart alone.",
      "improve": "Create a metric dictionary, source ownership and an action-focused review routine.",
      "automation": "Aggregate validated records and flag incomplete source updates rather than inventing missing values.",
      "evidence": "Sample reconciliation, report preparation time, data freshness and documented actions."
    },
    "exercise": "Choose three Cedar decisions and design one metric for each. State its unit or numerator and denominator, time window, authoritative source, owner and expected action. Explain how you would handle a late update without silently changing last week’s conclusion.",
    "rubric": [
      "Connects each measure to a concrete decision.",
      "Defines units, eligibility, window, source and ownership.",
      "Handles data quality and correction history explicitly."
    ],
    "sample": "Sales lead allocates unassigned inquiries using unique unassigned inquiries divided by all unique inquiries received that week, measured Friday 16:00 from the lead register. Delivery lead reviews incomplete accepted handoffs using the project checklist. Finance reviews verified undisputed overdue balance from reconciled invoices at the same cutoff. Each steward checks a small record sample and reports missing updates. A late correction is labeled with the new report time and explanation; it is not silently presented as the original result. Add an access-review owner for staff changes rather than treating the dashboard as an access-control solution.",
    "quiz": [
      {
        "q": "What should be defined before building a dashboard?",
        "options": [
          "Chart colors",
          "The decision, measure, source and action owner",
          "Which AI model to use"
        ],
        "answer": 1,
        "why": [
          "Visual design matters after the measure has a purpose and a reliable definition.",
          "Correct. A useful display supports a defined decision with trustworthy information.",
          "A model choice does not resolve conflicting definitions or ownership."
        ]
      },
      {
        "q": "Marketing counts messages and sales counts people. Why do totals differ?",
        "options": [
          "One team must be dishonest",
          "The dashboard needs more charts",
          "The units differ; reconcile definitions before comparing"
        ],
        "answer": 2,
        "why": [
          "Different definitions can explain the difference without dishonesty.",
          "More displays do not make different units comparable.",
          "Correct. One person may send several messages; agree the unit and source."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should Cedar automate the current contradictory weekly totals into one authoritative dashboard?",
    "decisionWhy": "Improve first: agree units, milestones, sources and correction rules. Then automate the stable calculations and highlight incomplete data instead of presenting false certainty.",
    "insight": "A useful report starts with a decision someone is willing and able to make.",
    "hooks": [
      "What will change after someone reads this report?",
      "A beautiful chart can compare incompatible numbers.",
      "“Complete” needs a definition before it needs a dashboard."
    ],
    "linkedin": [
      "Show the fictional message-versus-person mismatch.",
      "Give a metric definition with unit, window and owner.",
      "Explain how a small reporting pilot checks source records."
    ],
    "facebook": [
      "Describe spending Friday copying numbers nobody discusses.",
      "Offer three questions: what decision, which source, who acts?",
      "Ask which report has no clear next action."
    ],
    "conversation": "Which number would cause you to take a specific action this week?",
    "claims": "Verify any real metric definitions and source records. Do not imply a correlation proves a cause or that a dashboard makes data accurate.",
    "recap": "Define the decision before the metric. Reporting depends on consistent records, access routines and named stewards; automate stable calculations after those foundations.",
    "reflection": "Which existing report would you simplify, and what decision would remain?",
    "deeper": "Write a one-page metric dictionary and trace one fictional record through each measure. Note where a changed status would alter the result."
  },
  {
    "title": "Bottlenecks and queues",
    "eyebrow": "WEEK 04 · DAY 1 OF 5",
    "objective": "Compare arrival rate and effective capacity, locate a constrained step, and avoid moving the queue elsewhere.",
    "scenario": "Harbor Services, a fictional administration business, receives 15 complete requests per hour during a four-hour window. Intake can check 20 per hour, one reviewer can decide 10, and dispatch can send 18. The owner wants faster intake because customers wait days. Staff say the reviewer is “slow,” but the reviewer also handles unusual cases and waits for a daily approval batch.",
    "explain": "A queue is work waiting for a step, person, information or decision. A bottleneck is a step that limits the flow of the process under the conditions observed. It is not necessarily the person working hardest or the task that looks most complicated. Arrival rate describes how much work enters in a period. Capacity describes how much a step can complete in that period under stated assumptions. Effective capacity reflects interruptions, breaks, variation and other work, rather than an ideal uninterrupted speed.<br><br>If work arrives faster than it can be completed, the queue tends to grow. This is a useful arithmetic check, not a complete prediction of every customer’s waiting time. Cases differ, demand changes by hour, and some work returns for correction. Compare the same units and periods, and separate complete requests from cases awaiting missing inputs. Record beginning backlog and completed work so the balance can be checked.<br><br>Improving a step before the constraint may simply move more cases into the constrained queue. Speeding up intake does not create review capacity. Possible interventions include changing unnecessary approval rules, distributing authorized work, improving input quality, reducing interruptions or adjusting capacity. None should bypass decisions that genuinely need authority or expertise. Investigate why the apparent constraint exists before attributing it to an individual.<br><br>Use case timestamps and observation to distinguish a steady capacity shortage from batching, poor scheduling or missing information. Measure end-to-end turnaround as well as throughput, the number completed in a period. A local speed improvement is valuable only if it improves the broader outcome without increasing errors or pushing the delay downstream.",
    "worked": "For this simplified hypothetical window, intake capacity 20/hour exceeds arrivals 15/hour, but review capacity is only 10/hour. If all arrivals need this review and those rates stay constant, review backlog grows by 15 − 10 = 5 requests per hour, or 20 over four hours. Dispatch capacity of 18/hour is not the limiting step at that load. Adding an intake bot that checks 30/hour does not change the 10/hour review limit. Inspect review start/end times, interruptions, case types and batch-release times. Trial one authorized change, such as removing duplicate approval for standard cases after the process owner confirms it is unnecessary. Compare total turnaround, error rate and queue age.",
    "flow": [
      "Receive complete request",
      "Intake check · 20/hour",
      "Wait for review",
      "Review · 10/hour",
      "Dispatch · 18/hour"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">Arrival: 15/hour</th><td>Hypothetical constant load of complete requests.</td></tr><tr><th scope=\"row\">Review: 10/hour</th><td>Queue grows 5/hour under stated assumptions.</td></tr><tr><th scope=\"row\">Faster intake</th><td>Does not increase review completion capacity.</td></tr></tbody></table>",
    "businessName": "Harbor Services",
    "businessType": "fictional administration business",
    "perspective": "The customer experiences total waiting, not the speed of an intake form. The reviewer may feel blamed for a policy or workload they cannot change. The manager needs a view of flow rather than individual busyness.",
    "assessment": "Investigate and improve first. Rules might remove a proven redundant routing step, but automating intake alone is unlikely to solve the constraint. Keep required judgments with authorized staff and monitor downstream queues.",
    "pain": {
      "quote": "“We answer quickly, but the work still takes days.”",
      "symptom": "Fast intake followed by an aging review queue.",
      "causes": "Insufficient effective review capacity, batching, interruptions, rework or incomplete cases.",
      "questions": "How many complete cases arrive and finish per hour? What else does the reviewer do? When are approvals released?",
      "consequence": "Long turnaround, chasing effort and missed commitments; a queue count alone does not price financial loss.",
      "improve": "Protect review time, remove justified duplication, distribute authorized work or adjust capacity.",
      "automation": "Route complete standard cases under approved rules once the constraint and exceptions are understood.",
      "evidence": "Arrival and completion rates, queue age, total turnaround and quality for comparable work."
    },
    "exercise": "Use the three capacity figures to identify the likely constraint and estimate queue growth during four hours. State the assumptions. Give two explanations besides “the reviewer works slowly,” and explain why faster intake might not help.",
    "rubric": [
      "Compares consistent hourly units and identifies review.",
      "Calculates 5/hour and 20 total while stating simplifying assumptions.",
      "Tests batching or competing work and considers the whole flow."
    ],
    "sample": "Review is the apparent constraint: 10/hour against arrivals of 15/hour. Backlog grows 5/hour, or 20 cases in four hours, if every case needs review, rates stay constant, no rework occurs and capacity is available as stated. Existing backlog would be additional. Review may be interrupted by escalations or held until a batch approval; examine timestamps and observe work. Faster intake cannot increase review throughput. Trial a justified review-process change, with authorized decision makers, and monitor end-to-end time, error rate and downstream backlog.",
    "quiz": [
      {
        "q": "Which change alone leaves the stated review limit unchanged?",
        "options": [
          "Raise intake capacity from 20 to 30/hour",
          "Add authorized effective review capacity",
          "Remove an unnecessary review step after validation"
        ],
        "answer": 0,
        "why": [
          "Correct. Intake already exceeds arrivals; the review constraint remains ten per hour.",
          "This may increase capacity at the actual constraint, subject to quality and demand.",
          "If the step is genuinely unnecessary, validated redesign could reduce constrained demand."
        ]
      },
      {
        "q": "What else is needed before blaming the reviewer?",
        "options": [
          "Only their job title",
          "Evidence of case mix, interruptions and approval timing",
          "A more colorful queue chart"
        ],
        "answer": 1,
        "why": [
          "A title does not establish the cause of limited effective capacity.",
          "Correct. Policies, variation and competing work can create the apparent constraint.",
          "A clearer display cannot establish causes without underlying evidence."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should Harbor automate intake first because it is easy to connect?",
    "decisionWhy": "Improve first: target evidence about the review constraint. Tool convenience does not establish business value, and speeding a nonconstraint may only increase waiting work.",
    "insight": "The easiest task to automate may be far from the step limiting delivery.",
    "hooks": [
      "Your fastest step may be feeding your longest queue.",
      "Busy staff are not a bottleneck diagnosis.",
      "Before speeding up intake, check what happens next."
    ],
    "linkedin": [
      "State the fictional hourly capacities and assumptions.",
      "Calculate queue growth and explain the nonconstraint trap.",
      "Share evidence needed before changing review."
    ],
    "facebook": [
      "Use a familiar line that moves quickly at entry and stalls inside.",
      "Explain arrivals versus completions without jargon.",
      "Ask where accepted work waits longest."
    ],
    "conversation": "Which step controls how many complete cases your business can actually finish?",
    "claims": "All rates are hypothetical. Verify effective capacity, variability and required approvals before claiming a bottleneck or projected improvement.",
    "recap": "Compare arrivals with effective capacity. Investigate the constrained step and measure end-to-end outcomes rather than optimizing one local task.",
    "reflection": "What evidence would show that the queue is caused by batching rather than too few reviewers?",
    "deeper": "Add variable arrivals and a starting backlog of twelve to the fictional example. Explain why the simple four-hour estimate is not a waiting-time forecast.",
    "calc": {
      "q": "Fifteen complete requests arrive per hour and ten are reviewed per hour. Under constant rates for four hours, how many requests are added to the review backlog?",
      "answer": 20,
      "explanation": "(15 − 10) × 4 = 20 additional requests. This excludes any starting backlog, rework or changes in demand and capacity."
    }
  },
  {
    "title": "Duplicate work and rework",
    "eyebrow": "WEEK 04 · DAY 2 OF 5",
    "objective": "Distinguish repeated data entry from correction work and trace both to their causes.",
    "scenario": "In fictional Harbor case H-42, a coordinator copies a customer address from email into two spreadsheets. The first sheet contains an old address. Dispatch sends the document to the wrong place, then support corrects both sheets and asks the customer to confirm again. The owner calls all of it “manual work” and wants the two sheets synchronized immediately.",
    "explain": "Duplicate work repeats an activity or stores the same information more than necessary. Rework corrects, repeats or repairs work because the first result did not meet requirements. These overlap but are not identical. Copying a correct address into a second system is duplicate entry; fixing a document after using the wrong address is rework. Separating them helps choose the right intervention. Integration may reduce repeated entry while still spreading a wrong address faster.<br><br>Trace a specific case from the first capture of information to the final accepted output. Record where data changed, who changed it and why. A case ID is a stable reference that distinguishes one request from another. A source of truth is the agreed authoritative record for a defined field or stage. It does not mean every system is authoritative for everything. Define who can update the address, how it is checked, and how downstream users know a correction occurred.<br><br>A rework reason code is a consistent category for why correction was needed, such as missing input, outdated data, misunderstood instructions or changed scope. Categories help find patterns, but a staff-selected label is still evidence to verify. “Human error” is too broad to explain why the error was possible or likely. Check the form, training, version history and workload before assigning cause.<br><br>Measure cases requiring correction separately from the number of correction events. One case can have several events. A rate needs a clear denominator and period. Preventing the first defect may reduce more work than speeding the correction step, while some checking remains useful. Do not remove a necessary verification simply because it repeats a field check.",
    "worked": "Hypothetical week: 40 completed cases, ten of which required at least one correction. Case-level rework rate = 10 ÷ 40 × 100 = 25%. If those ten cases generated 16 correction events, that is not a 40% case rework rate; it is 16 events across 40 cases. For H-42, map email address → sheet A → sheet B → dispatch → complaint → correction. Agree one verified address field, update authority and downstream correction notifications. Trial better capture and validation before syncing. Track wrong-address outputs, correction events and time spent checking; do not count necessary checks as waste by default.",
    "flow": [
      "Capture address",
      "Copy into two records",
      "Dispatch uses old version",
      "Customer reports error",
      "Correct and verify"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">Duplicate entry</th><td>Same field copied into multiple records.</td></tr><tr><th scope=\"row\">Rework</th><td>Output corrected after wrong information was used.</td></tr><tr><th scope=\"row\">Necessary verification</th><td>May protect quality; assess its purpose before removal.</td></tr></tbody></table>",
    "businessName": "Harbor Services",
    "businessType": "fictional administration business",
    "perspective": "The customer feels unheard when asked for the same information again. Staff feel trapped correcting records they did not design. The owner needs fewer defects, not merely faster copying.",
    "assessment": "Improve authoritative data, validation and correction ownership first. Integrate only with an explicit field mapping, stable IDs, update rules and conflict handling. Preserve meaningful verification and correction history.",
    "pain": {
      "quote": "“We enter everything twice and still have to fix it.”",
      "symptom": "Repeated entry followed by avoidable corrections.",
      "causes": "No authoritative field, stale versions, missing validation or ambiguous update rights.",
      "questions": "Where did the first wrong value enter? Which record was used? Who can correct it, and who receives the change?",
      "consequence": "Repeated staff effort, delayed delivery and customer frustration; separate event counts from affected cases.",
      "improve": "Agree authoritative fields, validate inputs and record correction reasons.",
      "automation": "Populate downstream fields from verified data with conflict alerts and a maintainer.",
      "evidence": "Cases requiring correction, correction events, wrong outputs and duplicated entry effort."
    },
    "exercise": "Map H-42 and label duplicate entry, rework and useful verification. Calculate the case-level rework rate. Propose one prevention change and identify the update rule that must exist before synchronizing the sheets.",
    "rubric": [
      "Distinguishes duplicate entry, correction and necessary checking.",
      "Uses ten affected cases over forty completed cases: 25%.",
      "Fixes authoritative data and update ownership before integration."
    ],
    "sample": "Copying the address into two sheets is duplicate entry. Reissuing the document is rework. Checking the corrected address against the customer’s authorized instruction is useful verification. Ten of forty completed cases required correction: 25%. Prevention: capture and verify the address once in the authoritative customer record. The coordinator owns corrections, downstream users receive a flagged change, and conflicts pause for review rather than using whichever timestamp is newest. Measure affected cases and correction events separately. Do not claim a synchronization has saved time until the pilot checks both effort and defect rates.",
    "quiz": [
      {
        "q": "What could a two-way sync do before authority rules exist?",
        "options": [
          "Guarantee accurate addresses",
          "Spread conflicting values faster",
          "Eliminate the need for any verification"
        ],
        "answer": 1,
        "why": [
          "Synchronization moves values; it does not prove those values are correct.",
          "Correct. Unresolved authority and update conflicts can propagate errors.",
          "Some verification remains necessary even with good integration."
        ]
      },
      {
        "q": "Ten of forty cases needed correction, with sixteen correction events. What is the case rework rate?",
        "options": [
          "25%",
          "40%",
          "160%"
        ],
        "answer": 0,
        "why": [
          "Correct. Ten affected cases divided by forty completed cases equals twenty-five percent.",
          "Sixteen divided by forty measures events per case, not the fraction of affected cases.",
          "Neither the event count nor the denominator supports this case rate."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should Harbor immediately synchronize the two conflicting address sheets?",
    "decisionWhy": "Improve first. Agree the authoritative address, correction authority, case IDs and conflict rules. An integration without those rules can reproduce the same defect across both systems.",
    "insight": "Copying less data helps only when the data you copy is reliable.",
    "hooks": [
      "Automation can copy a wrong address perfectly.",
      "Duplicate entry and rework need different questions.",
      "“Human error” is the start of an investigation, not the end."
    ],
    "linkedin": [
      "Trace fictional H-42 from capture to correction.",
      "Separate duplicate entry from rework and useful checks.",
      "Explain a field-authority rule before proposing integration."
    ],
    "facebook": [
      "Describe being asked for an address already supplied.",
      "Explain why two records can disagree even when software connects them.",
      "Ask where the first incorrect value enters."
    ],
    "conversation": "When two records disagree, who decides which value is correct?",
    "claims": "Label rates fictional. Verify the affected-case denominator, correction definitions and measured effort before claiming savings.",
    "recap": "Trace the first defect. Separate duplicate entry from rework, use stable IDs and authoritative fields, and preserve useful verification.",
    "reflection": "Which repeated check protects quality, and which repeated entry adds no new information?",
    "deeper": "Apply the distinction to fictional claim administration: repeated entry versus correction after an incomplete submission. Use invented identifiers and do not assume every rejection has the same cause.",
    "calc": {
      "q": "Ten of forty completed cases required at least one correction. What percentage of cases required rework?",
      "answer": 25,
      "explanation": "10 ÷ 40 × 100 = 25%. Count affected cases once; track multiple correction events separately."
    }
  },
  {
    "title": "Follow-ups and missing information",
    "eyebrow": "WEEK 04 · DAY 3 OF 5",
    "objective": "Investigate why work needs chasing and design a next action that removes the blocker.",
    "scenario": "Harbor’s fictional coordinator sends a third “just checking in” message about H-57. The customer cannot find the upload link. The request asks for “the usual documents,” and the shared queue says only “waiting.” Nobody has checked whether the link works for someone outside the company. The owner asks for daily automated reminders.",
    "explain": "A follow-up is an action taken to move an earlier request toward an outcome. It can be useful when the request is clear, the recipient can act, and the timing is appropriate. Repeated chasing is also a symptom worth investigating. The missing item may not have been requested clearly, the recipient may lack access, an internal approval may be pending, or nobody may own the next step. More messages do not remove these blockers by themselves.<br><br>Define the required input in terms the recipient understands: what is needed, why it is needed, where to provide it and when it is needed. State acceptable alternatives or a contact for uncertainty. Check whether the recipient can actually use the route, using approved testing and fictional material. Avoid sending sensitive information through an improvised channel simply to get the case moving. Input completeness means the necessary information is present and usable, not merely that a form was submitted.<br><br>A dependency is something that must happen before another step can proceed. Waiting status should name the dependency, the person responsible for obtaining it and the next review time. A case may wait on the customer, an internal reviewer or an external organization. Do not describe all three as “customer delay.” Evidence includes original requests, delivery or access problems, timestamps and the recipient’s account.<br><br>After fixing clarity and access, a bounded reminder can support a stable process. Define when it starts, when it stops, how replies change eligibility and when a person takes over. Recheck the case before each send. A reminder that continues after the information arrives creates new work and makes the organization look unaware of its own records.",
    "worked": "For hypothetical H-57, replace “usual documents” with a specific approved list and a working upload route. The coordinator tests the external experience using a dummy file and authorized access. Status becomes “waiting for signed form; coordinator Nia owns follow-up; next review Thursday.” If a reply reports an access failure, pause standard reminders and investigate. Pilot one reminder after the approved waiting interval only when the required item remains absent and no exception is open. Compare missing-input rate, successful uploads, number of chases per case and total turnaround. An improvement in replies alone does not prove the right information arrived.",
    "flow": [
      "Name missing input",
      "Check request and access",
      "Assign dependency owner",
      "Resolve blocker or remind",
      "Recheck and stop when complete"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">“Usual documents”</th><td>List required items in plain language.</td></tr><tr><th scope=\"row\">“Waiting”</th><td>Name dependency, owner and review time.</td></tr><tr><th scope=\"row\">Third reminder</th><td>Check clarity and ability to act before sending again.</td></tr></tbody></table>",
    "businessName": "Harbor Services",
    "businessType": "fictional administration business",
    "perspective": "The customer feels blamed for a task they cannot complete. The coordinator feels responsible for chasing but lacks a usable process. The manager needs fewer stalled cases and clearer reasons for waiting.",
    "assessment": "Improve unclear requests and broken access first. Automate reminders only after eligibility and stop rules work, including a pause for access problems, replies, disputes and manual escalation.",
    "pain": {
      "quote": "“Nothing moves unless someone keeps chasing.”",
      "symptom": "Many follow-ups, few complete inputs.",
      "causes": "Vague instructions, broken links, unclear responsibility or a hidden internal dependency.",
      "questions": "Show the original request and reply. Can the recipient act? What exactly is missing, and who owns getting it?",
      "consequence": "Longer turnaround, repeated staff effort and poor customer experience; do not assume every unanswered message is refusal.",
      "improve": "Clarify required inputs, test the approved route and record the dependency owner.",
      "automation": "Send a bounded reminder with live completeness checks and an escalation route after repeated failure.",
      "evidence": "Complete-input rate, successful submission, chases per case and time awaiting each dependency."
    },
    "exercise": "Rewrite H-57’s request in plain language without inventing real document requirements. Create an actionable waiting status. List three conditions that should stop automatic reminders, and one record you would inspect before deciding the customer caused the delay.",
    "rubric": [
      "Makes the requested input, route and help option understandable.",
      "Names dependency, owner and review time.",
      "Defines stop conditions and tests causes without blame."
    ],
    "sample": "Practice request: “Please upload the signed practice form through the approved link by Thursday. If the link does not open or you are unsure which form is needed, reply so Nia can help.” The exact documents and timing require process-owner approval. Status: missing signed form; owner Nia; next review Thursday. Stop reminders when the form arrives, an access problem is reported or the case is paused by the owner. Inspect the original request and link-access evidence before attributing the wait to the customer. Measure completeness and turnaround, not just the number of messages sent.",
    "quiz": [
      {
        "q": "What is the best first action after an access-error reply?",
        "options": [
          "Send the same reminder more frequently",
          "Pause reminders and investigate the blocked route",
          "Mark the customer uncooperative"
        ],
        "answer": 1,
        "why": [
          "Repeated messages do not repair the recipient’s ability to act.",
          "Correct. Resolve the stated blocker and retain a responsible owner.",
          "The reply provides evidence of a process problem, not refusal."
        ]
      },
      {
        "q": "Which waiting status is actionable?",
        "options": [
          "Waiting",
          "Client issue",
          "Signed form missing; Nia owns follow-up; review Thursday"
        ],
        "answer": 2,
        "why": [
          "It gives no dependency, owner or next review time.",
          "It assigns blame without describing what must happen.",
          "Correct. It identifies what is missing, who acts and when the case is reviewed."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Will daily reminders solve a vague document request with a broken upload link?",
    "decisionWhy": "Improve first. Make the request specific, verify the approved route and assign ownership. More frequent messages amplify a blocker the recipient cannot remove.",
    "insight": "Before automating a chase, check whether the person can complete the request.",
    "hooks": [
      "A reminder cannot fix a broken link.",
      "“Waiting on the client” may hide an internal problem.",
      "Three follow-ups are evidence to investigate, not proof to blame."
    ],
    "linkedin": [
      "Introduce fictional H-57 and the unusable request.",
      "Show a clear request and actionable waiting status.",
      "Give eligibility and stop rules for a later reminder pilot."
    ],
    "facebook": [
      "Describe receiving “just checking in” without knowing what to do.",
      "Offer the what, where and help questions for clear requests.",
      "Ask what makes a task difficult to complete."
    ],
    "conversation": "What would you check before deciding an unanswered request needs another reminder?",
    "claims": "All examples are fictional. Verify actual requested items, approved channels and communication preferences before publishing workflow guidance as organization-specific advice.",
    "recap": "Repeated chasing can signal unclear instructions, blocked access or hidden dependencies. Fix the blocker and define reminder stop rules.",
    "reflection": "Which waiting label could you replace with an owned next action?",
    "deeper": "Map two fictional waits: one external input and one internal approval. Compare evidence and escalation routes rather than combining them into one “client delay” measure.",
    "sequence": [
      "Identify the exact missing input",
      "Inspect the original request and access route",
      "Resolve clarity or access problems",
      "Assign the next action and review time",
      "Recheck eligibility before any reminder"
    ],
    "sequenceIntro": "Order the investigation before the next chase.",
    "sequenceExplanation": "Identify the dependency, inspect the recipient’s experience, fix blockers, assign follow-up, and only then send an eligible reminder."
  },
  {
    "title": "Symptoms versus causes",
    "eyebrow": "WEEK 04 · DAY 4 OF 5",
    "objective": "Develop competing explanations, test them with evidence, and distinguish a plausible story from a demonstrated cause.",
    "scenario": "Harbor’s fictional manager says delays happen because “staff do not care.” A coordinator says the intake checklist is unclear. Another says the upload link fails on phones. Eight of twelve late cases lack a required field, but some complete cases are also late. You are asked to recommend a solution after a ten-minute conversation.",
    "explain": "A symptom is an observed sign of a problem, such as late completion, repeated calls or missing fields. A cause is a condition that helps explain why the symptom occurs. A root cause is a sufficiently fundamental, actionable explanation within the investigation’s scope; it is not necessarily one single ultimate cause. Several conditions can combine. Calling something “staff error” does not explain how the process made that error likely or why it was not caught.<br><br>A hypothesis is a proposed explanation that can be tested. Form more than one: unclear instructions, mobile access failure, an overloaded reviewer or incomplete training. State what each would predict in the records and what would weaken it. Comparing delayed and on-time cases can reveal patterns, but a pattern alone does not establish causation. Cases may differ in complexity, channel or timing. Check those differences before concluding that one factor explains the outcome.<br><br>The five-whys technique asks successive why questions to move beyond the first symptom. It is a conversation aid, not proof. Each link in the chain needs evidence, and stopping at the fifth question is not a scientific rule. Ask staff to describe actual cases, inspect source records with appropriate permission, and observe the step using fictional test data when possible. Seek counterexamples rather than only confirming your preferred explanation.<br><br>Keep facts, interpretations and unknowns separate in your recommendation. A small reversible pilot can test a plausible cause, provided success measures, comparable cases and unintended effects are defined. Report the result honestly, including uncertainty. An AI summary of staff complaints can organize themes, but it does not independently establish why delays occur or who is responsible.",
    "worked": "Hypothetical evidence: eight of twelve late cases have missing fields. That supports investigating intake, but it does not show how many on-time cases also have missing fields. Request both groups and compare channel and complexity. Hypothesis A: instructions omit the field; inspect form versions and observe comprehension. Hypothesis B: mobile upload fails; test the approved route using dummy data on a phone. Hypothesis C: complete cases wait in review; compare complete-input timestamp to review start. A possible why-chain is “late → missing form → unusable link → external-access setting,” but every arrow needs verification. Recommend repairing a confirmed access defect, then measuring complete-input and turnaround outcomes before broader automation.",
    "flow": [
      "Record observed symptom",
      "List competing hypotheses",
      "Seek confirming and contrary evidence",
      "Test a bounded change",
      "Revise the explanation"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">Fact</th><td>Eight of twelve late cases lack a field in this fictional sample.</td></tr><tr><th scope=\"row\">Interpretation</th><td>Intake quality may contribute; not yet proven.</td></tr><tr><th scope=\"row\">Unknown</th><td>Missing-field rate among on-time cases and other delays.</td></tr></tbody></table>",
    "businessName": "Harbor Services",
    "businessType": "fictional administration business",
    "perspective": "The manager wants a confident explanation, while staff need a fair investigation. The customer wants fewer delays regardless of which department is blamed. Honest uncertainty protects trust better than a quick accusation.",
    "assessment": "Keep causal investigation human-led. Analytics can compare patterns and automation can collect timestamps, but neither replaces observation, alternative hypotheses or authorized judgment about a process change.",
    "pain": {
      "quote": "“The same mistakes keep happening; it must be the staff.”",
      "symptom": "Late work and repeated missing fields.",
      "causes": "Unclear inputs, access failure, workload, training gaps or multiple interacting causes.",
      "questions": "Which cases contradict that explanation? What differs between late and on-time work? What evidence supports each why?",
      "consequence": "Misdiagnosis wastes implementation effort, leaves delays in place and unfairly blames staff.",
      "improve": "Test alternatives, repair confirmed blockers and document remaining uncertainty.",
      "automation": "Collect reliable event data or flag incomplete inputs after definitions are agreed; do not automate blame.",
      "evidence": "Comparable case patterns, observed failures, pilot outcomes and evidence that could disprove the explanation."
    },
    "exercise": "Write two competing hypotheses for Harbor’s delays. For each, name supporting evidence, contrary evidence and a test. Draft a short why-chain but label every unverified link. State what you can recommend now and what you cannot yet claim.",
    "rubric": [
      "Separates observed facts from interpretations and unknowns.",
      "Tests at least two causes and seeks disconfirming evidence.",
      "Limits recommendations and avoids treating a why-chain as proof."
    ],
    "sample": "Fact: eight of twelve late cases lack a field; complete late cases also exist. Hypothesis A: unclear intake instructions. Support would be repeated misunderstanding on the same version; contrary evidence would be clear successful completion using it under comparable conditions. Test the request with dummy cases and inspect version history. Hypothesis B: review batching. Support would be complete cases released together; contrary evidence would be immediate reviews despite delay elsewhere. Inspect stage timestamps. The access-setting why-chain remains a hypothesis until tested. Recommend structured evidence collection and repair of any directly verified defect; do not claim one cause explains every late case.",
    "quiz": [
      {
        "q": "Does eight of twelve late cases missing a field prove missing fields cause all delay?",
        "options": [
          "Yes, the majority proves it",
          "No; compare on-time cases and other conditions",
          "Yes, if AI summarizes the records"
        ],
        "answer": 1,
        "why": [
          "The pattern does not establish the cause or explain complete cases that were late.",
          "Correct. Comparison, timing and alternative explanations are needed to assess the hypothesis.",
          "A generated summary cannot turn an association into causal proof."
        ]
      },
      {
        "q": "What makes a five-whys chain credible?",
        "options": [
          "Exactly five answers",
          "The manager’s agreement alone",
          "Evidence for each link and tests of alternatives"
        ],
        "answer": 2,
        "why": [
          "The number of questions is not a validation rule.",
          "Authority can approve action but does not establish factual causation.",
          "Correct. Each causal link should be checked, including evidence that could weaken it."
        ]
      }
    ],
    "decision": "human",
    "decisionPrompt": "Should an AI summary decide which employee caused the late cases?",
    "decisionWhy": "Keep investigation and responsibility decisions human-led. A summary may organize permitted evidence, but people must verify facts, context, alternative causes and fair authority before drawing conclusions.",
    "insight": "A plausible root-cause story becomes useful when you know how to test it.",
    "hooks": [
      "Five whys are five questions, not five proofs.",
      "What would prove your diagnosis wrong?",
      "Missing fields may be part of the delay, not the whole explanation."
    ],
    "linkedin": [
      "Label the eight-of-twelve sample fictional.",
      "Separate fact, hypothesis and missing comparison.",
      "Offer two tests and explain how the recommendation could change."
    ],
    "facebook": [
      "Describe how easy it is to blame a person for repeated delays.",
      "Show a blocked-link and review-queue alternative.",
      "Ask what evidence readers would inspect first."
    ],
    "conversation": "Which case would most challenge your current explanation for the problem?",
    "claims": "Never present the fictional sample as research or a client result. Verify denominators, comparability and causal evidence before making real claims.",
    "recap": "Symptoms invite hypotheses. Test alternatives, verify why-chain links and report uncertainty before selecting a solution.",
    "reflection": "Which assumption in your own diagnosis have you treated as a fact?",
    "deeper": "Build a two-column evidence log: observations and interpretations. Add one counterexample for each hypothesis and explain how it changes your confidence."
  },
  {
    "title": "Visibility and responsibility",
    "eyebrow": "WEEK 04 · DAY 5 OF 5",
    "objective": "Design an actionable work queue and use it to choose a bounded improvement with an owner and measurable success.",
    "scenario": "Harbor’s fictional shared board has colorful labels: open, urgent and pending. H-61 says pending but has no owner. H-62 is assigned to two people, each expecting the other to act. H-63 has an owner but an old status after the required form arrived. The manager wants a new dashboard. Staff say they already have too many places to update.",
    "explain": "Visibility means being able to understand the current state of work well enough to act. A board is not useful merely because it displays all cases. An actionable record identifies the case, its state, the next action, who owns it, the relevant due or review time, and any blocker. Status definitions should describe observable conditions. “Awaiting signed form” is more useful than “pending” because it explains what must change.<br><br>Responsibility should distinguish the owner coordinating the case from people performing particular tasks. Several people can contribute, but the next step must not disappear between them. A team-owned queue can work when there is an explicit assignment or on-duty rule; it should not mean everyone assumes someone else is handling it. Escalation identifies who can decide when the owner lacks authority or a dependency remains unresolved.<br><br>Data freshness matters. Record when the status was last checked and define which events update it. If a form arrives but the record remains unchanged, a dashboard may confidently show the wrong priority. Avoid adding another manual copy of the same queue. Agree an authoritative work record, update rights and practical routines before building a new view. Aging measures how long a case has remained open or in a particular state; define which clock matters for the decision and whether business time is used.<br><br>Use visibility to prioritize action rather than blame or rank people by raw case counts. Complexity and waiting dependencies differ. A small pilot can test a standard owned queue for one request type. Define maintenance and a manual fallback, measure missed next actions and turnaround, and check whether the new routine creates more administration than it removes.",
    "worked": "Practice board: H-61 → awaiting signed form; Nia owns follow-up; review Thursday; blocked by missing form. H-62 → ready for review; Omar owns next decision; due Friday; previous duplicate assignment resolved explicitly. H-63 → inputs received; Nia verifies readiness today and updates the record. The team lead owns stale or unassigned exceptions and reviews them each morning. Prioritize ownerless work and time-sensitive verified blockers, not whichever row is brightest. Pilot one intake queue for two weeks: require owner, next action and review time, then consider alerts for unassigned or stale records. Baseline the percentage of open cases missing those fields and count missed next actions. These are proposed measures, not achieved results.",
    "flow": [
      "Define meaningful states",
      "Assign next-action owner",
      "Record blocker and review time",
      "Update from verified events",
      "Review exceptions and outcomes"
    ],
    "visual": "<table><caption>Practice comparison — all examples hypothetical</caption><thead><tr><th scope=\"col\">Observe</th><th scope=\"col\">Investigate or decide</th></tr></thead><tbody><tr><th scope=\"row\">Ownerless pending case</th><td>Assign responsibility and define the dependency.</td></tr><tr><th scope=\"row\">Two assumed owners</th><td>Name the accepted next-action owner.</td></tr><tr><th scope=\"row\">Stale waiting status</th><td>Check received evidence and update the authoritative record.</td></tr></tbody></table>",
    "businessName": "Harbor Services",
    "businessType": "fictional administration business",
    "perspective": "The manager needs to know where intervention helps. Employees want clear responsibilities and fewer status-chasing messages. Customers want the next action to happen even when a colleague is absent.",
    "assessment": "Improve state definitions, ownership and update routines first. Once stable, automate a narrow stale-record alert with a named recipient, duplicate suppression, acknowledgment and escalation. An alert cannot create authority or accountability by itself.",
    "pain": {
      "quote": "“I cannot tell who is doing what until I ask everyone.”",
      "symptom": "Ownerless cases, duplicate assignments and stale statuses.",
      "causes": "Vague states, no assignment rule, parallel trackers or updates disconnected from events.",
      "questions": "Which record is authoritative? Who accepts the next action? When was this status last verified? What happens during absence?",
      "consequence": "Missed deadlines, duplicated effort and customer chasing; staff busyness does not establish throughput or value.",
      "improve": "Agree state definitions, accepted ownership, absence cover and a daily exception review.",
      "automation": "Flag genuinely unassigned or stale records after stable update rules; keep assignment disputes human-led.",
      "evidence": "Missing-owner rate, stale-status rate, missed actions, turnaround and additional admin time."
    },
    "exercise": "Create an actionable queue for H-61 to H-63 with status, owner, next action, review time and blocker. Diagnose three operational problems without assuming their causes. Prioritize one change, then specify a pilot, baseline, success measure and maintenance owner.",
    "rubric": [
      "Makes every case actionable and resolves ambiguous ownership.",
      "Distinguishes symptoms, possible causes and required evidence.",
      "Proposes a bounded pilot with baseline, quality check and maintenance."
    ],
    "sample": "H-61: awaiting signed form, Nia requests through the approved route, review Thursday. H-62: ready for review, Omar accepts the decision, due Friday; lead resolves the prior double assignment. H-63: inputs received, Nia checks readiness today; verify why the status stayed stale. Symptoms are missing ownership, ambiguous assignment and stale state; possible causes include unclear rules and parallel records. First agree the authoritative queue and assignment routine. Pilot one request type for two weeks. Baseline open cases lacking owner/next action/review time. Target fewer missing fields and missed actions without extra duplicate updates or worse turnaround. Team lead reviews failures and maintains the rules. No improvement is claimed before measurement.",
    "quiz": [
      {
        "q": "Which record supports action best?",
        "options": [
          "Pending; urgent",
          "Awaiting form; Nia owns request; review Thursday",
          "Open; two people mentioned"
        ],
        "answer": 1,
        "why": [
          "It lacks a dependency, accountable owner and review time.",
          "Correct. It tells the team what must happen, who acts and when it is checked.",
          "Mentioning people does not show who accepted the next step."
        ]
      },
      {
        "q": "Why might a new dashboard fail to improve the process?",
        "options": [
          "It displays stale records without fixing update ownership",
          "It uses readable labels",
          "It shows a named owner and next action"
        ],
        "answer": 0,
        "why": [
          "Correct. A display can amplify inaccurate status without changing the underlying routine.",
          "Readable labels help understanding, though they are not sufficient alone.",
          "Accepted ownership and next actions help work move when records are reliable."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should Harbor add another dashboard while ownership and status updates are undefined?",
    "decisionWhy": "Improve first: establish the authoritative queue, meaningful states and accepted owners. Then test whether an exception alert or view reduces missed work without creating another update burden.",
    "insight": "A visible queue becomes useful when every row tells someone what to do next.",
    "hooks": [
      "“Pending” is a label, not a next action.",
      "A dashboard cannot assign responsibility by itself.",
      "Before adding a tracker, agree which record everyone trusts."
    ],
    "linkedin": [
      "Show the fictional three-case board before and after clarification.",
      "Explain owner, next action, review time and freshness.",
      "Describe a small pilot with proposed measures rather than invented results."
    ],
    "facebook": [
      "Describe a task everyone saw but nobody owned.",
      "Share a five-field checklist for an actionable queue.",
      "Ask what happens to a case when its owner is absent."
    ],
    "conversation": "If the case owner is away tomorrow, how does the next action still happen?",
    "claims": "Label the board and pilot as practice. Verify actual ownership, baseline and post-change results before claiming fewer delays, saved hours or recovered revenue.",
    "recap": "Visibility needs reliable states, accepted ownership and current evidence. Prioritize a small process improvement, then automate stable exception detection with a maintainer.",
    "reflection": "Which field would make your own work queue more actionable today?",
    "deeper": "Adapt the queue to fictional healthcare administration using case IDs without patient information. Identify which access, communication and retention policies need organizational review; a tool choice does not establish compliance."
  }
]);

challenges[2] = "Cedar Studio receives 80 inquiries, qualifies 50, completes 20 calls and agrees eight sales. Twelve response timestamps are missing. Project C-14 lacks approved text but has a promised Friday launch. Support sees six broken-link requests. Invoice C-88 is 1,200, with 500 received and 200 disputed. Map inquiry → onboarding → delivery → support → invoicing → payment. Diagnose three cross-team risks, state alternative causes and evidence, calculate both conversion rates and the undisputed reminder candidate, define a delivery-ready handoff, and propose one narrow pilot with ownership, exceptions and measures. Finish with three educational hooks labeled as a fictional example.";
challenges[3] = "Harbor Services receives 15 complete requests/hour; intake handles 20, review 10 and dispatch 18. Forty completed cases include ten requiring correction. H-57 waits on an unclear request and unusable link. H-61 has no owner, H-62 has two assumed owners, and H-63 has a stale status. Build the current map, calculate four-hour review backlog growth and case rework rate, and separate symptoms from hypotheses. Test two competing causes with supporting and contrary evidence. Create an actionable three-case queue and prioritize one two-week pilot with baseline, success measures, quality checks and maintenance. Explain one task to keep human-led and write three credible content ideas.";
Object.assign(glossary, {"Qualification": "Checking whether a prospective customer’s need fits agreed service criteria.", "Conversion rate": "The fraction of a defined starting group reaching a specified outcome, expressed as a percentage.", "Readiness checklist": "The inputs, approvals and conditions needed before a stage can start.", "Ticket": "A tracked customer request or issue, with an owner and recorded outcome.", "Reconciliation": "Comparing records and explaining differences, such as matching payments to invoices.", "Metric dictionary": "Agreed definitions, units, sources, windows and owners for measures.", "Effective capacity": "Work a step can actually complete in a period under stated operating conditions.", "Throughput": "The amount of completed work in a defined period.", "Rework": "Work repeated or corrected because an earlier result did not meet requirements.", "Hypothesis": "A proposed explanation that can be tested using evidence.", "Data freshness": "How current a recorded value is relative to the event or decision it describes.", "Dependency": "An input, decision or event required before another step can proceed."});

// References support core concepts, not fictional case outcomes.
const lessonReferences={"ops": {"title": "OpenStax — Production and Operations Management", "url": "https://openstax.org/books/introduction-business/pages/10-1-production-and-operations-management-an-overview", "note": "Inputs, outputs, service operations and coordination across functions."}, "finance": {"title": "OpenStax — Accounting: More than Numbers", "url": "https://openstax.org/books/introduction-business/pages/14-1-accounting-more-than-numbers", "note": "Accounting information and its role in business decisions; practice figures are hypothetical."}, "marketing": {"title": "OpenStax — The Marketing Concept", "url": "https://openstax.org/books/introduction-business/pages/11-1-the-marketing-concept", "note": "Customer needs, exchanges and the distinction between marketing and sales."}, "map": {"title": "ASQ — Flowcharts and Process Maps", "url": "https://asq.org/quality-resources/flowchart", "note": "Representing process steps and decision paths to investigate and improve work."}, "root": {"title": "ASQ — Root Cause Analysis", "url": "https://asq.org/quality-resources/root-cause-analysis", "note": "Investigating underlying causes as part of a broader improvement process."}, "why": {"title": "ASQ — Five Whys and Five Hows", "url": "https://asq.org/quality-resources/five-whys", "note": "Structured questioning to move beyond symptoms; classroom hypotheses still require evidence."}, "lean": {"title": "Lean Enterprise Institute — Standardized Work", "url": "https://www.lean.org/lexicon-terms/standardized-work/", "note": "Work sequence, capacity and a baseline for improvement. The source uses manufacturing examples; lessons adapt the ideas to services."}, "auto": {"title": "GSA — Eliminate, Optimize, Automate", "url": "https://www.gsa.gov/technology/government-it-initiatives/eliminate-optimize-automate", "note": "Simplify and improve a process before automating repetitive tasks; federal guidance adapted as general practice."}, "health": {"title": "HHS — Guidance on HIPAA and Cloud Computing", "url": "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html", "note": "US healthcare context: cloud use involves organizational safeguards and applicable agreements, not automatic compliance from a product choice."}};
const referenceMap=[["ops", "marketing"], ["finance"], ["finance"], ["ops", "map"], ["auto", "health"], ["map"], ["map", "auto"], ["map", "ops"], ["lean", "map"], ["map", "lean"], ["marketing", "ops"], ["ops", "map"], ["ops", "root"], ["finance", "auto"], ["finance", "ops"], ["lean", "map"], ["root", "auto"], ["map", "root"], ["root", "why"], ["map", "auto", "health"]];
lessons.forEach((lesson,i)=>{lesson.sources=referenceMap[i].map(key=>lessonReferences[key]);});

lessons[1].sources.push({title:'OpenStax — The Income Statement',url:'https://openstax.org/books/introduction-business/pages/14-5-the-income-statement',note:'Revenue, expenses and profit measured over a period.'});
lessons[2].sources.push({title:'OpenStax — The Statement of Cash Flows',url:'https://openstax.org/books/introduction-business-2e/pages/14-6-the-statement-of-cash-flows',note:'Cash receipts and payments differ from the profit measure.'});

// Full Weeks 5 and 6. Existing lesson indices remain unchanged.
lessons.push(...[
  {
    "title": "Task suitability and stability",
    "eyebrow": "Choose the work before the tool",
    "objective": "Classify tasks by repeatability, rule clarity and consequences, and distinguish a stable process from a frequently repeated problem.",
    "scenario": "Juniper Admin, a fictional agency, wants to automate three tasks: notifying an owner when a verified request is ready, deciding whether an unhappy customer deserves a refund, and copying status labels that staff change every few days. All three happen repeatedly. The owner assumes repetition makes them equally suitable. You need to recommend a proportionate next step and explain the different risks without starting with a tool demonstration.",
    "explain": "Automation suitability asks whether a specific task can be performed reliably by a defined system in a defined context. Start with the business outcome and the exact boundary: what starts the task, which information it receives, what it produces and who acts next. A broad phrase such as “automate customer service” combines many tasks with different rules and consequences. Split it into smaller decisions and actions before judging suitability.<br><br>Repeatability means similar inputs can follow the same understood steps. Stability means the relevant rules and data definitions are settled enough to maintain and test. A process can run a hundred times a day and still be unstable if everyone interprets its statuses differently. Frequency is evidence of potential workload, not evidence that the rules are good. Examine actual cases, including exceptions, and ask staff which decisions depend on context, authority or negotiation.<br><br>A useful first classification is automate a bounded rule, improve the process first, or keep the decision human-led. These are not permanent labels for whole departments. A human-led complaint decision can still use a tracked queue and approved draft messages. A stable notification can still fail if its input is wrong or nobody maintains it. Consider the consequence of a mistaken action, whether it can be detected and reversed, and whether uncertainty reaches an appropriate person.<br><br>Do not use a total score to override a missing prerequisite such as authority, reliable data or approved access. Document the reason for the recommendation and what evidence would change it. A small pilot should test one stable path, define success and stop conditions, and leave people able to continue the work if the system is paused.",
    "worked": "Practice assessment: a ready-request notification has a verified case ID, accepted status definition, named receiving owner and a failure queue. It is a reasonable rule-based pilot if duplicate prevention and maintenance are included. Refund negotiation needs an authorized person to consider the agreement and customer context; a system can collect the case history without deciding the remedy. Changing status labels require process improvement first: agree meanings, owners and a versioned rule before connecting systems. State the boundary of each recommendation. “Automate the notification for one request type” is testable; “remove all manual administration” is not a usable scope.",
    "flow": [
      "Define outcome and task",
      "Inspect normal and unusual cases",
      "Check stable rules and inputs",
      "Choose the appropriate approach",
      "Pilot with owner and fallback"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">Verified ready-status notification</th><td>Bounded rules may suit automation.</td></tr><tr><th scope=\"row\">Contested refund</th><td>Authorized human decision with supporting tools.</td></tr><tr><th scope=\"row\">Changing status meanings</th><td>Agree process and definitions before integration.</td></tr></tbody></table>",
    "businessName": "Juniper Admin",
    "businessType": "fictional administration agency",
    "perspective": "The owner wants dependable service and capacity. Staff want relief without losing the ability to handle unusual cases. The customer wants a fair outcome, not simply a fast automated answer.",
    "assessment": "A stable, verified notification can be automated. An unclear status process needs improvement first; a contested remedy stays human-led. Explain which task is in scope and who handles exceptions.",
    "pain": {
      "quote": "“Everything is repetitive, so surely we can automate all of it.”",
      "symptom": "A broad automation request mixes routine actions and judgment.",
      "causes": "Unclear task boundaries, unsettled rules or pressure to choose a tool before diagnosis.",
      "questions": "Show a normal case and an exception. Which rules change? Who can authorize the outcome? What happens if it is wrong?",
      "consequence": "Avoidable implementation effort, incorrect actions and extra exception work; benefits are not guaranteed by frequency.",
      "improve": "Split the process into tasks and agree rules and authority.",
      "automation": "Notify one named owner from a verified event with duplicate prevention and a failure route.",
      "evidence": "Correct notifications, duplicate rate, unresolved exceptions and owner response time."
    },
    "exercise": "Classify the three Juniper tasks. For each, state a business goal, one reason for your choice, the evidence still needed and the person who owns exceptions. Rewrite “automate customer service” into one testable pilot scope.",
    "rubric": [
      "Classifies the task rather than an entire function.",
      "Uses stability, authority and consequences rather than repetition alone.",
      "Defines a bounded scope with owner and evidence."
    ],
    "sample": "Notify a ready-request owner: automate a bounded rule after checking case IDs, current status and recipient. Maintenance lead handles failed sends. Refund negotiation: human-led under the manager’s authority; verify the agreement and complaint history. Changing statuses: improve first by agreeing definitions and update ownership. Pilot scope: one verified ready-status event for one request type, routed to its assigned owner, with one send log and a failure queue. Measure correct and duplicate notifications plus unhandled exceptions; do not claim saved hours before comparing actual work.",
    "quiz": [
      {
        "q": "Which repeated task needs improvement before automation?",
        "options": [
          "A verified status notification with a named owner",
          "Copying statuses whose meanings keep changing",
          "A stable calculation checked against known cases"
        ],
        "answer": 1,
        "why": [
          "This may suit a bounded pilot when inputs and failure handling are reliable.",
          "Correct. Repeated execution does not compensate for unsettled meanings and rules.",
          "Stable calculations can be automated with appropriate validation and maintenance."
        ]
      },
      {
        "q": "What is the clearest pilot scope?",
        "options": [
          "Automate the business",
          "Replace all customer service",
          "Notify the assigned owner for one verified ready-request type"
        ],
        "answer": 2,
        "why": [
          "This has no usable boundary or testable outcome.",
          "This combines many different decisions, consequences and exceptions.",
          "Correct. The event, recipient and limited process can be tested and owned."
        ]
      }
    ],
    "decision": "automate",
    "decisionPrompt": "One verified ready-status rule has reliable case IDs, an assigned recipient, duplicate prevention and an owned failure queue. Is a narrow notification pilot appropriate?",
    "decisionWhy": "Automate this bounded task and monitor it. The prerequisites are defined; the pilot still needs a baseline, stop conditions and a maintainer. This does not authorize automating the surrounding judgments.",
    "insight": "Repetition identifies work to investigate; stable rules determine what can be automated responsibly.",
    "hooks": [
      "Repetitive does not always mean ready to automate.",
      "Automate a task, not a vague department name.",
      "The exception tells you as much as the normal case."
    ],
    "linkedin": [
      "Introduce the three fictional tasks.",
      "Explain their different recommendations using rules and authority.",
      "Offer a small-pilot boundary and evidence checklist."
    ],
    "facebook": [
      "Describe the difference between a reminder and a difficult complaint decision.",
      "Show automate, improve and human-led as practical choices.",
      "Invite a specific repeated-task example."
    ],
    "conversation": "Which repeated task has clear rules, and which still needs someone to interpret the situation?",
    "claims": "Examples are fictional. Verify real rules, failure consequences and measured results before recommending a production workflow or claiming benefits.",
    "recap": "Assess a defined task. Check stability, data, authority and exceptions; then choose automation, improvement or human ownership.",
    "reflection": "What task would you deliberately keep human-led even if software could execute it?",
    "deeper": "Choose a fictional healthcare administrative task with no patient information. List the authorized decisions and data-handling review needed before a real pilot.",
    "sources": [
      {
        "title": "GSA — Eliminate, Optimize, Automate",
        "url": "https://www.gsa.gov/technology/government-it-initiatives/eliminate-optimize-automate",
        "note": "Process improvement before repetitive-task automation; federal guidance adapted to service-business practice."
      },
      {
        "title": "Institute for Healthcare Improvement — Model for Improvement",
        "url": "https://www.ihi.org/library/model-for-improvement",
        "note": "Define an aim, evidence of improvement and changes to test on a small scale."
      }
    ]
  },
  {
    "title": "Volume, effort and data quality",
    "eyebrow": "Estimate the work you can actually remove",
    "objective": "Estimate gross repetitive effort, account for exceptions and review, and treat data quality as a prerequisite rather than a small inconvenience.",
    "scenario": "Juniper receives 600 standard requests a month. Staff spend four minutes copying fields on each request. The owner announces that automation will save 40 hours. A closer look shows some fields are missing, twelve minutes of manual investigation is needed for certain exceptions, and someone will need to review failed runs. Another task occurs only twelve times a month but has a much higher consequence if it is wrong.",
    "explain": "Transaction volume is the number of relevant cases or events in a defined period. Task effort is active staff time spent on the step, not all the time a case waits. Multiplying volume by active minutes gives a gross estimate of repetitive workload. It does not by itself predict net time released, cash saved or improved turnaround. Confirm the frequency, task boundary and timing with representative records rather than one unusually easy case.<br><br>Data quality concerns whether information is present, valid, consistent, current and suitable for the intended use. Completeness is not the same as accuracy: a filled address field may still contain an old value. A stable case ID helps avoid duplicates, while an agreed authoritative source helps resolve conflicting values. Before scoring a candidate, check whether required fields exist and whether staff can trust them. A high-volume process with unreliable data can produce high-volume errors.<br><br>Estimate exception handling, review, monitoring and ongoing maintenance separately. If a pilot handles only eligible cases, use eligible volume for the first estimate and state what happens to excluded work. Do not subtract the same effort twice or ignore new checking tasks. A weighted opportunity score can help compare candidates, but its weights express local priorities; it is not an objective certification that a task is safe or valuable.<br><br>Consider implementation effort and consequences alongside volume. A low-volume task may matter because it prevents a serious error, but its benefit needs a defensible explanation. Start with transparent assumptions, a range of plausible outcomes and a measured pilot. Stop if the data cannot support the proposed action, then improve capture or definitions before automating it.",
    "worked": "Hypothetical gross workload: 600 × 4 minutes = 2,400 minutes = 40 hours/month. Suppose only 450 cases meet the pilot’s verified input rules. At four minutes each, their gross candidate workload is 30 hours. If the pilot replaces that step fully but creates six hours of review and monitoring, the estimate is 24 hours released; the remaining 150 cases stay on the manual path. This is a forecast under stated assumptions, not measured savings. Check whether review time overlaps with the original task, whether some copying remains and whether exception handling gets slower. Do not value all 40 hours as cash unless actual spending can be reduced.",
    "flow": [
      "Count relevant cases",
      "Time the active task",
      "Check usable inputs",
      "Estimate eligible volume and review",
      "Compare effort, risk and evidence"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">600 × 4 minutes</th><td>40 hours gross workload, not guaranteed savings.</td></tr><tr><th scope=\"row\">450 eligible × 4 minutes</th><td>30 gross pilot hours.</td></tr><tr><th scope=\"row\">30 − 6 review hours</th><td>24 forecast released hours under stated assumptions.</td></tr></tbody></table>",
    "businessName": "Juniper Admin",
    "businessType": "fictional administration agency",
    "perspective": "The owner wants a realistic opportunity, staff want exception work counted, and the future maintainer needs time allocated for monitoring. Inflated estimates can make a useful small pilot look like a failure.",
    "assessment": "Improve input reliability before expanding scope. A pilot on verified eligible cases may be reasonable if review, exception work, implementation effort and maintenance are included. Do not select solely by the largest gross-hour estimate.",
    "pain": {
      "quote": "“There are hundreds of these every month; the saving must be huge.”",
      "symptom": "Large volume is presented as a guaranteed benefit.",
      "causes": "Unmeasured task times, ineligible inputs, ignored review work or duplicate counting of effort.",
      "questions": "How was four minutes measured? Which cases qualify? What new work appears? Are filled fields actually correct?",
      "consequence": "Overstated business cases, hidden exception workload and poor prioritization.",
      "improve": "Measure representative work, improve required fields and separate eligible from exception volume.",
      "automation": "Pilot verified field transfer on one segment while retaining owned manual exceptions.",
      "evidence": "Eligible proportion, residual task effort, review hours, errors and maintenance time."
    },
    "exercise": "Calculate gross workload and forecast released time using the example. List three assumptions that could reduce the estimate. Compare it with the twelve-times-monthly task without inventing a monetary risk reduction.",
    "rubric": [
      "Separates 40 gross hours, 30 eligible hours and 24 forecast released hours.",
      "Accounts for review, exclusions and remaining work.",
      "Considers consequences and implementation effort without fabricating savings."
    ],
    "sample": "Gross workload is 40 hours. Eligible pilot workload is 30 hours; subtract six new review hours for a forecast of 24 hours released. This assumes the copying step disappears for all 450 cases, review is additional and no hidden correction work increases. The 150 excluded cases remain owned on the manual path. Timing variation, fewer eligible cases or residual manual copying would reduce the estimate. Compare the smaller task by consequence, evidence, authority and effort as well as hours. Request actual error history before assigning a financial benefit. Trial reliable inputs first.",
    "quiz": [
      {
        "q": "A filled field always proves which quality property?",
        "options": [
          "Accuracy",
          "Suitability for every action",
          "None of these without further checks"
        ],
        "answer": 2,
        "why": [
          "A filled field can still contain the wrong value.",
          "Information can be present yet unsuitable, outdated or unauthorized for the proposed use.",
          "Correct. Presence is only one dimension; validate meaning, accuracy and fitness for use."
        ]
      },
      {
        "q": "What does 600 cases × 4 minutes establish?",
        "options": [
          "Forty hours of estimated gross task effort",
          "Forty hours of proven cash savings",
          "A guaranteed forty-hour improvement in customer turnaround"
        ],
        "answer": 0,
        "why": [
          "Correct. It estimates active workload under the stated volume and timing assumptions.",
          "Cash savings require an actual change in spending and a net cost calculation.",
          "Active task time and total customer waiting time are different measures."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Required fields conflict across records and the owner wants to automate all 600 cases immediately. What comes first?",
    "decisionWhy": "Improve data and eligibility rules first. A score based on volume cannot override unreliable inputs. Then pilot a verified subset with an owned exception path and measured review effort.",
    "insight": "Gross task hours describe the workload; net released time depends on the work that remains and the work you add.",
    "hooks": [
      "Forty repetitive hours are not forty guaranteed hours saved.",
      "Count exception work before celebrating the volume.",
      "A completed field can still be wrong."
    ],
    "linkedin": [
      "Show the fictional 40-to-30-to-24-hour calculation.",
      "List eligibility, residual work and review assumptions.",
      "Explain why released capacity differs from reduced spending."
    ],
    "facebook": [
      "Use the familiar experience of a “quick” task that creates checking work.",
      "Explain gross time minus new work with simple arithmetic.",
      "Ask what hidden checking would remain."
    ],
    "conversation": "What new review or correction work would appear if this task were automated?",
    "claims": "All figures are hypothetical forecasts. Verify representative timings, eligible volume and actual spending before claiming time or financial savings.",
    "recap": "Use eligible volume and active effort, validate data, subtract new work and make assumptions explicit. Scores guide comparison but do not replace prerequisites.",
    "reflection": "Which assumption in a time-saving estimate would you measure first?",
    "deeper": "Recalculate if only 300 cases qualify and review takes eight hours. Explain why a quality improvement may still matter even when the time estimate shrinks.",
    "sources": [
      {
        "title": "GSA — Eliminate, Optimize, Automate",
        "url": "https://www.gsa.gov/technology/government-it-initiatives/eliminate-optimize-automate",
        "note": "Process improvement before repetitive-task automation; federal guidance adapted to service-business practice."
      },
      {
        "title": "Institute for Healthcare Improvement — Model for Improvement",
        "url": "https://www.ihi.org/library/model-for-improvement",
        "note": "Define an aim, evidence of improvement and changes to test on a small scale."
      }
    ],
    "calc": {
      "q": "450 eligible cases each remove four active minutes, but six additional hours are needed for review. How many hours are forecast to be released?",
      "answer": 24,
      "explanation": "450 × 4 ÷ 60 = 30 gross eligible hours. 30 − 6 = 24 forecast released hours. This is an assumption-based estimate, not measured savings."
    }
  },
  {
    "title": "Systems and integrations",
    "eyebrow": "Design the handoff between systems",
    "objective": "Create a simple integration inventory covering data mapping, permissions, duplicate prevention, failures and maintenance.",
    "scenario": "Juniper wants an n8n workflow to create a task in its project system when a request becomes ready in Airtable. During a connection timeout, staff retry and two tasks appear. Later an address change in one system overwrites the verified address in the other. The owner thought the integration was finished once a successful test run created a task.",
    "explain": "An integration moves information or actions between systems. An application programming interface, usually shortened to API, is a defined way for software to request data or actions from another service. A trigger can be a scheduled check or an event notice. A webhook is an event notification sent to a receiving endpoint. These mechanisms describe how a message travels; they do not define which business action is correct.<br><br>Field mapping states which source value belongs in which destination field, including format, meaning and authority. A stable business case ID links the same request across systems. A source of truth must be agreed at field or stage level so an update does not overwrite a verified value with a stale copy. Check which permissions the integration needs, use approved credentials, and avoid granting broader access than the task requires. Store secrets in the appropriate protected configuration, never in a public page or a content example.<br><br>Failures include invalid data, denied access, service outages and ambiguous outcomes. A timeout may occur after the destination performed an action but before the caller received confirmation. Blindly retrying can create duplicates. Idempotency means repeated handling of the same intended action does not produce an additional business effect. Implementing it may require a supported destination feature, unique event record or other reliable coordination; a casual “check then create” can still race when runs overlap.<br><br>Define what is logged, how failed work is found, who investigates and how cases continue manually. Logs should contain only the information needed and follow approved access and retention rules. Test duplicate, delayed, incomplete and unavailable-system cases, not just the happy path. A maintainer needs current documentation, monitoring and a way to pause the workflow without losing ownership of the work.",
    "worked": "Practice inventory: source request register; event “ready for review”; key case J-72 plus event version; destination project task; authoritative source owns readiness and contact fields; integration can read eligible requests and create the necessary tasks only. A duplicate event must resolve to the same intended task. If a timeout leaves the outcome uncertain, inspect the action log and destination reference before retrying. Invalid owner or missing ID goes to a visible exception queue; the coordinator keeps case ownership. An integration maintainer reviews failures daily and after changes. Test with dummy records and confirm the actual vendor’s supported duplicate-prevention behavior before production.",
    "flow": [
      "Validate source event",
      "Map authoritative fields",
      "Perform one intended action",
      "Record result or uncertainty",
      "Review failures and maintain"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">Stable case/event ID</th><td>Links action to the right case and intended event.</td></tr><tr><th scope=\"row\">Timeout after create</th><td>May have succeeded; reconcile before repeating.</td></tr><tr><th scope=\"row\">Field ownership</th><td>Prevents stale copies overwriting authoritative values.</td></tr></tbody></table>",
    "businessName": "Juniper Admin",
    "businessType": "fictional administration agency",
    "perspective": "The manager wants reliable handoffs, staff want one correct task, and the maintainer wants failures they can understand. A successful demo run is reassuring but does not show how duplicate or uncertain events behave.",
    "assessment": "A small integration is suitable only after mapping, authority, permission and failure rules are explicit. Retain a manual route, test retries and duplicates, and verify capabilities in the systems’ current documentation.",
    "pain": {
      "quote": "“It worked in the demo, but now we have duplicate tasks.”",
      "symptom": "Repeated events create extra work and inconsistent records.",
      "causes": "No stable action key, overlapping runs, blind retries or undefined field ownership.",
      "questions": "Was the first action completed before the timeout? What uniquely identifies it? Which system owns each field? Who sees failures?",
      "consequence": "Duplicate assignments, wrong updates, manual reconciliation and lost trust in records.",
      "improve": "Agree mapping, authority, reliable duplicate handling and an owned exception queue.",
      "automation": "Create one task from a verified ready event with observable outcomes and safe failure handling.",
      "evidence": "Duplicate business effects, unmatched events, time to detect failure and correct ownership."
    },
    "exercise": "Write a six-line integration inventory for J-72: event, key, field mapping, access, failure handling and maintainer. Explain the difference between retrying a request and safely repeating the intended business action. Include one timeout test.",
    "rubric": [
      "Defines event identity, field authority and minimum needed access.",
      "Handles ambiguous outcomes rather than blindly creating again.",
      "Names monitoring, manual ownership and maintenance."
    ],
    "sample": "Event: verified ready transition. Key: J-72 plus accepted transition version. Map case ID, approved title and assigned owner from authoritative fields. Access: read eligible requests and create/check the intended tasks with approved credentials. Failure: missing fields pause to the coordinator; uncertain timeout is reconciled against the destination/action record before retry. Maintainer: integration lead reviews the failure queue and can pause safely. Test a duplicate delivery and a timeout after task creation; both must leave one intended task. A repeated network request is not safe unless the destination or coordination design prevents a second business effect.",
    "quiz": [
      {
        "q": "A create request times out. What is the safest next design step?",
        "options": [
          "Always create again immediately",
          "Assume no task exists",
          "Reconcile the uncertain outcome using the supported action identity"
        ],
        "answer": 2,
        "why": [
          "The first action may have succeeded, so this can create a duplicate.",
          "Missing confirmation does not prove the destination did nothing.",
          "Correct. Determine the outcome and use a tested duplicate-prevention strategy."
        ]
      },
      {
        "q": "What does field mapping need besides matching names?",
        "options": [
          "Meaning, format and authoritative ownership",
          "Only a matching color",
          "Permission to overwrite every field"
        ],
        "answer": 0,
        "why": [
          "Correct. Similar names can hide different meanings and update authority.",
          "Visual similarity does not establish compatible data or business meaning.",
          "Broad overwrite permission increases risk and does not resolve conflicts."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should Juniper ship the integration while duplicate handling and field ownership remain undefined?",
    "decisionWhy": "Improve the design first. A happy-path test does not establish safe repeated execution, update authority or recoverable failures. Resolve these prerequisites and test with fictional records.",
    "insight": "A reliable integration is a business handoff with rules, not just a connection between logos.",
    "hooks": [
      "A timeout does not always mean nothing happened.",
      "One successful run is not an integration test plan.",
      "Before syncing fields, decide which record can change them."
    ],
    "linkedin": [
      "Describe fictional J-72 and the ambiguous timeout.",
      "Explain action identity and field ownership in plain language.",
      "Share the six-line integration inventory and exception owner."
    ],
    "facebook": [
      "Use the experience of receiving the same task twice.",
      "Explain why retrying may repeat an action.",
      "Ask who notices when an integration stops."
    ],
    "conversation": "If a workflow fails halfway through, how will someone know what actually happened?",
    "claims": "Verify current vendor APIs, permissions and duplicate-prevention guarantees before implementation. This example is not an assurance that any named tool provides those controls automatically.",
    "recap": "Integrations need stable identity, meaningful field mapping, approved access, duplicate prevention and owned recovery. Test unusual paths and maintain the workflow.",
    "reflection": "Which failure would leave your current workflow’s outcome uncertain?",
    "deeper": "Draw source → integration → destination with an action log and human exception queue. Use dummy data and mark the exact point at which an external action becomes irreversible.",
    "sources": [
      {
        "title": "GSA — Eliminate, Optimize, Automate",
        "url": "https://www.gsa.gov/technology/government-it-initiatives/eliminate-optimize-automate",
        "note": "Process improvement before repetitive-task automation; federal guidance adapted to service-business practice."
      },
      {
        "title": "NIST — AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework",
        "note": "Context, evaluation and ongoing management of AI risks; not a claim of product certification or compliance."
      }
    ],
    "sequence": [
      "Verify the event and required fields",
      "Identify the intended action and authoritative mapping",
      "Execute using the tested duplicate-prevention design",
      "Record the confirmed result or uncertain failure",
      "Route unresolved cases to the named maintainer"
    ],
    "sequenceIntro": "Order the controlled integration path; a failed validation does not continue to execution.",
    "sequenceExplanation": "Validate before action, preserve identity and authority, record the result and route unresolved outcomes. Retries must follow the supported design rather than blindly repeat the action."
  },
  {
    "title": "Rules, AI and analytics",
    "eyebrow": "Match the method to the decision",
    "objective": "Choose between explicit rules, AI assistance, analytics and process redesign, and explain when human review changes the business case.",
    "scenario": "Juniper is offered one AI system for overdue reminders, complaint replies and a weekly error report. The finance rule is already explicit. Complaint messages contain varied wording and sometimes require a manager. The report only needs counts grouped by an agreed reason code. Staff hope AI will also settle their conflicting status definitions.",
    "explain": "Rule-based automation follows explicit conditions and actions: when a verified case meets approved criteria, perform the specified step. It is appropriate when the rules can be stated, relevant inputs are reliable and exceptions have a route. Rules still require testing and maintenance; an incorrect rule can be applied consistently at scale. Simple arithmetic and structured aggregation often belong here rather than in a language model.<br><br>AI-assisted work uses a model to produce a suggestion, classification or draft from information. It can help with varied text, but plausible output may be wrong or incomplete. Evaluate it against representative examples, including unusual and difficult cases. A confidence-looking number is not automatically a reliable probability; check what it means and how it performs in the intended context. Provide an uncertainty route rather than forcing every case into a confident label.<br><br>Analytics uses data to describe patterns, compare groups or support a decision. Counting error reasons by week is analytics even if no AI is involved. A chart can show a pattern without establishing its cause. Process redesign changes how work is organized, such as removing duplicate approval or agreeing a meaningful status. Software should not decide an organization’s authority or service promise simply because people disagree.<br><br>Choose the simplest adequate method for the defined outcome and consequences. A hybrid workflow may use rules for eligibility, AI for an optional draft, human approval for a sensitive decision and analytics for monitoring. Review is real work: it needs time, expertise and the ability to reject or correct the suggestion. Include that effort and the risk of people accepting suggestions uncritically when comparing options. Use only approved data and systems; an AI feature is not permission to disclose confidential information.",
    "worked": "Hypothetical choices: verified overdue eligibility → explicit rules plus finance-owned exceptions; varied complaint text → optional AI draft tested on fictional messages, with an authorized manager deciding the remedy and sending; weekly totals by agreed reason code → structured aggregation and a chart; conflicting status meanings → process-owner agreement. A pilot might draft five low-risk internal summaries for review without sending anything externally. Compare factual omissions, correction time and reviewer workload with the current method. A fluent draft does not establish a correct outcome, and a reduced drafting time may be offset by checking. Keep a manual route for uncertain or inappropriate inputs.",
    "flow": [
      "Define outcome and consequence",
      "Check explicit rules",
      "Choose rules, AI, analytics or redesign",
      "Evaluate representative cases",
      "Review and monitor outcomes"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">Known eligibility rule</th><td>Use explicit conditions with current verified data.</td></tr><tr><th scope=\"row\">Varied text draft</th><td>AI may assist after evaluation and meaningful review.</td></tr><tr><th scope=\"row\">Weekly grouped counts</th><td>Analytics; no language model is necessary.</td></tr><tr><th scope=\"row\">Unagreed status meanings</th><td>Process redesign and authorized agreement.</td></tr></tbody></table>",
    "businessName": "Juniper Admin",
    "businessType": "fictional administration agency",
    "perspective": "The owner wants a useful method rather than an impressive label. Staff need time to check drafts, and customers need authorized, accurate communication. The manager remains accountable for the decision.",
    "assessment": "Use rules for stable eligibility, analytics for defined comparisons and process redesign for unclear work. Consider AI only where its contribution can be evaluated and review is feasible. Keep consequential complaint decisions with authorized people.",
    "pain": {
      "quote": "“Can we add AI to all of this?”",
      "symptom": "Different tasks are grouped under one technology proposal.",
      "causes": "Unclear outcomes, vendor-led framing or uncounted review work.",
      "questions": "Which task needs interpretation? What could be wrong? Who checks it and how long will that take? What simpler method works?",
      "consequence": "Unnecessary cost, unsupported decisions, checking burden and possible inappropriate disclosure.",
      "improve": "Separate tasks, agree definitions and compare methods using representative cases.",
      "automation": "Use a tested draft or classification aid with approved inputs, rejection and exception handling.",
      "evidence": "Factual error, correction effort, uncertain-case rate and final decision quality."
    },
    "exercise": "Choose a method for each of Juniper’s four tasks. For an optional AI draft pilot, define inputs, reviewer authority, one quality measure, one effort measure and a case that should bypass the model.",
    "rubric": [
      "Explains method choice in terms of the task and consequences.",
      "Keeps process agreement and authorized decisions with people.",
      "Measures quality and review effort and defines a bypass."
    ],
    "sample": "Overdue eligibility uses rules; complaint drafts may use evaluated AI assistance with manager review; reason-code totals use analytics; status disagreement needs process-owner agreement. Draft pilot inputs are fictional low-risk messages. Manager verifies facts, tone and permitted remedy before any send. Measure unsupported statements and total drafting-plus-review minutes against the current approach. A message containing an urgent or confidential matter outside approved scope bypasses the model to the responsible person. Do not deploy solely because drafts sound professional or because the vendor describes the system as intelligent.",
    "quiz": [
      {
        "q": "Which task needs no AI by default?",
        "options": [
          "A sum of verified amounts under an explicit definition",
          "Every possible text interpretation",
          "An unresolved service dispute"
        ],
        "answer": 0,
        "why": [
          "Correct. A deterministic calculation is clearer and easier to check for this task.",
          "Some varied text tasks may benefit from evaluated assistance, depending on context.",
          "A dispute needs authorized judgment; a model cannot supply that authority."
        ]
      },
      {
        "q": "A model produces a fluent complaint reply. What does that establish?",
        "options": [
          "The remedy is authorized",
          "The draft is correct",
          "Only that it produced readable text; facts and authority still need checking"
        ],
        "answer": 2,
        "why": [
          "Authorization comes from the organization’s rules and responsible person.",
          "Fluency does not prove factual accuracy or suitability.",
          "Correct. Evaluate facts, context, permissions and the decision before use."
        ]
      }
    ],
    "decision": "human",
    "decisionPrompt": "Should a model independently decide the remedy for a disputed service commitment?",
    "decisionWhy": "Keep the remedy decision human-led. AI may assist with approved evidence organization or drafting, but authority, context and accountable review remain necessary.",
    "insight": "The right method follows the task: rules, analysis, redesign or evaluated assistance can each be useful.",
    "hooks": [
      "Not every automation needs AI.",
      "A fluent reply can still be the wrong reply.",
      "Who checks the draft, and is that work in the estimate?"
    ],
    "linkedin": [
      "Compare the four fictional task types in a simple table.",
      "Explain why rules and analytics may be sufficient.",
      "Describe one bounded AI-assistance experiment with review measures."
    ],
    "facebook": [
      "Use the difference between adding numbers and settling a complaint.",
      "Explain AI drafts as suggestions requiring checking.",
      "Invite examples of a task where a simpler rule works."
    ],
    "conversation": "What part of this task actually requires interpretation rather than a known rule?",
    "claims": "Verify any model or vendor capability and real evaluation result before publication. Fictional pilot suggestions are not evidence of accuracy, compliance or achieved savings.",
    "recap": "Match methods to tasks and consequences. Evaluate AI assistance, count review effort, and use human authority for contested decisions.",
    "reflection": "Which proposed AI feature would you replace with a simpler rule or clearer process?",
    "deeper": "Create five fictional test messages, including one ambiguous case and one out-of-scope case. Write expected handling before evaluating any model output.",
    "sources": [
      {
        "title": "GSA — Eliminate, Optimize, Automate",
        "url": "https://www.gsa.gov/technology/government-it-initiatives/eliminate-optimize-automate",
        "note": "Process improvement before repetitive-task automation; federal guidance adapted to service-business practice."
      },
      {
        "title": "NIST — AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework",
        "note": "Context, evaluation and ongoing management of AI risks; not a claim of product certification or compliance."
      }
    ]
  },
  {
    "title": "Exceptions and human review",
    "eyebrow": "Design what happens when the rule cannot decide",
    "objective": "Define exception ownership, meaningful review, stop conditions and a manual continuation path for a small pilot.",
    "scenario": "Juniper’s proposed ready-request workflow works on a normal case. Then a request has no owner, another has two different IDs, and a third arrives after the workflow has been paused. The designer says those are rare edge cases. The coordinator points out that someone still needs to move the work forward and explain the delay.",
    "explain": "An exception is a case that cannot safely follow the standard path under the agreed rules. It may involve missing information, conflicting data, an unusual request or a system failure. Do not define it only as a technical error. A system can execute successfully while taking the wrong business action because the input was inappropriate. List business exceptions and technical failures separately, with an owner for each.<br><br>Human review means a person has the information, authority, time and practical ability to accept, reject or correct a proposed action. A checkbox that staff must click without context is not meaningful oversight. Specify what the reviewer checks, what evidence they see and what happens when they are uncertain. Some actions can occur only after approval; others can be monitored afterward if their consequences and reversibility justify that design.<br><br>A fallback is the agreed way work continues when automation is unavailable or paused. It should preserve case ownership and avoid duplicate work when the system resumes. A stop condition identifies when the pilot must pause, such as a wrong-recipient message or unresolved duplicate action. A rollback reverses a change where reversal is possible; it cannot unsend a message or erase information already disclosed. Plan containment and correction for actions that cannot be reversed.<br><br>Maintenance is continuing responsibility for monitoring, changes, credentials, documentation and incident response. Name the role, a backup and a review routine before launch. A small pilot should have a defined volume or case type, success measures and a manual route. Testing an exception before launch is often more informative than another demonstration of the normal case. Track exceptions as evidence about the process, not as embarrassing records to hide.",
    "worked": "Practice pilot: for one standard request type, create a draft internal task from a verified ready event. Missing owner or conflicting ID goes to coordinator Nia; the integration lead owns technical failures. Nia reviews the event, correct case and destination before approval. The workflow pauses if a task goes to the wrong owner or a duplicate business action is detected. On pause, the coordinator uses the same authoritative queue manually, marking actions so restart does not repeat them. Maintainer Omar reviews failures each working day and after rule changes; Lia is cover. Test an absent reviewer, duplicate event and a restart after manual completion before expanding scope.",
    "flow": [
      "Validate normal eligibility",
      "Route exceptions with context",
      "Review before the approved action",
      "Monitor stop conditions",
      "Continue manually and reconcile restart"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">Missing owner</th><td>Hold action; coordinator resolves assignment.</td></tr><tr><th scope=\"row\">Service outage</th><td>Technical owner investigates; case keeps a business owner.</td></tr><tr><th scope=\"row\">Wrong recipient</th><td>Pause and contain; sending may be irreversible.</td></tr><tr><th scope=\"row\">Restart after manual action</th><td>Reconcile completion before reprocessing.</td></tr></tbody></table>",
    "businessName": "Juniper Admin",
    "businessType": "fictional administration agency",
    "perspective": "The owner needs confidence that unusual work will not disappear. The reviewer needs authority and time, and the customer needs continuity even during an outage. Maintenance should not be an unpaid surprise after launch.",
    "assessment": "A bounded pilot can proceed when exception routing, real review, stop conditions, manual continuation and maintenance are tested. If those are absent, improve the design before sending real actions.",
    "pain": {
      "quote": "“The automation is running, but nobody knows what to do with failures.”",
      "symptom": "Unresolved exceptions accumulate outside the visible workflow.",
      "causes": "No named owner, insufficient review context, absent cover or no restart procedure.",
      "questions": "Who checks which exceptions, by when? Can they reject? What happens if that person is away? How does paused work continue?",
      "consequence": "Hidden delays, wrong actions, duplicate recovery work and loss of confidence.",
      "improve": "Assign business and technical owners, define review, cover, stop rules and fallback.",
      "automation": "Route known exception categories and alert the responsible person with only necessary context.",
      "evidence": "Exception age, wrong actions, review effort, fallback completion and duplicate-free restart."
    },
    "exercise": "Design Juniper’s pilot exception plan. Include one business exception, one technical failure, reviewer checks, an absence rule, a stop condition, manual continuation and restart reconciliation. Explain one action that cannot truly be rolled back.",
    "rubric": [
      "Names owners and gives reviewers context, authority and cover.",
      "Includes stop, fallback and restart handling.",
      "Distinguishes reversible changes from irreversible actions."
    ],
    "sample": "Missing owner pauses the action for coordinator Nia; connection failures go to Omar while Nia keeps business ownership. Nia checks case ID, verified readiness and destination before approval; Lia covers absence. A wrong-recipient or duplicate task pauses the pilot for investigation. Manual continuation uses the same queue and logs completed actions. On restart, reconcile those events with destination references before retrying. A sent message cannot be unsent reliably, so containment and an authorized correction route matter more than a promised rollback. Review exception age and added checking time alongside correct-action rate.",
    "quiz": [
      {
        "q": "What makes review meaningful?",
        "options": [
          "A mandatory approval click with no context",
          "A person with evidence, authority, time and a reject/correct route",
          "Calling a log “human in the loop”"
        ],
        "answer": 1,
        "why": [
          "A click without practical ability to assess the action can become a rubber stamp.",
          "Correct. Oversight requires the ability and responsibility to make a real decision.",
          "A label or after-the-fact log alone does not establish oversight."
        ]
      },
      {
        "q": "What must happen before restarting after manual processing?",
        "options": [
          "Replay every paused event",
          "Delete the action history",
          "Reconcile already completed actions to prevent duplicates"
        ],
        "answer": 2,
        "why": [
          "Replaying all events can repeat work already done manually.",
          "History is needed to understand and recover the workflow correctly.",
          "Correct. Restart must account for work performed during the pause."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should a pilot launch if exceptions have no owner and there is no manual continuation plan?",
    "decisionWhy": "Improve the design first. A successful normal path is insufficient when unusual cases can become ownerless or recovery can duplicate actions.",
    "insight": "The exception path is part of the solution, not an optional appendix.",
    "hooks": [
      "Who owns the work when the workflow stops?",
      "An approval button is not automatically human oversight.",
      "You cannot roll back a message someone has already read."
    ],
    "linkedin": [
      "Introduce the fictional pilot and its missing-owner case.",
      "Show review authority, stop conditions and fallback.",
      "Explain how restart avoids duplicating manual work."
    ],
    "facebook": [
      "Describe a task getting stuck because the usual person is absent.",
      "Offer owner, cover and next-review-time as practical safeguards.",
      "Ask who handles exceptions today."
    ],
    "conversation": "If the automation is paused tomorrow, who continues each open case?",
    "claims": "Verify actual reversibility, response procedures and reviewer capacity. Do not imply an alert, tool or approval checkbox guarantees safe operation.",
    "recap": "Design normal work and exceptions together. Real review needs authority and capacity; fallback and restart need ownership and reconciliation.",
    "reflection": "Which “rare” exception would have the largest consequence if nobody noticed it?",
    "deeper": "Run a tabletop exercise with fictional cases: reviewer absent, wrong destination and restart after manual completion. Record what the maintainer needs to know.",
    "sources": [
      {
        "title": "GSA — Eliminate, Optimize, Automate",
        "url": "https://www.gsa.gov/technology/government-it-initiatives/eliminate-optimize-automate",
        "note": "Process improvement before repetitive-task automation; federal guidance adapted to service-business practice."
      },
      {
        "title": "NIST — AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework",
        "note": "Context, evaluation and ongoing management of AI risks; not a claim of product certification or compliance."
      },
      {
        "title": "Institute for Healthcare Improvement — Model for Improvement",
        "url": "https://www.ihi.org/library/model-for-improvement",
        "note": "Define an aim, evidence of improvement and changes to test on a small scale."
      }
    ]
  },
  {
    "title": "Choose a baseline",
    "eyebrow": "Define the starting point before the change",
    "objective": "Define a measurable outcome and baseline using consistent event boundaries, units, eligibility and time windows.",
    "scenario": "Maple Services, a fictional business, says its replies are slow. An automatic acknowledgment arrives immediately, but a person may not review the request until the following day. The manager wants to claim that a new workflow reduces response time to seconds. Staff cannot agree whether nights and weekends should count.",
    "explain": "A baseline describes the starting performance before a change using an explicit measure. It provides a reference for judging whether a pilot helped. Begin with the business outcome: for example, customers receive a useful first response from someone who can act. Then define the events that start and stop the clock. Receipt of a request, automatic acknowledgment, meaningful response and resolution are different events. Choosing the wrong boundary can make a metric improve without improving the customer experience.<br><br>Define the unit, eligible cases, period, source, owner and exclusions. State whether elapsed time includes nights and weekends or uses a documented business-hours calendar. Neither convention is universally best; it should match the question and be applied consistently before and after. Do not quietly remove slow, incomplete or unresolved cases. Report their count and treatment so the result is understandable. A sample of only completed cases can hide the oldest unresolved work.<br><br>An average adds observed values and divides by the number of observations. It can be strongly influenced by a very slow case. A median is the middle value after ordering the observations, averaging the two central values for an even count. Show the case count and useful variation as well as a single summary. A small sample can illustrate a method but is weak evidence for a broad business claim.<br><br>Use available records to test the definition and manually check a sample against original events. If timestamps are missing, improve capture rather than inventing them. Keep the same definition during the pilot or document changes openly. A baseline is a measurement discipline, not a promise that the next tool will beat the number.",
    "worked": "Hypothetical meaningful-response times are 10, 20, 30 and 100 minutes using the same clock definition. Mean = (10 + 20 + 30 + 100) ÷ 4 = 40 minutes. Median = (20 + 30) ÷ 2 = 25 minutes. These four completed cases do not represent all demand if older unresolved cases are excluded. A usable definition might be: eligible standard inquiries received this week; received timestamp to first substantive response; elapsed minutes; report still-unanswered cases separately at Friday cutoff. Acknowledgments get their own measure. Verify a sample against message history and compare similar channels and service types during a pilot.",
    "flow": [
      "Name the customer outcome",
      "Define events and eligible cases",
      "Choose clock and source",
      "Check and summarize baseline",
      "Keep definitions consistent"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">Acknowledgment in seconds</th><td>Measures receipt confirmation, not meaningful help.</td></tr><tr><th scope=\"row\">Mean 40 minutes</th><td>Affected by the 100-minute case.</td></tr><tr><th scope=\"row\">Median 25 minutes</th><td>Middle of the ordered four-case sample.</td></tr><tr><th scope=\"row\">Still-unanswered cases</th><td>Report separately; do not silently exclude the wait.</td></tr></tbody></table>",
    "businessName": "Maple Services",
    "businessType": "fictional service business",
    "perspective": "The customer cares about a useful answer, the manager wants defensible improvement, and staff need a measure that does not penalize them for an undocumented clock convention. A transparent baseline supports fair decisions.",
    "assessment": "Automate timestamp capture or calculation once event definitions and sources are reliable. Do not automate a misleading success claim or manufacture missing timestamps. A person checks the measure and investigates outliers.",
    "pain": {
      "quote": "“We respond instantly now, but customers still chase us.”",
      "symptom": "Fast acknowledgments coexist with delayed meaningful responses.",
      "causes": "Wrong metric boundary, incomplete timestamps, unresolved-case exclusion or unclear business-hour rules.",
      "questions": "What counts as a response? Show start and end events. Are open cases included? Which hours count?",
      "consequence": "Misleading improvement reports, continued waiting and poor prioritization.",
      "improve": "Define meaningful events, a clock, eligibility and treatment of open work.",
      "automation": "Capture approved event timestamps and produce a consistent review report.",
      "evidence": "Audited timestamp quality, meaningful response distribution, open-case age and case count."
    },
    "exercise": "Write Maple’s response-time definition with start, finish, eligibility, clock, source and cutoff. Calculate the sample mean and median. Explain how unresolved cases and automatic acknowledgments should be reported.",
    "rubric": [
      "Defines consistent boundaries, clock and eligible cases.",
      "Calculates mean 40 and median 25 minutes.",
      "Reports open work and distinguishes acknowledgment from response."
    ],
    "sample": "Measure standard inquiries received Monday–Friday from receipt to first substantive reply using elapsed minutes from the shared inbox. At Friday 16:00 show completed response times and count/age of still-unanswered cases separately. Verify missing timestamps rather than treating them as zero. The four-case mean is 40 minutes; median is 25. Acknowledgment timing is a different measure, not evidence that a person helped. Keep the clock and service definition consistent in the pilot; record case count, channel and complexity. Four examples demonstrate arithmetic, not a validated organization-wide baseline.",
    "quiz": [
      {
        "q": "Which comparison is defensible?",
        "options": [
          "Old meaningful replies versus new automatic acknowledgments",
          "The same event definition and clock before and after",
          "Only the fastest cases in each period"
        ],
        "answer": 1,
        "why": [
          "Different event boundaries can create a false improvement.",
          "Correct. Consistent definitions are necessary for an interpretable comparison.",
          "Selecting fast cases hides the work customers are actually waiting for."
        ]
      },
      {
        "q": "How should unresolved requests be treated?",
        "options": [
          "Silently drop them",
          "Record them as zero minutes",
          "Report their count and age with an explicit method"
        ],
        "answer": 2,
        "why": [
          "Dropping open work can hide the longest waits.",
          "Zero misrepresents a request that has not received the defined response.",
          "Correct. Open work needs visibility and a consistent treatment alongside completed-case results."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should Maple publish “response time reduced to seconds” when only the automated acknowledgment changed?",
    "decisionWhy": "Improve the measurement first. Separate acknowledgment from meaningful response and resolution. Use a consistent baseline before making an outcome claim.",
    "insight": "Before you measure improvement, agree what improvement means for the customer.",
    "hooks": [
      "An instant receipt is not an instant answer.",
      "The longest waits may be missing from your average.",
      "Two response-time reports can measure different events."
    ],
    "linkedin": [
      "Show the fictional four-case example and both summaries.",
      "Define meaningful response and treatment of open work.",
      "Explain why a changed acknowledgment does not prove faster service."
    ],
    "facebook": [
      "Describe receiving “we got your message” and still waiting for help.",
      "Show why start and finish events matter.",
      "Ask what customers actually need the reply to accomplish."
    ],
    "conversation": "What event tells you a customer received useful help rather than just a receipt?",
    "claims": "All times are hypothetical. Verify event definitions, missing cases, sample size and comparable periods before publishing improvement percentages.",
    "recap": "A baseline needs a defined outcome, boundary, clock and eligible population. Show variation and open work; do not confuse a receipt with useful response.",
    "reflection": "Which excluded cases could make your baseline look better than reality?",
    "deeper": "Recalculate with one still-open case. Do not assign it a completed response time; describe a reporting method that keeps its wait visible.",
    "sources": [
      {
        "title": "Institute for Healthcare Improvement — Establishing Measures",
        "url": "https://www.ihi.org/library/model-for-improvement/establishing-measures",
        "note": "Outcome, process and balancing measures for improvement. Practice datasets and targets here are invented."
      },
      {
        "title": "Institute for Healthcare Improvement — Model for Improvement",
        "url": "https://www.ihi.org/library/model-for-improvement",
        "note": "Define an aim, evidence of improvement and changes to test on a small scale."
      }
    ],
    "calc": {
      "q": "The four meaningful-response times are 10, 20, 30 and 100 minutes. What is their mean in minutes?",
      "answer": 40,
      "explanation": "(10 + 20 + 30 + 100) ÷ 4 = 40 minutes. The median is 25 minutes; unresolved cases require separate treatment."
    }
  },
  {
    "title": "Errors and conversion",
    "eyebrow": "Read percentages with their denominators",
    "objective": "Define error and conversion rates, distinguish percentage points from relative change, and compare matched groups without claiming causation.",
    "scenario": "Maple’s fictional invoice-error rate drops from ten affected invoices out of 100 to twelve out of 200. The error count increased, so one manager calls the pilot a failure; another advertises a 4% improvement. Meanwhile, sales conversion rises after marketing changes where inquiries come from. You need to explain what the numbers support and what remains uncertain.",
    "explain": "A rate expresses outcomes relative to an appropriate amount of activity. For a case-level error rate, count cases with at least one defined error and divide by eligible cases inspected or processed under the stated method. Name the error definition and detection window. A case can contain several defects, so defect events and affected cases are different counts. Changing the inspection effort can change the observed rate even when underlying quality is unchanged.<br><br>A conversion rate divides the number reaching a specified outcome by the defined starting group. Use the same stage definitions and allow the group enough time to reach the outcome. A month’s sales divided by that month’s new inquiries may mix old and new cohorts. A cohort is a group sharing an entry condition or period, followed consistently. Missing outcomes and still-open decisions should be visible rather than silently treated as lost or removed.<br><br>Percentage points describe the arithmetic difference between two percentages. Relative change compares that difference with the original percentage. A fall from ten percent to six percent is four percentage points and a forty percent relative reduction. These statements answer different questions, so label them. Report counts alongside percentages, especially for small groups. A low rate based on a handful of cases may be unstable.<br><br>Before attributing a change to automation, check whether case mix, channel, season, staff, detection rules or policy also changed. A before-and-after pattern is evidence to investigate, not automatic causal proof. Use comparable groups and consistent definitions where practical, and disclose limitations. Monitor unintended effects: fewer detected errors is not a success if checking stopped or difficult cases were excluded.",
    "worked": "Hypothetical invoice check: before, 10 ÷ 100 × 100 = 10%; after, 12 ÷ 200 × 100 = 6%. The count increased while the affected-case rate decreased. Difference = 4 percentage points; relative reduction = (10 − 6) ÷ 10 × 100 = 40%. You still need consistent inspection and comparable work before interpreting the change. For sales, compare matched inquiry cohorts from the same channels or show channel-specific rates. Do not claim the workflow caused the improvement if marketing simultaneously changed the quality of incoming leads. Label all figures practice data and keep uncertainty visible.",
    "flow": [
      "Define outcome and group",
      "Count numerator and denominator",
      "Calculate rates and changes",
      "Check comparability and detection",
      "Interpret with limitations"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">10/100 → 12/200</th><td>10% → 6% affected-case error rate.</td></tr><tr><th scope=\"row\">Difference</th><td>4 percentage points.</td></tr><tr><th scope=\"row\">Relative reduction</th><td>40% of the original 10% rate.</td></tr><tr><th scope=\"row\">Changed inspection or case mix</th><td>Limits attribution to the pilot.</td></tr></tbody></table>",
    "businessName": "Maple Services",
    "businessType": "fictional service business",
    "perspective": "The manager needs an interpretation that survives scrutiny. Staff need like-for-like checks, and prospective clients deserve content that does not turn a percentage into an unsupported success story.",
    "assessment": "Automate consistent rate calculations after definitions and source data are verified. Analytics supports interpretation; it does not establish cause or justify excluding difficult cases.",
    "pain": {
      "quote": "“The numbers look better, but I do not know if we actually improved.”",
      "symptom": "Counts and percentages seem contradictory.",
      "causes": "Different volume, case mix, inspection coverage, cohorts or ambiguous rate definitions.",
      "questions": "What is the numerator and denominator? Were the same cases checked the same way? What else changed?",
      "consequence": "Misleading decisions, false claims and improvements that disappear under comparable measurement.",
      "improve": "Agree measures, show counts, preserve detection and compare appropriate groups.",
      "automation": "Generate auditable rate summaries with explicit case eligibility and missing-data flags.",
      "evidence": "Matched definitions, sample counts, inspection consistency and balancing measures."
    },
    "exercise": "Calculate both invoice error rates, the percentage-point change and relative reduction. Explain why the higher error count does not settle the result. Name two additional checks before attributing the change to automation.",
    "rubric": [
      "Uses 10% and 6% with correct denominators.",
      "Distinguishes four percentage points from forty percent relative reduction.",
      "Checks comparability, detection and other changes before making causal claims."
    ],
    "sample": "The case-level rate falls from 10% to 6%, a reduction of four percentage points or 40% relative to the original rate. Twelve errors is more than ten, but the inspected volume doubled. Check whether the error definition and inspection coverage stayed the same, whether case complexity changed, and whether staffing or policy changed. Show the counts and avoid saying the pilot caused the reduction without stronger evidence. For conversion, follow matched inquiry cohorts and report still-open cases rather than mixing this month’s inquiries with sales from older leads.",
    "quiz": [
      {
        "q": "A rate falls from 10% to 6%. What is the absolute difference?",
        "options": [
          "4 percentage points",
          "4% relative reduction",
          "60 percentage points"
        ],
        "answer": 0,
        "why": [
          "Correct. Subtract the percentage values: ten minus six equals four percentage points.",
          "The relative reduction is forty percent of the original ten percent rate.",
          "The original and new rates do not support this difference."
        ]
      },
      {
        "q": "Which finding weakens a claim of improved quality?",
        "options": [
          "The same error definition was used",
          "After the pilot, staff stopped checking half the cases",
          "Counts and denominators are reported"
        ],
        "answer": 1,
        "why": [
          "Consistent definitions support a more interpretable comparison.",
          "Correct. Reduced detection can lower observed errors without improving underlying work.",
          "Showing counts and denominators helps readers assess the result."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Should Maple announce a proven automation result when inspection coverage and incoming case mix changed?",
    "decisionWhy": "Improve the comparison first. Report the observed rate and its limitations, verify detection and matched groups, and avoid claiming causation from the before-and-after pattern alone.",
    "insight": "A percentage needs a denominator, a definition and a fair comparison.",
    "hooks": [
      "More errors can coexist with a lower error rate.",
      "Four percentage points is not a four percent relative reduction.",
      "Did quality improve, or did checking change?"
    ],
    "linkedin": [
      "Show the hypothetical 10/100 and 12/200 comparison.",
      "Explain counts, percentage points and relative change.",
      "List comparison checks before making a client-result claim."
    ],
    "facebook": [
      "Use a simple doubled-workload example.",
      "Explain why the count alone can mislead.",
      "Ask which denominator belongs beside a headline number."
    ],
    "conversation": "What changed besides the workflow between the two measurement periods?",
    "claims": "Label all rates hypothetical. Verify detection, cohort maturity, denominator and comparable case mix before claiming real improvement or causal impact.",
    "recap": "Report counts with rates, label percentage-point and relative changes, and check comparability before attributing an outcome to automation.",
    "reflection": "Which headline percentage would you now rewrite more precisely?",
    "deeper": "Create two fictional channels with different conversion rates. Change only their proportions and explain how the overall rate can change without either channel improving.",
    "sources": [
      {
        "title": "Institute for Healthcare Improvement — Establishing Measures",
        "url": "https://www.ihi.org/library/model-for-improvement/establishing-measures",
        "note": "Outcome, process and balancing measures for improvement. Practice datasets and targets here are invented."
      },
      {
        "title": "Institute for Healthcare Improvement — Model for Improvement",
        "url": "https://www.ihi.org/library/model-for-improvement",
        "note": "Define an aim, evidence of improvement and changes to test on a small scale."
      }
    ],
    "calc": {
      "q": "An error rate falls from 10% to 6%. What is the relative reduction, expressed as a percentage of the original rate?",
      "answer": 40,
      "explanation": "(10 − 6) ÷ 10 × 100 = 40% relative reduction. The absolute difference is four percentage points."
    }
  },
  {
    "title": "Time and capacity",
    "eyebrow": "Separate released hours from money saved",
    "objective": "Calculate forecast net time released, distinguish capacity from cash savings, and state how the business could use the released time.",
    "scenario": "Maple’s fictional coordinator processes 300 requests monthly at six active minutes each. A proposed workflow leaves two minutes of checking per request and needs four hours of monthly monitoring. The owner multiplies the original workload by an hourly wage and calls it guaranteed cash savings. Staff ask whether they will simply spend the released time handling more customers.",
    "explain": "Time savings should compare the total relevant work before and after a change. Active time is staff effort spent on tasks; elapsed turnaround includes waiting between steps. A task can become quicker without changing the time the customer waits if a later approval remains constrained. Measure both when the business goal is faster service. State the case volume, eligible group and time assumptions before calculating.<br><br>Gross time removed describes the task effort that disappears. Net time released subtracts new or remaining work, such as review, exception handling and maintenance, within a consistent boundary. Be explicit about whether the after-time already includes checking so it is not subtracted twice. Separate one-time implementation effort from recurring monthly effort. Use a range when timings or eligibility are uncertain, and verify the estimate in a pilot.<br><br>Released capacity means staff can use time differently. It becomes a cash saving only when actual spending decreases, such as approved overtime or paid contractor hours that are genuinely no longer needed. Salaried staff doing other useful work does not automatically lower payroll. Valuing an hour at a cost rate can describe a capacity-equivalent estimate, but it is not proof that cash left in the bank increased. Additional sales also require demand and delivery capacity, not just free hours.<br><br>Describe the practical use of the released time: reduce a backlog, improve quality, serve more eligible customers or avoid a future hire under explicit assumptions. Include the owner’s plan and check whether time is available in usable blocks rather than scattered seconds. Measure quality and workload distribution so faster processing does not merely move effort to another person. Honest capacity estimates can support a good decision without exaggerating financial returns.",
    "worked": "Hypothetical before effort: 300 × 6 ÷ 60 = 30 hours/month. After checking: 300 × 2 ÷ 60 = 10 hours; add four monitoring hours for 14 total. Forecast net release = 30 − 14 = 16 hours/month. At 25 currency units/hour, that is 400 units of capacity-equivalent value, not automatically cash savings. If there is no reduction in paid hours or spending, report cash saving as unproven. The manager proposes using the 16 hours to clear an owned backlog; the pilot checks whether review actually takes two minutes, monitoring stays at four hours and total turnaround improves without more corrections.",
    "flow": [
      "Measure current active effort",
      "Estimate residual work",
      "Include monitoring and exceptions",
      "Calculate net released capacity",
      "Agree use and verify results"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">Before: 30 hours</th><td>300 requests × 6 minutes.</td></tr><tr><th scope=\"row\">After: 14 hours</th><td>10 checking hours + 4 monitoring hours.</td></tr><tr><th scope=\"row\">Released: 16 hours</th><td>Forecast capacity, subject to measured assumptions.</td></tr><tr><th scope=\"row\">16 × 25 = 400 units</th><td>Capacity equivalent; actual cash saving needs reduced spending.</td></tr></tbody></table>",
    "businessName": "Maple Services",
    "businessType": "fictional service business",
    "perspective": "The owner wants a useful business case, staff want realistic workload expectations, and finance needs to distinguish a valuation from an actual spending change. Capacity can be valuable without pretending payroll disappears.",
    "assessment": "A small stable-task pilot can test whether net effort falls. Include all residual work and downstream effects. Keep staffing and spending decisions with authorized people and do not promise cash savings from a time estimate alone.",
    "pain": {
      "quote": "“The vendor says we save a salary, but nobody’s workload has changed.”",
      "symptom": "Headline gross hours do not translate into usable capacity or spending reduction.",
      "causes": "Ignored checking, fragmented time, shifted work, low eligibility or a constrained downstream step.",
      "questions": "What remains after automation? Who performs it? Will spending actually fall? How will released time be used?",
      "consequence": "Mispriced projects, unrealistic staffing plans and overlooked quality work.",
      "improve": "Measure total relevant effort and agree a realistic capacity-use plan.",
      "automation": "Automate a verified repetitive step while tracking review, failures and downstream workload.",
      "evidence": "Net active effort, monitoring time, usable backlog capacity, error rate and actual spending changes if any."
    },
    "exercise": "Calculate Maple’s net forecast hours released and capacity-equivalent value. Write a plain-language statement that does not claim a guaranteed cash saving. Identify a practical use of the time and two measurements that would challenge the estimate.",
    "rubric": [
      "Calculates 16 hours and 400 capacity-equivalent units correctly.",
      "Separates forecast capacity from actual spending reduction.",
      "Names residual work, a use plan and verification measures."
    ],
    "sample": "Current effort is 30 hours monthly; forecast after-effort is 14, so 16 hours may be released. At 25 units/hour, the capacity equivalent is 400 units/month. Statement: “Under these hypothetical assumptions, the pilot could release 16 staff hours for backlog review; no payroll reduction is assumed.” The operations lead allocates that capacity to older complete requests. Measure actual review minutes and monitoring/exception hours; compare downstream queue age and error rate as well. If time appears only in tiny fragments or review is slower, usable capacity may be lower. Do not count capacity value and reduced spending for the same hours twice.",
    "quiz": [
      {
        "q": "When do released hours become an evidenced cash saving?",
        "options": [
          "Whenever they are multiplied by a wage",
          "When actual spending falls under a verified plan",
          "Whenever a dashboard shows fewer tasks"
        ],
        "answer": 1,
        "why": [
          "A valuation does not itself change payroll or other spending.",
          "Correct. Cash savings need a demonstrable spending reduction, not only a time estimate.",
          "A task count alone does not establish reduced staff effort or spending."
        ]
      },
      {
        "q": "Which after-effort belongs in the estimate?",
        "options": [
          "Only automated run time",
          "Only the easiest reviewed cases",
          "Residual checking, exceptions and monitoring within the same boundary"
        ],
        "answer": 2,
        "why": [
          "Machine execution time does not measure the remaining human workload.",
          "Selecting easy cases overstates the representative benefit.",
          "Correct. Include the human work that remains or is introduced."
        ]
      }
    ],
    "decision": "improve",
    "decisionPrompt": "Can Maple publish “400 units saved monthly” before testing effort or showing reduced spending?",
    "decisionWhy": "Improve the claim and verify the estimate. Label 400 as hypothetical capacity-equivalent value, not realized cash. Pilot the assumptions and state how the capacity will be used.",
    "insight": "Freed staff time can be useful without being a reduction in payroll.",
    "hooks": [
      "Sixteen hours released is not automatically sixteen hours of cash savings.",
      "What work appears after the automation?",
      "A time estimate needs a plan for using the time."
    ],
    "linkedin": [
      "Show the fictional 30-minus-14-hour calculation.",
      "Distinguish capacity equivalent from cash reduction.",
      "Explain the planned use and verification measures."
    ],
    "facebook": [
      "Describe a repetitive task becoming shorter but checking remaining.",
      "Explain what can be done with released time.",
      "Ask which backlog or service improvement would benefit."
    ],
    "conversation": "If this workflow releases time, what specific work will that time make possible?",
    "claims": "Forecast figures are hypothetical. Verify workload, eligibility, residual effort and actual spending before claiming savings, staff reduction or extra revenue.",
    "recap": "Calculate net effort across the same boundary. Separate released capacity, its hypothetical valuation and verified cash savings; then measure how time is used.",
    "reflection": "What valuable outcome could capacity enable even if payroll does not change?",
    "deeper": "Recalculate if review takes three minutes and monitoring takes six hours. Compare net capacity and explain why a pilot should measure residual work.",
    "sources": [
      {
        "title": "Institute for Healthcare Improvement — Establishing Measures",
        "url": "https://www.ihi.org/library/model-for-improvement/establishing-measures",
        "note": "Outcome, process and balancing measures for improvement. Practice datasets and targets here are invented."
      },
      {
        "title": "Institute for Healthcare Improvement — Model for Improvement",
        "url": "https://www.ihi.org/library/model-for-improvement",
        "note": "Define an aim, evidence of improvement and changes to test on a small scale."
      }
    ],
    "calc": {
      "q": "Before effort is 300 × 6 minutes monthly. After effort is 300 × 2 minutes plus four monitoring hours. How many net hours are forecast to be released?",
      "answer": 16,
      "explanation": "Before: 30 hours. After: 10 checking + 4 monitoring = 14. Forecast release: 30 − 14 = 16 hours. This does not prove cash savings."
    }
  },
  {
    "title": "Costs, benefits and ROI",
    "eyebrow": "Make the assumptions visible",
    "objective": "Build a simple period-based cost-benefit estimate, calculate ROI and payback, and test a less favorable scenario without inventing revenue.",
    "scenario": "Maple is considering a fictional automation setup costing 1,200 currency units. Recurring service costs are 100 per month. The manager expects 300 per month in genuinely avoidable contractor spending, but that depends on a confirmed staffing arrangement. A proposal advertises “300 monthly benefit” without subtracting the service cost or specifying a period.",
    "explain": "A cost-benefit estimate compares the resources a change requires with the benefits it could produce over a stated period. Include one-time setup, recurring subscriptions, maintenance, training and the relevant staff implementation effort. State whether a labor estimate is cash spending or an opportunity-cost valuation. Use consistent currency, time units and boundaries. Do not mix annual benefits with monthly costs or omit a recurring charge because it seems small.<br><br>Return on investment, usually shortened to ROI, can be expressed as net benefit over a defined period divided by total costs over that period, multiplied by one hundred. Net benefit is total benefit minus total cost. State this convention because other business cases may use different definitions. A first-year estimate and a steady monthly margin answer different questions. Simple payback is the time for recurring net benefit to recover setup cost, under assumptions such as steady benefit and cost beginning immediately.<br><br>Not every benefit belongs in the financial numerator. Released capacity can be shown separately unless a defensible method values it and avoids double counting. Improved quality may matter without a credible monetary estimate. Outstanding invoices are not recovered cash, and increased capacity is not guaranteed additional sales. Present unpriced benefits honestly rather than inventing a revenue figure to make the calculation attractive.<br><br>Sensitivity analysis recalculates using plausible changes in assumptions. Test lower volume, slower adoption, more review or higher maintenance. If the recommendation fails under a modest change, investigate that uncertainty before committing. A forecast is not a measured outcome, and a positive simple ROI is not sufficient authority to proceed. Decision makers also need the process prerequisites, consequences, implementation capacity and a plan to verify the benefit.",
    "worked": "Hypothetical base case assumes 300/month of verified avoidable spending, 100/month recurring cost and 1,200 setup, with benefit starting immediately and no other costs. First-year benefit = 3,600; cost = 1,200 + 1,200 = 2,400; net = 1,200; ROI = 1,200 ÷ 2,400 × 100 = 50%. Monthly net after recurring cost = 200; simple payback = 1,200 ÷ 200 = six months. If benefit is only 150/month, annual net becomes 1,800 − 2,400 = −600 and ROI = −25%; payback becomes 24 months. Validate the contractor-spending assumption and add omitted implementation or training costs before a real decision.",
    "flow": [
      "Choose period and boundary",
      "List setup and recurring costs",
      "State defensible benefits",
      "Calculate net, ROI and payback",
      "Test assumptions and verify"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">Base first-year totals</th><td>3,600 benefit − 2,400 cost = 1,200 net.</td></tr><tr><th scope=\"row\">Base ROI</th><td>1,200 ÷ 2,400 × 100 = 50%.</td></tr><tr><th scope=\"row\">Base simple payback</th><td>1,200 ÷ (300 − 100) = 6 months.</td></tr><tr><th scope=\"row\">Lower-benefit case</th><td>150/month benefit gives −25% first-year ROI.</td></tr></tbody></table>",
    "businessName": "Maple Services",
    "businessType": "fictional service business",
    "perspective": "The owner needs a decision grounded in assumptions, finance needs complete costs, and staff need training and maintenance effort acknowledged. A credible proposal makes the uncertainty inspectable rather than promising an outcome.",
    "assessment": "Use the estimate to decide whether a bounded pilot is worth testing, after process and data prerequisites. Automate stable arithmetic if helpful; keep benefit assumptions and spending approval with accountable people.",
    "pain": {
      "quote": "“The proposal looks profitable, but I cannot see how it was calculated.”",
      "symptom": "Benefits are quoted without complete costs or a period.",
      "causes": "Mixed time units, ignored recurring work, double-counted benefits or unsupported revenue assumptions.",
      "questions": "Which costs recur? Is the benefit cash or capacity? When does it begin? What evidence supports it? What if adoption is slower?",
      "consequence": "Poor investment decisions, unexpected operating costs and misleading content claims.",
      "improve": "Use a transparent period model and separate cash, capacity and unpriced benefits.",
      "automation": "A simple calculator can recompute documented assumptions; it cannot validate the assumptions itself.",
      "evidence": "Actual implementation and recurring costs, verified spending changes, quality and benefit timing."
    },
    "exercise": "Calculate the base first-year cost, net benefit, ROI and payback. Recalculate ROI at 150 monthly benefit. List two omitted costs to investigate and write a recommendation that states which assumption must be verified before approval.",
    "rubric": [
      "Uses consistent periods and includes setup plus recurring costs.",
      "Calculates 50% base ROI, six-month payback and −25% lower-case ROI.",
      "Labels the estimate hypothetical and identifies missing costs and benefit evidence."
    ],
    "sample": "Year-one cost is 2,400; benefit is 3,600; net is 1,200; ROI is 50%. Monthly net is 200, giving six-month simple payback under immediate steady benefit. At 150/month benefit, year-one net is −600 and ROI is −25%; payback at 50 net/month would be 24 months if steady benefit continues. Investigate staff training, implementation time and maintenance not already covered by the subscription. Recommendation: test a bounded pilot after confirming the contractor-spending reduction is actually avoidable. Show released capacity separately and do not count the same hours again as extra revenue.",
    "quiz": [
      {
        "q": "Which denominator is used in the stated first-year ROI convention?",
        "options": [
          "Only the setup fee",
          "Total first-year setup and recurring costs",
          "Only the monthly benefit"
        ],
        "answer": 1,
        "why": [
          "Omitting recurring costs overstates this period-based ROI.",
          "Correct. Net first-year benefit is divided by the full first-year costs under this convention.",
          "Benefit is the numerator input, not the cost investment denominator."
        ]
      },
      {
        "q": "Why show the 150/month scenario?",
        "options": [
          "It guarantees the base case",
          "It replaces the need to measure",
          "It reveals how the decision depends on an uncertain benefit"
        ],
        "answer": 2,
        "why": [
          "A lower-case scenario does not validate the original assumption.",
          "Sensitivity is a planning tool; real costs and benefits still need verification.",
          "Correct. It exposes a material assumption and can guide the pilot or evidence request."
        ]
      }
    ],
    "decision": "human",
    "decisionPrompt": "Should a positive forecast ROI automatically authorize the purchase and staffing change?",
    "decisionWhy": "Keep approval human-led. The forecast depends on evidence, complete costs, authority and organizational priorities. Verify the spending assumption and test a bounded pilot before commitments.",
    "insight": "A useful ROI estimate makes the uncertain assumptions easier to challenge.",
    "hooks": [
      "Your ROI can change sign when one assumption changes.",
      "Monthly benefit is not monthly net benefit.",
      "A calculator can check the math, not the business promise."
    ],
    "linkedin": [
      "Label the example hypothetical and define the period.",
      "Show complete costs, base ROI and lower-benefit case.",
      "Identify the evidence needed before making a spending recommendation."
    ],
    "facebook": [
      "Use a simple setup-plus-subscription example.",
      "Explain the difference between benefit and what remains after cost.",
      "Ask which assumption is hardest to verify."
    ],
    "conversation": "Which assumption would have to be true for this investment to make sense?",
    "claims": "This is simplified educational arithmetic, not investment advice or a client result. Verify cost completeness, benefit realization, timing and decision-specific financial conventions before real use.",
    "recap": "State the period, include costs, distinguish benefits and calculate transparently. Test lower outcomes and keep forecasts separate from measured results.",
    "reflection": "Which missing cost could materially change your first recommendation?",
    "deeper": "Build a low/base/high estimate with delayed adoption. Explain why the simple steady-payback formula no longer describes the actual month of recovery.",
    "sources": [
      {
        "title": "Institute for Healthcare Improvement — Model for Improvement",
        "url": "https://www.ihi.org/library/model-for-improvement",
        "note": "Define an aim, evidence of improvement and changes to test on a small scale."
      },
      {
        "title": "Institute for Healthcare Improvement — Establishing Measures",
        "url": "https://www.ihi.org/library/model-for-improvement/establishing-measures",
        "note": "Outcome, process and balancing measures for improvement. Practice datasets and targets here are invented."
      }
    ],
    "calc": {
      "q": "First-year benefits are 3,600 and total first-year costs are 2,400. Using (benefit − cost) ÷ cost × 100, what is the first-year ROI percentage?",
      "answer": 50,
      "explanation": "(3,600 − 2,400) ÷ 2,400 × 100 = 50%. These are hypothetical cash-benefit assumptions, not measured returns."
    }
  },
  {
    "title": "Measure after the pilot",
    "eyebrow": "Check outcomes, quality and unintended effects",
    "objective": "Create a pilot scorecard with process, outcome and balancing measures, interpret before-and-after evidence carefully, and decide whether to adapt, stop or expand.",
    "scenario": "Maple’s fictional reminder pilot sends messages faster and appears to reduce review effort. Two messages used stale balances, and one recipient reports an open dispute. The manager wants to expand immediately because most runs succeeded technically. Staff ask whether the pilot improved payment timing or merely increased message volume.",
    "explain": "A pilot is a bounded test of a proposed change, designed to learn before wider use. Define the eligible work, owner, start and end, baseline, success measures and stop conditions before launch. Record what changed during the test, including rule edits and unusual events. Without a clear boundary, a pilot can grow into an unreviewed production system while its original assumptions remain untested.<br><br>An outcome measure reflects the business result, such as time until an eligible invoice is paid or time until a customer receives a meaningful response. A process measure checks whether the intended steps happen, such as the proportion of eligible cases reviewed within the agreed interval. A balancing measure detects harm or burden elsewhere, such as incorrect reminders, complaints, exception age or added review time. A successful software run is a technical process signal; it does not prove the customer or financial outcome improved.<br><br>Compare like with like using the same definitions, clock and observation window. Show counts, still-open work and case mix. Time plots can reveal whether a result is sustained or a temporary fluctuation. A short before-and-after comparison may be influenced by season, staffing or different customers; describe those limitations. Do not attribute every observed change to the workflow or hide cases that were excluded after launch.<br><br>Hold a review with the people doing and owning the work. Decide whether to stop, adapt and retest, continue the same scope, or expand gradually. Expansion needs evidence that both outcome and controls are acceptable, a maintenance owner and enough support capacity. A harmful error can trigger a stop even when the average speed improves. Record the decision, unresolved questions and next test. Learning that a pilot should pause is a valid result.",
    "worked": "Hypothetical scorecard proposal: outcome = meaningful response time for the same request class; process = eligible cases assigned within the agreed interval; balancing = wrong-recipient actions, incorrect messages, exception age and review effort. For the reminder example, two stale-balance messages violate the proposed zero-incorrect-balance stop condition, so pause sends, have finance review affected cases and repair the current-balance check. Do not expand because 98 of 100 runs completed: that says little about the quality or benefit of the actions. Reconcile paused cases before restarting and retest with dummy records. Report what was observed, the sample and limitations; do not label a proposed benefit as an achieved client result.",
    "flow": [
      "Set scope and baseline",
      "Measure process and outcomes",
      "Check balancing measures",
      "Investigate errors and comparison limits",
      "Stop, adapt, continue or expand"
    ],
    "visual": "<table><caption>Practice comparison — hypothetical assumptions</caption><thead><tr><th scope=\"col\">Consider</th><th scope=\"col\">Interpretation</th></tr></thead><tbody><tr><th scope=\"row\">Technical run success</th><td>Useful signal; does not prove a correct business action.</td></tr><tr><th scope=\"row\">Outcome measure</th><td>Reflects the customer or business goal.</td></tr><tr><th scope=\"row\">Balancing measure</th><td>Detects harm, shifted work or burden.</td></tr><tr><th scope=\"row\">Stop condition breached</th><td>Pause and investigate even if average speed improves.</td></tr></tbody></table>",
    "businessName": "Maple Services",
    "businessType": "fictional service business",
    "perspective": "The owner needs confidence in the whole outcome. Staff need permission to report problems without treating the pilot as a sales promise. Customers need incorrect actions corrected through an authorized route.",
    "assessment": "Continue or expand only after the pilot meets agreed outcome and quality criteria. Automate scorecard calculations from verified events, but keep interpretation, incident response and expansion decisions with accountable people.",
    "pain": {
      "quote": "“The workflow runs successfully, but is it actually helping?”",
      "symptom": "Technical success is treated as business success.",
      "causes": "No baseline, missing quality measures, changed case mix or untested benefit assumptions.",
      "questions": "What outcome changed? Which cases were excluded? What harm or new work appeared? Did any stop condition occur?",
      "consequence": "Premature expansion, repeated errors, hidden workload and unsupported claims.",
      "improve": "Use a balanced scorecard, comparable data and an explicit review decision.",
      "automation": "Aggregate pilot evidence and flag breached controls without automatically approving expansion.",
      "evidence": "Outcome, process and balancing measures with counts, time windows and documented decisions."
    },
    "exercise": "Design a scorecard for one Maple pilot with one outcome, one process and two balancing measures. State a stop condition and owner. Explain the decision after two stale-balance reminders, and write one honest sentence about what the evidence can support.",
    "rubric": [
      "Measures the business goal as well as execution and quality.",
      "Uses a defined stop condition, owner and manual continuation.",
      "Distinguishes observation, attribution and unproven benefit."
    ],
    "sample": "For a verified-invoice reminder pilot, outcome is eligible invoice payment timing under a consistent observation window; process is finance-reviewed eligible cases handled within the agreed interval; balancing measures are incorrect reminders and total review/exception time. Finance lead owns the pilot. Any stale-balance reminder pauses sending under the proposed stop rule. With two such messages, contain and review affected cases, fix current-balance verification, reconcile manual actions and retest. Honest statement: “In this fictional pilot, technical completion did not establish quality or faster payment; incorrect balances required a pause.” Comparable payment outcomes are still needed before a benefit claim.",
    "quiz": [
      {
        "q": "Which is a balancing measure?",
        "options": [
          "Incorrect reminder rate and review burden",
          "Only the number of runs started",
          "Only the deployment date"
        ],
        "answer": 0,
        "why": [
          "Correct. These check unintended harm and work created elsewhere.",
          "Run count describes activity, not whether harm or burden increased.",
          "A deployment date is context, not a measure of unintended effects."
        ]
      },
      {
        "q": "A defined stop condition occurs while speed improves. What should happen?",
        "options": [
          "Ignore it because the average improved",
          "Pause as agreed, investigate and retest before expansion",
          "Expand before anyone notices"
        ],
        "answer": 1,
        "why": [
          "An average speed improvement does not cancel a breached quality condition.",
          "Correct. Follow the agreed stop rule and learn before increasing exposure.",
          "Hiding a problem prevents accountable evaluation and can spread harm."
        ]
      }
    ],
    "decision": "human",
    "decisionPrompt": "Should the workflow automatically approve its own expansion because most runs returned success?",
    "decisionWhy": "Keep expansion human-led. Accountable owners must review business outcomes, quality, exceptions, comparison limitations and maintenance capacity before deciding the next scope.",
    "insight": "A pilot should produce evidence for a decision, including the decision to pause.",
    "hooks": [
      "The workflow succeeded. Did the business outcome improve?",
      "A faster average does not cancel a harmful error.",
      "A useful pilot can end with “pause and fix.”"
    ],
    "linkedin": [
      "Show a fictional technical-success-versus-stale-balance contrast.",
      "Explain outcome, process and balancing measures.",
      "Describe an honest pause-and-retest decision without claiming achieved savings."
    ],
    "facebook": [
      "Use a faster message sent with the wrong amount as a familiar example.",
      "Share three questions: did it help, was it correct, what new work appeared?",
      "Ask what would make a team pause a pilot."
    ],
    "conversation": "What evidence would convince you to stop or adapt a pilot even if it ran quickly?",
    "claims": "Pilot numbers and stop rules are hypothetical. Verify real outcomes, comparison periods, exclusions and corrective actions before publication; never invent a client result.",
    "recap": "Use a baseline and balanced measures. Technical execution is only one signal; review outcomes, harm and uncertainty before expanding.",
    "reflection": "What finding would make you change your recommendation after a pilot?",
    "deeper": "Plot six fictional weekly observations and annotate a staffing change. Explain why a simple before-and-after average may not isolate the workflow’s effect.",
    "sources": [
      {
        "title": "Institute for Healthcare Improvement — Establishing Measures",
        "url": "https://www.ihi.org/library/model-for-improvement/establishing-measures",
        "note": "Outcome, process and balancing measures for improvement. Practice datasets and targets here are invented."
      },
      {
        "title": "Institute for Healthcare Improvement — Model for Improvement",
        "url": "https://www.ihi.org/library/model-for-improvement",
        "note": "Define an aim, evidence of improvement and changes to test on a small scale."
      },
      {
        "title": "NIST — AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework",
        "note": "Context, evaluation and ongoing management of AI risks; not a claim of product certification or compliance."
      }
    ],
    "sequence": [
      "Agree scope, baseline, measures and stop rules",
      "Run the bounded pilot and record changes",
      "Review outcomes, quality and comparison limitations",
      "Decide to stop, adapt, continue or expand",
      "Document ownership and the next test"
    ],
    "sequenceIntro": "Order an evidence-led pilot review cycle.",
    "sequenceExplanation": "Define the test before running, collect evidence, review both outcomes and harm, then make and document an accountable next decision."
  }
]);
challenges[4]="Juniper Admin has 600 monthly requests at four copying minutes each; 450 have verified inputs. The pilot removes copying for those 450 but adds six review hours. Assess a ready-status notification, contested refund, changing status labels, varied complaint draft and weekly reason-code report. Classify each as rules, AI assistance, analytics, process improvement or human-led, explaining authority and evidence. Calculate forecast released time. Design one bounded integration with event identity, field authority, permissions, duplicate prevention, business/technical exceptions, reviewer, stop condition, fallback and maintainer. Test a timeout after action and restart after manual completion. Finish with three credible content hooks.";
challenges[5]="Maple Services has meaningful-response times of 10, 20, 30 and 100 minutes, plus open requests whose age must be reported separately. Invoice errors change from 10/100 to 12/200. A separate workload has 300 cases at six minutes before, two minutes review after and four monthly monitoring hours. The proposed cash-benefit model assumes 1,200 setup, 100/month cost and 300/month verified avoidable spending. Define a baseline and calculate mean/median response, both error rates, percentage-point/relative change, net released hours, first-year ROI and simple payback. Recalculate ROI at 150/month benefit. State missing evidence and avoid double counting capacity and cash. Propose outcome/process/balancing measures and decide what to do after a stale-balance reminder breaches the stop rule. Write three educational content ideas labeled as practice.";
Object.assign(glossary,{"Process stability": "Relevant rules and definitions are settled enough to test and maintain for the intended scope.", "API": "An application programming interface: a defined way for software to request data or actions.", "Webhook": "An event notification sent by one system to a receiving endpoint.", "Idempotency": "Repeated handling of the same intended action does not create an additional business effect; the supported implementation must be verified.", "Field mapping": "An explicit match between source and destination values, including meaning, format and authority.", "Baseline": "Starting performance measured under an explicit definition before a change.", "Median": "The middle ordered value, or mean of the two central values for an even count.", "Percentage point": "One unit of arithmetic difference between percentages.", "Released capacity": "Staff time available for other work after remaining and new effort is accounted for; not automatically cash savings.", "ROI": "Under the course convention, period net benefit divided by total period cost, multiplied by 100.", "Simple payback": "Time to recover setup cost from steady recurring net benefit under stated assumptions.", "Sensitivity analysis": "Recalculating an estimate when important assumptions change.", "Balancing measure": "A measure of unintended harm or burden alongside the intended outcome.", "Stop condition": "A predefined event or threshold requiring a pilot to pause for review."});
const revisedSubtitles=["Follow interest to agreement", "Make work ready for delivery", "Resolve the case and learn", "From invoice to verified payment", "Reports that support decisions", "Find the step limiting flow", "Trace work back to the first defect", "Remove the reason for chasing", "Test the explanation", "Make the next action visible"];
revisedSubtitles.forEach((text,i)=>{lessons[i+10].eyebrow=text;});
lessons[28].sources.push({title:'OpenStax — Payback Period Method',url:'https://openstax.org/books/principles-finance-2e/pages/16-1-payback-period-method',note:'Recovery of initial cost through cash flows and limitations of simple payback. The course uses a stated simplified ROI convention and hypothetical figures.'});
lessons[28].explain += '<br><br>These simple calculations ignore the time value of money and do not describe benefits after the chosen horizon. If recurring net benefit is zero or negative, there is no finite simple payback under those steady assumptions. More complex real decisions may need a fuller financial appraisal.';
