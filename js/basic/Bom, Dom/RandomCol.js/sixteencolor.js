let all = document.getElementById("root")
all.style.display = "flex"
all.style.flexWrap = "wrap"
all.style.height = "800px"
all.style.width = "800px"
let random = 0;
let random1 = 0;
let random2 = 0;
let random3 = 0;


random = (Math.floor(Math.random() * 255))
random1 = (Math.floor(Math.random() * 255))
random2 = (Math.floor(Math.random() * 255))
random3 = (Math.floor(Math.random() * 16))


for(let i = 0; i < 16; i++){
    let newDiv = document.createElement("div");
    all.appendChild(newDiv)
    newDiv.style.border = "1px Solid black"
    newDiv.style.borderRadius = "50px"
    newDiv.style.width = "198px"
    newDiv.style.height = "198px"
    newDiv.style.backgroundColor = `rgb(${random},${random1},${random2})`;
    if (random3 == i){
        newDiv.style.backgroundColor = `rgb(${random},${random1 - 100},${random2})`;
    }
}
