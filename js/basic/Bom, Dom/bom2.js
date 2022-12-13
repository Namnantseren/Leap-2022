// document.getElementsByClassName("root1")[0].innerHTML = "<div class='root'>HOHO</div>"; //text
document.querySelector("div").style.height = "300px"

let count = 0;
let count1 = 150;

setInterval(function(){
    count++
    document.querySelector("div").style.width = `${count}px`;
    if(count1 <= 255) {
        count1++
        document.getElementById("root").style.backgroundColor = `rgba(${count1},55,25)`;
    }

    // if(count1 >= 255 ) {
    //     count1--
    //     document.getElementById("root").style.backgroundColor = `rgba(${count1},55,25)`;
    // }
    console.log(count1);
    clearInterval(count === 1000);
    // debugger;
    
}, 1);

