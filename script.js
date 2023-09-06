

// console.log(users);

// Exercise 1 Переберите массив и запишите каждый элемент в консоль.

// const users = [
//     {
//         name:"Alice",
//         phone:911911911911,
//         adress:"Ukraine"
// },
// {
//     name:"Bob",
//     phone:19988448855,
//     adress:"England"
// },
// {
//     name:"Mary",
//     phone:5567684948575,
//     adress:"USA"
// },
// {
//     name:"Joy",
//     phone:64574567443,
//     adress:"Brazil"
// },
// {
//     name:"Elvis",
//     phone:7566743438,
//     adress:"Papua"
// },
// ]

// users.forEach((el,ind,arr) => {
// console.log(el);
// })

//// Exercise 2 Умножьте каждый элемент массива на определенное значение и сохраните результат в новом массиве.

// let arr = [1,2,3,4,5];

// let Resultmult = [];

// arr.forEach((el) =>{
// Resultmult.push(el * 2);
// })

// arr = Resultmult;

// console.log(arr);

// Exercise 3 Отфильтруйте массив, чтобы удалить элементы, не соответствующие определенным критериям.

// let arr = [1,2,3,4,5,10,523,123,654];
//  let newArr = [];

// arr.forEach((el,ind,arr2) => {
// el % 2 > 0? newArr.push(el):null
// })
// arr = newArr;

// console.log(arr);



// Exercise 4 Выполните итерацию по массиву и обновите каждый элемент до нового значения.

// let arr = [1,2,3,4,5,10,523,123,654];

// let newArr = [];

// arr.forEach((el,ind,arr2) => {
// newArr.push(el * el);

// });

// arr = newArr
// console.log(arr);

//  Exercise 5 Найдите максимальное или минимальное значение в массиве, используя forEach

//  let arr = [23,22,2000,3,41,1000,101,523,123,60000,654];

// находим минимум

// let min = arr[0];
//  arr.forEach((el,ind,arr2) => {
// el <min? min = el:null

//  })

// console.log(min)

// находим максимум

// let max = arr[0];
//  arr.forEach((el,ind,arr2) => {
// el >max? max = el:null

//  })

//  console.log(max)


//  Exercise 6 Создайте новый массив, выбрав определенные свойства объектов в существующем массиве. 

//Будем находить числа заканчивающие на число 3

// let arr = [23,22,2000,3,41,1000,101,523,123,60000,654];

// let arrThreeEnd = [];

// arr.forEach((el) => {
// el % 10 === 3?arrThreeEnd.push(el):null
// })

// console.log(arrThreeEnd);
