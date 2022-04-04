import Application from '../Game/Application';
import { EventEmitter } from './EventEmitter';

/**
 * Sizes
 */
export class Sizes extends EventEmitter {
	private app: Application;
	private canvas: HTMLCanvasElement;

	public screenWidth: number;
	public screenHeight: number;
	public devicePixelRatio: number;

	public displayWidth: number;
	public displayHeight: number;

	public stageWidth: number = 640;
	public stageHeight: number = 1064;

	constructor() {
		super();
		// Setup
		this.app = new Application();
		this.canvas = this.app.canvas;

		this.screenWidth = window.innerWidth;
		this.screenHeight = window.innerHeight;

		this.devicePixelRatio = Math.min(window.devicePixelRatio, 2);

		this.doResize();
		// Resize event
		window.addEventListener('resize', this.doResize.bind(this));
	}

	private doResize(): void {
		// update
		this.screenWidth = window.innerWidth;
		this.screenHeight = window.innerHeight;
		this.devicePixelRatio = Math.min(window.devicePixelRatio, 2);

		// calculate new w/h
		let displayWidth = window.innerWidth;
		let displayHeight = window.innerHeight;
		let scaleX = this.screenWidth / this.stageWidth || 0;
		let scaleY = this.screenHeight / this.stageHeight || 0;
		if (scaleX > scaleY) {
			displayWidth = Math.round(this.stageWidth * scaleY);
		} else {
			displayHeight = Math.round(this.stageHeight * scaleX);
		}

		// resize
		if (this.canvas.width !== displayWidth) {
			this.canvas.width = displayWidth;
		}
		if (this.canvas.height !== displayHeight) {
			this.canvas.height = displayHeight;
		}

		let top = 0;
		this.canvas.style.top = top + (this.screenHeight - displayHeight) / 2 + 'px';
		this.canvas.style.left = (this.screenWidth - displayWidth) / 2 + 'px';

		this.displayWidth = displayWidth;
		this.displayHeight = displayHeight;
		this.trigger('resize');
	}
}
