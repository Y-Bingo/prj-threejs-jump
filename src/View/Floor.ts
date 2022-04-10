import * as THREE from 'three';
import { BLOCK_CONF } from '../Game/GameConfig';
import { GameBaseView } from './GameBaseView';

/**
 * GameBackground
 */
export class Floor extends GameBaseView {
	constructor() {
		super();
		this.initUI();
	}

	private initUI(): void {
		const geometry = new THREE.PlaneGeometry(200, 200);
		const material = new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.3, transparent: true });
		const mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = -Math.PI * 0.5;
		mesh.position.y = -BLOCK_CONF.height / 2;
		mesh.receiveShadow = true;

		this.scene.add(mesh);
	}
}
