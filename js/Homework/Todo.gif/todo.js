let date = new Date(2021, 11, 18);
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let allDat = `${year}-${month}-${day}`;

document.getElementById("myDate").innerHTML = allDat;

//---------------------- Add --------------------- //

let add = document.getElementById("myBtn");

add.addEventListener("click", function addItem() {
    document.getElementsByClassName("task")[0].innerHTML = `${randomText}`;

    
    let name = document.getElementsByClassName("task")[0];

    let output = document.createElement("div")
    output.className = "output";

    let btn = document.createElement("a");
    btn.className = "delete";

    input.appendChild(output);
    output.appendChild(btn);
    output.appendChild(name);
})

// let task = document.getElementsByClassName("output")[0],
//         listNote = document.createElement("p"),
//         lastOutPut = document.createTextNode(task);
//     listNote.appendChild(lastOutPut);
//     list.appendChild(listNote);