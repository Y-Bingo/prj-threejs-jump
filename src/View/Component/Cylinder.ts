import * as THREE from 'three';
import { Block } from './Block';

export class Cylinder extends Block {
	public instance: THREE.Mesh;

	constructor(x: number, y: number, z: number, w?: number) {
		super('cuboid');

		// setup
		const size = w || this.width;
		const geometry = new THREE.CylinderGeometry(size / 2, size / 2, this.height, 50);
		const material = new THREE.MeshBasicMaterial({
			color: 0xffffff,
		});
		this.instance = new THREE.Mesh(geometry, material);
		this.instance.name = 'block';
		this.instance.position.set(x, y, z);
		this.x = x;
		this.y = y;
		this.z = z;
	}
}