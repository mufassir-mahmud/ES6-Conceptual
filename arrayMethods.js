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

const arr = [11,22,33,44,55];
arr.map(item => console.log(item))

// const result = arr.forEach((item) => item);
// console.log(result);
const result = arr.map((item) => item*2);
console.log(result);

const fruits = ['mango','bango', 'cango', 'tango'];
fruits.forEach((item) => console.log(item))
fruits.forEach((item, index, arr) => console.log(item, index,arr))

// forEach = element, index number, main array