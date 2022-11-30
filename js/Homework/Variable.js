// "Comments can make code readable"

// "Javascript lesson begin"

/* "Comments can make code 
readable" */

let number = 10;
console.log(number);

let string = "Hi";
console.log(string);

let boolean = 10>2;
console.log(boolean);

let a = undefined;
console.log(a);

let b = null ;
console.log(b);

// typeof ашиглан өөр, өөр, төрлийн утгуудыг шалгах, number, string, boolean, undefined,  null гэх мэт 

let first = 10;
console.log(typeof first);

let second = "HOHO";
console.log(typeof second);

let third = 10>5;
console.log(typeof third);

let fourth 
console.log(typeof fourth);

let fifth = null;
console.log(fifth);

// 6. Утга оноогоогүй хувьсагч зарлах 7. Утга оноосон хувьсагч зарлах 

let оноогоогүй_хувьсагч 
console.log(typeof оноогоогүй_хувьсагч);

//8. Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах

let first_name = "Steve";
console.log(first_name);

let first_number = 22;
console.log(first_number);

//9. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 

let name1 = "Roger", number1 = 22, country = "tenger", age = 21;

//10. Гурвалжингийн периметрийг олох 

let a_herchim = 10;
let b_herchim = 10;
let c_herchim = 10;
console.log(a_herchim + b_herchim + c_herchim);

//11. Тойргийн талбайг олох

let radius = 5;
let power = 2;
console.log(radius**power*Math.PI);

//12. m = y2-y1/x2-x1 хариуг олох 

let y2 = 6, y1 = 6;
let x2 = 2, x1 = 2;

console.log(y2-y1/x2-x1);

//13. 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?

// 1.2E+11

//14. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.

//5 mb/s
//5,120 kb/s
//5,242,880 bit/s

//15. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

let side1 = 10, side2 = 15, side3 = 18;

console.log(side1 * side2 * side3);

//16. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.

function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

cToF(10);

//17. Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

fToC(45);