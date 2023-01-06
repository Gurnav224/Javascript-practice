
let space = ' ';
let firstName = 'Gurnav';
let lastName = 'Chaudhary';
let age = 22;
let country = ' India';
let city = 'Baraut';
let language = 'javascript';
let job = 'web developer';

let fullName = firstName+space+lastName;

// console.log(fullName);


let personInfoOne = firstName + ' . I am ' + age + '. I live in' + country;

// console.log(personInfoOne)


const paragraph = "my name is gurnav chaudhary. I live in India,baraut. \
I am student of bca and learning full stack web development and i love teaching."


// console.log(paragraph)


// template string

// console.log(`The sum of 2 and 3 is 5`);

let a=2;
let b =3;

// console.log(`the sum of ${a} and ${b} is ${a+b}`)

let personInfoOne3 = `I am ${fullName}. i am ${age}. I live in ${country}`
let personInfoOne4 = `I am ${fullName}. I live in ${city},${country}. I am a ${job}`

// console.log(personInfoOne3);
// console.log(personInfoOne4)

let a1= 2;
let  a2 = 3;

// console.log(`${a} is greater than ${b}: ${a>b}`);

// string method

let js = 'Javascript';

// console.log(js.length);

let myName = 'GurnavChaudhary'

// console.log(myName.length);

let firstLetter = js[0];

// console.log(firstLetter);

let secondLetter = js[1];

// console.log(secondLetter);

let thirdLetter = js[2];

// console.log(thirdLetter);

let lastletter = js[9];
// console.log(lastletter);

let lastIndex = js.length-1;

// console.log(lastIndex);


let upper = js.toUpperCase();
let name = myName.toLowerCase();

// console.log(upper,name);

// substring()

let sub = js.substring(3,5);

// console.log(sub);

let substr = '30 days of Javascript';

// console.log(substr.split(' '));

// console.log(paragraph.split(' '));

// console.log(myName.split(''))

let trimSpace = '      30 days of javascript';

// console.log(trimSpace.trim());

// include take substring as arugment return true and false

// console.log(myName.includes('rnav'));

// console.log(myName.replace('Gurnav','Gaurav '));

// charAt()


// console.log(myName.charAt(0));

let lastnum = myName.length-1;

// console.log(myName.charAt(lastnum));

let string = "30 days of javascript";


// console.log(string.charCodeAt(4));

// console.log(string.indexOf('ys'));

// console.log(string.indexOf('java'));

let string2 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

let newString =string.concat(string,string2);

// console.log(newString);

// console.log(string2.startsWith("I love"));

// console.log(string2.endsWith("love."));

let stringpattern = 'love';

let patterOne = /love/;
let patterTwo = /love/gi;



// console.log(stringpattern.match(string2));

let num = '10'
let numInt = parseInt(num)
console.log(typeof numInt) // 10

let num2 = '9.81'
let numFloat = parseFloat(num2)

console.log(typeof numFloat) // 9.81

let num3 = 9.81
let numInt3 = parseInt(num3)

console.log( typeof numInt3) // 9