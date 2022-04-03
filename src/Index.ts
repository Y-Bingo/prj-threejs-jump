import Application from './Game/Application';

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const game = new Application(canvas);
game.init();
