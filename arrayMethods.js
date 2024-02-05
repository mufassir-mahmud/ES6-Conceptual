// forEach, Map, Find, Filter, Reduce

// const items = [1,2,6,4,5]
// // for(let item of items){
// //     console.log(item);
// // }

// for(let i = 0; i<items.length; i++){
//     console.log(items[i]);
// }
// const arr = [1,2,3];
// const a = (x) => console.log(x);
// arr.forEach(a)
// arr.forEach((x) => console.log(x))

// const fruits = ['mango, banana, orange'];

// fruits.forEach(item =>{
//     console.log(item);
// })

// let sum = 0;
// arr.forEach( item =>{
//     sum += item
// })
// console.log(sum);

// const arr = [11,22,33,44,55];
// arr.map(item => console.log(item))

// const result = arr.forEach((item) => item);
// console.log(result);
// const result = arr.map((item) => item*2);
// console.log(result);

// const fruits = ['mango','bango', 'cango', 'tango'];
// fruits.forEach((item) => console.log(item))
// fruits.forEach((item, index, arr) => console.log(item, index,arr))

// forEach = element, index number, main array
// const fruits = ['mango','bango', 'cango', 'tango'];

// const find = (fruits) =>{
//     for(let fruit of fruits){
//         if(fruit === 'cango'){
//             return fruit
//         }
        
//     }
//     return null;
// }
// console.log(find(fruits));

// const y = fruits.find((item) => item === 'cango')
// console.log(y);

// const fruit = fruits.find(item => item === 'cango')
// console.log(fruit);


// const numbers = [11,22,33,44,55,66];

// const filter = numbers =>{
//     const result = [];
//     for(let number of numbers){
//         if(number % 2 === 0){
//             result.push(number)
//         }
//     }
//     return result
// }

// console.log(filter(numbers));

// const numbers = [11,33,55,77];
// const filter = numbers =>{
//     const result = [];
//     for( let number of numbers){
//         if(number % 2 !== 0){
//             result.push(number)
//         }
//     }
//     return result
// }
// const x = filter(numbers);
// console.log(x);

// const y = numbers.filter((number) => number%2 !== 0);
// console.log(y);
// Reduce:

const arr = [1,2,3,4,5];

const sum = arr.reduce((prev, curr) => prev + curr, 0 ) 
console.log(sum);