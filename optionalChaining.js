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

console.log(complexObject?.address?.contact);