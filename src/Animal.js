var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.printInfo = function () {
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    };
    return Cat;
}());
var dd = new Cat("동동이", 4);
dd.printInfo();
//# sourceMappingURL=Animal.js.map