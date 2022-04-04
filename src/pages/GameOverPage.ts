import * as THREE from 'three';
import Application from '../Game/Application';
import { EGamePage } from '../Game/Constants';
import { Sizes } from '../Utils/Sizes';

export default class GameOverPage {
	private name: string = EGamePage.GAME_OVER;
	// inter
	private app: Application;
	private scene: THREE.Scene;
	private sizes: Sizes;
	// private
	private canvas: HTMLCanvasElement;

	private cb: () => void;
	constructor(callbacks: () => void) {
		this.cb = callbacks;

		// setup
		this.app = new Application();
		this.scene = this.app.scene;
		this.sizes = this.app.sizes;
	}

	/**
	 * 初始化
	 */
	public init(): void {
		this.initGameOverCanvas();
		console.log('init: ', this.name);
	}

	private initGameOverCanvas(): void {}

	/**
	 * 显示
	 */
	public show(): void {
		console.log('show: ', this.name);
	}

	/**
	 * 隐藏
	 */
	public hide(): void {
		console.log('hide: ', this.name);
	}
}
