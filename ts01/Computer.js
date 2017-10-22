var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netbook"] = 2] = "Netbook";
})(Computer || (Computer = {}));
;
let cp = Computer.Laptop;
console.log(cp);
function examReturn() {
    console.log("examReturn함수 호출");
    return "examReturn함수 호출";
}
function examVoid() {
    console.log("examVoid함수 호출");
}
let a;
a = examReturn();
console.log(a);
examVoid();
let testArr = [1, 2, 3];
console.log(testArr);
class EE {
    constructor() {
        this.name = "nam";
    }
}
let ee = new EE();
//# sourceMappingURL=Computer.js.map