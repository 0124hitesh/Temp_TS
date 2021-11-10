type name = string | number;

type addr = {
    fisrt_add : string,
    sec_add : string
}
type person = {
    fname : name,
    age? : number, // not compulsary to give
    address : addr
}

type student = person & {
    marks : [string, number],
    marks2 : number[]
}

let stu1 : student = {
    fname : 'stu1',
    address : {
        fisrt_add : 'first_add',
        sec_add : "sec_addd"
    },
    marks : ['English', 45],
    marks2 : [1, 24, 358]
}

console.log(stu1)
