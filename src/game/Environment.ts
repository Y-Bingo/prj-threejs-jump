import * as THREE from 'three';
import Application from './Application';

/**
 * Environment
 */
export class Environment {
	private app: Application;
	private scene: THREE.Scene;

	constructor() {
		this.app = new Application();
		this.scene = this.app.scene;

		this.setLight();
	}

	private setLight(): void {
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
		const directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
		directionalLight.position.set(10, 30, 20);
		directionalLight.castShadow = true;
		directionalLight.shadow.camera.near = 0.5;
		directionalLight.shadow.camera.far = 500;
		directionalLight.shadow.camera.left = -100;
		directionalLight.shadow.camera.right = 100;
		directionalLight.shadow.camera.top = 100;
		directionalLight.shadow.camera.bottom = -100;
		directionalLight.shadow.mapSize.width = 1024;
		directionalLight.shadow.mapSize.height = 1024;

		this.scene.add(ambientLight);
		this.scene.add(directionalLight);
	}
}
