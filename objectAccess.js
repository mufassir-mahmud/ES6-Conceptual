// const person = {
//     name: 'Mufassir',
//     age: 22,
//     class: 'Honourse',
// }

// const property = 'age';
// console.log(person[property]);
const complexObject = {
    id: 1,
    name: 'Main Object',
    info : {
        description : 'This is a complex nested object',
        author: {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    data: {
        values: [11,22,33],
        settings: {
            isEnabled: true,
            maxItems: 5
        }
    }
}

console.log('Name:', complexObject.name);
console.log('Last Name: ', complexObject.info.author.lastName);
console.log('Data Values ', complexObject.data.values[2]);
console.log('Max Item', complexObject.data.settings.maxItems);






















