export interface AbstractComputer{
    ram:number|undefined;
    hd:number|undefined;
    cpu:number|undefined;
    type:string|undefined;

    setRam(ram:number):void;
    setHd(hd:number):void;
    setCpu(cpu:number):void
    setType(type:string):void;

    getRam():number|undefined;
    getHd():number|undefined;
    getCpu():number|undefined;
    getType():string|undefined;

    toString():string;
}