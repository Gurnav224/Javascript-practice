
/*
function arrayOfHexaColors(){
let allhexCode = '123456789abcdef';
let randomArr = parseInt(Math.random()*50);
let arrHexCol = [];

for(let i=1; i<randomArr; i++){
    let hexChar = [];

    for(let i=0; i<6; i++){
        hexChar.push(allhexCode[parseInt(Math.random()*allhexCode.length)])
    }

    arrHexCol.push("#"+hexChar.join(''));
}
return arrHexCol;
}


console.log(arrayOfHexaColors());


function randomRgbColor(){

    let rgb = '';

    let loopRun = parseInt(Math.random()*16);
    
    let rgbArr = [];
    
    for(let i=0; i<loopRun; i++){
        
        for(let x=0; x<10; x++){
            
            
            let rgb1 = parseInt(Math.random()*256);
            let rgb2 = parseInt(Math.random()*256);
            let rgb3 = parseInt(Math.random()*256);
            
            rgb = `rgb(${rgb1},${rgb2},${rgb3})`;
        }
        
        rgbArr.push(rgb)
        
    }
    return rgbArr;
    
    
    
}


console.log(randomRgbColor())



*/
function generateColors(type, n) {
    let result = [];
    for (let x = 0; x < n; x++) {
      if (type === "rgb") {
        let num = Math.round(0xffffff * Math.random());
        let r = num >> 16;
        let g = (num >> 8) & 255;
        let b = num & 255;
        result.push("rgb(" + r + ", " + g + ", " + b + ")");
      }
       else if (type === "hexa") {


        let hexDigits = "0123456789ABCDEF";
        let randomHex = "";
        for (var i = 0; i < 6; i++) {
          randomHex += hexDigits.charAt(
            Math.floor(Math.random() * hexDigits.length)
          );
        }
        result.push("#" + randomHex);

        
      } else {
        console.log("type not applicable");
      }
    }
    return result;
  }
  console.log("rgb", generateColors("rgb", 3));
  console.log("hex", generateColors("hexa", 3));
  