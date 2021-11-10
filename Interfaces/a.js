var cPerson = /** @class */ (function () {
    // fnmae ,age must be required and should be PUBLIC
    function cPerson(fname, age, add, z, pro, pri) {
        this.fname = fname;
        this.age = age;
        this.add = add;
        this.z = z;
        this.pro = pro;
        this.pri = pri;
    }
    return cPerson;
}());
var p1 = new cPerson("hit", 45, "addresssss", "public", "protected", "private");
// only pu
console.log(p1);
