
let userList:Array<number> = new Array<number>();

for(let i:number = 0;i<5;i++){
    addUserList(userList,i);
}

function addUserList(userList:Array<number>,
    num:number){
    userList.push(num);
}

console.log(userList);

let testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
let tList:Array<boolean> = new Array<boolean>();
tList.push(true);

const tt:number = 3;

let tt2 : number|string = 4;
console.log(typeof tt2);
tt2 = "asdf";
console.log(typeof tt2);

let add
=function(n1:number|string, 
n2:number|string):number|string{
    if(typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if(typeof n2 != "number") {
        return "2숫자가 아닙니다.";
    }
    return n1+n2;
}
console.log(add(1,2));