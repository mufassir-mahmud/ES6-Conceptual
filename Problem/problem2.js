const groom = [
    {name: 'Mufassir Mahmud', job: 'nonGov', salary: 55000 },
    {name: 'ABM Fahim', job: 'Gov', salary: 35000 },
    {name: 'Mehedi Hasan', job: 'nonGov', salary: 35000 },
    {name: 'Omar Farouk', job: 'Gov', salary: 25000 },
    {name: 'Iftakhar Topu', job: 'NonGov', salary: 10000 },
    {name: 'Nomayen Ohin', job: 'Gov', salary: 5000 }
]

const getMarry = groom.filter((groom) => (groom.job == 'Gov' && groom.salary >= 20000) || (groom.job == 'nonGov' && groom.salary >= 30000));
console.log(getMarry);

// const luckiest = Math.floor(Math.random()*getMarry.length);
// console.log(luckiest);

// const name = getMarry[luckiest].name;
// console.log(name);

const luckiest =Math.floor(Math.random()*getMarry.length) ;
console.log(luckiest);