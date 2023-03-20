import { randomGamepad } from "./factory-method/main/random-gamepad";
import { randomGamepads } from "./factory-method/utils/randomGamepads";
import { PlaystationGamepadFactory } from "./factory-method/factories/playstation-gamepad.factory";




const playstationFactory = new PlaystationGamepadFactory();
const gamepadNames = ['Dualshock 2', 'Dualsense', 'Dualshock 4', 'Dualschock 2'];


for (let i = 0; i < 10; i++) {
    const gamepad = randomGamepad();
    const names = gamepadNames[randomGamepads(gamepadNames.length)];
    gamepad.brand(names)
    gamepad.color('black')
    const newPlastation = playstationFactory.getGamepad(`My controllers - ${randomGamepads(10)}`);
    newPlastation.stop();
    console.log('-----');
}