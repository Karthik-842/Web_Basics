//console.log(`welcome page loaded`);

//window.alert(`Welcome`); - Error loading

// single line comment.

/* This is a multiple line comment */

// document.getElementById("h2").textContent = `Hello`;

  /*let x=100; 

    console.log(`You are ${x} years old`);  */

/*
Operator Precedence:

1) Parenthesis 
2) Exponents 
3) Multiplication, Division and Modulo
4) Addition and Subtraction 

*/


/*
const PI = 3.14; 
let radius;
let circumference;

document.getElementById('bt').onclick = function()
{
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    let circumference = 2* PI * radius;
    document.getElementById("result").textContent =circumference;
}

*/




/* Counter increment decrement using event listeners and textContent property.

const a = document.getElementById("number");
const d = document.getElementById("decrement");
const r = document.getElementById("reset");
const i = document.getElementById("increment");

let count =0;

i.onclick = function()
{
    count+=1;
    a.textContent=count;
}

d.onclick = function()
{
    count-=1;
    a.textContent=count;
}

r.onclick = function()
{
    a.textContent=0;
}


*/

// Math function: build in objects. 
/* 
let a =Math.PI;                     shift+Alt+a - comment
console.log(a);

let b = Math.sqrt(25);
console.log(b); */

/* Random number generator 

let r = Math.floor(Math.random()*50)+50;

console.log(r);

*/

/* 
const check = document.getElementById("Mycheckbox");

const vb = document.getElementById("visabtn");
const mb = document.getElementById("masterbtn");

const btn = document.getElementById("mySubmit");

const sr = document.getElementById("subresult"); 
const pr = document.getElementById("paymentresult");



btn.onclick = function()
{
    if(check.checked)
    {
        sr.textContent=`You are subscribed`;
    }
    else{
        sr.textContent=`You are not subscribed`;

    }
    if(vb.checked)
    {
        pr.textContent=`Payment successful Visa`;
    }
    else if(mb.checked)
    {
        pr.textContent=`Payment successful MasterCard`;
    }
    else{
        pr.textContent=`Payment failed`;

    }

} */


/* Slicing: string substring 

const a = `karthik`; 
let b = a.slice(0,3); 
console.log(b);

*/
/* 

Method chaining - calling one method after another in one continuous line of code.

let name = window.prompt("Enter the username"); 

 No method chaining

name=name.trim(); 
let l=name.charAt(0).toUpperCase();
let d = name.slice(1).toLowerCase(); 

name=l+d;
console.log(name);

 Method chaining

name = name.trim().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
console.log(name);

 */

// strict equality (===) (compare both values and datatypes)
// strict inequality (!==)
/* 
const PI = 3.14; 
if (PI === 3.14)
    console.log("Equal");  // Equal
else
    console.log("Not Equal");

if ( PI === "3.14")
    console.log("Equal");  // not equal
else
    console.log("Not Equal");

if(PI == "3.14")
    console.log("Equal");   // Equal
else
    console.log("Not Equal");
 */


/* 

Temperature conversion:

const temp = document.getElementById("temp1");

const cf = document.getElementById("cf1");

const fc = document.getElementById("fc1");

let rs = document.getElementById("result");

function convert()
{
    if(cf.checked)
    {
        let t = Number(temp.value);
        let f = (t * 9/5) + 32;
        rs.textContent=(f.toFixed(1)+" F");
    }
    else if(fc.checked)
    {
        let t = Number(temp.value);
        let c = (t - 32) * 5/9;
        rs.textContent=(c.toFixed(1)+" C");
    }
    else{
        rs="Invalid selection";
    }
} */

/* 

spread operator: ... allows an iterable such as an array or string to be expanded into separate elements.

let a=[1,2,3,5,8];
let max=Math.max(...a);
console.log(max) 

*/
/* 


rest parameters: opposite of spread operator. (bundles)

let a=1;

let b=2;

let c=3;

let d=4;

add(a,b,c,d);  // [1, 2, 3, 4]

function add(... e)
{
    console.log(e);
} 
    
*/
/* 


Dice Roller program 

function rollDice()
{

    const result= document.getElementById("result");
    const d = document.getElementById("dice").value;
    const e = document.getElementById("dimage");

    const value=[]; 
    const images=[];

    for(let i=0; i<d; i++)
    {
        let values=Math.floor(Math.random()*6)+1
        value.push(values);
        images.push(`<img src="img/${values}.png"/>`);
    }
    
    result.textContent=value.join(`,`);
    e.innerHTML=images.join(" ");
}
 */
