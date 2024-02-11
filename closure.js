const outer = () =>{
    let count = 0;
    return () =>{
        count++;
        console.log(count);
    }
}

const x = outer();
x()
x()
x()
x()
x()