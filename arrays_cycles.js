const films = ['Titanic', 'Avatar', 'Avengers']
function getFilms (arr){
    return  arr.map(film =>  console.log(film))
}
getFilms(films) //Titanic Avatar Avengers


const cars =['bmv', 'mercedes','vw']
const carsToString = cars.toString()
console.log(carsToString) //bmv,mercedes,vw


const backToArray= carsToString.split(',')
console.log(backToArray) //[ 'bmv', 'mercedes', 'vw' ]


const friends = ['Misha', 'Vlad', 'Mike']
console.log(friends.map(friend=> `Hello ${friend}`))//[ 'Hello Misha', 'Hello Vlad', 'Hello Mike' ]


const numbers = [1,0.8,0,-6,7,8,3,0,5,6]
function getBoolean(num ){
    return  num.map( n => Boolean(n))
}
console.log(getBoolean(numbers)) //[true, true, false,true, true, true,true, false, true,true]


const arrayOfNumbers = [1,6,7,8,3,4,5,6]
const sorted =arrayOfNumbers.sort((a, b) => b - a);
console.log(sorted) //[8, 7, 6, 6, 5, 4, 3, 1]


const filtered =  arrayOfNumbers.filter( num => num > 3 )
console.log(filtered) //[ 8, 7, 6, 6, 5, 4 ]


const arrayOfNum = [1,6,7,8,3,4,5,6]
function getIndexOfNum(arr, num) {
    return arr.indexOf(num)
}
console.log(getIndexOfNum(arrayOfNum,3)) //4

function getNumber(num){
    for(let i= num; i >=10; i-=1){
        console.log(i)
    }
}
getNumber(15)


const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function getPrimeLoop(arr) {
    for(let n of arr){
        if(isPrime(n)){
            console.log(n)
        }
    }
}
getPrimeLoop(arrayOfNumbers) // 7 5 3

function getOddNumber (arr){
    for (let n of arr){
        if(n%2 !== 0) {
            console.log(n)
        }
    }
}
getOddNumber(arrayOfNumbers) //7 5 3 1
