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

		// texture
		const textureLoader = new THREE.TextureLoader();
		const headTexture = textureLoader.load('./resource/assets/bottom.png');
		const middleTexture = textureLoader.load('./resource/assets/bottom.png');
		const bottomTexture = textureLoader.load('./resource/assets/bottom.png');

		const headMaterial = new THREE.MeshBasicMaterial({ map: headTexture });
		const head = new THREE.Mesh(new THREE.SphereGeometry(0.6 * headRadius, 50, 50), headMaterial);
		head.position.y += 3.3 * headRadius;

		const body = new THREE.Group();
		const middleMaterial = new THREE.MeshBasicMaterial({ map: middleTexture });
		const bottomMaterial = new THREE.MeshBasicMaterial({ map: bottomTexture });
		const body1 = new THREE.Mesh(new THREE.CylinderGeometry(0.7 * headRadius, 0.6 * headRadius, headRadius, 50), middleMaterial);
		body1.position.y += headRadius;
		const body2 = new THREE.Mesh(new THREE.SphereGeometry(0.7 * headRadius, 50, 50), middleMaterial);
		body2.position.y += headRadius * 1.5;
		const body3 = new THREE.Mesh(new THREE.CylinderGeometry(0.6 * headRadius, 0.9 * headRadius, 1.9 * headRadius, 50), bottomMaterial);
		body.add(body1);
		body.add(body2);
		body.add(body3);
		this.instance.add(head);
		this.instance.add(body);
	}
}
