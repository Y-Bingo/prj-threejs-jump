import Application from '../Game/Application';
import { EGamePage } from '../Game/Constants';
import { Cuboid } from './Component/Cuboid';
import { Cylinder } from './Component/Cylinder';

export default class GamePage {
	private name: string = EGamePage.GAME_PAGE;

	private app: Application;
	private scene: THREE.Scene;
	private;

	private cb: () => void;
	constructor(callbacks: () => void) {
		this.cb = callbacks;

		// setup
		this.app = new Application();
		this.scene = this.app.scene;
	}

	/**
	 * 初始化
	 */
	public init(): void {
		console.log('init: ', this.name);

		const cuboid = new Cuboid(-15, 0, 0);
		const cylinder = new Cylinder(23, 0, 0);

		this.scene.add(cuboid.instance);
		this.scene.add(cylinder.instance);
	}

	/**
	 * 显示
	 */
	public show(): void {
		console.log('show: ', this.name);
	}

	/**
	 * 显示
	 */
	public hide(): void {
		console.log('hide: ', this.name);
	}

	/**
	 * 重新开始游戏
	 */
	public restartGame(): void {
		console.log('restart game: ', this.name);
	}
}
