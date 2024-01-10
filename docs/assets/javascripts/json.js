
// Set the main data object
var itp = {};
itp.q = {};

// Set default page
//itp.page = "how_much_income";
itp.page = "income_expenditure";

itp.categories = ["Size","Governance","Assurance","Finance","Risk"];

itp.sizes = ["Over £8 Million","£1 Million - £8 Million","Less than £1 Million"];




itp.vars = {};
itp.vars.cat = {};
itp.vars.cat["Governance"] = "Governance";
itp.vars.cat["Assurance"] = "Audit and Assurance";
itp.vars.cat["Finance"] = "Finance";
itp.vars.cat["Risk"] = "Risk Management";




itp.q["income_expenditure"] =	{
	"question":"Which actions has your trust taken after benchmarking its income and expenditure, and that of its schools, against similar trusts and schools?",
	"hint": "Select all that apply.",
	"type": "checkbox",
	"inline": false,
	"options":[
		{
			"answer":"Investigated further where any category appeared to be out of line", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Contacted other trusts and schools to share information or best practice", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Identified areas for possible efficiencies", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Used findings as part of strategic discussions at governing body meetings", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Used findings as part of strategic discussions with senior leadership team ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Used findings to inform budget ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"We did not take any action", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"We do not benchmark ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Don't know ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"We took a different action", 
			"hint":"", 
			"checked": false,
			"showonchecked": "income_expenditure_2",
			"hideonunchecked": "income_expenditure_2"
		}
	],
	"size": "Test Over £8 Million", "category":"Test Governance",
	"Notes":"",
	"action":"form",
	"param":"replacing_renewing",
	"originalaction":"form",
	"originalparam":"replacing_renewing",
	"page": "income_expenditure"
}

itp.q["income_expenditure_2"] =	{
	"question": "Please specify",
	"hint": "",
	"hidden": true,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"help":"",
	"size": "Test Over £8 Million", "category":"Test Governance",
	"action":"form",
	"param":"",
	"page": "income_expenditure"
}




itp.q["replacing_renewing"] =	{
	"question":"What does your trust consider when replacing or renewing contracts?",
	"hint": "Select all that apply.",
	"type": "checkbox",
	"inline": false,
	"options":[
		{
			"answer":"Not replacing the contract if it no longer meets the trust’s requirements ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Current contract terms  ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Bringing the service in house instead of contracting it out ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Social, environmental, ethical and sustainability factors ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Who is best placed to manage the contract effectively ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Route to market ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Length of the contract ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Value of the contract ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Evaluation scheme ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Sharing procurement with one or more other multi-academy trusts ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"DfE's Get Help Buying for Schools service ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Risks such as avoidance of Related Party Transactions and legal challenges  ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"None of these ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Don't know ", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"aaa"
		},
		{
			"answer":"Other", 
			"hint":"", 
			"checked": false,
			"showonchecked": "replacing_renewing_2",
			"hideonunchecked": "replacing_renewing_2"
		}
	],
	"size": "Test Over £8 Million", "category":"Test Governance",
	"Notes":"",
	"action":"form",
	"param":"staffing_structure",
	"originalaction":"form",
	"originalparam":"staffing_structure",
	"page": "replacing_renewing"
}


itp.q["replacing_renewing_2"] =	{
	"question": "Please specify",
	"hint": "",
	"hidden": true,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"help":"",
	"size": "Test Over £8 Million", "category":"Test Governance",
	"action":"form",
	"param":"",
	"page": "replacing_renewing"
}





itp.q["staffing_structure"] =	{
	"question":"Which metrics does your trust use to ensure that its staffing structure meets the needs of the trust and maintains financial integrity?",
	"hint": "Select all that apply.",
	"type": "checkbox",
	"inline": false,
	"options":[
		{
			"answer":"Teacher contact ratio ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Average teacher cost ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Curriculum bonus ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Average class size ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Pupil teacher ratio ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Pupil adult ratio ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Senior leaders as a percentage of workforce ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"The percentage spend on teachers ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"The percentage spend on total staff ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"We do not use any of these ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Don't know ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"We used a different metric", 
			"hint":"", 
			"checked": false,
			"showonchecked": "staffing_structure_2",
			"hideonunchecked": "staffing_structure_2"
		}

	],
	"size": "Test Over £8 Million", "category":"Test Governance",
	"Notes":"",
	"action":"index",
	"param":"",
	"originalaction":"index",
	"originalparam":"",
	"page": "staffing_structure"
}


