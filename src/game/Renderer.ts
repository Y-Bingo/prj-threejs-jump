import * as THREE from 'three';
import { Sizes } from '../Utils/Sizes';
import Application from './Application';
import { Camera } from './Camera';

/**
 * Renderer
 */
export class Renderer {
	private app: Application;
	private canvas: HTMLCanvasElement;
	private sizes: Sizes;
	private scene: THREE.Scene;
	public camera: Camera;
	public instance: THREE.WebGLRenderer;

	/**
	 * constructor
	 */
	constructor() {
		this.app = new Application();
		this.sizes = this.app.sizes;
		this.scene = this.app.scene;
		this.canvas = this.app.canvas;
		this.camera = this.app.camera;

		this.setInstance();
	}

	private setInstance(): void {
		this.instance = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, preserveDrawingBuffer: true });
		// this.instance.physicallyCorrectLights = true;
		// this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
		// this.instance.outputEncoding = THREE.sRGBEncoding;
		// this.instance.toneMapping = THREE.CineonToneMapping;
		// this.instance.toneMappingExposure = 1.75;
		this.instance.shadowMap.enabled = true;
		this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
		this.instance.setClearColor(0x211d20, 1);
		this.instance.setSize(this.sizes.displayWidth, this.sizes.displayHeight); // 设置渲染器的宽度和高度
		this.instance.setPixelRatio(this.sizes.devicePixelRatio); // 设置设备像素比
		this.instance.render(this.scene, this.camera.instance);
	}

	public resize() {
		this.instance.setSize(this.sizes.displayWidth, this.sizes.displayHeight); // 设置渲染器的宽度和高度
		this.instance.setPixelRatio(this.sizes.devicePixelRatio); // 设置设备像素比
	}

	public update() {
		// this.instance.clear();
		this.instance.render(this.scene, this.camera.instance);
	}
}
