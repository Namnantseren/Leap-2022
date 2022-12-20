let password = "Pinecone"
let password1 = "0101"
let response;
let entryCount = 0;
let entryLimit = 5;
let error = false;

function hoho() {
    while(response != password && !error){
        if(entryCount < entryLimit){
            response = window.prompt("Where is my Password?")
            entryCount++
        }else{
            error = true;
        }
    }
    if(error){
        alert("Nice try script kiddy you need more practice!!!")
    }else{
        alert("🎉Congrats I think you'r hacker !🎉")
    }
    while(response != password1 && !error){
        if(entryCount < entryLimit){
            response = window.prompt("Where is my Password?")
            entryCount++
        }else{
            error = true;
        }
    }
    if(error){
        alert("Nice try script kiddy you need more practice!!!")
    }else{
        alert("🎉LOL u really believed?!?! AHHAHHAHAHAH !🎉")
    }
}
function lol(){
    while(response != password1 && !error){
        if(entryCount < entryLimit){
            response = window.prompt("Where is my Password?")
            entryCount++
        }else{
            error = true;
        }
    }
    if(error){
        alert("Nice try script kiddy you need more practice!!!")
    }else{
        alert("🎉LOL u really believed?!?! AHHAHHAHAHAH !🎉")
    }
}

// function enterKeyPressed(event) {
//     let password = "PineCone";
//     let pass = document.getElementById("pass");

//     if (event.keyCode == 13) {
//        alert("What u want?");
//     } else if (pass == password){
//         alert("hoho");
//     }else {
//         alert("lol");
//     }
// }
// let correctTwo = 'PineCone';
// Fpass = inputs.pass.value;
// correctTwo = inputs.pass.value.includes("PineCone");

// function hoho(){
//     let Fpass  = document.getElementById("pass")
//     if(Fpass == '') {
//         alert('empty')
//     }else if(Fpass == correctTwo){
//         alert ('u did it')
//     }else if (Fpass !== correctTwo){
//         alert ('Wadu fack')
//     }else {
//         alert ('WTF')
//     }
// };

// let pass = document.getElementById("pass");

// pass.addEventListener("click", () => {
//     if()
// })

// document.addEventListener("click", () => {
//     document.getElementById("pass");
//     correctOne = inputs.pass.value;
//     correctTwo = inputs.pass.value.includes("PineCone");
//     if(correctOne == ''){
//         alert ("boglo");
//     }else if(correctOne != correctTwo){
//         alert ("No no");
//     }else{
//         alert ("Yeay чи чадлаа!!!");
//     }
// })

// function validation(){
//     document.getElementById("pass");
//     correctOne = inputs.pass.value;
//     correctTwo = inputs.pass.value.includes("PineCone");
//     if(correctOne == ''){
//         alert ("boglo");
//     }else if(correctOne != correctTwo){
//         alert ("No no");
//     }else{
//         alert ("Yeay чи чадлаа!!!");
//     }
// }

// let el_down = document.getElementById("string");
  
//         function generateP() {
//             let pass = '';
//             let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
//             for (let i = 1; i <= 8; i++) {
//                 let char = Math.floor(Math.random() * str.length + 1);
//                 pass += str.charAt(char)
//             }
//             return pass;
//         }

// function gfg_Run() {
//     el_down.innerHTML = generateP();
// }

// let result = generateP();
// validation(result);
