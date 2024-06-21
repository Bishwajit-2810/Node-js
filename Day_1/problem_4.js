var prompt = require('prompt-sync')();
const guestList=["Bishwajit","joy","shafi"];
let name = prompt("Enter your Name: ");
const sort=guestList.find((Name)=>Name==name);
if(sort==undefined){
    console.log("Sorry, Not found in guest list");
}
else{
    console.log(`Hello ${sort}!`);
}