itp.q["staffing_structure_2"] =	{
	"question": "Please specify",
	"hint": "",
	"hidden": true,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"help":"",
	"size": "Test Over £8 Million", "category":"Test Governance",
	"action":"form",
	"param":"",
	"page": "staffing_structure"
}









































itp.q["checkbox_test_2"] =	{
	"question":"Which of the following can you implement in the next 12 months?",
	"hint": "",
	"type": "checkbox",
	"inline": false,
	"hidden": false,
	"options":[
		{
			"answer":"At least 2 non-executive directors", 
			"hint":"That provide independent oversight of your processes.",
			"showonunchecked":"checkbox_test_3"
		},
		{
			"answer":"At least two funding experts", 
			"hint":"That oversee the submission of data to funding bodies.",
			"showonunchecked":"checkbox_test_3"
		},
		{
			"answer":"An audit committee", 
			"hint":"That carry out independant addessments of your processes.",
			"showonunchecked":"checkbox_test_3"
		}
	],
	"category":"Test",
	"Notes":"",
	"action":"form",
	"param":"xxx",  // Next page
	"page": "checkbox_test_2"
}

itp.q["checkbox_test_3"] =	{
	"question": "What would prevent you from putting these arrangements in place?",
	"hint": "",
	"hidden": true,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"help":"This is some help text. It uses the GDS Details component.",
	"size": "Test Over £8 Million", "category":"Test Governance",
	"action":"form",
	"param":"",
	"page": "checkbox_test_2"
}


itp.q["how_much_income"] =	{
	"question":"Funding income",
	"hint": "During the 2022/23 funding year how much income has / does your organisation expect to receive from the ESFA and devolved authorities (MCAs / GLA) combined in total for all funding streams combined?",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Less than £1 Million", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"small_nonexecutive_directors_1"
		},
		{
			"answer":"£1 Million - £8 Million", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"medium_nonexecutive_directors_1"
		},
		{
			"answer":"More than £8 Million", 
			"hint":"", 
			"checked": false,
			"action":"form",
			"param":"nonexecutive_directors_1"
		}
	],
	"showquestioncount": false,
	"size": "test Set size", "category":"test Size",
	"Notes":"",
	"action":"form",
	"param":"nonexecutive_directors_1",
	"page": "how_much_income"
}






///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// LARGE GOVERNANCE
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


itp.q["nonexecutive_directors_1"] =	{
	"question":"Does your organisation have any non-executive directors?",
	"hint": "For the purposes of this question, 'non-executive directors' includes anyone (not a paid employee) who offers independent financial management and government advice to the board or management.",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"nonexecutive_directors_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"nonexecutive_directors_2"
		}
	],
	"showquestioncount": true,
	"size": "Over £8 Million", "category":"Governance",
	"Notes":"",
	"xhelp":"Non-executive directors help your organisation with independent financial management and governance advice. For further information, please refer to Part 3 of the handbook.",
	"action":"form",
	"param":"large_externally_audited_1",
	"page": "nonexecutive_directors_1"
}

itp.q["nonexecutive_directors_2"] =	{
	"question":"How many non-executive directors does your organisation have?",
	"hint": "",
	"type": "radio",
	"hidden": true,
	"inline": false,
	"options":[
		{
			"answer":"1", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"2 or more", 
			"hint":"", 
			"checked": false
		}
	],
	"showquestioncount": true,
	"size": "Over £8 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"large_externally_audited_1",
	"page": "nonexecutive_directors_1"
}



itp.q["audit_committee_1"] =	{
	"question":"Does your organisation have an audit committee to conduct independent assessment of its financial and governance processes?",
	"hint": "For the purposes of this question, 'audit committee' refers to a group of people not directly involved in managing your organisation who provide advice on the effectiveness of the controls and processes that are in place. Answer 'Yes' if you have this function even if it's not called an 'audit committee'.",
	 
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"hide":"audit_committee_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"show":"audit_committee_2"
		}
	],
	"size": "Over £8 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"large_externally_audited_1",
	"page": "nonexecutive_directors_1"
}


