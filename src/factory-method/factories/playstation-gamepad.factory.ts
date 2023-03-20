import { GamepadFactory } from "./gamepad.factory";
import { PlaystationGamepad } from "../playstation-factory/playstation-gamepad.factory";
import { Gamepad } from "../interface-factory/gamepad-interface";


export class PlaystationGamepadFactory extends GamepadFactory{
    getGamepad(gamePadBran: string): Gamepad {
        return new PlaystationGamepad(gamePadBran)
    }
}