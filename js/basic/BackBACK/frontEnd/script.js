let delbtn = document.getElementById("deleteBtn")
let main = document.getElementById("main")
let input = document.querySelector("input")

input.addEventListener("click", () => {
    // main.innerHTML= "";

    fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((data) => {balance(data)})
})

fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((data) => {fetchUser()})

