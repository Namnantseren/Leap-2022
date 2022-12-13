let color = 0;
let color1 = 0;
document.getElementById("root").style.height = "200px"
// document.getElementById("root").style.width = "200px"

setInterval(function(){

    for (let count = 0; count == 1000; count++) {
        count++
        color++
        document.getElementById("root").style.width = `${count}px`
        document.getElementById("root").style.backgroundColor = `rgb(${color},255,55)`
        if (count == 1000){
            count--
            document.getElementById("root").style.width = `${count}px`
            document.getElementById("root").style.backgroundColor = `rgb(${color},255,55)`
        }
    }
    
    
    // clearInterval(count === 1000);
},10)

// console.log(count);

