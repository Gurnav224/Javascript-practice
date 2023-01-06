// string exercise 

let name = 'Coding Academy        ';

// console.log(name);

// console.log(name.length);

// console.log(name.toUpperCase())

// console.log(name.toLowerCase());

// console.log(name.slice(0,1));

// console.log(name.substring(0,1));

// console.log(name.substr(0,1))

//que7 

let string = 'You cannot end a sentence with because because because is a conjunction';

let newString = string.substring(31,55);

// console.log(newString);

let nameI = name.includes('Academy');

// console.log(nameI);

let splitString = name.split();

let splitString2 = name.split('');

// console.log(splitString);
// console.log(splitString2);

let company = "Facebook, Google, Microsoft,Apple,IBM,Oracle,Amazon";

// console.log(company.split());
// console.log(company.split(''));

// console.log(name.replace('Coding Academy','Microsoft Academy'));

// console.log(name.charAt(10));

// console.log(name.charCodeAt('A'));

// console.log(name.indexOf('c'));
// console.log(string.indexOf('because'));
// console.log(string.lastIndexOf('because'));
// console.log(name.lastIndexOf('c'));

// console.log(name.trim())

// console.log(name.startsWith('C'));
// console.log(name.endsWith('C'));





const found = name.match('c')

// console.log(found);

let count = string.match(/because/g).length;

// console.log(count);

let a1 = 'coding';
let a2 =  'Academy';

let result = a1.concat(a2);

// console.log(result);

// let repeatMe5times = name.repeat(5);

// console.log(repeatMe5times);

// 

let salary = 5000;

let annualBouns = 10000;

let onlineCourse = 15000;

let annualIncome = `the total income is ${salary+annualBouns+onlineCourse}`

console.log(annualIncome);