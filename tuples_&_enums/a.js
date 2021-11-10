var mark1 = ["English", 100];
var marks2 = [["English", 100], ["Math", 100]];
// Enums
var colours;
(function (colours) {
    colours[colours["red"] = 0] = "red";
    colours[colours["black"] = 1] = "black";
    colours[colours["white"] = 2] = "white";
    colours[colours["blue"] = 3] = "blue";
})(colours || (colours = {}));
console.log(colours["red"]);
var weekdays;
(function (weekdays) {
    weekdays[weekdays["mon"] = 0] = "mon";
    weekdays[weekdays["tue"] = 100] = "tue";
    weekdays[weekdays["wed"] = 101] = "wed";
    weekdays[weekdays["thu"] = 500] = "thu";
    weekdays[weekdays["fri"] = 501] = "fri";
    weekdays[weekdays["sat"] = 502] = "sat";
    weekdays[weekdays["sun"] = 503] = "sun";
})(weekdays || (weekdays = {}));
console.log(weekdays["mon"], weekdays["tue"], weekdays["wed"], weekdays["fri"]);
