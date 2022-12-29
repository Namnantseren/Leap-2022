let input = document.querySelector("input")
let button = document.getElementById("buttn");
let users = document.querySelector(".users");

button.addEventListener("click", () => {
    users.innerHTML= "";
    fetch("http://localhost:3333/api/users")
        .then((res) => res.json())
        .then((data) => {
            data.map((user) => {
                let money = user.balance;
                    for(let i = 0; i < input.value; i++) {
                        if(user.balance_type){
                            money = money * 0.1 + money
                        }else {
                            money = money * 0.01 + money
                        }
                    }
                users.innerHTML +=  `<div class="usInter">
                <div class="card mt-2 p-2" style="width: 12rem;">
                <img src="data:image/png;base64,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" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title ">Username:${user.name}</h5>
                  <p class="card-text">surname:${user.surName}</p>
                  <a href="#" class="btn btn-primary justify-content-center argin">${money}</a>
                </div>
              </div></div>`
        });
    })
});

// fetch("http://localhost:3333/api/users")
//     .then((res) => res.json())
//     .then((data) => {
        
//         input.addEventListener("click", () => {
//             fetch("http://localhost:3333/api/users")
//             .then((res) => res.json())
//             .then((data) => {(data) => {
//                 main.innerHTML= "";
//                 data.map((user) => {
//                     let balance = user.balance;
//                     for(let i =0; i < input.value; i++) {
//                         let userBalance = balance;
//                         if(user.balance_type){
//                             userBalance * 0.1 + userBalance
//                         }else {
//                             userBalance * 0.01 + userBalance
//                         }
//                     }
//                 })
//                 main.innerHTML = `<div class="card" style="width: 18rem;">
//                     <div class="card-body">
//                         <h5 class="username">${user.name}</h5>
//                         <h5 class="username">${user.surName}</h5>
//                         <p class="card-text">${balance}</p>
//                         // <a href="#" class="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </div>`;
//                 main.innerHTML +=  html;
//             }})
//         }) 
//     }

// input.addEventListener("click", () => {
//     fetch("http://localhost:3333/api/users")
//     .then((res) => res.json())
//     .then((data) => {data.map((user) => {
//         let balance = user.balance;
//         for(let i =0; i < input.value; i++) {
//             let userBalance = balance;
//             if(user.balance_type){
//                 userBalance * 0.1 + userBalance
//             }else {
//                 userBalance * 0.01 + userBalance
//             }
//         }
//     })
        
//         let output = `<div class="card" style="width: 18rem;">
//             <div class="card-body">
//                 <h5 class="username">${users.name}</h5>
//                 <h5 class="username">${users.surName}</h5>
//                 <p class="card-text">${balance}</p>
//                 // <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>`;
//         main.innerHTML +=  html;
//     })
// })

// fetch("http://localhost:3333/api/users")
//     .then((res) => res.json())
//     .then((data) => {fetchUser()
// })

// input.addEventListener("click", () => {
//     function balance(data){
//         main.innerHTML= "";
//         data.map((user) => {
//             let balance = user.balance;
//             for(let i =0; i < input.value; i++) {
//                 let userBalance = balance;
//                 if(user.balance_type){
//                     userBalance * 0.1 + userBalance
//                 }else {
//                     userBalance * 0.01 + userBalance
//                 }
//             }
//         })
//         let output = `<div class="card" style="width: 18rem;">
//         <img src="data:image/png;base64,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" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="username">${users.name}</h5>
//                 <h5 class="username">${users.surName}</h5>
//                 <p class="card-text">${balance}</p>
//                 // <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>`;
//     }
//     users.innerHTML += output ;
// })

// function balance(data){
//     main.innerHTML= "";
//     data.map((user) => {
//         let balance = user.balance;
//         for(let i =0; i < input.value; i++) {
//             let userBalance = balance;
//             if(user.balance_type){
//                 userBalance * 0.1 + userBalance
//             }else {
//                 userBalance * 0.01 + userBalance
//             }
//         }
//     })
//     let output = `<div class="card" style="width: 18rem;">
//     <img src="data:image/png;base64,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" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="username">${users.name}</h5>
//             <h5 class="username">${users.surName}</h5>
//             <p class="card-text">${balance}</p>
//             // <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>`;
//     main.innerHTML +=  html;
// }
// // main.innerHTML +=  html;

