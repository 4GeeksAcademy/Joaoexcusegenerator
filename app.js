let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let mySentence = ""
let myExcuse = document.getElementById("excuse");

function randMath (array){return Math.floor(Math.random()* array.length)}

function myFunc (myArra1,myArray2,myArray3,myArray4){
    mySentence = myArra1[randMath(myArra1)] +" "+ myArray2[randMath(myArray2)] +
    " "+ myArray3[randMath(myArray3)] +" "+ myArray4[randMath(myArray4)]
    return mySentence
}

myExcuse.innerText = myFunc(who,action,what,when)


