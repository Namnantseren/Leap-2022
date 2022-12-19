// let scrollPercentage = () => {
//     let ProgressValue = document.getElementById("progress-value");
//     let pos = document.documentElement.scrollTop;
//     let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrollValue = Math.round(pos * 100 / calcHeight)
//     ProgressValue.textContent = `${scrollValue}%`;
// }

// window.onscroll = scrollPercentage;

//----------------------------------------------- Other version------------------------------- //

window.addEventListener("scroll", () => {
    let percent = Math.floor(
      (window.scrollY * 100) /
        (document.querySelector("body").clientHeight - window.innerHeight)
    );
    document.querySelector("#progress-value").innerText = `${percent}%`;
});