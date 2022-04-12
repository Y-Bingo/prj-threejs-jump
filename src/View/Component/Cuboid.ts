import * as THREE from 'three';
import { Block } from './Block';

export class Cuboid extends Block {
	public instance: THREE.Mesh;

	constructor(x: number, y: number, z: number, w?: number) {
		super('cuboid');

		this.x = x;
		this.y = y;
		this.z = z;

		// setup
		const size = w || this.width;
		const geometry = new THREE.BoxGeometry(size, this.height, size);
		const material = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			wireframe: true,
		});
		this.instance = new THREE.Mesh(geometry, material);
		this.instance.name = 'block';
		this.instance.position.set(x, y, z);
		this.instance.castShadow = true;
		this.instance.receiveShadow = true;
	}
}
