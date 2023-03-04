
function  getA(){
    try {
        console.log (a);
        let a = 3;
    }
    catch {
      console.log('let должен быть объявлен перед использованием.')
    }
    finally {
        let a  = 3;
        console.log (a)
    }
}

getA() //let должен быть объявлен перед использованием.
       // 3


function divide(a,b) {
    const result  = a/b
    if (b === 0) {
        console.log('cannot be divided by zero')
        return
    }
    return console.log(result)
}

divide(1,0) //cannot be divided by zero

