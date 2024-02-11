const outer = () =>{
    let count = 0;
    return () =>{
        count++;
        console.log(count);
    }
}

const x = outer();
const x2 = outer()
x()
x()
x()
x()
x()
x2()
x()
x2()