// for (let i =1; i<=10; i++) {
//     for (let j=1; j<=10; j++){
//         console.log(i, "", j)
//     }
//     debugger
// }

// for (let q = 1; q<=9;) {
//     for (let w = 2; w<=9;){
//         for (let e = 3; e<=9;){
//             for (let r = 4 ; r <=9;){
//                 for (let t = 5; t<=9;){
//                     for (let y = 6; y<=9;){
//                         for (let u = 7; u<=9;){
//                             for (let i = 8; i<=9;){
//                                 for (let o = 9; o<=9;)
//                                 console.log(q, "",w,"",e,"",r,"",t,"",y,"",u,"",i,"",o)
//                                 debugger
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// ==============================  9x9 ================================ //

// let a = "";

// for (let row = 1; row < 10; row++){
//     for (col = 1; col < 10; col++) {
//         a += col + " ";
//     }
//     a += "\n";
//     debugger
// }

// console.log(a);

// ==============================  9x9 ================================ //


// ==============================  7x7 ================================ //

// let n = 7;
// let output = "";

// for (let row = 1; row = 7; row++){
//     for (let col = 1; col = n; col++) {
//         output = output + "* ";
//     }
//     output += "\n";
// }

// console.log(output);

// ==============================  7x7 ================================ //


// let n = 5;
// let output = "";

// for (let row = 1; row <= n; row++){
//     for (let col = 1; col <= n; col++) {
//         if (row == 1 || row == n || col == 1 || col == n ){
//             output = output + "*";
//         }else {
//             output = output + " ";
//         }
//         debugger;
//     }
//     output += "\n";
// }

// console.log(output);

let n = 6;

for (let i = 1; i <= n; i++){
    let output = "*"
    for ( let j = 1; j < i; j++) {
        output += "*";
    }
    console.log(output);
}


// ================================= _ select ========================= //

// console.log(number.charAt(number.lenght - 3));
// console.log(number.substring(1, 3));

// number = number.substring(0, number.lenght - 3) + "_" + number.substring(number.lenght - 3, number.lenght);

// console.log(number);

// ================================= _ select ========================= //

// ================================= Password ========================= //


// let pass = 123;
// let input;

// while (pass != input) {
//     input = prompt("Enter your password");
// }

// ================================= Password ========================= //


// ================================= Password-2 ========================= //

// let number;

// while (true) {
//     number = prompt("Enter your password");
//     let firstChar = number.charAt(0);
//     number = Number(number);
//     if (Number.isInteger(number) && (firstChar = "9"|| firstChar == "8")) {
//         break;
//     }
// }

// ================================= Password-2 ========================= //


// let n = 55;
// let prime = true;

// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         prime = false;
//         break;
//     }
// }

// if (prime == true) {
//     console.log("Yes");
// }else {
//     console.log("No");
// }