itp.q["audit_committee_2"] =	{
	"question": "Please give details of any barriers that could make it difficult for your organisation to put an audit committee in place with 12 months' notice. (Optional)",
	"hint": "",
	"hidden": true,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Over £8 Million", "category":"Governance",
	"action":"form",
	"param":"large_externally_audited_1",
	"page": "nonexecutive_directors_1"
}



itp.q["comply_subcon_rules_1"] = {
	"question": "Is your organisation committed to complying with a published code of governance, such as: ",
	"hint": `
	<ul>
	<li>Code of Good Governance for Independent Training Providers (Association of Employment and Learning Providers) - 2018 </li>
	<li>UK Corporate Governance Code (Financial Reporting Council) - 2018</li>
	<li>Charity Governance Code (endorsed by the Charities Commission) - 2017</li>
	<li>Community Interest Companies - Information and guidance notes Chapter 9 - Corporate Governance (Office of the Regulator of Community Interest Companies) - 2016</li>
	</ul>
	`,
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[

		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},	
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"large_externally_audited_1",
	"page": "nonexecutive_directors_1"
}



itp.q["large_gov_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Governance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Over £8 Million", "category":"Governance",
	"action":"form",
	"param":"large_externally_audited_1",
	"page": "nonexecutive_directors_1"
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Large Assurance
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


itp.q["large_externally_audited_1"] = {
	"question": "Has your organisation had its financial accounts externally audited by an audit firm in the last 12 months, where the audit has covered any of your ESFA funded delivery? ",
	"hint": "",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Assurance",
	"Notes":"",
	"action":"form",
	"param":"large_annual_accounts_1",
	"page": "large_externally_audited_1"
}



itp.q["large_internal_audit_1"] = {
	"question": "Does your organisation have an internal audit/scrutiny function in place to review your financial management and governance processes at least every 12 months?",
	"hint": "",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Assurance",
	"Notes":"",
	"action":"form",
	"param":"large_annual_accounts_1",
	"page": "large_externally_audited_1"
}


itp.q["large_assurance_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Audit and Assurance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Over £8 Million", "category":"Assurance",
	"action":"form",
	"param":"large_annual_accounts_1",
	"page": "large_externally_audited_1"
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Large Finance
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////




itp.q["large_annual_accounts_1"] = {
	"question": "Could your organisation submit your full annual accounts (externally audited, if required) within 4 months of your year end, if the ESFA asked you to do this?",
	"hint": "",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"hide":"large_annual_accounts_2"
		},
		{
			"answer":"Yes, but it might take up to a couple of years to adapt to this", 
			"hint":"", 
			"checked": false,
			"hide":"large_annual_accounts_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"show":"large_annual_accounts_2"
		}
	],
	"size": "Over £8 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"large_counter_fraud_1",
	"page": "large_annual_accounts_1"
}

itp.q["large_annual_accounts_2"] =	{
	"question": "Please give details of any barriers that could make it difficult for your organisation to do this (Optional)",
	"hint": "",
	"hidden": true,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Over £8 Million", "category":"Finance",
	"action":"form",
	"param":"large_counter_fraud_1",
	"page": "large_annual_accounts_1"
}



itp.q["large_cash_forecast_1"] = {
	"question": "Does your organisation prepare an annual cash forecast that sets out your expected cash flow for the next 12 months?",
	"hint": "",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"hide":"large_cash_forecast_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"show":"large_cash_forecast_2"
		}
	],
	"size": "Over £8 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"large_finance_anything_else_1",
	"page": "large_annual_accounts_1"
}

itp.q["large_cash_forecast_2"] = {
	"question": "Could your organisation provide a cash flow forecast (using a simple cash flow template   provided by ESFA) each year if the ESFA asked you to do this?",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"hide":"large_cash_forecast_3"
		},
		{
			"answer":"Yes, but only for ESFA funded delivery", 
			"hint":"", 
			"checked": false,
			"hide":"large_cash_forecast_3"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"show":"large_cash_forecast_3"
		}
	],
	"size": "Over £8 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"large_counter_fraud_1",
	"page": "large_annual_accounts_1"
}

