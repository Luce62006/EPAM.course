
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


function divide() {
    const result = 1 / 0
    if (result === Infinity) {
        console.log('cannot be divided by zero')
    }
}

divide() //cannot be divided by zero

