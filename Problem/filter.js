const students = [
    {name: 'Mufassir Mahmud' , email: 'mufassir389', avg: 56, fiftyPercent: true},
    {name: 'Mehedi Hasan' , email: 'mehedi#56', avg: 57, fiftyPercent: true},
    {name: 'Omar Farouk' , email: 'omar389', avg: 47, fiftyPercent: false},
    {name: 'ABM Fahum' , email: 'fahim389', avg: 56, fiftyPercent: true},
    {name: 'Nomayren Ohin' , email: 'ohin69', avg: 40, fiftyPercent: false},
    {name: 'Kazi Sakib' , email: 'sakib5678', avg: 46, fiftyPercent: false},

]

// const scic = students.filter((students) => students.avg >= 50 && students.fiftyPercent == true);
// console.log(scic);

const scic = students.filter((students) => students.avg >= 50 && students.fiftyPercent == true);
// console.log(scic);

const scicEmails = scic.map((students) => students.email).join(', ');
console.log(scicEmails);