itp.q["large_finance_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Finance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Over £8 Million", "category":"Finance",
	"action":"form",
	"param":"large_counter_fraud_1",
	"page": "large_annual_accounts_1"
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Large Risk Management
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

itp.q["large_counter_fraud_1"] = {
	"question": "Does your organisation have a counter fraud strategy or policy?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document.",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}

itp.q["large_fraud_awareness_1"] = {
	"question": "Does your organisation provide fraud awareness training?",
	"hint": "",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes, to all staff working on ESFA funded delivery", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}



itp.q["large_risk_management_1"] = {
	"question": "Does your organisation have a risk management policy  that provides an overview of how your organisation manages risk?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}



itp.q["large_risk_register_1"] = {
	"question": "Does your organisation have a risk register  (in relation to ESFA funded delivery) that lists all identified  risks and their potential impacts?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"large_risk_register_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"large_risk_register_2"
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}

itp.q["large_risk_register_2"] = {
	"question": "How regularly is the risk register monitored and updated?",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"At least every month", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"At least every quarter", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Less frequently than every quarter", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}


itp.q["large_business_continuity_1"] = {
	"question": "Does your organisation have a business continuity policy ?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}


itp.q["large_conflict_interest_1"] = {
	"question": "Does your organisation have a conflict of interest policy  to guard against conflict between ESFA funded delivery and any other interests that the organisation, or individuals within it, might have?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}

itp.q["large_whistleblowing_policy_1"] = {
	"question": "Does your organisation have a whistleblowing policy?",
	"hint": "A whistleblowing policy should include how to make an internal disclosure, how disclosures will be handled (including timescales) and how whistleblowers will be protected. This could be a standalone policy, or contained in a wider operational process document.",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"large_whistleblowing_policy_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"large_whistleblowing_policy_2"
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}

itp.q["large_whistleblowing_policy_2"] = {
	"question": "Does your whistleblowing policy tell employees how they can make direct disclosures to the ESFA?",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Over £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}



itp.q["large_risk_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Risk Management questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Over £8 Million", "category":"Risk",
	"action":"summary",
	"param":"summary",
	"page": "large_counter_fraud_1"
}





///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// MEDIUM GOVERNANCE
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


itp.q["medium_nonexecutive_directors_1"] =	{
	"question":"Does your organisation have any non-executive directors?",
	"hint": "For the purposes of this question, 'non-executive directors' includes anyone (not a paid employee) who offers independent financial management and government advice to the board or management.",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"medium_nonexecutive_directors_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"medium_nonexecutive_directors_2"
		}
	],
	"showquestioncount": true,
	"size": "£1 Million - £8 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"medium_external_audit_1",
	"page": "medium_nonexecutive_directors_1"
}

itp.q["medium_nonexecutive_directors_2"] =	{
	"question":"How many non-executive directors does your organisation have?",
	"hint": "",
	"type": "radio",
	"hidden": true,
	"inline": false,
	"options":[
		{
			"answer":"1", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"2 or more", 
			"hint":"", 
			"checked": false
		}
	],
	"showquestioncount": true,
	"size": "£1 Million - £8 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"medium_external_audit_1",
	"page": "medium_nonexecutive_directors_1"
}

itp.q["medium_audit_committee_1"] =	{
	"question":"Does your organisation have an audit committee  to conduct independent assessment of its financial and governance processes?  ",
	"hint": "For the purposes of this question, 'audit committee' refers to a group of people not directly involved in managing your organisation who provide advice on the effectiveness of the controls and processes that are in place. Answer 'Yes' if you have this function even if it's not called an 'audit committee'.",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"medium_external_audit_1",
	"page": "medium_nonexecutive_directors_1"
}

itp.q["medium_complying_rules_1"] =	{
	"question":"Is your organisation committed to complying with a published code of governance, such as: ",
	"hint": `
	<ul>
	<li>Code of Good Governance for Independent Training Providers (Association of Employment and Learning Providers) - 2018 </li>
	<li>UK Corporate Governance Code (Financial Reporting Council) - 2018</li>
	<li>Charity Governance Code (endorsed by the Charities Commission) - 2017</li>
	<li>Community Interest Companies - Information and guidance notes Chapter 9 - Corporate Governance (Office of the Regulator of Community Interest Companies) - 2016</li>
	</ul>
	`,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
		
	],
	"size": "£1 Million - £8 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"medium_external_audit_1",
	"page": "medium_nonexecutive_directors_1"
}

itp.q["medium_gov_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Governance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "£1 Million - £8 Million", "category":"Governance",
	"action":"form",
	"param":"medium_external_audit_1",
	"page": "medium_nonexecutive_directors_1"
}



///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// MEDIUM ASSURANCE
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


itp.q["medium_external_audit_1"] =	{
	"question":"Has your organisation had its financial accounts externally audited by an audit firm in the last 12 months, where the audit has covered any of your ESFA funded delivery?  ",
	"hint": "",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Assurance",
	"Notes":"",
	"action":"form",
	"param":"medium_annual_accounts_1",
	"page": "medium_external_audit_1"
}





itp.q["medium_internal_audit_1"] =	{
	"question":"Does your organisation have an internal audit/scrutiny function in place to review your financial management and governance processes at least every 12 months?    ",
	"hint": "",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Assurance",
	"Notes":"",
	"action":"form",
	"param":"medium_annual_accounts_1",
	"page": "medium_external_audit_1"
}



itp.q["medium_assurance_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Audit and Assurance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "£1 Million - £8 Million", "category":"Assurance",
	"action":"form",
	"param":"medium_annual_accounts_1",
	"page": "medium_external_audit_1"
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// MEDIUM FINANCE
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


itp.q["medium_annual_accounts_1"] =	{
	"question":"Could your organisation submit your full annual accounts (externally audited, if required) within 4 months of your year end, if the ESFA asked you to do this?",
	"hint": "",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"hide":"medium_annual_accounts_2, medium_annual_accounts_3"
		},
		{
			"answer":"Yes, but it might take up to a couple of years to adapt to this ", 
			"hint":"", 
			"checked": false,
			"hide":"medium_annual_accounts_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"show":"medium_annual_accounts_2"
		}
	],
	"size": "£1 Million - £8 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"medium_fraud_1",
	"page": "medium_annual_accounts_1"
}

itp.q["medium_annual_accounts_2"] =	{
	"question": "Please give details of any barriers that could make it difficult for your organisation to do this (Optional)",
	"hint": "",
	"hidden": true,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "£1 Million - £8 Million", "category":"Finance",
	"action":"form",
	"param":"medium_fraud_1",
	"page": "medium_annual_accounts_1"
}


itp.q["medium_cash_forecast_1"] = {
	"question":"Does your organisation prepare an annual  cash forecast  that sets out your expected cash flow for the next 12 months? ",
	"hint": "",
	"hidden": false,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"hide":"medium_cash_forecast_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"show":"medium_cash_forecast_2"
		}
	],
	"size": "£1 Million - £8 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"medium_fraud_1",
	"page": "medium_annual_accounts_1"
}

