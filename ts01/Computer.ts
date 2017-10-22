enum Computer{Desktop, Laptop,Netbook};

let cp:Computer = Computer.Laptop;

console.log(cp);

function examReturn():string{
    console.log("examReturn함수 호출");
    return "examReturn함수 호출";
}

function examVoid():void{
    console.log("examVoid함수 호출");
}

let a:string;
a = examReturn();
console.log(a);
examVoid();

let testArr : Array<number> = [1,2,3];
console.log(testArr);

class EE{
    name:string = "nam";
}
let ee:EE = new EE();
