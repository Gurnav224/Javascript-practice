

// for(let i=0; i<=5; i++){
//     console.log("for-loop" );
// }

// let i=0;

// while(i<=8){
//     console.log("while-loop");
//     i++;
// }

// let i=0;

// do{
//     console.log(i);
//     i++;

// }while(i<=5)

//ex1 loops
/*
for(let i=0; i<=10; i++){
    console.log(i);
}

let i=0;

while(i<=10){
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i<=10)


for(let i=10; i>=0; i--){
    console.log(i);
}


let i=10;

while(i>=0){
    console.log(i);
    i--;
}


do{
    console.log(i);
    i--;
    
}while(i>=0)
let hash = " ";

for(let i=0; i<=5; i++){
    for(let j=0; j<i; j++){
        hash += "#";
    }
     hash +="\n"
}

console.log(hash);

let myarray = ['Html','css','javascript'];

for(let i=0; i<myarray.length; i++){
    console.log(myarray[i]);
}
// ex5

for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}


for(let i=0; i<=100; i++){
    if(i%2==1){
        console.log(i);
    }
}



let sum =0;

for(let i=0; i<=100; i++){
    sum +=i;
}
console.log(sum);
*/


let oddsum =0;
let evensum =0;

for(let i=0; i<=100; i++){
    if(i%2==0){
        evensum +=i;
    }
    else if(i%2==1){
        oddsum +=i;
    }
}

console.log(`the sum of all even is ${evensum}. and the sum of all odds is ${oddsum}`);