//if
//if else
//if else if else
//switch


//check if a number is even or odd
let a=3;
if(a%2 === 0){
    console.log(`${a} is an even number`);
}else{
    console.log(`${a} is an odd number`)
}

let hasNationaId = false;
let hasSchoolId = false;
let hasBag = true;

if(hasNationaId && hasSchoolId && !hasBag){
    console.log("Enter the gate");
}else if(hasBag && hasNationaId && hasSchoolId){
    console.log("Open the bag");
}else if(hasNationaId && !hasSchoolId){
    console.log("Talk to Kife");
}else{
    console.log("Rudi nyumbani")
}
