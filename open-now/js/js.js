/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');
// Comment 

//variable defineres: var - let - const
let hilsen="Hej verden - nu fra en variable"; // variabel
var hej ="Hej med dig"; // variabel
const goddag ="goddag" // variabel
// hedder variabler fordi, at de kan ændre sig.

console.log(hilsen);  


// hvordan man arbejder med tal:
let aaa = 235;
let bbb = 999;
let ccc = aaa*bbb; 
let ddd = aaa+goddag+hej; 

console.log(ccc);

console.log(ccc + hilsen);
console.log(ddd); 
console.log("Summen af aaa + bbb =" + ccc); 


//-----------------------bmi beregner--------------------------
//her er h defineret til højde og w til vægt
function bmi(h,w){ 
    yourBmi = Math.floor( w / (h*h)); //Math.floor fjerner decimalerne 
    console.log("her er din BMI:" + yourBmi); 
    //document.write("Her er din BMI:" + yourBmi); 
    document.getElementById("content").innerHTML += '<h2>Her er din BMI: ' + yourBmi + '</h2>';    
}
//her er din bmi  
bmi(1.82,70);    
//------------------------bmi beregner-------------------------

//sende indhold til HTML - ikke den mest oplagte måde, anbefales ikke
document.write("Hello world"); 

//vis et billede 
function showImg(billede) {
    document.getElementById("linux").innerHTML += '<img src="images/' + billede + '" alt=billede af en fugl">';  
} 
 
//sådan bruger vi lister

//her er en liste 
var billeder = [ 
    "windows.png", 
    "linuxbird.png",
    "apple.png",
    "chromebook.png"
    
]; 

console.log(billeder); 

 

//et for loop
for (var i = 0; i <billeder.length; i++){
    console.log( "jeg skal opføre mig ordentligt" );
    showImg(billeder[i]); 
} 
