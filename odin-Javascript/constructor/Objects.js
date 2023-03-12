
/*
function car(make, model, year, color) {
    this.make = make
    this.model = model
    this.year =  year
    this.color =  model
}

const car1 = new car("ford", "Mustin", 2022, 'red')
const car2 = new car("Benz", "E-series", 2022, 'white')

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

*/
//hOW TO ACCESS A NAME OF COMPANY AND what they produce

function company( gas, petroleum) {
    this.gas = gas
    this.petroleum = petroleum
}

const company1 = new company(40, 90)
const company2 = new company(100, 150)

console.log(company1.gas)
console.log(company1.petroleum)


//Identify the players  name and makers
function player( name, marker) {
    this.name = name
    this.marker = marker
    //add a function() that can report
    this.sayName = function() {
        console.log(name)
    }
}

const player1 = new player("steve", "x")
const player2 = new player("Prince", "y")

player1.sayName()
player2.sayName()


function Book(title, author, pages, read ) {
    this.title = title
    this.author = author
    this.pages =  pages
    this.read =  read
    this.info = function() {
        return (title + author + "," + pages + "," + read)
    }
}

const theHobbit = new Book("The Hobbit "," by J.R.R Tolkien has "," 295 pages "," not read yet")
  console.log(theHobbit.info())



//example3
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, 'has logged in')
    }

}

//const userOne = new User('m@me.com', 'mak')
//const userTwo = new User('james@ms.com', 'prince')

//userTwo.login();


//Add prototype to the above

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}


User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

const userOne = new User('maakaiprincewill@gmail.com', 'maakai')
const userTwo = new User('Buraprincewill@gmail.com', 'prince')
console.log(userOne)
userTwo.login()
userOne.logout()






function printStuff(myDocuments) {
this.documents = myDocuments
}

//add print method

printStuff.prototype.print = function() {
    console.log(this.documents)
}

const newObj = new printStuff("I love you")

newObj.print()

function Account() {

}

const userAccount = new Account()
console.log(userAccount.constructor)

//Prototype and inheritance 

/*
//let animal = {
   // eats: true
//}

let leopard = {
    pets: false
}

let rabbit = {
    jumps: true
};

rabbit . __proto__ =  leopard;

//read the property
//this is like equatting rabbit = animal,
//Rabbit will inheret all the properties of animal
alert(rabbit.pets)
*/

//exam 3

/*
let animal = {
    eats:true,
    walk(){
        alert("Animal Walk")
    }
}

let rabbit = {
    jumps:true,
    __proto__ : animal,
}

rabbit.walk()


//Prototype chain

let car = {
 move: true,
 speed() {
    alert('cars have speed')
 }
}


let truck = {
    moves:true,
    __proto__: car
}

let heavyDuty = {
    Length: 50,
    __proto__:truck
}

alert(heavyDuty.moves)

*/



/*
let animal = {
    walk() {
        if(!this.isSleeping) {
            alert('I walk')
        }

    },

    sleep() {
        this.isSleeping = true
    }
}

let rabbit =  {
    name: 'White Rabbit',
    __proto__ :animal
}

rabbit.sleep();
alert(rabbit.isSleeping)


let snake = {
    name: 'cobra',
    __proto__ : animal
}

snake.sleep()
alert(snake.isSleeping)
*/


// for -- in Loop
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__:animal 
}

//alert(Object.keys(rabbit))

for (let prop in rabbit ) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if(isOwn) {
        alert(`our:${prop}`)
    } else {
        alert(`Inherited: ${prop}`)
    }
}


let head = {
    glasses: 1
}

let table = {
    pen:3,

    __proto__:head
}

let bed = {
    sheets:1,
    pillow:2,
    __proto__: table
}

let pockets = {
    money:2000,
    __proto__:bed 
}

alert(pockets.pillow)
alert(bed.pen)
alert(head.glasses)
alert(pockets.glasses)



function sum(a,b) {
    console.log(this === window) 
    this.myNumber = 20;
    return a + b;
}

console.log(sum(15,16))
console.log(window.myNumber);