/* 


Random Password Generator:

function generatePassword( passwordLength, incLowerCase, incUpperCase, incNumbers, incSymbols)
{
    let password="";
    const lower=`abcdefghijklmnopqrstuvwxyz`;
    const upper=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numbers=`0123456789`;
    const symbols=`!@#$%^&*()_+{}[]|:;<>,.?/~`;
    let allowedchar=""; 

    allowedchar+= incLowerCase? lower:"";
    allowedchar+= incUpperCase? upper:"";
    allowedchar+= incNumbers? numbers:"";
    allowedchar+= incSymbols? symbols:"";
    
    for(let i=0; i<passwordLength; i++)
    {
        const random = Math.floor(Math.random()*allowedchar.length);
        password+=allowedchar[random];  // append random character to password.  // Math.random() * allowedchar.length gives a random number between 0 and allowedchar.length-1. Math.floor() rounds down to the nearest integer.  // allowedchar[random] gets the character at the random index.  // += is used to append character to string.  // This loop will repeat until password length is achieved.  // We will keep generating random characters until we
    }
    return password;
}

const passwordLength =12; 
const incLowerCase =  true;
const incUpperCase = true;
const incNumbers = true;
const incSymbols = true;

let password;
password = generatePassword(passwordLength,incLowerCase,incUpperCase,incNumbers,incSymbols);
console.log(password); 


Callback function:

sum(display,4,3);

function sum(callback,x,y)
{
    let z=x+y; 
    callback(z);
}

function display(result)
{
    console.log(result);
}


ForEach function:


let n=[1,2, 3,4,5,6,7,8];
n.forEach(display);

function display(value)
{
    console.log(value);
}


Map function:

let n=[1,2,3,4,5,6,7,8]; 

let s=n.map(square); 

function square(value)
{
    return Math.pow(value,2);
}

console.log(s);

Filter function:

let n=[1,2,3,4,5,6,7,8];

let s=n.filter(isEven);

function isEven(value)
{
    if(value%2==0)
    {
        return true;
    }
}

console.log(s);

Reduce function:

let n=[1,2,3,4,5,6,7,8];

let d=n.reduce(product);

function product(accumulator, currentValue)
{
    return accumulator*currentValue;
}

console.log(d);

Function declaration:

function sum(a,b)
{
    return a+b;
}
let d=sum(3,4);
console.log(d);


Function expression:

let d= function(a,b)
{
    return a+b;
};

console.log(d(1,2));


let n=[1,2,3,4,5,6,7,8,9];

let s=n.map(function(value)
{
    return Math.pow(value,2);
});

console.log(s);


Arrow functions:

let a=[1,2,3,4,5,6,7,8,9]; 

let s=a.map((e)=>Math.pow(e,3));

console.log(s);


let d=(x,y)=> x+y; 
console.log(d(2,3));


let a=[1,2,3,4,5,6,7,8,9]; 

let b= a.filter((e)=> e%2==1); 

console.log(b);


let a=[1,2,3,4,5,6,7,8]; 
let b= a.reduce((a,b)=>a*b);
console.log(b);


Objects in JS: Real world entity


let p={
    name:"Karthik",
    age:25,
    city:"Bangalore",
    address:  "abc",
    sayHello: function(){ console.log("Hello"); }
};

console.log(p.name);
p.sayHello();

This keyword:

let p={
    name:"Karthik",
    age:25,
    city:"Bangalore",
    address:  "abc",
    sayHello: function(){ console.log(`Hello This is ${this.name}`); }
};

p.sayHello(); 


Constructor: special method for defining the properties and methods of objects:

function Person(name, age, city)
{
    this.name=name;
    this.age=age;
    this.city=city;
    this.sayHello=function(){ console.log(`Hello This is ${this.name}`); };
}

let p1=new Person("John", 24,"Bangalore");

let p2=new Person("Jack",11,"Japan");

p1.sayHello();
p2.sayHello();

console.log(p1.city+" "+p2.city);


Class:

(ES6 Feature) provide a more structured and clearer way to work with objects and functions


class Person{
    constructor(name, age, city)
    {
        this.name=name;
        this.age=age;
        this.city=city;
    }

    displayDetails()
    {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}

const p1=new Person("John",22,"Bangalore");

const p2=new Person("Jack",11,"Japan");

p1.displayDetails();

p2.displayDetails();

console.log(p1.city+" "+p2.city);


Static - keyword that defines properties/methods belong to that class.

class Hello{
    static a=10;
    
    constructor(a)
    {
        this.a=a;
    }
}

console.log(Hello.a); // 10  -- Static


let h1=new Hello(20); // nrl

console.log(h1.a); // 20

Inheritance:


class Animal
{
    constructor(name, sound)
    {
        this.name=name;
        this.sound=sound;
        this.getSound = function(){console.log(`${this.name} sounds ${this.sound}`);};
    }
}

class Dog extends Animal
{
    constructor(name, sound, breed)
    {
        super(name, sound);
        this.breed=breed;
        this.breedName = function() {
            console.log(`${this.name} is a ${this.breed}`);
        };
    }
}

const d1=new Dog("Buddy", "Woof", "Labrador");

d1.getSound(); // Buddy sounds Woof

d1.breedName(); // Buddy is a Labrador


Getter and setter functions:

class Animal
{
    constructor(name, sound)
    {
        this.name=name;
        this.sound=sound;
        this.getSound = function(){console.log(`${this.name} ${this.sound}`);};
    }

    set animalName(name) {
        this.name=name;
    }
    get animalName() {
        return this.name;
    }
    set animalSound(sound) {
        this.sound=sound;
    }
    get animalSound() {
        return this.sound;
    }
}

const p = new Animal("Dog","Barks");

console.log(p.animalName); // Dog

console.log(p.animalSound); // Barks

p.getSound(); // Dog Barks

Destructuring: extract values from arrays and objects then assign them to variables in a convenient manner.
[] - to perform array destructuring.
{} - to perform object destructuring.

let a=1; 
let b=2; 
[a,b]=[b,a];

console.log(a); // 2
console.log(b); // 1

const c=["red","green","blue","black","yellow"]; 

console.log(c); // ["red","green","blue","black","yellow"]
[c[0],c[4]]=[c[4],c[0]];

console.log(c); // ["yellow","green","blue","black","red"]


Nested objects:

Objects inside another objects allows you to represent more complex DS.

Child objects is enclosed by a parent object.

Person(Address{}, ContactInfo{}); 
ShoppingCart{Keyboard{}, Mouse{}, Monitor{}};


const person={
    name:"John",
    age:25,
    address:{
        street:"123 Main St",
        city:"New York",
        state:"NY"
    },
    contactInfo:{
        email:"john@example.com",
        phone:"123-456-7890"
    }
};

console.log(person.name);  // John

console.log(person.address.street); // "123 Main St"

console.log(person.contactInfo.email); // "John@example.com"

for (const a of person.contact)
{
    console.log(a);
}


Eg:2

class Person{
    constructor(name,age,...address) {
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
        this.displayDetails=function()
        {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
            this.address.displayAddress();
        }
    }
}
class Address{
    constructor(street, city, state)
    {
        this.street=street;
        this.city=city;
        this.state=state;
        this.displayAddress=function()
        {
            console.log(`Street: ${this.street}, City: ${this.city}, State: ${this.state}`);
        }
    }
}

const p1= new Person("John",22,"124 Main St","Beijing","Japan");
const p2= new Person("Jane",34,"121 Jack St","London","United Kingdom");

p1.displayDetails();

p2.displayDetails();

Array of objects:

const a=[{name:"apple",color:"red",calories:95},
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories:105},
    {name:"coconut",color:"white",calories:158},];

console.log(a[3].calories);

const b=a.filter((e)=> e.calories>100); 

console.log(b); 

a.push({name:"pinapple",color:"yellow",calories:134});

a.sort((a,c)=>c.calories-a.calories);

console.log(a);

a.splice(1,2); // remove

a.forEach(c=> console.log(c));


sort () function: used to sort the element in lexicographic order(String alphabetical)


let a =["x","b","p","e"];

a.sort();

console.log(a); // ["b", "e", "p", "x"]

let b = [1,5,3,4,2,10];

b.sort(); 

console.log(b); // [1,10, 2, 3, 4, 5]


let b=[5,2,8,1,9]; 

b.sort((p,q)=>p-q); 

console.log(b); // [1, 2, 5, 8, 9]

b.sort((a,b)=>a-b).reverse();

console.log(b); // [9, 8, 5, 2, 1]

const c=[{name:"apple",color:"red",calories:95},
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories:105},
    {name:"coconut",color:"white",calories:158},];
    
const d=c.sort((a,b)=>b.calories-a.calories);

console.log(d);



const c=[{name:"apple",color:"red",calories:95},
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories:105},
    {name:"coconut",color:"white",calories:158},];
    
const d=c.sort((a,b)=>a.calories-b.calories);

console.log(d);

const e = d.sort((a,b)=>a.name.localeCompare(b.name));

console.log(e);

*/











