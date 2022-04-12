import Application from '../Game/Application';
import { Camera } from '../Game/Camera';
import { Sizes } from '../Utils/Sizes';

/**
 * GameBaseView
 */
export class GameBaseView {
	// inherit
	protected app: Application;
	protected scene: THREE.Scene;
	protected sizes: Sizes;
	protected camera: Camera;
	protected canvas: HTMLCanvasElement;

	constructor() {
		// setup
		this.app = new Application();
		this.scene = this.app.scene;
		this.sizes = this.app.sizes;
		this.camera = this.app.camera;
		this.canvas = this.app.canvas;
	}

	public onCreate(): void {}

	public onUpdate(): void {}

	public onResize(): void {}

	public onDestroy(): void {}
}
