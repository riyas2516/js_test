// ********************1.reverse a string******************************
function stringReverse(str){
return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
 }).join(' ');
 }
console.log(stringReverse('Welcome to this Javascript Guide!')) 
// *********************2.append an object to an array**********************
function addObject(arr,obj){
         arr=[...arr,age]
         console.log(arr)
     }
     let names=['riyas','barath']
     let role={person1:'frontend-developer',person2:'fullstack-developer'}
     addObject(names,role)
// **************************************************************
let armstrongNumber=0;
const num = 372;
let temp = num;
while (temp > 0)
{
    let remainder = temp % 10;
    armstrongNumber = armstrongNumber+ remainder * remainder * remainder;
    temp = parseInt(temp/10);
}
if (add == num)
{
    console.log('Yes');
}
else {
    console.log('No');
}