itp.q["medium_cash_forecast_2"] = {
	"question":"Could your organisation provide a cash flow forecast (using a simple cash flow template   provided by ESFA) each year if the ESFA asked you to do this?  ",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Yes, but only for ESFA funded delivery", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"medium_fraud_1",
	"page": "medium_annual_accounts_1"
}

itp.q["medium_finance_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Finance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "£1 Million - £8 Million", "category":"Finance",
	"action":"form",
	"param":"medium_fraud_1",
	"page": "medium_annual_accounts_1"
}




///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// MEDIUM RISK MANAGEMENT
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////



itp.q["medium_fraud_1"] =	{
	"question":"Does your organisation have a counter fraud strategy or policy?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}

itp.q["medium_fraud_awareness_2"] =	{
	"question":"Does your organisation provide fraud awareness training?",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}

itp.q["medium_risk_management_1"] =	{
	"question":"Does your organisation have a risk management policy  that provides an overview of how your organisation manages risk?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}

itp.q["medium_risk_register_1"] =	{
	"question":"Does your organisation have a risk register  (in relation to ESFA funded delivery) that lists all identified  risks and their potential impacts?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"medium_risk_register_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"medium_risk_register_2"
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}

itp.q["medium_risk_register_2"] =	{
	"question":"How regularly is the risk register monitored and updated?",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"At least every month", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"At least every quarter", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Less frequently than every quarter", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}

itp.q["medium_business_continuity_1"] =	{
	"question":"Does your organisation have a business continuity policy?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}

itp.q["medium_conflict_interest_1"] =	{
	"question":"Does your organisation have a conflict of interest policy  to guard against conflict between ESFA funded delivery and any other interests that the organisation, or individuals within it, might have?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}

itp.q["medium_whistleblowing_1"] =	{
	"question":"Does your organisation have a whistleblowing policy?",
	"hint": "A whistleblowing policy should include how to make an internal disclosure, how disclosures will be handled (including timescales) and how whistleblowers will be protected. This could be a standalone policy, or contained in a wider operational process document.",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"medium_whistleblowing_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"medium_whistleblowing_2"
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}

itp.q["medium_whistleblowing_2"] =	{
	"question":"Does your whistleblowing policy tell employees how they can make direct disclosures to the ESFA?",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "£1 Million - £8 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}


itp.q["medium_risk_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Risk Management questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "£1 Million - £8 Million", "category":"Risk",
	"action":"summary",
	"param":"summary",
	"page": "medium_fraud_1"
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SMALL GOVERNANCE
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////



itp.q["small_nonexecutive_directors_1"] =	{
	"question":"Does your organisation have any non-executive directors?",
	"hint": "For the purposes of this question, 'non-executive directors' includes anyone (not a paid employee) who offers independent financial management and government advice to the board or management. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"small_nonexecutive_directors_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"small_nonexecutive_directors_2"
		}
	],
	"size": "Less than £1 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"small_external_audit_1",
	"page": "small_nonexecutive_directors_1"
}

itp.q["small_nonexecutive_directors_2"] =	{
	"question":"How many non-executive directors does your organisation have? ",
	"hint": "",
	"type": "radio",
	"hidden": true,
	"inline": false,
	"options":[
		{
			"answer":"1", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"2 or more", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"small_external_audit_1",
	"page": "small_nonexecutive_directors_1"
}

itp.q["small_audit_committee_1"] =	{
	"question":"Does your organisation have an audit committee  to conduct independent assessment of its financial and governance processes?",
	"hint": "For the purposes of this question, 'audit committee' refers to a group of people not directly involved in managing your organisation who provide advice on the effectiveness of the controls and processes that are in place. Answer 'Yes' if you have this function even if it's not called an 'audit committee'.",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"small_external_audit_1",
	"page": "small_nonexecutive_directors_1"
}

itp.q["small_complying_rules_1"] =	{
	"question":"Is your organisation committed to complying with a published code of governance, such as: ",
	"hint": `
	<ul>
	<li>Code of Good Governance for Independent Training Providers (Association of Employment and Learning Providers) – 2018 </li>
	<li>UK Corporate Governance Code (Financial Reporting Council) - 2018 </li>
	<li>Charity Governance Code (endorsed by the Charities Commission) - 2017 </li>
	<li>Community Interest Companies - Information and guidance notes Chapter 9 - Corporate Governance (Office of the Regulator of Community Interest Companies) - 2016 </li>
	</ul>
	`,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
		
	],
	"size": "Less than £1 Million", "category":"Governance",
	"Notes":"",
	"action":"form",
	"param":"small_external_audit_1",
	"page": "small_nonexecutive_directors_1"
}

itp.q["small_gov_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Governance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Less than £1 Million", "category":"Governance",
	"action":"form",
	"param":"small_external_audit_1",
	"page": "small_nonexecutive_directors_1"
}




///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SMALL ASSURANCE
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////



itp.q["small_external_audit_1"] =	{
	"question":"Has your organisation had its financial accounts externally audited by an audit firm in the last 12 months, where the audit has covered any of your ESFA funded delivery?  ",
	"hint": "",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Assurance",
	"Notes":"",
	"action":"form",
	"param":"small_annual_accounts_1",
	"page": "small_external_audit_1"
}

itp.q["small_internal_audit_1"] =	{
	"question":"Does your organisation have an internal audit/scrutiny function in place to review your financial management and governance processes at least every 12 months?",
	"hint": "",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Assurance",
	"Notes":"",
	"action":"form",
	"param":"small_annual_accounts_1",
	"page": "small_external_audit_1"
}


itp.q["small_assurance_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Audit and Assurance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Less than £1 Million", "category":"Assurance",
	"action":"form",
	"param":"small_annual_accounts_1",
	"page": "small_external_audit_1"
}

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SMALL FINANCE
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////



itp.q["small_annual_accounts_1"] =	{
	"question":"Could your organisation submit your full annual accounts (externally audited, if required) within 4 months of your year end, if the ESFA asked you to do this?",
	"hint": "",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"hide":"small_annual_accounts_2"
		},
		{
			"answer":"Yes, but it might take up to a couple of years to adapt to this", 
			"hint":"", 
			"checked": false,
			"hide":"small_annual_accounts_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"show":"small_annual_accounts_2"
		}
	],
	"size": "Less than £1 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"small_fraud_1",
	"page": "small_annual_accounts_1"
}

itp.q["small_annual_accounts_2"] = {
	"question": "Please tell us why",
	"hint": "",
	"hidden": true,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Less than £1 Million", "category":"Finance",
	"action":"form",
	"param":"small_fraud_1",
	"page": "small_annual_accounts_1"
}

itp.q["small_cash_forecast_1"] = {
	"question":"Does your organisation prepare an annual  cash forecast  that sets out your expected cash flow for the next 12 months? ",
	"hint": "",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"small_cash_forecast_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"show":"small_cash_forecast_2"
		}
	],
	"size": "Less than £1 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"small_fraud_1",
	"page": "small_annual_accounts_1"
}

itp.q["small_cash_forecast_2"] = {
	"question":"Could your organisation provide a cash flow forecast (using a simple cash flow template   provided by ESFA) each year if the ESFA asked you to do this?  ",
	"hint": "",
	"type": "radio",
	"hidden": true,
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Yes, but only for ESFA funded delivery", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Finance",
	"Notes":"",
	"action":"form",
	"param":"small_fraud_1",
	"page": "small_annual_accounts_1"
}



itp.q["small_finance_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Finance questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Less than £1 Million", "category":"Finance",
	"action":"form",
	"param":"small_fraud_1",
	"page": "small_annual_accounts_1"
}



///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SMALL RISK MANAGEMENT
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


itp.q["small_fraud_1"] = {
	"question":"Does your organisation have a counter fraud strategy or policy?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_fraud_awareness_1"] = {
	"question":"Does your organisation provide fraud awareness training?",
	"hint": "",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes, to all staff working on ESFA funded delivery ", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_risk_management_1"] = {
	"question":"Does your organisation have a risk management policy  that provides an overview of how your organisation manages risk?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document.",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_risk_register_1"] = {
	"question":"Does your organisation have a risk register  (in relation to ESFA funded delivery) that lists all identified  risks and their potential impacts?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"small_risk_register_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"small_risk_register_2"
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_risk_register_2"] = {
	"question":"How regularly is the risk register monitored and updated?",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"At least every month", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"At least every quarter", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"Less frequently than every quarter", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_business_continuity_1"] = {
	"question":"Does your organisation have a business continuity policy?",
	"hint": "",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_conflict_interest_1"] = {
	"question":"Does your organisation have a conflict of interest policy  to guard against conflict between ESFA funded delivery and any other interests that the organisation, or individuals within it, might have?",
	"hint": "This could be a standalone policy, or contained in a wider operational process document. ",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_whistleblowing_1"] = {
	"question":"Does your organisation have a whistleblowing policy?	",
	"hint": "A whistleblowing policy should include how to make an internal disclosure, how disclosures will be handled (including timescales) and how whistleblowers will be protected. This could be a standalone policy, or contained in a wider operational process document.",
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false,
			"show":"small_whistleblowing_2"
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false,
			"hide":"small_whistleblowing_2"
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_whistleblowing_2"] = {
	"question":"Does your whistleblowing policy tell employees how they can make direct disclosures to the ESFA?",
	"hint": "",
	"hidden": true,
	"type": "radio",
	"inline": false,
	"options":[
		{
			"answer":"Yes", 
			"hint":"", 
			"checked": false
		},
		{
			"answer":"No", 
			"hint":"", 
			"checked": false
		}
	],
	"size": "Less than £1 Million", "category":"Risk",
	"Notes":"",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}

itp.q["small_risk_anything_else_1"] =	{
	"question": "Is there anything else you'd like to tell us relating to the Risk Management questions you've just answered? (Optional)",
	"hint": "",
	"hidden": false,
	"type": "textarea",
	"inline": false,
	"options":{
		"text":""
	},
	"size": "Less than £1 Million", "category":"Risk",
	"action":"summary",
	"param":"summary",
	"page": "small_fraud_1"
}