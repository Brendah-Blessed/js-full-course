//if
//if else
//if else if else
//switch


//check if a number is even or odd
let a = 3;
if (a % 2 === 0) {
    console.log(`${a} is an even number`);
} else {
    console.log(`${a} is an odd number`)
}

let hasNationaId = false;
let hasSchoolId = false;
let hasBag = true;

if (hasNationaId && hasSchoolId && !hasBag) {
    console.log("Enter the gate");
} else if (hasBag && hasNationaId && hasSchoolId) {
    console.log("Open the bag");
} else if (hasNationaId && !hasSchoolId) {
    console.log("Talk to Kife");
} else {
    console.log("Rudi nyumbani")
}
//switch
let day = 7;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter a valid day");
        break;
}
