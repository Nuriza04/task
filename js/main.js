//!  Методы массива
//?  Задание 1

// function checkTask(arr){
 //   let newArr = arr.filter((person) => person > 0)
//   console.log(newArr)
//  }
//  checkTask([2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17])

//?  задание 2

// function checkTask(arr){
//   sum = 0
// arr.forEach((person) => {
//    return sum += person;
// } )
// console.log(sum)
// }
// checkTask([10, 25, 25, 15, 5, 10])

//?  задание 3

// function checkTask(arr){
//   let newArr = arr.reduce((a, b)=> a-b)
//    console.log(newArr)
//   }
//   checkTask( [175, 50, 25])

//? задание4

// function checkTask(arr){
//   arr= Math.max(...arr)
//   console.log(arr)
//   }

//?  задание 5

// let arr = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]  
// function checkTask(arr){ 
// let countItems = arr.reduce((acc, item) => { 
//   acc[item] = acc[item] ? acc[item] + 1 : 1;  
//   return acc; 
// }, {});

// const result = Object.keys(countItems).filter((item) => countItems[item] > 1); 
// let max = Math.max.apply(null,result); 
//   return console.log(max); 
//  } 
//  checkTask(arr)

//?  задание  6

// let arr = [1, 2, 3 ];
// function checkTask(arr){
// let newArr = [];
//  arr.forEach(function(arr){
//  newArr.push(arr*arr);
// });
//  console.log(newArr);
// }
// checkTask(arr)

//?  задание  7

// function checkTask(arr){ 
//   let newArr = arr.every((element)=> element >= 0);
//   console.log(newArr)
//   }
//   checkTask([4, 5, 8, 9]);

//?  задание  8

// let arr = ['июнь', 'октябрь', 'май', 'ноябрь', 'март'];
// function checkTask(arr){
// return arr.length > 5};
// let newArr = arr.filter(checkTask);
// console.log(newArr);  

//?  экстра 1 

// function checkTask (arr) {
//   let odds = arr.filter(n => n%2)
//   console.log(odds)
//   }
//   checkTask([11, 4, 8, 9, 5, 15, 6])

//?  экстра 2

// let arr = ['Hello', 'World', 'C++', 'JavaScript', 'IT', 'Java'];
// function checkTask(arr){
// return arr.length >= 5};
// let newArr = arr.filter(checkTask);
// console.log(newArr);




//?  задание 12. повторение
// let checkTask = (arr) => { 
//   console.log(Array.from(new Set(arr))); 
// }

//!   Деструктуризация
//?   задание 1

// checkTask(["Julius", "Caesar", "Consul", "of the Roman Republic"]);
// function checkTask([firstName ,,, titul]){
// console.log(firstName, titul);
//   }

checkTask("Albert Einstein");
function checkTask("firstName, lastName"){
    
console.log(firstName, lastName);

}