import * as THREE from 'three';
import { Block } from './Block';

export class Cylinder extends Block {
	constructor(x: number, y: number, z: number, w?: number) {
		super('cuboid');

		this.x = x;
		this.y = y;
		this.z = z;

		// setup
		const size = w || this.width;
		const geometry = new THREE.CylinderGeometry(size / 2, size / 2, this.height, 50);
		const material = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			// wireframe: true,
		});
		this.instance = new THREE.Mesh(geometry, material);
		this.instance.name = 'block';
		this.instance.position.set(x, y, z);
		this.instance.castShadow = true;
		this.instance.receiveShadow = true;
	}
}
