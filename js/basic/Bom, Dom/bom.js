// document.getElementById("root").innerHTML = "<head><link rel='stylesheet' href='./style.css'></head><div class='darkmode'><h1>hoho</h1></div>"

// document.getElementsByClassName("lodoi")[0].style.color = "red";

// document.getElementsByClassName("lodoi")[0].style.backgroundColor = "aqua";

// document.getElementsByClassName("lodoi")[0].style = ".lodoi {color: black}";


// const newDiv = document.createElement("h1");
// const newContent = document.createTextNode("Hello HOHOHO");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("main");
// main[0].appendChild(newDiv);

//=====================================  Ul, li ==============================//

// let rootElement = document.getElementById("root");
// let ulElement = document.createElement("ul");
// rootElement.appendChild(ulElement);

// for (i = 0; i <10; i++) {
//     let liELement = document.createElement("li");
//     liELement.innerText = i.toString();
//     ulElement.appendChild(liELement);
// }

//=====================================  Ul, li ==============================//

//=====================================  Chess ==============================//

// let rootElement = document.getElementById("root");
// rootElement.style.display = "flex";
// rootElement.style.flexWrap = "wrap";
// rootElement.style.width = "850px";

// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//         let newDiv = document.createElement("div");
//         rootElement.appendChild(newDiv);
//         newDiv.style.width = "100px";
//         newDiv.style.height = "100px";
//         newDiv.style.border = "1px solid black";
//         if((i + j) % 2 == 0) {
//             newDiv.style.backgroundColor = "grey";
//         }
//     }
// }

//=====================================  Chess ==============================//

//=====================================  Mille sec ==============================//

// let i = 0;

// setInterval(function () {
//    i++;
//    console.log(i); 
// }, 1000);

//=====================================  Mille sec ==============================//


//===================================== SHOuld know =============================//

// let name = "namka";
// let welcomeMessage = `${i}px`;

//===================================== SHOuld know =============================//


//=====================================  Timer ==============================//

// let rootElement = document.getElementById("root");
// // document.getElementById("root")[0].style.fontSize = "20px";

// let sec = 0;
// let min = 0;
// let hour = 0;

// setInterval(function () {
//     sec++;
//     if (sec == 60){
//         sec = 0;
//         min++;
//     }
//     if (min == 60){
//         min = 0;
//         hour++
//     }
//     if (hour == 24) {
//         hour = 0;
//     }
//     rootElement.innerText = `${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}:${sec}`
// }, 1);

//=====================================  Timer ==============================//

// let rootElement = document.getElementById("root");

// let sec = 0;
// let min = 0;
// let millie = 0;

// setInterval(function () {
//     millie++;
//     if (millie == 300){
//         millie = 0;
//         sec++;
//     }
//     if (sec == 60){
//         sec = 0;
//         min++
//     }
//     if (min == 60) {
//         min = 0;
//     }
//     rootElement.innerText = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}:${millie < 10 ? "00" : ""}${millie}`
// }, 1);


// let rootElement = document.getElementById("root").innerHTML = "<div class='topwidth'></div><div class='bottomwidth'></div>"
// let modeElement = document.getElementById("mode").innerHTML = "<div class='topwidth'></div><div class='bottomwidth'></div>"

// document.getElementById("root").style.backgroundColor = "black"
// document.getElementById("root").style.maxWidth = "100%"
// document.getElementById("root").style.width = "600px"
// document.getElementById("root").style.height = "100px"

// document.getElementById("mode").style.backgroundColor = "Orange"
// document.getElementById("mode").style.maxWidth = "100%"
// document.getElementById("mode").style.width = "600px"
// document.getElementById("mode").style.height = "100px"

// setInterval(function() {
//     rootElement++ 
//     if(rootElement == '500px'){
//         rootElement = 0;
//         modeElement++
//     }
// }) 

