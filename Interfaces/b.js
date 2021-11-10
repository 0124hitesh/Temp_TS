var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cAnimal = /** @class */ (function () {
    // both na and co must be initialized in construtor
    // class properties like na & co should be with diffent name from constructor parameters
    // can't declare class propery with name like "name" & "colour" 
    function cAnimal(name, colour) {
        this.name = name;
        this.colour = colour;
        this.na = name;
        this.co = colour;
    }
    cAnimal.prototype.walk = function () {
        console.log("Can Walk");
        return true;
    };
    cAnimal.prototype.toString = function () {
        return "name = " + this.na + ", colour = " + this.co;
    };
    return cAnimal;
}());
var dog = new cAnimal('Dog', 'black');
console.log(dog.toString());
console.log(dog.na, dog.co);
dog.walk();
var cBird = /** @class */ (function (_super) {
    __extends(cBird, _super);
    function cBird(name, colour) {
        var _this = _super.call(this, name, colour) || this;
        _this.name = name;
        _this.colour = colour;
        return _this;
    }
    cBird.prototype.fly = function () {
        console.log("Can Fly");
        return true;
    };
    return cBird;
}(cAnimal));
var duck = new cBird('Duck', 'white');
console.log('\n', duck.toString());
console.log(dog.na, dog.co);
duck.walk();
duck.fly();
