// Tuple
type marks = [string, number]

let mark1 : marks = ["English", 100]
let marks2 : marks[] = [["English", 100], ["Math", 100]]


// Enums

enum colours {
    "red",
    "black",
    "white",
    "blue"
}
console.log(colours["red"])

enum weekdays {
    "mon",
    "tue" = 100,
    "wed",
    "thu" = 500,
    "fri",
    "sat",
    "sun"
}
console.log(weekdays["mon"], weekdays["tue"],weekdays["wed"], weekdays["fri"])