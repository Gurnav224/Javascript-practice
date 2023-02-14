// Higher order function are functions which take other function as parameter or return function as a value. the function passed as a parameter is called callback

const { text } = require("express")

// Callback -> A callback is a function passed as a parameter to other function

/*
const callback = (n) => {
    return n**2;
}


function cube(callback,n){
    
    return callback(n)*n
}

console.log(cube(callback,3))


// Returning value 

const HigherOrder = n  => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2*n+3*m+t
        }

        return doWhatEver
    }
    return doSomething
}


console.log(HigherOrder(2)(3)(10))

const numbers = [1,2,3,4,5,6,20,4,6,3];

const sumArray = arr => {
    let sum =0;

    const callBack = function (element){
        sum += element;
    }
    
    numbers.forEach(callBack);
    
    return sum;
}

console.log(sumArray(numbers));

const numbers = [1,2,4,5,3,5,6];

const sumArray = arr =>{
    let sum = 0;

    numbers.forEach(function (element){
        sum += element;
    });
    return sum;
}

console.log(
    sumArray(numbers)
    );
    
    
    function callBack(){
        console.log("Gurnav Chaudhary")
    }
    
    setInterval(callBack,3000)

    function SayHello(){
        console.log("Hello")
    }
    
    setInterval(SayHello,3000)
    
    function SayHello(){
        console.log('Helllo');
    }
    
    setTimeout(SayHello,2000)
    
    const txt = {
        "Alex": {
            "email": "alex@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 30
        },
        "Asab": {
            "email": "asab@asab.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Redux",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 25,
            "isLoggedIn": false,
            "points": 50
        },
        "Brook": {
            "email": "daniel@daniel.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux"
            ],
            "age": 30,
            "isLoggedIn": true,
            "points": 50
        },
        "Daniel": {
            "email": "daniel@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "John": {
            "email": "john@john.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Node.js"
            ],
            "age": 20,
            "isLoggedIn": true,
            "points": 50
        },
        "Thomas": {
            "email": "thomas@thomas.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "Paul": {
            "email": "paul@paul.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        }
    }
    
    
    
    // const Text = JSON.parse(txt)
    
    // console.log(Text);
    
    const numbers = [1,2,3,4,5];
    
    const squreNumber = numbers.map((num)=>num*num)
    
    console.log(squreNumber);
    
    
    
    const names = ['Asabeneh','Mathias','Elias','Brook'];

    const namesToUppercase = names.map((name)=>name.toUpperCase());
    
    console.log(namesToUppercase);
    
    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ];
    
    
    
    // const countriesToUpperCase = countries.map(function(country){
        //     return country.toUpperCase()
        //     });
        
        //     console.log(
            //         countriesToUpperCase
            //         );
            
            // arrow function
            // const countriesToUpperCase = countries.map((country)=>{
                //     return country.toUpperCase()
                // })
                
                
                //  explicit return arrow function
                const countriesToUpperCase = countries.map(country => country.toUpperCase())


console.log(
    countriesToUpperCase
    );
    
    const countries = [
        'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];


const countriesContainingLand = countries.filter(country => country.includes('land'))

// console.log(countriesContainingLand);

const countriesEndByia = countries.filter(country => country.includes('ia'))

// console.log(countriesEndByia);

const countriesHaveFiveLetters = countries.filter(country => country.length===5);

console.log(countriesHaveFiveLetters);

const scores =[ 
    {
        name:'Ashabeneh',
        score:95
    },
    {
        name:'Mathias',
        score:80
    },
    {
        name:'Elias',
        score:85
    },
    {
        name:'John',
        score:100
    }
];

const scoresGreaterEight = scores.filter((score)=>score.score>80);

console.log(scoresGreaterEight);


const numbers = [1,2,4,5,5,2];

const sum = numbers.reduce((acc,curr)=>acc+curr);

console.log(sum);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];


const result = names.every((name)=>{
    return  typeof name === 'string'
})


console.log(result);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

const ages = [24, 22,25,32,35,18];

const UseFind = names.find((name)=>name.length>7)

console.log(UseFind);



const FindAge2 = ages.find((age)=> age>24) 

console.log(FindAge2);

const UseFind2 = names.findIndex((name)=>name.length>7)

console.log(UseFind2);



const FindAge = ages.findIndex((age)=> age>24) 

console.log(FindAge);
const products = ['milk','coffee','sugar','honey','Apple','carrot'];

console.log(products.sort());


const numbers = [9.81,3.14,100,36];



numbers.sort(function(a,b){
    return a-b
})
console.log(numbers);


numbers.sort(function (a,b){
    return b-a;
})

console.log(numbers);


const users = [{name:'Asabeneh', age:150}, {name:'Brook', age:50}, {name:'Eyo', age:100},{name:'Elias', age:22}];


users.sort((a,b)=>{
    if(a.age<b.age) return -1;
    if(a.age>b.age) return 1;
    return 0;
})
console.log(users);


//

const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const showCountry = countries.forEach((country)=>{
    return console.log(country);
})


showCountry;

const filterName = names.forEach(name => console.log(name))

filterName;


const NumArr = numbers.forEach(num => console.log(num))

NumArr

const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const countryToUpperCase = countries.map(country => country.toUpperCase());

// console.log(countryToUpperCase);

const namesToUppercase = names.map(name => name.toUpperCase());

// console.log(namesToUppercase);

const countryEndbyLand = countries.filter(country => country.includes('land'));

// console.log(countryEndbyLand);

const countryHaveSixCharacter = countries.filter(country => country.length === 6);

// console.log(countryHaveSixCharacter);


const CountryHaveE = countries.filter(country => country.includes('e'));

console.log(CountryHaveE);
*/


const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const firstChain = countries.map(country => country.toUpperCase()).filter(item => item.includes('E'));

// console.log(firstChain);


const  getStringLists = countries.filter(country => typeof country === "string");

// console.log(getStringLists);


const SumofNum = numbers.reduce((acc,curr)=> acc+curr)

// console.log(SumofNum);

const ConcateCountry = countries.reduce((country,index)=>country+'  ' +index ) 

// console.log(ConcateCountry + ' are north European Countries');



const countryContainLand = countries.every(country => country.includes('land'));

// console.log(countryContainLand);

const countryHaveSixCharacter = countries.findIndex(country => country.length ===6)

// console.log(countryHaveSixCharacter);

const arrHaveNorway = countries.findIndex(country => country === 'Norway')


// console.log(arrHaveNorway);

const arrHaveRussia = countries.findIndex(country => country==='Russia');

// console.log(arrHaveRussia);



const categorizeCountries = countries.filter(country => country.includes('stan'));

// console.log(categorizeCountries);

function getInitialLettersCount(countries){

    const lettersCount = {}

    countries.forEach(country=> {
        const initialLetter = country.charAt(0).toUpperCase();

        if(lettersCount[initialLetter]){
            lettersCount[initialLetter]++;
        }
        else{
            lettersCount[initialLetter] =1;
        }
    });

    const result = Object.entries(lettersCount).map(([letter,count])=>{
        return {letter,count};
    })
    return result;
}

const letterCount = getInitialLettersCount(countries);

// console.log(letterCount);

// const getFirstTenCountries = countries.map(country => country)

function getFirstTenCountries(){
    let firstTenCountries = [];

    for(let i=10; i>0; i--){
        firstTenCountries.push(countries[i])
    }

    return firstTenCountries
}

// console.log(getFirstTenCountries());


const CountryName = countries.filter(country => country.includes('France'));

// console.log(CountryName);

const SortCountry = countries.sort();

console.log(SortCountry);

