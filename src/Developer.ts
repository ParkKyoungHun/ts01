
interface Work{
    goForWork():void;
    doWorking():void;
    goOut():void;
}

class Developer implements Work{
    goForWork():void{
        console.log("일하러 가자");
    }
    doWorking():void{
        console.log("일하러 가자");
    }
    goOut():void{
        console.log("일하러 가자");
    }

}

let dev:Developer = new Developer();
dev.doWorking();
dev.goForWork();
dev.goOut();