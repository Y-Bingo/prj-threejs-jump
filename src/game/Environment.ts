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
		directionalLight.position.set(10, 20, 15);

		this.scene.add(ambientLight);
		this.scene.add(directionalLight);
	}
}
