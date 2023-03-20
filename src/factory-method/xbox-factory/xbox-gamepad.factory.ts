import { Gamepad } from "../interface-factory/gamepad-interface";


export class XboxGamepad implements Gamepad{
    constructor(private consoleName: string){}

    color(GamepadColor: string): void {
        console.log(`My ${this.consoleName} gamepad is ${GamepadColor}`);
    }

    brand(Console: string): void {
        console.log(`My ${Console} is excellent!!!`);
    }

    stop(): void{
        console.log(`${this.consoleName} parando...`);
    }
};