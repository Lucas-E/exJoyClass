import { AbstractComputer } from "./AbstractComputer";
export class Server implements AbstractComputer {
	ram: number | undefined;
	hd: number | undefined;
	cpu: number | undefined;
	type: string | undefined;
	public constructor(ram?: number, hd?: number, cpu?: number, type?: string) {
		this.ram = ram;
		this.hd = hd;
		this.cpu = cpu;
		this.type = type;
	}

	setRam(ram: number): void {
		this.ram = ram;
	}
	setHd(hd: number): void {
		this.hd = hd;
	}
	setCpu(cpu: number): void {
		this.cpu = cpu;
	}
	setType(type: string): void {
		this.type = type;
	}
	getRam(): number | undefined {
		return this.ram;
	}
	getHd(): number | undefined {
		return this.hd;
	}
	getCpu(): number | undefined {
		return this.cpu;
	}
	getType(): string | undefined {
		return this.type;
	}

    toString():string{
        return `${this.ram}, ${this.hd}, ${this.cpu}, ${this.type}`
    }
}
