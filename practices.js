


       
     // const select = document.querySelector('select');
      //const para =  document.querySelector('p');
      //select.addEventListener('change', setWeather);



/*
function setWeather() {

    const choice = select.value;

    if(choice === 'sunny'){
        para.textContent = "It is nice and Sunny outside";


    } else if(choice === 'rainy') {
        para.textContent = "Rain is falling outside; take rin coat";

    } else if (choice == 'snowing') {
        para.textContent = "the snow is comin it is freezing! Best to stay in with a cup od Tea";


    } else if(choice === "overcast") {
        para.textContent = "it isn\'t raining, but the sky is grey"
    } else {
        para.textContent = "";
    }
}

*/ 


//

/*
let cheese = 'Cheddar';

if(cheese) {
    console.log('yay! Cheese available for making cheese on toast.');

} else {
    console.log('No cheese on toast for you today')

}



function setWeather() {

    const choice = select.value;
    
  switch (choice) {
    case 'sunny':
   para.textContent = 'It is nice and sunny outside today';
   break;

   case 'rainy': 

   para.textContent = 'Rain is falling outside;'
  break;
  
  case 'snowing' :
    para.textContent = 'The snow is coming down';

    break;
    case 'overcast':
        para.textContent =" It isn\'t raining but sky is grey"

        break;
        default:
            para.textContent = '';
}

}

*/ 


//let year = prompt('when did you graduate from Sec school?')

//if(year == 2011){
  //  alert('your Batch was nice');

//} else if ( year > 2011){
  //  alert('your set had issues');

//} else if( year < 2011 ){
  //  alert('2011 set was the best')
//}




// switch (expression) {
	//case x:
		// execute case x code block
	//	break;
//	case y:
		// execute case y code block
		//break;
	//default:
	// execute default code block
//}

/*

//sWITCH
const day = new Date().getDay(); //For time and date

switch(day) {
    case 0: 
            console.log("It's Sunday, time to relax");
            break;

    case 1: 
            console.log("Happy Monday");
            break;
    case 2: 
           console.log("It's Tuesday. You got this!");
           break;
    case 3:
           console.log("Hump day already");
           break;

    case 4: 
          console.log("Just one more day til the weekend");
          break;
    case 5:

        console.log("Happy Friday!");
        break;

    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    default:
        console.log("Something went horribly wrong...");


}

*/
//Two

/*
const grade = prompt(" what is your grade?")

if(grade == 100){
    alert("A, Qualified")

} else if(grade == 90){
    alert("nice qualified")

} else if(grade >= 50){
    alert("fair,")
} else{
    alert("you failed")
}

*/

/*
const grade = 87;

switch(true) {
    //if score is 90 or greater
    case grade >= 90:
        console.log("A");
        break;
    //if score is 80 or greater
    case grade >= 80:
        console.log("B")
        break;
   //IF SCOR IS 70 OR GREATER
   case grade >= 70:
        console.log("C");
        break;
    
   //If score is 60 or greater
   case grade >= 60:
       console.log("D");
       break;

//Anything 59 or below is failing
    default:
        console.log("F")
}
//eXAMPLE 3:

const month = new Date().getMonth();

switch (month) {
    //January, Fabruary, March

    case 0:
    case 1:
    case 2:
         console.log("winter");
         break;
   //April, may June
   
   case 3:
   case 4:
   case 5:
       console.log("Spring");
       break;

  //July, August, September
    case 6:   
    case 7:   
    case 8:
        console.log("Summer");
    //october, November, December
    case 9:       
    case 10:              
    case 11: 
     console.log("Autumn");
     break;
default:
    console.log("SOMETHING WENT WRONG");     
}

*/

/*
 Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
*/
 


//Functions 
//function name(parameter1, parameter2, ---parameterN){
    //body
//}

/*
function favoritesTeam(club) {
    return club  + "" + "is my favorite club"
}

console.log(favoritesTeam('Chelsea'))

function loveFm(){
    console.log('we are going off by 12pm');
}

loveFm();
loveFm();
*/ 

//declaration is only visible inside the code block
//if its outside it wont work

//for it to work we will use  expression

//welcome = function()


/*

function school(poly, uni){
   console.log('i attended' + poly +':' + "not" + uni ); 
}

school('Bori', 'Ph')



let age = prompt("What is your age");

if( age > 20){
    alert("Access gained");
} else{
    alert("Access Denied")
}




*/
 //Arrow functions, this functions create a function that accepts arg
 //then evaluates the exprssion on the right side with their use and return result


 //let func = (arg1, arg2, ..., argN) => expression;

//let sum = (a, b) => a + b;
//this means  expression
 
