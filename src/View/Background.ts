import * as THREE from 'three';
import { GameBaseView } from './GameBaseView';

/**
 * GameBackground
 */
export class Background extends GameBaseView {
	constructor() {
		super();
		this.initUI();
	}

	private initUI(): void {
		const geometry = new THREE.PlaneGeometry(this.sizes.displayWidth, this.sizes.displayHeight);
		const material = new THREE.MeshBasicMaterial({ color: 0xd7dbe6, opacity: 0.7, transparent: true });
		const mesh = new THREE.Mesh(geometry, material);
		// mesh.rotation.z = Math.PI;
		mesh.position.z = -90;
		this.camera.instance.add(mesh);
	}
}
