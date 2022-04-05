import * as THREE from 'three';

/**
 * Bottle
 */
export class Bottle {
	public instance: THREE.Group;

	constructor() {
		// setup
		this.instance = new THREE.Group();
		this.instance.name = 'bottle';
		this.instance.position.set(-10, 5, 0);

		let headRadius = 1.9;

		const bottleMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
		const head = new THREE.Mesh(new THREE.SphereGeometry(0.6 * headRadius, 50, 50), bottleMaterial);
		head.position.y += 3.3 * headRadius;

		const body = new THREE.Group();
		const body1 = new THREE.Mesh(new THREE.CylinderGeometry(0.7 * headRadius, 0.6 * headRadius, headRadius, 50), bottleMaterial);
		body1.position.y += headRadius;
		const body2 = new THREE.Mesh(new THREE.SphereGeometry(0.7 * headRadius, 50, 50), bottleMaterial);
		body2.position.y += headRadius * 1.5;
		const body3 = new THREE.Mesh(new THREE.CylinderGeometry(0.6 * headRadius, 0.9 * headRadius, 1.9 * headRadius, 50), bottleMaterial);
		body.add(body1);
		body.add(body2);
		body.add(body3);
		this.instance.add(head);
		this.instance.add(body);
	}
}
