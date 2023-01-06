/*const numbers = [0,3.14,9.81,36,98.6,100]

console.log(numbers.length);
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[5]);
let lastindex = numbers.length-1
console.log(numbers[lastindex]);


const WebTechs = [
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'Redux',
    'Node',
    'MongoDB'
]


console.log(WebTechs);
console.log(WebTechs.length);

console.log(WebTechs[0]);
console.log(WebTechs[4]);

let lastindex = WebTechs.length-1
console.log(WebTechs[lastindex]);


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'IreLand',
    'Japan',
    'Kenya'
    
]

console.log(countries);
console.log(countries.length);
console.log(countries[0]);
console.log(countries[10]);

let lastindex = countries.length-1

console.log(countries[lastindex]);



const shopingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Adocado',
    'Meat',
    'Eggs',
    'Sugar'
]

console.log(shopingCart);
console.log(shopingCart[0]);
console.log(shopingCart[7]);

let lastindex = shopingCart.length-1;

console.log(shopingCart[lastindex]);


//ex1  ex2  ex3 ex4

let array = [12,42,34,52,45];

console.log(array.length);

console.log(array[0]);
console.log(array[2]);

let lastindex = array.length-1;

console.log(array[lastindex]);


//ex5 

let mixedDatatypes = ["Gurnav",234,true,undefined,"frontend","reading",false,324];

if(mixedDatatypes.length>5){
    console.log("length is greater than 5");
}

// ex6  ex7 ex8 ex9  ex10 ex11  ex12 ex13 

let itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

console.log(itcompanies);

console.log(itcompanies.length);

console.log(itcompanies[0]);

console.log(itcompanies[3]);

let lastindex = itcompanies.length-1;

console.log(itcompanies[lastindex]);

let arrayToString = itcompanies.toString()


console.log(arrayToString + "are big IT companies");



for(let i=0; i<itcompanies.length; i++){
    if(itcompanies[i]==='Microsoft'){
         console.log(itcompanies[i]);
    }
    else{
        console.log('company is not found');
        
    }
}


// ex 14  ex15  ex15 ex 17 

let itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];



// console.log(itcompanies.sort());

for(let i=itcompanies.length-1; i>=0; i--){
    itcompanies[i];
    console.log(itcompanies);
    
    
    
}

console.log(itcompanies.slice(0,3));
console.log(itcompanies.slice(4,7));
console.log(itcompanies.slice(3,5));

console.log(itcompanies.shift());

console.log(itcompanies.splice(3,4));
console.log(itcompanies.pop());

console.log(itcompanies.splice(0,itcompanies.length));

console.log(itcompanies);
// console.log(itcompanies.reverse());




const arr = Array();

console.log(arr);

const eightEmptyValues = Array(8).fill('x');

console.log(eightEmptyValues);


const firstList = [1,2,3];
const secondList = [4,5,6];

thirdList = firstList.concat(secondList)

console.log(thirdList);
console.log(thirdList.length);


console.log(thirdList.indexOf(5));
console.log(thirdList.indexOf(0));
console.log(thirdList.indexOf(1));
console.log(thirdList.indexOf(6));



const numbers = [1,2,3,4,5,1,2];


console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(0));
console.log(numbers.lastIndexOf(1));
console.log(numbers.lastIndexOf(4));
console.log(numbers.lastIndexOf(6));


console.log(numbers.includes(5));
console.log(numbers.includes(0));
console.log(numbers.includes(1));
console.log(numbers.includes(6));


console.log(Array.isArray(numbers));

const number = 100;
console.log(Array.isArray(number));

const number = [1,2,3,4,5];

console.log(number.toString());

const names = ['Ashbeneh','Mathias','Elias','Brook']

console.log(names.toString());


console.log(number.join());

console.log(names.join());
console.log(names.join(''));
console.log(names.join(' '));
console.log(names.join(',  '));
console.log(names.join(' #  '));

const number = [1,2,3,4,5];

console.log(number.slice());
console.log(number.slice(0));
console.log(number.indexOf(0,number.length));
console.log(number.slice(1,4));



const number = [1,2,3,4,5];

console.log(number.splice());
console.log(number.splice(0,1));
console.log(number.splice(0,1));
console.log(number.splice(3,6,8,9,4,4,6));


const shopinglist = ['Milk','Coffe','Tea','Honey'];

for (let i = 0; i < shopinglist.length; i++) {
    console.log(shopinglist[i]);
}

const todoList = [
    {
      task:'Learn JavaScript',
      time:'4/3/2019 8:30',
      completed:true
    },
    {
      task:'Help some in need',
      time:'4/3/2019 4:00',
      completed:false
    },
    {
      task:'Do some physical exercises',
      time:'4/3/2019 6:00',
      completed:false
    }
  ]

  for(let i=0; i<todoList.length; i++){
     let task = todoList[i].task;
     let time = todoList[i].time
     let completed = todoList[i].completed;
     
     console.log(task);
     console.log(time);
     console.log(completed);
    }
    
    
    let itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];


    for(let i=0; i<itcompanies.length; i++){
    // console.log(itcompanies[i]);
    if(itcompanies[i].includes('oo')=='oo'){
        console.log(itcompanies[i]);
    }
    else{
        console.log("not found");
    }
}



*/


function filterCompanies(itCompanies) {
    const filteredCompanies = [];
    for (let i = 0; i < itCompanies.length; i++) {
      let company = itCompanies[i];
      let oCount = 0;
      for (let j = 0; j < company.length; j++) {
        if (company[j] === 'o') {
          oCount++;
        }
      }
      if (oCount > 1) {
        filteredCompanies.push(company);
      }
    }
    return filteredCompanies;
  }
  
  const itCompanies = ["Apple", "Microsoft", "Google", "Facebook", "Oracle"];
  console.log(filterCompanies(itCompanies)); // prints ["Microsoft", "Google", "Oracle"]
  