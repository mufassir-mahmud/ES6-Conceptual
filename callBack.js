const function1 = (callback) => {
    console.log(typeof callback);
}
const callback = () =>{
    console.log('I am call back Function');
}

function1(callback)