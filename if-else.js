/*
let isRaining = true;

if(isRaining){
    console.log('You need a rain coat.');
}
else{
    console.log('no need for a rain coat.');
}


let weather = 'cloudy';

if(weather === 'rainy'){
    console.log('You need a rain coat.');
}
else if(weather === 'cloudy'){
    console.log('It might be cold, you need a jacket.');
}
else if(weather === 'sunny'){
    console.log('Go out freely');
}
else{
    console.log('No need for rain coat.');
}

var weather = 'sunny';

switch (weather){
    case 'rainy':
        console.log('You need a rain coat.');
        break;
    case 'cloudy':
        console.log('It might be cold, you need a jacket.');
        break;
        
        case 'sunny':
            console.log('No need for rain coat.');
            break;
            
        default:
            console.log('No need for rain coat.');
            break;
        }
        
        var readline = require('readline-sync')

        var dayUserInput =readline.question('what day is it? \n');
        
        var day = dayUserInput.toLowerCase();
        
        switch(day){
            case 'monday':
                console.log("Today is Monday");
                break;
                case 'tuesday':
                    console.log('Today is Tuesday');
                    break;
                    
                    case 'wednesday':
                        console.log('Today is wednesday');
                        break;
                        
                        case 'thursday':
                            console.log('Today is thursday');
                            break;
                            case 'friday':
                                console.log('Today is friday');
                                break;
                                case 'saturday':
                                    console.log('Today is saturday');
                                    break;
                    case 'sunday':
                        console.log('Today is sunday');
                        break;

                        default:
                            console.log('it is not a week day');
                            break;
        }
        
        
        let isRaining = true;
        
        isRaining?console.log("you need a rain coat"):console.log('No need for a rain coat.');
        
        
        var userAge = readline.question("Enter your age \n");

        if(userAge>=18){
            console.log('you are old enough to drive');
        }
        else{
            console.log(`you are left with 3 years to drive`);
        }
        
        
        //que-> 2
        
        
        var myAge = readline.question("Enter my age \n");
        
        var yourAge = readline.question("enter your age \n")
        
        if(myAge>yourAge){
            console.log(`i m older than you ${myAge - yourAge} years`);
        }
       else{
           console.log(` you are  older than me  ${yourAge - myAge} years `);
        }
        
        //que->3
        
        let a = 5;
        let b = 3;
        
        if(a>b){
            console.log(`${a} is greater than ${b}`);
        }
        else{
            console.log(`${b} is greater than ${a}`);
        }
        
        // ques -> 4
        
        
        let grade =  readline.question("Enter your grade");

        if(grade<=100 && grade>=80){
            console.log("A");
        }
        else if(grade<=79 && grade>=70){
            console.log("B");
        }
        else if(grade<=69 && grade>=60){
            console.log("C");
        }
        else if(grade<=59 && grade>=50){
            console.log('D');
        }
        else{
            console.log("F");
        }
        
        var readline = require('readline-sync');


        var season = readline.question("Enter current season ");
        
        if(season === 'autumn'){
        console.log('September,October,November,The season is Autumn');
    }
     else if(season === 'winter'){
         console.log('December,January,February,the season is winter');
        }
        else if(season === 'spring'){
           console.log('March, April,May, the season is spring');
        }
     else if(season === 'summer'){
         console.log('June july august the season is summer');
        }
        else{
        console.log('season is not found');
     }
         */