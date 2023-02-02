/*

const person = {
    firstName:"Gurnav",
    lastName:"Chaudhary",
    age:19,
    skill:[
        'Html',
        'css',
        'javascript',
        'React',
        'python',
        'D3.js',
        'frontEnd',
        'Mongodb',
        'node'
    ],
    getfullName:function(){

        return `${this.firstName} ${this.lastName}`
    }

    
}

person.nationality = "indian";
person.country = 'india';





console.log(person.firstName) 
console.log(person.lastName)

console.log(person.nationality);
console.log(person.country)

// access by values

console.log(person['age'])

console.log(person['skill']);

console.log(person.getfullName())

const copyPerson = Object.assign({},person);

console.log(copyPerson);




const rectangle = {
    length:20,
    width:20,
    getArea:function (){
        return `${this.length}*${this.width}`
    },
    getPerimeter:function(){
        return  2*this.width*this.length
    }
}



console.log(rectangle.getArea());

console.log(rectangle.getPerimeter());



const person = {
    name:'Gurnav',
    age:20,
    country:'India',
    skill:['html','css','js'],
    address:{
        street:'main_road',
        pobox:250611,
        city:'baraut'
        
    },
    getPersonInfo: function(){
        return `I am ${this.name} and i live in ${this.country}. i am ${this.age}`
    }
}


const copyPerson = Object.assign({},person);


console.log(copyPerson)


const keys = Object.keys(copyPerson);

console.log(keys);


const inkeys = Object.keys(person.address);

console.log(inkeys)

const values = Object.values(person);

console.log(values);

const entries = Object.entries(copyPerson);

console.log(copyPerson.hasOwnProperty('name'))

const now = new Date();

const year = now.getFullYear();

const month = now.getMonth()+1;

const date = now.getDate();

const hour = now.getHours();

const minutes = now.getMinutes();

const second = now.getSeconds();


console.log(`${second}:${minutes}:${hour},${date}/${month}/${year}`);

//ex1 


const now = new Date();

const year = now.getFullYear();

const month = now.getMonth()+1;

const date = now.getDate();

const hour = now.getHours();

const minute = now.getMinutes();


console.log(`${minute}:${hour} ${date}/${month}/${year}`)



const date = new Date();

const getDate = date.getDate();

const Month = date.getMonth()+1;

const year = date.getFullYear();

const hour= date.getHours();

const minute = date.getMinutes();
f


console.log(`${getDate}/${Month}/${year} ${hour}:${minute}`)

const dog = {
    name:"chilu",
    legs:4,
    color:"black",
    age:6,
    bark:function(){
        return "woof woof";
    }
}

dog.breed = "pitbull";

dog.getDogInfo = function(){
    return ` dog name is ${dog.name}dog is ${dog.age} year old`
}

console.log(dog)
console.log(dog.getDogInfo())

const personAccount = {
    firstName:"Gurnav",
    lastName:"Chaudhary",
    Incomes:7000,
    expense:5000,
    totalIncome:function (){
        return this.Incomes;
    },
    totalExpense:function(){
        return this.expense;
    },
    accountInfo:function(){
        return this.firstName + this.lastName;
    }
    
}


console.log(personAccount);

console.log(personAccount.totalIncome());

console.log(personAccount.totalExpense())

console.log(personAccount.accountInfo())


personAccount.addIncome = function(){
    return 25000;
}

console.log(personAccount.addIncome())


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

  users.gurnav = {
    email:"chaudharyg856@gmail.com",
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
   }


  const values  = Object.values(users);

  
  
      



      let count =0;
      
      
      for(let i=0; i<values.length; i++){


       if(values[i].isLoggedIn ===true ){
           console.log(values[i]);
           
           
           count = count+1;
        }
    }
    console.log("Logged In user count",count)
    
    
    
    

    let pointcount =0
    for(let j=0; j<values.length; j++){
        
        if(values[j].points>=50){
            console.log(values[j])
            pointcount = pointcount+1;
        }
         
    }
    console.log("Points having greater than or equal to 50 ",pointcount)



 

    
    
// console.log(users.name)



const key = Object.keys(users);

// console.log(key);

const pror = Object.values(users);

// console.log(pror);
*/

const library = [
    {
        serialNo:1001,
        bookName:"eloquent javascript",
        author:"not avalable",
        pages:394,
        available:true
    },

    {
        serialNo:1002,
        bookName:"you don't know js",
        author:"not avalable",
        pages:1344,
        available:true
    },

    {
        serialNo:1003,
        bookName:"30dayofjavascript",
        author:"not avalable",
        pages:94,
        available:true
    },

    {
        serialNo:1004,
        bookName:" javascript for everyone",
        author:"not avalable",
        pages:3994,
        available:true
    }
]


for(let i=0; i<library.length; i++){
    console.log(library[i].bookName)
}


