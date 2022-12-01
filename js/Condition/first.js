// let myAge = 15;

// if (myAge >= 25) {
//     console.log("Orhiig zovshoorno");
// }else {
//     console.log("Orhiig horiglono");
// }

// let day = 0;

// if (day == 1) {
//     console.log("Negdeh");
// }else if (day == 2) {
//     console.log("Hoyrdahi");
// }else if (day == 3) {
//     console.log("Guravdahi");
// }else if (day == 4) {
//     console.log("dorovdeh");
// }else if (day == 5) {
//     console.log("davdah");
// }else {
//     console.log("baihguie")
// }

// let day1 = 8;
// let day2; 

// if (day1 == 1) {
//     day2 = ("Negdeh");
// }else if (day1 == 2) {
//     day2 = ("Hoyrdahi");
// }else if (day1 == 3) {
//     day2 = ("Guravdahi");
// }else if (day1 == 4) {
//     day2 = ("dorovdeh");
// }else if (day1 == 5) {
//     day2 = ("davdah");
// }else {
//     day2 = ("error")
// }

// console.log(day2)

// let day1 = 8;

// switch (day1) {
//     case 1:
//         console.log("Negdeh")
//         break;
//     case 2:
//         console.log("Hoyrdahi")
//         break;
//     case 3:
//         console.log("Guravdahi")
//         break;
//     case 4:
//         console.log("Dorovdahi")
//         break;
//     case 5:
//         console.log("Tavdah")
//         break;
//     default:
//         console.log("Error")
// } 

/* IF ELSE SHortcut */

// if (day==1 || day==1 || day==1 || day==1 || day==1 || day==1 ) {
//     console.log("Second-Error");
// }

/* IF ELSE SHortcut */

// if (x > y) {
//     if(x>z) {
//         console.log(x, "n hamgiin ig");
//     }else {
//         if(y>z) {
//             console.log(y, "n hamgiin ih");
//         }else {
//             console.log(z, "n hamgiin ih");
//         }
//     }
// } else {
//     console.log(y, "n hamgiin ig");
// }

// if(x>y && x>z) {
//     console.log(x, "n hamgiin ih");
// }else if (y>z) {
//     console.log (y, "n hamgiin ih");
// }else {
//     console.log(z, "n hamgiin ih");
// }

/* SHortcut   */

// let age = 21;

// if (age<21) {
//     console.log("You are not allowed to drink alchohol");
// }else {
//     console.log("You are allowed to drink alchohol");
// }

// Condition ? true : false; //Main 

// age<21 ? console.log("YOu are not allowed to drink alchohol"): console.log("YOu are allowed to drink alchohol");

// myState = age >=10 && age <=18 ? "teenage":"adult";

/* SHortcut   */

// let babySharkLyrics = "1289379182739";
// console.log(babySharkLyrics[babySharkLyrics.length - 1]);
// console.log(babySharkLyrics.substr(4, 5));

// let firstname = 'John';
// let fullname = firstname.concat('','Smith');
// console.log(fullname); //"John Smith"
// console.log(firstname); //"John"

// let str = "Index ni avah ni";
// console.log(str.indexOf("ni"))


//   HARD AS FUCK


// let myString = "abc is alphabet is not";
// console.log(myString.indexOf("is"));
// let firstPart = myString.substring(0, myString.indexOf("is"));
// let lastPart = myString.substring(
//   myString.indexOf("is") + "is".length,
//   myString.length
// );
// console.log(lastPart);
// myString = firstPart.concat(lastPart);

// firstPart = myString.substring(0, myString.indexOf("is"));
// lastPart = myString.substring(
//   myString.indexOf("is") + "is".length,
//   myString.length
// );
// myString = firstPart.concat(lastPart);
// console.log(myString);


//   HARD AS FUCK


// console.log(Math.floor(Math.random()* 6) +1);

// console.log(Math.floor(Math.random() * (Math.abs(a - b) + 1)) + Math.min(a, b)); 



//============  =======    Loop   =======  ================  //


// let count = 10;
// while (count >= 1) {
//     console.log(count);
//     count = count - 1;
// }

let count = 0;
let countA = 0;
let lorem = "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


while (count < lorem.length) {
    if (lorem[count] == "a" || lorem[countA] == "A") {
        countA = countA + 1;
    }
    count = count + 1;
}

console.log(count);





// ================= =======    Loop   =======   ===================== //

