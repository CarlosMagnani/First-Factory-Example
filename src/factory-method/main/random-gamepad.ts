import { Gamepad } from "../interface-factory/gamepad-interface";
import { PlaystationGamepadFactory } from "../factories/playstation-gamepad.factory";
import { XboxGamepadFactory } from "../factories/xbox-gamepad.factory";
import { randomGamepads } from "../utils/randomGamepads";


export function randomGamepad(): Gamepad{
    const playstationFactory = new PlaystationGamepadFactory();
    const xboxFactory = new XboxGamepadFactory();
    const gamePad1 = playstationFactory.getGamepad('Playstation 5');
    const gamePad2 = playstationFactory.getGamepad('Playstation 3');
    const gamepad3 = xboxFactory.getGamepad('Xbox Series X');
    const gamepads = [gamePad1, gamePad2, gamepad3];
    return gamepads[randomGamepads(gamepads.length)]
}