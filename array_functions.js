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

// let dff1 = _.difference(new_form_fields,current_form_fields);
// let dff2 = _.difference(current_form_fields, new_form_fields);
// //dff = _.difference([2, 1], [2, 3]);

// console.log(dff1);
// console.log('----------------------------');
// console.log(dff2);

// // => [1]
// let difference = dff1.concat(dff2);
// console.log('----------------------------');
// console.log(difference);


let columns = {
	"country_code": "72101",
    "timestamp": "2018-09-18T11:39:56.081Z",
    "odysseus_number": "629122",
    "date_survey": "2018-09-18",
    "country": "Nauru",
    "used_deet": "1",
    "has_fever": "1",
    "deet_when": "2",
    "deet_percentage": "2",
    "other_repellent": null,
    "other_repellent_which": null,
    "mosquito_net": "1",
    "airco": "1",
    "symptons": "1",
    "temperature": "40",
    "measure_method": "2",
    "headache": "1",
    "nauseous": "1",
    "vomit": "1",
    "diarrhoea": "1",
    "myalgia": "1",
    "other_complaints": "Geen overige klachten",
    "gathered_information": "1",
    "how_information": "1",
    "how_other_information": null,
    "gathered_advice": "1",
    "who_advice": "Bij reizigers",
    "what_advice": "Laat het los!",
    "visited_hospital_doctor": "1",
    "has_treatment": "1",
    "emergency_treatment": "1",
    "according_prescription": "1",
    "alternative_medication": "1",
    "alternative_medication_which": "Gin and Tonic",
    "is_diagnosed": "1",
    "diagnose_which": null,
    "travel_adaptions": "1",
    "no_activities": "1",
    "respondent_id": 1};




//console.log( _.sortBy(columns , (key)=> return ) );

console.log( Object.keys(columns).sort() );

//let keys = columns.map( (item)=> { return item.key;} );

//console.log(keys);

