import { Gamepad } from "../interface-factory/gamepad-interface";


export class PlaystationGamepad implements Gamepad {
    constructor(private consoleName: string){}

    color(GamepadColor: string): void {
        console.log(`My ${this.consoleName} gamepad is ${GamepadColor}`);
    }

    brand(Console: string): void {
        console.log(`My console is ${Console}`);
    }

    stop(): void{
        console.log(`${this.consoleName} parando...`);
    }
}
