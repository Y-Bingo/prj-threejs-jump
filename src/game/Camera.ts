import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Sizes } from '../Utils/Sizes';
import Application from './Application';
import { FRUSTUM_SIZE } from './GameConfig';

/**
 * My Camera
 */
export class Camera {
	private app: Application;
	private sizes: Sizes;
	private scene: THREE.Scene;
	private canvas: HTMLCanvasElement;
	public instance: THREE.OrthographicCamera;
	public control: OrbitControls;

	constructor() {
		this.app = new Application();
		this.sizes = this.app.sizes;
		this.scene = this.app.scene;
		this.canvas = this.app.canvas;

		this.setInstance();
		this.setOrbitControl();
	}

	private setInstance(): void {
		// this.instance = new THREE.PerspectiveCamera();
		const w = this.sizes.displayWidth;
		const h = this.sizes.displayHeight;
		const aspect = w / h;
		this.instance = new THREE.OrthographicCamera(
			-FRUSTUM_SIZE,
			FRUSTUM_SIZE,
			FRUSTUM_SIZE * aspect,
			-FRUSTUM_SIZE * aspect,

			-100,
			100,
		);
		this.instance.position.set(-10, 10, 10);
		this.instance.lookAt(new THREE.Vector3(0, 0, 0));
		this.scene.add(this.instance);

		const axes = new THREE.AxesHelper(10);
		axes.position.z = 100;
		this.scene.add(axes);

		const cameraHelper = new THREE.CameraHelper(this.instance);
		this.scene.add(cameraHelper);
	}

	private setOrbitControl(): void {
		this.control = new OrbitControls(this.instance, this.canvas);
		this.control.enableDamping = true;
		// this.control.minZoom = 0.5;
		// this.control.maxZoom = 2;
	}

	public resize(): void {
		// console.log('resize camera');
		// this.instance.aspect = this.sizes.screenWidth / this.sizes.screenHeight;
		const w = this.sizes.displayWidth;
		const h = this.sizes.displayHeight;
		this.instance.left = w / -2;
		this.instance.right = w / 2;
		this.instance.top = h / 2;
		this.instance.bottom = h / -2;
		this.instance.updateProjectionMatrix();
	}

	public update(): void {}
}
