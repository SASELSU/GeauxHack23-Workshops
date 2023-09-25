let s = 10;
const c = 3.14;

// Number
let age = 25;
let price = 19.99;

// String
let name = "Alice";
let greeting = "Hello, World";

// Boolean
let isRaining = true;
let isSunny = false;

// Array
let colors = ["red", "green", "blue"];

// Objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

// Undefined
let x;

// Null
let data = null;

// Arithmetic
let a = 10;
let b = 5;
let d = a + b;
let product = a * b;

// Comparisons
a = 10;
b = 5;
let isEqual = a == b; //Equality check
let isGreaterThan = a > b;

// Logical operators
let isTrue = true;
let isFalse = false;
let result = isTrue && isFalse; //Logical ANDs

// Ternary operator
let personAge = 20;
let canVote = personAge >= 18 ? "Yes" : "No";

// Identifiers
// start with (A - z), a dollar sign ($), or an underscore (_)

let h = 4;
let H = 5;
// two separate variables


// Conditionals, if, else if, else
age = 18;
if (age < 18) {
    console.log("You are too young to vote");
} else if(age >= 18 && age < 65) {
    console.log("You can vote");
} else {
    console.log("You are eligible for senior discounts");
}

// Switch statement
let day = "Monday";
switch(day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day");
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// while loop
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

// do while loop
let num = 1;
do {
    console.log("Number: " + num);
    num++;
} while (num < 5);

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
let Greeting = greet("Alice");
console.log(Greeting); // Outputs: "Hello, Alice!"

// another function example
function doMath(x, y) {
    let result = x * y - 10;
    return result;
}

let r = doMath(20, 141);
console.log(r);

// Arrow function
const add = (a, b) => a + b;
console.log(add(3, 5));

// Anonymous function
const multiply = function (x, y) {
    return x*y;
};
console.log(multiply(4, 6));

/*  IF YOU ARE RUNNING THIS CODE, LINES STARTING AT 128 AND LATER DO NOT WORK
    UNLESS YOU INTEGRATE THE CODE INTO A WEBPAGE.
    i.e., document.<method> will not work unless there is a webpage to reference
    
    integrate javascript by directly inputting the code in the html file, 
    OR link your javascript file, similar to how you would link your css file
    
    Direct input example:
        <script>
            console.log("HELLO WORLD");
        </script>
    Linking JavaScript file example:
        <script src="geauxhack.js"></script>
        
*/

// selecting elements by ID
let elementById = document.getElementById("myElementId");

// selecting elements by class name
let elementsByClassName = document.getElementsByClassName("myClassName");

// selecting elements by tag name
let elementsByTageName = document.getElementsByTagName("p");

// selecting elements by css selector
let elementBySelector = document.querySelector("#myId.myClass");

// modify text content
elementById.textContent = "New content!";

// change HTML content
let element = document.getElementById("myElementId");
element.innerHTML = "<strong>New content with HTML!</strong>";

// changing attributes
let imgElement = document.getElementById("myImage");
imgElement.src = "new-image.jpg";

// add or remove classes
element.classList.add("newClass");
element.classList.remove("oldClass");

// create new elements
let newDiv = document.createElement("div");
newDiv.textContent = "I'm a new div";

// append elements
let parentElement = document.getElementById("parent");
parentElement.appendChild(newDiv);

// remove elements
let elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);

// event listeners
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

button.addEventListener("click", function(event) {
    alert("Button clicked on " + event.target.id);
});