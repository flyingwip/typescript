// Load the full build.
var _ = require('lodash');

/*
*
*/
let new_form_fields =[
	'country',
	'used_deet',
	'deet_when',
	'deet_percentage',
	'other_repellent',
	'other_repellent_which',
	'mosquito_net',
	'airco',
	'symptons',
	'has_fever',
	'temperature',
	'measure_method',
	'headache',
	'nauseous',
	'vomit',
	'diarrhoea',
	'myalgia',
	'other_complaints',
	'gathered_information',
	'how_information',
	'how_other_information',
	'gathered_advice',
	'who_advice',
	'what_advice',
	'visited_hospital_doctor',
	'has_treatment',
	'emergency_treatment',
	'according_prescription',
	'alternative_medication',
	'alternative_medication_which',
	'is_diagnosed',
	'diagnose_which',
	'travel_adaptions',
	'no_activities'];

//console.log(new_form_fields);	

let current_form_fields = [
	'country', 
	'used_deet',
	'has_fever',
	'deet_when',
	'deet_percentage',
	'other_repellent',
	'other_repellent_which',
	'mosquito_net',
	'airco',
	'symptons',
	'temperature',
	'measure_method',
	'headache',
	'nauseous',
	'vomit',
	'diarrhoea',
	'myalgia',
	'other_complaints',
	'gathered_information',
	'how_information',
	'how_other_information',
	'gathered_advice',
	'who_advice',
	'what_advice',
	'visited_hospital_doctor',
	'has_treatment',
	'emergency_treatment',
	'according_prescription',
	'alternative_medication',
	'alternative_medication_which',
	'is_diagnosed',
	'diagnose_which',
	'travel_adaptions',
	'no_activities',
	'post_self_treatment_hospital_doctor',
	'post_self_treatment_hospital_doctor_which'];

//console.log(current_form_fields);	

let dff1 = _.difference(new_form_fields,current_form_fields);
let dff2 = _.difference(current_form_fields, new_form_fields);
//dff = _.difference([2, 1], [2, 3]);

console.log(dff1);
console.log('----------------------------');
console.log(dff2);

// => [1]
let difference = dff1.concat(dff2);
console.log('----------------------------');
console.log(difference);



