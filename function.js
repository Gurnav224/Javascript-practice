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

function capitalizedarray(arr){

let uppercase = arr.toString()

return uppercase.toUpperCase()

}


let arr = ['a','b','b','c']

console.log(capitalizedarray(arr));


function additem(item,item2){
    let arr = []
    arr.push(item,item2)

    return arr;
}

console.log(additem(3,4));


function removeItem(index,array){

    let items =array;

    items.splice(index,1)
    
    return items

}


let myArray = ['apple','banana','orange'];


let newArray = removeItem(1,myArray);

console.log(newArray);


function sumOfNumbers(num){

    let sum =0;

    for(let i=0; i<=num; i++){
        sum = sum+i;

    }
    return sum;

}



console.log(
    sumOfNumbers(10)
    
    );
    
    
   
    function sumOfOdds(num){
        let sum =0;

        for(let i=0; i<=num; i++){
            
            if(i%2==1){
                sum +=i;
            }
        }
        return sum;
    }


    console.log(sumOfOdds(100));
    
    function sumOfEven(n){
        let sum =0;

        for(let i=0; i<=n; i++){
            if(i%2==0){
                sum +=i;
            }
        }

        return sum;

    }

    console.log(sumOfEven(100));
    
    
    function evenAndOdds(num){

        let counteven =0;
        let countodd =0;
        for(let i=0; i<=num; i++){
            if(i%2==0){

             counteven++;
            }
           else{
            countodd++;
           }
        }

      return   {counteven,countodd};
    }
    
    
    console.log(evenAndOdds(100));
    
 console.log();
 
 function evenAndOdds(n){
     let evenCount =0;
     let oddCount =0;

     while(n>0){
         let digit = n%10;
         if(digit%2===0){
            evenCount++;
        }
        else{
            oddCount++;
        }
        n = Math.floor(n/10)
    }
    return {evenCount,oddCount}
}


let count = evenAndOdds(1234567890)


console.log(count);

let odd = count.oddCount
let even = count.evenCount

console.log(`The number of odds are ${odd}`);
console.log(`The number of evens are ${even}`);


function sum(){
    let total = 0;

    for(let i=0; i<arguments.length; i++){
        total +=arguments[i];
    }
    return total;
}

console.log(sum(1,2,3,4));


function randomUserIp(){
    let octet1 = Math.floor(Math.random()*256)
    let octet2 = Math.floor(Math.random()*256)
    let octet3 = Math.floor(Math.random()*256)
    let octet4 = Math.floor(Math.random()*256)

    return `${octet1}.${octet2}.${octet3}.${octet4}`
}

console.log(randomUserIp());


function randomMacAddress(){
    const hexChars = '0123456789ABCDEF';
    let macAddress = '';

    for(let i=0; i<12; i++){
        macAddress += hexChars[Math.floor(Math.random()*16)]

        if(i%2==1 && i!==11){
            macAddress += ':';
        }
    }

    return macAddress;
}


console.log(randomMacAddress());



function GenrateRandomHexColor(){

    let Color = Math.floor(Math.random()*16777215).toString(16);
    let BghexaColor = "#"+ Color;
    console.log(BghexaColor);
}

GenrateRandomHexColor();

function userIdGenerator(){
    
    let userId = Math.floor(Math.random()*1000000000).toString(16);
    
    console.log(userId)
}

userIdGenerator();


function userIdGenerated(charlength){
let text = "";
let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for(let i=0; i<charlength; i++){
    text += char.charAt(Math.floor(Math.random()*char.length))
}

console.log(text)
}


userIdGenerated(7)



var noOfChar = 5
console.log(noOfChar);

var noOfId = 5
console.log(noOfId);

function userIdGeneratedByUser(){
    let text = ""
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for(let i=0; i<noOfId; i++){
      
      
      
      for(let i=0; i<noOfChar; i++){
          text += char.charAt(Math.floor(Math.random()*char.length).toString() ) 
        }
        
    }
    return text 
}



console.log( userIdGeneratedByUser())



function rgbColorGenerator(){
    let rgb1 = Math.floor(Math.random()*256);
    let rgb2 = Math.floor(Math.random()*256);
    let rgb3 = Math.floor(Math.random()*256);
let rgb = `rgb(${rgb1},${rgb2},${rgb3})`;


return rgb;

}



