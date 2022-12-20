let BoldIncome = 5_000_000;

let hairiinHuch2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (BoldIncome > 1_000_000) {
      resolve("success");
    } else {
      reject("not enough funds to release new album");
    }
  }, 2000);
});

console.log(hairiinHuch2);

hairiinHuch2
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });

let arr = [
  { name: "Andy", age: 30 },
  { name: "yunchir", age: 20 },
];
// let newArr = new Array(...arr);
let newArr = [...arr];
newArr[1].name = "yunchir1";

console.log(arr[1].name);
console.log(newArr[1].name);
// console.log(newArr);