/*function functionName(){

}

functionName();



function addTwoNumbers(){
    var numOne = 10;

    var numTwo =20;

    var sum = numOne+numTwo;
    
    console.log(sum);
}


addTwoNumbers();


function areaOfCircle(r){
    let area = Math.PI*r*r;

    return area;

}

console.log(areaOfCircle(4));

function square(number){
    let square = number*number;
    return square;
}


console.log(square(4));

function sumTwoNumbers(numOne,numTwo){
    var sum = numOne+numTwo;
    
    return sum;
    
}


console.log(sumTwoNumbers(19,32));



function printFullName(firstName,lastName){
    
    return `${firstName} ${lastName}`;
}

console.log(printFullName('Gurnav','Chaudhary'));
console.log(printFullName('Gaurav','Chaudhary'));


function sumArrayValues(arr){
    var sum =0;

    for(var i=0; i<arr.length; i++){
        sum = sum+numbers[i]
    }

    return sum;
}

const numbers = [1,2,3,5,6,4,3];

console.log(sumArrayValues(numbers));

const areaOfCircle = (radius) => {
    let area = Math.PI*radius*radius;
    
    return area;
}


console.log(areaOfCircle(19));

function fullName(firstName,lastName){

    let fullName = `${firstName} ${lastName}`

    return fullName;
    
}

console.log(fullName('Gurnav','Chaudhary'));


function addNumbers(numOne,numTwo){

    let sum = numOne+numTwo;
    
    return sum;
}

console.log(addNumbers(3,54));



function areaOfRectangle(width,height){

    let area = width*height;

    return area;
}

console.log(areaOfRectangle(3,4));


function perimeter(length,width){
    let perimeter = 2*(length+width);
    
    return perimeter;
}


console.log(perimeter(3,4));


function volumeOfRectPrism(length,width,height){

    let volume = length*width*height;

    return volume;
    
    
}


console.log(volumeOfRectPrism(2,4,3));

function areaOfCircle(r){
    let area = Math.PI*r*r;
    
    return area;
}

console.log(areaOfCircle(4));

function circumOfCircle(r){
    let circum = 2*Math.PI*r*r;

  return  circum
}

console.log(circumOfCircle(5));

function density(mass,volume){
    let density = mass/volume

    return density
}

console.log(density(100,4));

function speed(distance, time){
    let speed = distance/time;

    return speed
}

console.log(speed(50,5));

function Weight(mass,gravity){

    let Weight = mass*gravity;

    return Weight;
}

console.log(Weight(50,9.8));

function convertCelciusToFahrenheit(c){
    let f = (c*9/5)+32;
    
    return f;
}

console.log(convertCelciusToFahrenheit(105));

function BMI(Weight,height){
    
    const weightkg = Weight*0.453592;
    
    const heightM =  height*0.0254;
    
    let bmi = weightkg/(heightM**2);
    
    if(bmi<18.5){
        return "underweight";
    }
    else if(bmi<25){
        return "Normal Weight";
    }
   else if(bmi<30){
       return "overweight";
    }
    else{
        return "obese"
    }
    
    
    
}


const Weight =190;

const height = 72;

let bmicategory = BMI(Weight,height);

console.log(bmicategory);



function checkSeason(month){
    
    if(month === "December" || month === "January" || month ==="February"){
        return "winter"
    }
    else if(month === "September" || month === "October" || month ==="November"){ 
        return "Autumn"
    }
    
    else if(month === "March" || month === "April" || month ==="May"){
        return "spring"
    }
    
    else if(month === "June" || month === "July" || month ==="August"){
        
        return "summer"
    }
}



console.log(checkSeason('October'));




function findMax(a,b,c){
    return a,b,c;
}

console.log(findMax(0, 10, 5));

console.log(findMax(0, -10, -2));


function solvLinEquation(a,b,c){
    let x = (c-b)/a
    
    return x;
}

let x = solvLinEquation(10,15,20);

console.log(x);

function solvQuadEquation(a,b,c){
    
    let   root1 ,root2;
    
    
    let discriminant = b*b-4*a*c;
    
    
    if(discriminant>0){
        root1 = (-b+Math.sqrt(discriminant))/(2*a),
        root2 = (-b-Math.sqrt(discriminant))/(2*a);
        
        return `${root1} ${root2}`
    }
    else if(discriminant==0){
        root1 = root2 = -b/(2*a);
        return  `${root1} ${root2}`
    }
    else{
        let realpart = (-b/(2*a)).toFixed()
        let imgPart = (Math.sqrt(-discriminant)/(2*a)).toFixed(2);
        
        return `the roots of quadratic ${realpart} + ${imgPart} and ${realpart}-${imgPart}`
    }
}






console.log( solvQuadEquation(1,-3,10))



function printArray(a){

    for(let i=0; i<a.length; i++){
        console.log(a[i]);
    }
}


let arr = [1,2,4,5,6,9]

console.log(printArray(arr));


function swapValues(a,b){
    console.log(a,b);
    let temp =a;
    a =b ;
    b=temp;
    
    console.log(a,b);
}

swapValues(3,4);


function reverseArray(arr){
    
    let reverseArray = []
    
    for(let i=arr.length-1; i>=0; i--){
        reverseArray.push(arr[i]);
    }
    
    return reverseArray; 
    
}


let arr = [11,34,23,5,4]




let ref =  reverseArray(arr)


console.log(ref);
*/

function capitalizedarray(arr){

let uppercase = arr.toString()

return uppercase.toUpperCase()
    
}


let arr = ['a','b','b','c']

console.log(capitalizedarray(arr));