console.log(rgbColorGenerator())


function arrayOfHexaColors(){

    let hexColor = ['#FFF','#EEE','#CCC','#ece1','#000','#f1f1f1','#CCC','#e32e1','#0000','#f1f1f1'];

    for(let i=0; i<Math.floor(Math.random()*hexColor.length); i++) {
        
        var randomHexFromArray =  hexColor[i]
    }

    
    return randomHexFromArray;
}

console.log(arrayOfHexaColors())


function arrayOfHexaColors(){

    let hexCode = "123456789abcdef";
    let loopCount = parseInt(Math.random()*50);
    let hexColorArr = [];
    
    for(let i=0; i<=loopCount; i++){
        let hexChar = [];
        
        for(let x=0; x<6; x++){

            hexChar.push(hexCode[parseInt(Math.random()*hexCode.length)])
        }

        console.log(hexChar)
        
        hexColorArr.push('#'+hexChar.join(''));
        
        console.log(hexColorArr)
    }
    return hexColorArr;
    
}

console.log(arrayOfHexaColors());


function arrayOfRgbColors(){

    let loopCount = parseInt(Math.random()*50);
    let rgbArr = [] ;
let rgb;
    for(let i=1; i<=loopCount; i++){
        
        for(let x=0; x<3; x++ ){
            
            
            let rgb1 = Math.floor(Math.random()*256)
            let rgb2 = Math.floor(Math.random()*256)
            let rgb3 = Math.floor(Math.random()*256);
            
            rgb  = `rgb(${rgb1},${rgb2},${rgb3})`;
        }
        // console.log( rgb)
        
        rgbArr.push(rgb)
        
        
        
    }
    return rgbArr
}


console.log(arrayOfRgbColors());


function hexToRgb(hex){

    let r = parseInt(hex.slice(1,3),16);
    let g = parseInt(hex.slice(3,5),16);
    let b = parseInt(hex.slice(5,7),16);
    
    let rgb = `rgb(${r},${g},${b})`;

    return rgb;
}


let hex = hexToRgb("#e223f3");

console.log(hex);

function hexValue(c){
    let hex = c.toString(16);

    return hex;
}

function convertRgbToHexa(r,g,b){
 
    return "#" + hexValue(r) +hexValue(g) +hexValue(b)
}

console.log(convertRgbToHexa(28,135,201))

function generateColors(type,n){

    let colArr = [];
    
    if(type === "rgb"){

        
        let rgb = '';

 
        for(let i=0; i<n; i++){
            
            for(let x =0; x<10; x++){
                
                
                let r = parseInt(Math.random()*256);
                let g = parseInt(Math.random()*256);
                let b = parseInt(Math.random()*256);
                
                rgb = `rgb(${r},${b},${g})`;
            }
            colArr.push(rgb);
        }
    }
    
    else if(type === "hexa"){
        let allhexCode = '123456789abcdef';
        
        for(let i=0; i<n; i++){
            
            let hexChar = [];
            
        for(let x=0; x<6; x++){
           hexChar.push(allhexCode[parseInt(Math.random()*allhexCode.length)]);
        }
        
        colArr.push("#"+hexChar.join(''));
    }
    
}
    else {
        console.log("type should not equal to rgb or hexa")
    }
    
    return colArr;
}


let col = generateColors("hexa",2);
let col2 = generateColors("rgb",2);

console.log(col)

console.log(col2);




function generateColors(type,n){
let rgb = '';
let ArrOfCol = [];
for(let i=1; i<=n; i++){
    if(type ==="rgb"){



                
                let r = parseInt(Math.random()*256);
                
                let g = parseInt(Math.random()*256);
                
                let b = parseInt(Math.random()*256);
                
                rgb =  `rgb(${r},${g},${b})`;
            
            ArrOfCol.push(rgb);
        }
        
        else if(type==="hexa"){
            
            let hexDigits = "123456789abcdef";
            
            let randomHex = ""
            
            for(let x=0; x<6; x++){
                randomHex += hexDigits.charAt(Math.floor(Math.random()*hexDigits.length))
            }
            ArrOfCol.push("#"+randomHex)
        }
    }
          
    
      
    
    
    return ArrOfCol;
}


