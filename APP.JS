
let num1 = 5;
let num2 = 3;
let difference = num1 - num2;
console.log(`The difference between ${num1} and ${num2} is ${difference}`);


let name1 = "John";
let name2 = "Doe";
let name1Length = name1.length;
let name2Length = name2.length;


if (name1Length > name2Length) {
  console.log(`The name ${name1} is longer than ${name2} by ${name1Length - name2Length} characters`);
} else if (name1Length < name2Length) {
  console.log(`The name ${name2} is longer than ${name1} by ${name2Length - name1Length} characters`);
} else {
  console.log(`The names ${name1} and ${name2} are the same length`);
}


let userInput = prompt=("Enter some text:");
if (userInput === userInput.toUpperCase()) {
  console.log("You are shouting!");
} else if (userInput === userInput.toLowerCase()) {
  console.log("You are whispering!");
} else {
  console.log("You are talking normally.");
}



// Call add() function
let num1 = 2;
let num2 = 3;
let sum = (num1 + num2);
console.log(sum);


// Call subtract() function
let difference = (num1 - num2);
console.log(difference);


// Call multiply() function
let product = (4, 4);
console.log(product);


// Call divide() function
let quotient = (5, 5);
console.log(quotient);

let num1 = parseInt(prompt("#?"));
let calc = prompt("+ - * /")
let num2 = parseInt(prompt("#?"));

let n1 = num1
let n2 = num2

let add = n1 + n2;
let subtract = n1 - n2;
let multiply = n1 * n2;
let divide = n1 / n2;

if (calc === "+"){
    document.write(num1 + "" + calc + "" + num2 + "=" + add);
} else if (calc === "-"){
    document.write(num1 + "" + calc + "" + num2 + "=" + subtract);
}else if (calc === "*"){
    document.write(num1 + "" + calc + "" + num2 + "=" + multiply);
} else if (calc === "/"){
    document.write(num1 + "" + calc + "" + num2 + "=" + divide);
}