
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
    if (b === 0) throw new Error('cannot be divided by zero')
    return console.log(a/b)
}

divide(1,0) //cannot be divided by zero

