
/* const numbers = [1,2,3];

// const [numberOne,numberTwo,numberThree] = numbers;

let [numberOne, , , numberThree] = numbers;

console.log(numberOne,, numberThree);

const names = ['Asabeneh','Brook','David','John'];

const [firstPerson,secondPerson,thirdPerson,fourthPerson] = names

console.log(firstPerson,secondPerson,thirdPerson,fourthPerson);

const scientificConstants = [2.72,3.14,9.81,37,100];

let[e,pi,gravity,bodyTemp,boilingTemp] = scientificConstants;

console.log(e,pi,gravity,bodyTemp,boilingTemp);


const numbers = [1, 2,3];
let [numOne, , , numThree] = numbers; //2 is omitted
console.log(numOne,numThree) // 1,2,3

const names = [undefined, 'Brook', 'David', 'John']
let [ firstPerson = 'Ashbeneh', secondPerson, , fourthPerson] = names; // first and third person is omitted
console.log(firstPerson,secondPerson, fourthPerson) //Brook, John


const rectangle  = {
    width:20,
    height:10,
    area:200,
    perimeter:80
}

let {width:w,height:h,area:a,perimeter=60} = rectangle

console.log(w,h,a,perimeter);

const rect = {
    width:20,
    height:10
}

const calculatePerimeter =(rectangle) =>{
    return 2*(rectangle.width+rectangle.height)
 }

//  console.log(calculatePerimeter(rect));



const calculatePerimeter2 =  ({width,height}) =>{
    return 2*(width+height)
}

// console.log(calculatePerimeter2(rect));




const getPersonInfo = obj => {
    const skills = obj.skills;
    const formattedSkills = skills.slice(0,-1).join(', ');
    
    const languages = obj.languages;
    
    const formattedLanguages = languages.slice(0,-1).join(', ');
    
    return `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length-1]}. He speaks ${formattedLanguages} adn a little bit of  ${languages[2]}`;
}




console.log(
    getPersonInfo(person)
    
    );
    
    const person = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        age: 200,
        country: 'Finland',
        job: 'Instructor and Developer',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Redux',
            'Node',
            'MongoDB',
            'Python',
            'D3.js'
        ],
        languages: ['Amharic', 'English', 'Suomi(Finnish)']
    };

    const getPersonInfo = ({
        firstName,
        lastName,
        age,
        country,
        job,
        skills,
        languages
    }) =>{
        const formattedSkills = skills.slice(0,-1).join(', ');
        const formattedLanguages = languages.slice(0,-1).join(', ');
        return ` ${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length-1]}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}
        `
    }
    
    console.log(getPersonInfo(person));
    */

    const constants = [2.72,3.14,9.81,37,100];

    const [e,pi,gravity,humanBodyTemp,waterBoilinTemp] = constants

    // console.log(e,pi,gravity,humanBodyTemp,waterBoilinTemp);



    const countries = ['finland','estonia','sweden','denmark','norway'];

    const [fin,est,sw,den,nor] = countries

    // console.log(fin,est,sw,den,nor);

    const rectangle  = {
        width:20,
        height:10,
        area:200,
        perimeter:60
    }

    const rect = (rectangle)=>{
        return `${rectangle.width} ${rectangle.height} ${rectangle.area} ${rectangle.perimeter}`
    }

    console.log(rect(rectangle));