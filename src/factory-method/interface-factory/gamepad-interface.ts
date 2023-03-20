export interface Gamepad{
    color(GamepadColor: string): void;
    brand(Console: string): void;
    stop(): void;
}