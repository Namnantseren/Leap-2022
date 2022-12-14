let color = 0;
let color1 = 0;
document.getElementById("root").style.height = "200px"
// document.getElementById("root").style.width = "200px"

let rColor = (Math.floor(Math.random() * 255));

setInterval(function(){

    for (let count = 0; count <= 1000; count++) {
        color++
        document.getElementById("root").style.width = `${count}px`;
        rColor;
        document.getElementById("root").style.backgroundColor = `rgb(${rColor},255,55)`;
        if (count >= 1000){
            count--
            document.getElementById("root").style.width = `${count}px`;
            rColor;
            document.getElementById("root").style.backgroundColor = `rgb(${rColor},255,55)`;
        }
    }
},10)

// clearInterval(count === 1000);

// console.log(count);

