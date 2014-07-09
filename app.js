var prompt = require('sync-prompt').prompt;
/*
var firstName = prompt('What is your first name? ');
var lastName = prompt('What is your last name? ');
var fullName = firstName + ' ' + lastName;
console.log('Your full name is', fullName);
*/
/*
var color = prompt('What is your fav color? ');
console.log('your fav color is', color);
*/
/*
var age = prompt('What is your dog\'s age? ');
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

var humanYears = age * 7;
console.log('Your dog\'s age is', age);
console.log('Your dog\'s age in human years is', humanYears);
*/
/*
var yourAge = prompt('What is your age? ');
if(yourAge >= 21){
  console.log('You can drink!!');
}else{
  console.log('No booze for you');
}
*/
/*
var tempUnit = prompt('Do you want to convert from fahrenheit or celsius? (F/C) ');
var temp = prompt('What temperature do you want to convert? ');

temp = parseInt(temp);
tempUnit = tempUnit.toUpperCase();
var converted;
var alt;

if(tempUnit === "F"){
  converted = (5 / 9) * (temp - 32);
  alt = 'C'
}else if(tempUnit === "C"){
  converted = ((9 / 5) * temp) + 32;
  alt = 'F';
}else{
  console.log('Invalid temperature unit, try entering C or F');
}

console.log(temp + '\u00B0 ' + tempUnit + ' in ' + alt + ' is ' + converted + '\u00B0');
*/

var weight = parseInt(prompt('What is your weight in lbs? '));
var height = parseInt(prompt('What is your height in inches? '));

var bmi = (weight / Math.pow(height, 2)) * 703;
var adj;

if(bmi < 18.5){
  adj = 'twiggy';
}else if(bmi < 24.9){
  adj = 'slim';
}else if (bmi < 29.9){
  adj = 'fatty';
}else{
  adj = 'porky';
}

console.log('\nYour BMI is', bmi.toFixed(2) + ' ' + adj + '\n');

