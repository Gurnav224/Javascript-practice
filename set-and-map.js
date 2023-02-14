/*const companies = new Set();

console.log(companies.size);


    companies.add('Google')
    

    companies.add('Facebook')
    

    companies.add('Amazon')
    

    companies.add('Oracle')
    
companies.add('Microsoft');

console.log(companies.delete('Google'));
console.log(companies.has('Google'));
console.log(companies.has('Facebook'));
console.log(companies.size);




companies.clear();

console.log(companies);



const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const langSet = new Set(languages);

console.log(langSet);

const counts = [];

const count = {};


for(const l of langSet){
    const filteredLang = languages.filter(lng => lng ===l)
    // console.log(filteredLang);
    
    counts.push({lang:l,count:filteredLang.length})
}

//   console.log(counts);

const setOfLangauages = new Set(languages);

for(const language of setOfLangauages){
    // console.log(language);
  }
  
  
  let a = [1,2,3,4,5];

  let b = [3,4,5,6];

  let c = [...a,...b];
  
  let A = new Set(a);

  let B = new Set(b);

  let C  = new Set(c);
  
  //   console.log(A,B,C);
  
  let fil = a.filter(num => !B.has(num));
  
  console.log(fil);
  
  
  
  
  
  let  countries = [
      ['Finland', 'Helsinki'],
      ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const map = new Map(countries);



console.log(countries);


const countriesMap = new Map();

console.log(countriesMap.size);

countriesMap.set('Finland','Helsinki');

countriesMap.set('sweden','Stockholm');

countriesMap.set('Norway','Oslo');

console.log(countriesMap.has('Finland'));

for(const [country,city] of countriesMap){
    console.log(country,city);
}


const emptySet = new Set();

for(let i=0; i<10; i++){
    emptySet.add(i)
}

emptySet.clear()

console.log(emptySet);


const myArray = ["apple", "banana", "orange", "kiwi", "grape", "pear"];

const newSet = new Set()


for(let i=0; i<5; i++){
    
    newSet.add(myArray[i])
}

console.log(newSet);

const countryMap = new Map();

countryMap.set('india',5);

countryMap.set('America',7)

countryMap.set('nepal',5)

console.log(countryMap);
*/

let a = [1,2,3,4,5];

let b = [4,5,6,7,8];

let c = [...a,...b]

let C = new Set(c)

let B = new Set(b)
// console.log(c);

const fill = a.filter(num => !B.has(num))

console.log(fill);