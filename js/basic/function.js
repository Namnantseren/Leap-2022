// let num1 = 12;

// console.log((10 - (num1 - num1 % 10) / 10));

// let num3 = parseFloat(prompt("Enter first number"));
// let num4 = parseFloat(prompt("Enter second number"));
// alert("2 toonii niilber n: " + (num3 + num4));
// alert("ehnii toog 2 dahi toond huvaagad uldegdek n: " + (num3 % num4));

// function cToF(celsius) 
// {
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   let fTemp = fahrenheit;
//   let fToCel = (fTemp - 32) * 5 / 9;
//   let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 

// cToF(20);
// fToC(45);

//====================================== 1st =============================== //

// function greet(){
//     console.log("hello there");
// }

// greet();


// function myFunction(p1, p2, p3) {
//     return p1 * p2 * p3;
// }

// let result = myFunction(1, 2, 3);

// console.log(result);


//====================================== Example of Parametr =============================== //

// let number1 = parseFloat(prompt("First Number"));
// let number2 = parseFloat(prompt("Enter second Number"));
 
// function add(number1, number2) {
//     return number1 + number2
// }

// let result = add(number1, number2);

// console.log(result);

// alert("The sum is" + result);


//====================================== Let function=============================== //

// let a = function (name) {
//     return ("Hello" + name);
// }

// const b = (name) => { return "Hello" + name} 

// console.log(a("Hoho"));


//====================================== Let function=============================== //

// let input = "HELLO WORLD";
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lower = "abcdefghijklmnopqrstuvwxyz";
 
// function converter(str) {
//     let result = "";
//     for (i = 0; i < str.lenght; i++) {
//         if (upper.includes(str[i])) {
//             result += str[i].toLowerCase();
//         } else if (lower.includes(str[i])) {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

// console.log(converter("HELLO"));
