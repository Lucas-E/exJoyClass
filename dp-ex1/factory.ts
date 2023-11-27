import { Pc } from "./Pc";
import { Server } from "./Server";
class ComputerFactory{
    private static createInstance(type:number){
        switch(type){
            case 1:
                return new Pc();
            case 2:
                return new Server();
        }
    }
}