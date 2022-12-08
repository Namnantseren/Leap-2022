// let person = {
//     firstname : "Suvd",
//     lastname : "black",
//     age : 25,
//     score : [77, 80, 50],
//     ismarried : false,
//     allname: function() {
//         return this.firstname + "" + this.lastname;
//     }
//     // fullname: () => {
//     //     return "hohoh";
//     // }
// }

// console.log(person);

// let func = () => {
//     console.log("person");
// }

// function getPerson () {
//     console.log("person")
// }

// let person1 = ["Naranbayr"];
// let person2 = [...person1];

// console.log(person1.name);

// let person1 = ["Naranbayr"];
// let person2 = [...person1];

// person2 = person1

// console.log(person1.name);

let athletic = [
    {
        firstname: "John",
        lastname: "Wick",
        age: 26,
        score:[85, 50, 75, 90, 78, 25, 60]
    },
    {
        firstname: "Dondog",
        lastname: "Wick",
        age: 35,
        score:[55, 50, 75, 90, 78, 55, 50]
    },
    {
        firstname: "Baldan",
        lastname: "Wick",
        age: 22,
        score:[65, 50, 75, 90, 78, 72, 12]
    }
]

getAllInfo(athletic);

function getAllNames(list) {
  let names = [];
  for (i = 0; i < list.length; i++) {
    names.push(list[i].name);
  }

  return names;
}

function getAvgSec(list) {
  let avgList = [];
  for (i = 0; i < list.length; i++) {
    //list.length = 5 (hunii too)
    let sum = 0;
    for (j = 0; j < list[i].record.length; j++) {
      sum += list[i].record[j];
    }

    let personNewObj = {
      name: list[i].name,
      avg: sum / list[i].record.length,
    };
    avgList.push(personNewObj);
  }
  return avgList;
}

function getAvgAge(list) {
  let sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += list[i].age;
  }
  return Math.round(sum / list.length);
}

function getAllInfo(list) {
  let names = getAllNames(list);
  let avgAge = getAvgAge(list);
  let avgSec = getAvgSec(list);
  let sum = 0;
  for (i = 0; i < avgSec.length; i++) {
    sum += avgSec[i].avg;
  }
  console.table(avgSec);
  console.log("Avarage Speed:\t", sum / avgSec.length);
  console.log("Avarage Age:\t", avgAge);
  console.log("All Names: \t", names);
  return;
}