console.log('Okkk')

let x:number = 10
x = 25
// x = 'error'
console.log(x)

let y : string | boolean;
y = "string"
console.log(y)
y = true
console.log(y)

let z : number | boolean = false;
// console.log(z)
console.log(typeof z)
z = 45
// console.log(typeof z, a)

var a = 'hello'
console.log(typeof a)

let arr : Array<number>;

let an : any = [1, 2, 3]
an = 'an'
console.log(an, Array.isArray(an))

let arr2 : number[] = []

const obj : {[key : string] : string | number} = {"A":4, "B":5}
console.log(obj)

let unk : unknown ;
unk = 4
unk = 'unk'
console.log(unk)

let v : void
// v = 4 not assignable

let n : never

function fun() : number {
    return 1;
}

console.log(fun())