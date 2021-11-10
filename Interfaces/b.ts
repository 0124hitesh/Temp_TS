interface Animal {
    name : string;
    colour : string
    walk : () => boolean,
    toString : () => string
}

interface Bird extends Animal{
    fly : () => boolean
}

class cAnimal implements Animal{
    public na : string;
    public co : string

    // both na and co must be initialized in construtor
    // class properties like na & co should be with diffent name from constructor parameters
    // can't declare class propery with name like "name" & "colour" 

    constructor(public name : string, public colour : string){
        this.na = name;
        this.co = colour
    }

    public walk(){
        console.log("Can Walk");
        return true;
    }

    public toString(){
        return `name = ${this.na}, colour = ${this.co}`
    }

}

let dog : cAnimal = new cAnimal('Dog', 'black')
console.log(dog.toString())
console.log(dog.na, dog.co)
dog.walk()


class cBird extends cAnimal implements Bird{

    constructor(public name : string, public colour : string){
        super(name, colour)
    }

    public fly(){
        console.log("Can Fly");
        return true;
    }
}

let duck : cBird = new cBird('Duck', 'white');
console.log('\n',duck.toString())
console.log(dog.na, dog.co)
duck.walk()
duck.fly()
