import { Gamepad } from "../interface-factory/gamepad-interface";

export abstract class GamepadFactory {
    abstract getGamepad(gamePadBran: string): Gamepad;

    color(gamePadBrandName:string, color:string): Gamepad{
        const gamepad = this.getGamepad(gamePadBrandName);
        gamepad.color(color)
        return gamepad
    }
}