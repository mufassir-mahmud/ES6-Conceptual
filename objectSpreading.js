const person = {
    name: 'Mufassir',
    age: 22,
    class: 'Honourse',
}

const person2 = {...person};
person2.address = 'Ukil Para';
console.log(person);
console.log(person2);

const {age,...rest} = person;
console.log(age);
