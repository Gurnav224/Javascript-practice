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
    */