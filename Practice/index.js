//create a javascript program that prompts a user 
/**a  user to enter 3 numbers and displays the largest of the three
 * should also display a message if the numbers are equal
 * should also display a message if the user enter input that is not a number
 * 
 * hint use logical operator AND, comparison operators eg greater than
 * and if statements
 */

 const firstName = window.prompt("Enter your name")  
 const secondName = window.prompt("Enter your name")  
 const thirdName = window.prompt("Enter you name") 

 let a = Number(firstName)
 let b = Number(secondName)
 let c = Number(thirdName)

 if(a>b && a>c){
    alert(" A  is greater")
 }else if(b>c && b>a ){
    alert(" B is greater")
 }else if(c>a && c>b){
    alert("C is greater")
 }else if(b===c && b===a ){
    alert("It is equal")
 }else{
    alert("Not Valid")
 }       

    