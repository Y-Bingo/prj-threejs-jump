import Application from './Game/Application';

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
new Application(canvas).init();
