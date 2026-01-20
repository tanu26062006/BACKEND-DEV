// it display or print on the console so devlopers can see massages,values,errors 
// while program is running.
// its output will be shown in node.js
// use of console.log()
// 1.to debug code
// 2.to check varable value.
// 3.to understand program flow
// 4.to fuind errrors
console.log("hello world")// it display hello world on terminal or on console 
console.log("Node.js Backend start")
console.warn("file might be harmful")// The console.warn("file might be harmful")  static method outputs a warning message to the console at the 'warning' log level.
console.error("data overflow ")// The console.error() static method outputs a message to the console at the 'error' log level.

//2 Variables
let name = "shourya sharma";    //String data type
let age = 19;      //Number data type
const country = "India";  //Constant variable
let isStudent = true;   //Boolean data type

let obj = {                   //object data type
    name: "shourya sharma",
    age: 21,
    country: "India",
    isStudent: true
}

/*
    [ console.log() ] is used to print the output to the console.
    it can display strings, numbers, variables, and more.
 */
console.log("Name:", obj.name); // Display the variable(name) value
console.log("Age:", obj.age);   // Display the variable(age) value
console.log("Country:", country);  // Display the constant variable(country) value
console.log("Is Student:", isStudent);  // Display the variable(isStudent) value
console.table(obj);  // Display the object(obj) in tabular format

//Data types
let score;  //it shows undefined because no value is assigned
let height = null;  //it shows null because it is explicitly assigned to null
console.log("Score:", score);   
console.log("Height:", height);

//3 Operators
let a = 10;  //assigning value 10 to variable a
let b = 5;   //assigning value 5 to variable b
console.log("a =", a);
console.log("b =", b);

// Arithmetic Operators
let sum = a + b;  //Perform addition
let difference = a - b;  //Perform subtraction
let product = a * b;  //Perform multiplication
let quotient = a / b;  //Return Quotient
let remainder = a % b;  //Return Remainder


console.log("Sum(a+b):", sum);
console.log("Difference(a-b):", difference);
console.log("Product(a*b):", product);
console.log("Quotient(a/b):", quotient);
console.log("Remainder(a%b):", remainder);

let loginAge=18;
if (loginAge>=18){
    console.log("Allowed to login");
}
else{
    console.log("not allowed to login");
}
// git rm -rf .

// loop(for)
for(let i=1; i <= 5;i++){
    console.log("loop count:",i);
    // simple for loop
}

// function
function add(x,y){
    return x+y;
}
