import { GamepadFactory } from "./gamepad.factory";
import { XboxGamepad } from "../xbox-factory/xbox-gamepad.factory";
import { Gamepad } from "../interface-factory/gamepad-interface";


export class XboxGamepadFactory extends GamepadFactory{
    getGamepad(gamePadBran: string): Gamepad {
        return new XboxGamepad(gamePadBran)
    }
}