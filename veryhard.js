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