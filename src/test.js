var userList = new Array();
for (var i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
var testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
var tList = new Array();
tList.push(true);
var tt = 3;
var tt2 = 4;
console.log(typeof tt2);
tt2 = "asdf";
console.log(typeof tt2);
var add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if (typeof n2 != "number") {
        return "2숫자가 아닙니다.";
    }
    return n1 + n2;
};
console.log(add(1, 2));
//# sourceMappingURL=test.js.map