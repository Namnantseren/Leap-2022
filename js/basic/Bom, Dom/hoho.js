document.getElementById("bg").style.height = "500px"
document.getElementById("bg").style.width = "500px"
let myButton = document.getElementById("btn");

myButton.addEventListener("click", function change(){
    let color = (Math.floor(Math.random() * 255));
    document.getElementById("bg").style.backgroundColor = `rgb(255, ${color}, 25)`;
});