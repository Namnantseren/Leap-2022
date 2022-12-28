let delbtn = document.getElementById("deleteBtn")
let main = document.getElementById("main")

delbtn.addEventListener("click", ()=>{
    main.innerHTML= "";
})

fetch("http://localhost:3333/api")
    .then((res) => res.json())