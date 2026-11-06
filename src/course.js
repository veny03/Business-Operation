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
