interface Person{
    fname : string, 
    age : number, 
    add? : string | number
}

class cPerson implements Person{
    // all properties of interface must be required and should be PUBLIC
    constructor(public fname : string, public age : number, public add : string, public z : string, protected pro : string, private pri : string ){}
}

let p1 : cPerson = new cPerson("hit", 45, "addresssss", "public", "protected", "private")
console.log(p1)