let rgbCol = generateColors("rgb",3);

let hexCol = generateColors("hexa",3);

console.log("rgb",rgbCol)

console.log("hex",hexCol)


function shuffleArray(array){

    for(let i=array.length-1; i>0; i--){

        var j= Math.floor(Math.random()*(i+1));
        
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


let arr = [1,6,7,8,9,2,3,4,5];

shuffleArray(arr)

console.log(arr)


function shuffleArray(array){

    
    return array.sort(()=> Math.random()-0.5);
}




let arr = [1,2,3,4,5,6,7,8,9];
shuffleArray(arr);

console.log(arr);


function factorial(num){
    let fact =1;
    for(let i=1; i<=num; i++){
      fact = fact*i

    }

    return fact
}

let fac = factorial(5);

console.log(fac);

function isEmpty(arr){

   
    if(arr.length===0){
        
        console.log("Array is empty!");
    }

    return arr
}


let array = [1,2,3,4];



console.log(isEmpty(array))

function sum(){
    var sum =0;
    
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1,2,4,4));


function sumOfArrayItems(array){

    let sum =0;

    
    for(let i=0; i<array.length; i++){
        sum += array[i];
        if((typeof array[i])==='number'){


            console.log( array[i] + " should be integer")
        }
        else{
            console.log( array[i] + " should not be integer")

            
        }
        
    }

    return sum;
}



let arr= [1,2,3,4,5,6,7,8,9, "abc"];


console.log(sumOfArrayItems(arr))



function modifyArray(array){


    for(let i=1; i<array.length; i++){

        if(array[i]===array[5]){
            
             
            return array[i].toUpperCase();
        }
        
        else if(array.length <5){
            
            return "item not found";
        }

    }
    
}

let arr = ['Avocado', 'Tomato', 'Potato','Mango',"perer",'sfdlk']


console.log(modifyArray(arr));


function isPrime(num){
    
    if(num == 1){
        return num + " is not prime";
    }
    else if(num === 2){

        return num +  " is Prime ";
    }
    
    else {
        
        for(let i=2; i<num; i++){
            if(num%i===0){
                return num + " is not  Prime"
            }
        }
        
        return  num + " is Prime "
    }
    
}


console.log(isPrime(11))
console.log(isPrime(24))
console.log(isPrime(19))
console.log(isPrime(36))





const allUnique = arr => arr.length === new Set(arr).size;

console.log(allUnique([1,2,1,3,4]))


function allUnique(arr){
 let n = arr.length;
 
 let s = new Set();
 
 for(let i=0; i<n; i++){
     s.add(arr[i]);
 }

 return (s.size === arr.length)
}

let arr = [1,2,4,2,5]


if(allUnique(arr)){
    console.log("All element are unique")
}
else{
    console.log("not all element are unqiue")
}




function sameType(arr){
    
    let first = arr[0];

    for(let i=1; i<arr.length; i++){
        if(typeof arr[i] === typeof first)
            return false;
        
        return true;
    }
}

let arr = [1,2,5,6,8];

if(sameType(arr)){
    console.log("all elements are same")
}
else {
    console.log("all element are not same")
}


function isValidVariable(str,n){
    
    if (!((str[0] >= 'a' && str[0] <= 'z')
    || (str[0]>= 'A' && str[0] <= 'Z')
    || str[0] == '_'))
    return false;
    
    
    for (let i = 1; i < str.length; i++)
    {
        if (!((str[i] >= 'a' && str[i] <= 'z')
            || (str[i] >= 'A' && str[i] <= 'Z')
            || (str[i] >= '0' && str[i] <= '9')
            || str[i] == '_'))
            return false;
        }
        
        return true;
}


let str = 'IsValid';

let n = str.length;


if(isValidVariable(str,n)){
    console.log("valid")
}
else {
    console.log("is not valid")
}
*/


function sevenRandomNumbers(quantity,max){
    let newArr = [];


    while(newArr.length<quantity){
        var randomNum = Math.floor(Math.random()*max)+1;
        if(newArr.indexOf(randomNum)===-1) newArr.push(randomNum)
    }

return newArr


}



console.log(sevenRandomNumbers(7,9))