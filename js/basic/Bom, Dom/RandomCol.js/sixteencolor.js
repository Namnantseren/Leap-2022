let all = document.getElementById("root")
all.style.display = "flex"
all.style.flexWrap = "wrap"
all.style.height = "800px"
all.style.width = "800px"

let random = (Math.floor(Math.random() * 255)) //255-iin hoorond l 
let random1 = (Math.floor(Math.random() * 255)) //255-iin hoorond l
let random2 = (Math.floor(Math.random() * 255)) //255-iin hoorond l
let random3 = (Math.floor(Math.random() * 16)) //16-iin hoorond l


for(let i = 0; i < 16; i++){
    let newDiv = document.createElement("div");
    all.appendChild(newDiv)
    newDiv.style.border = "1px Solid black"
    newDiv.style.borderRadius = "50px"
    newDiv.style.width = "198px"
    newDiv.style.height = "198px"
    newDiv.style.backgroundColor = `rgb(${random},${random1},${random2})`;
    if (random3 == i){
        newDiv.style.backgroundColor = `rgb(${random},${random1 - 30},${random2})`;
    }
}
