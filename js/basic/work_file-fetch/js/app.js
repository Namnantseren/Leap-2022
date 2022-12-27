const select = document.querySelector('#breeds');
const card = document.querySelector('.card');
const current = "";

fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((data) => generator(data.message));

function generator(data) {
    data.map((dogBreed) => {
        const html = `<option value="${dogBreed}">${dogBreed}</option>`;
        select.innerHTML += html;
    });
}

function generatorImage(url){
    const image = `<img src="${url}">`;
    card.innerHTML = image
}

function fetchImage(breedType) {
    fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
        .then((res) => res.json())
        .then((data) => generatorImage(data.message));
}

select.addEventListener("change", () => {
    fetchImage(select.value);
    // current = select.value;
});


select.addEventListener("click", () => {
     fetchImage(select.value);
});