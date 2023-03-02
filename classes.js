class Animal {
    move = true
    constructor(sound) {
        this.sound = sound;
    }
    say() {
        console.log(`${this.sound}`)
    }
}

class Cat extends Animal{
    constructor(sound) {
        super(sound);
    }
    color = 'black'
}

let Vasily =  new Cat("miay");
console.log(Vasily) //Cat  { move: true, sound: 'miay', color: 'black' }