/*let sum = function(a,b) {
    return a+b;
};

alert(sum(1,2));

let sayHi = () => alert("Hello");
sayHi();
*/


//Call stack
//this keeps tracks of the function calls


/*
function sum(a){
    return a;

}

let add = sum(+7);
console.log(add)

//Multiply

function multiply(a,b) {
    return a*b;

}
let result = multiply(2,3);
console.log(result)

*/
//chatAt()
//string.charAt(index) this returns the character at a given string
/*
const str = 'flexible';
const str2 = str.charAt(4);
console.log(str2);
//charAt(0) = f
//charAt(4) = i

*/ 
//toUpperCase

//string.toUpperCase()
/*
const str = "flexible"
const str2 = str.toUpperCase();
console.log(str2)
*/

//slice
// string.slice(start, end)

/*
const str = "flexible";
const  str2 = str.slice(1);
// lexible = it does not start from zer0

console.log(str2)
*/ 

//First letter capital

/*
const str = "flexible"

const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);
*/

//eg2

/*
const str = 'abc df ghi'

const str2 =  str.charAt(0).toUpperCase()+ str.slice(1);
console.log(str2);
*/ 

//for loops

/* for( let i = 1; i<=5; i++){
    for([initialization]; [condition]; [update])
}

*/


// Problem solving

/*\
let answer = parseInt(prompt("Please enter the number you will like to fizz"))

for (let i = 1; i<= answer; i++) {
    if(i % 3=== 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let x = 2;
let y = 3;
console.log( "y"+ "x");

*/

/*

const cars = ["Ford", "Honda", "Mercedes"]
for( let i = 0; i < cars.length; i++){
    console.log(cars[0,2]);
}

*/
//objects
/*
const person = { firstName: "John", lastName: "ken", age:29};
console.log(person.firstName);

//const fruits = ["Ban","Mango","Orange"];
//const addFr = fruits.push("Lemon");

*/
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.toString()); // just return Banana, orange, apple, Mango
//console.log(fruits.pop()); //removes the last string and return it ('Mango')
 //let unsh = fruits.unshift("Lemon");
 //console.log(unsh);

 /*
 const myGirls = ["Cecilie", "Lone"];
 const myBoys = ["Mark","James", "Linus"]
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


const fruits = ["Banana", "Orange","Apple"]
console.log(fruits.splice(1,2));




function toUpper(string) {
    return string.toUpperCase();
}

*/







//DOM
const container = document.querySelector('#container');// reference the container di v


const content = document.createElement('div'); //create new div and store it variable content
content.classList.add('content'); // add class and some text to the content div

content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
content.style.color = 'red'

//P
const p = document.createElement('p')
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p)

//h3
const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3"
h3.style.color = "blue";

container.appendChild(h3)

//div

const div = document.createElement('div')
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

container.appendChild(div)

//create h1 and p inside div

const h1 = document.createElement('h1')
h1.textContent = "I' am in a div";

const p2 = document.createElement('p')
p2.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(p2);


//EVENT 

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World")

btn.addEventListener('click', function(e){
    e.target.style.background =" green";
})

//Method 3



const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert("My first EventL")
})

//add a call back function

btn1.addEventListener('click', function(e){
    console.log(e);
})

/*
function alertFunction () {
    alert("YAY! YOU DID IT!")
}
*/
//(e) call back function

/*
btn1.addEventListener('click', function (e) {
    console.log(e.target);
})

//return <button id="btn1">Click Me Too</button>

btn1.addEventListener('click',function(e){
    e.target.style.background = 'blue';
});

/* node list. looks like array*/
/*
const buttons = document.querySelectorAll('button');

//iterate or loop through each button
buttons.forEach((button) => {
    //and for each button we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

const label = document.querySelector('.label')

function change() {
    label.textContent = "Javascript is beaten"
}



/*
let user1 = {
    name: "John",
    age: 30,
}

alert(user.name) // john
alert(user.age)// 30
delete user.age;



//let user = {
    name: "John",
    age: 30,
    isAdmin: true
}

for(let key in user) {
    alert(key);
    alert(user[key])
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1" : "USA"
}

for(let code in codes) {
    alert(code);
}


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "pete"
delete user.name;




let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for(let key in salaries ) {
 sum = sum + salaries[key];
}

console.log(sum)




const person = {
    name: ['Bob','Smith'],
    age: 32,

  
}
person.name[0]
*/

let count = 0
label = document.getElementById('label')

function increment() {
count++;
label.innerHTML = count++

}

function decrement() {
    count--;
   label.textContent = count; 
}

function reset() {
 count="0"
 label.textContent = count; 
}