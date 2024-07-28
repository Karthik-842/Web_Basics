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

*/


