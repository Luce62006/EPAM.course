
const car =  {
    color:'black'
}
car.color = 'green';

console.log( car.color)  //green

car.power = () => console.log('4000')

car.power()  //4000


function sum  ( pears, apples) { return pears+ apples }

console.log(sum(2,  4))  //6


const terminal  = {
    name: 'Nico',
    getName(){
        if(this.name){
            console.log(`Hello ${this.name}!`)
        }
        else{
            console.log('No name')
        }
    }
}

console.log(terminal.getName())


function getType(arg) {
    return console.log(typeof(arg))
}

getType(123) //number


 export default function  isPrime (num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

console.log(isPrime(7)) //true

