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
			(FRUSTUM_SIZE * aspect) / -1,
			(FRUSTUM_SIZE * aspect) / 1,
			FRUSTUM_SIZE / 1,
			FRUSTUM_SIZE / -1,
			-100,
			100,
		);
		this.instance.position.set(0, 0, 10);
		// this.instance.position.set(-10, 10, 10);
		this.instance.lookAt(new THREE.Vector3(0, 0, 0));
		this.scene.add(this.instance);

		const axes = new THREE.AxesHelper(100);
		this.scene.add(axes);

		// const cameraHelper = new THREE.CameraHelper(this.instance);
		// this.scene.add(cameraHelper);
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
		const aspect = w / h;
		this.instance.left = (FRUSTUM_SIZE * aspect) / -1;
		this.instance.right = (FRUSTUM_SIZE * aspect) / 1;
		this.instance.top = FRUSTUM_SIZE / 1;
		this.instance.bottom = FRUSTUM_SIZE / -1;
		this.instance.updateProjectionMatrix();
	}

	public update(): void {}
}
