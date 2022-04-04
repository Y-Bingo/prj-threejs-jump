import * as THREE from 'three';
import { Sizes } from '../Utils/Sizes';
import { Time } from '../Utils/Time';
import { Camera } from './Camera';
import GameController from './GameController';
import { Renderer } from './Renderer';

/**
 * Game instance
 */
let instance: Application = null;

/**
 * Game Main Class
 */
export default class Application {
	public canvas: HTMLCanvasElement;
	public sizes: Sizes;
	public time: Time;

	public scene: THREE.Scene;
	public camera: Camera;
	public renderer: Renderer;

	private gameController: GameController;

	constructor(canvas?: HTMLCanvasElement) {
		if (instance) {
			return instance;
		}
		instance = this;

		// Options
		this.canvas = canvas;

		// Setup
		this.sizes = new Sizes();
		this.sizes.on('resize', this.onResize.bind(this));
		this.time = new Time();
		this.time.on('tick', this.onTick.bind(this));
		this.scene = new THREE.Scene();
		this.camera = new Camera();
		this.renderer = new Renderer();

		// ctr
		this.gameController = new GameController();

		window['application'] = this;
	}

	private update(): void {
		this.camera.update();
		this.renderer.update();
	}

	private onResize(): void {
		this.resize();
	}

	private onTick(): void {
		this.update();
	}

	private resize(): void {
		//
		this.camera.resize();
		this.renderer.resize();
	}
	public init(): void {
		this.gameController.initPages();
	}

	public destroy(): void {
		this.sizes.off('resize');
		this.time.off('tick');

		this.scene.traverse(child => {
			if (child instanceof THREE.Mesh) {
				child.geometry.dispose();

				for (const key in child.material) {
					const value = child.material[key];
					if (value && typeof value.dispose === 'function') {
						value.dispose();
					}
				}
			}
		});

		this.camera.control.dispose();
		this.renderer.instance.dispose();
	}
}
