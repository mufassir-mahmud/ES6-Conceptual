const person = [
    {id: 'ID01', name: 'Mufassir Mahmud', age:22},
    {id: 'ID02', name: 'ABM Fahim', age:19},
    {id: 'ID03', name: 'Mehedi Hasan', age:22},
    {id: 'ID04', name: 'Omar Farouk', age:22},
]

const obj = {};
// obj.x = 'Hello';
// obj['y'] = 'World';
// console.log(obj);

// const property = 'phone';
// obj[property] = 2000;
// console.log(obj);
person.map((person) => {
    const id = person.id;
    const name = person.name;

    obj[id] = name;
})

console.log(obj);