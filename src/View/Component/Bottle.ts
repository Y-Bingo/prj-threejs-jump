import * as THREE from 'three';
import { BLOCK_CONF, BOTTLE_CONF } from '../../Game/GameConfig';
import { RES } from '../../Utils/Resource';
import { Tween } from '../../Utils/Tween';

/**
 * Bottle
 */
export class Bottle {
	public instance: THREE.Group;
	private box: THREE.Group;
	private head: THREE.Mesh;
	private body: THREE.Group;

	private direction: number;
	private axis: number;

	private status: string;

	constructor() {
		//
		this.direction = 0;
		this.axis = 0;
		this.status = 'stand';

		// setup
		// instance
		this.instance = new THREE.Group();
		this.instance.name = 'bottle';
		this.instance.position.set(BOTTLE_CONF.startX, BOTTLE_CONF.startY + 30, BOTTLE_CONF.startZ);
		// the whole
		this.box = new THREE.Group();
		this.instance.add(this.box);

		let headRadius = BOTTLE_CONF.radius;
		const headTexture = RES.getRes('bottom_png') as THREE.Texture;
		const middleTexture = RES.getRes('bottom_png') as THREE.Texture;
		const bottomTexture = RES.getRes('bottom_png') as THREE.Texture;
		const headMaterial = new THREE.MeshBasicMaterial({ map: headTexture });

		// head
		const head = new THREE.Mesh(new THREE.OctahedronGeometry(0.8 * headRadius), headMaterial);
		head.position.y += 3.3 * headRadius;
		// head.castShadow = true;
		this.head = head;

		// body
		const middleMaterial = new THREE.MeshBasicMaterial({ map: middleTexture });
		const bottomMaterial = new THREE.MeshBasicMaterial({ map: bottomTexture });
		const body = new THREE.Group();
		this.body = body;

		const body1 = new THREE.Mesh(new THREE.CylinderGeometry(0.7 * headRadius, 0.6 * headRadius, headRadius, 50), middleMaterial);
		body1.position.y += headRadius;
		const body2 = new THREE.Mesh(new THREE.SphereGeometry(0.7 * headRadius, 50, 50), middleMaterial);
		body2.position.y += headRadius * 1.5;
		const body3 = new THREE.Mesh(new THREE.CylinderGeometry(0.6 * headRadius, 0.9 * headRadius, 1.9 * headRadius, 50), bottomMaterial);
		body.add(body1);
		body.add(body2);
		body.add(body3);

		body1.castShadow = true;
		body2.castShadow = true;
		body3.castShadow = true;

		this.box.add(head);
		this.box.add(body);
	}

	public showUp(): void {
		Tween.to(this.instance.position, {
			duration: 0.75,
			x: BOTTLE_CONF.startX,
			y: BOTTLE_CONF.startY,
			z: BOTTLE_CONF.startZ,
			ease: 'bounce.out',
		});
	}

	public setDirection(direction: number, axis: number): void {
		this.direction = direction;
		this.axis = axis;
	}

	public rotate(): void {
		const scale = 1.4;
		this.box.rotation.x = this.box.rotation.z = 0;
		if (this.direction == 0) {
			// x
			Tween.to(this.box.rotation, { duration: 0.14, z: this.box.rotation.z - Math.PI });
			Tween.to(this.box.rotation, { duration: 0.18, z: this.box.rotation.z - 2 * Math.PI, ease: 'linear', delay: 0.14 });
			Tween.to(this.head.position, { duration: 0.1, y: this.head.position.y + 0.9 * scale, x: this.head.position.x + 0.45 * scale });
			Tween.to(this.head.position, {
				duration: 0.1,
				y: this.head.position.y - 0.9 * scale,
				x: this.head.position.x - 0.45 * scale,
				ease: 'linear',
				delay: 0.1,
			});
			Tween.to(this.head.position, { duration: 0.15, y: BOTTLE_CONF.radius * 3.3, x: 0, ease: 'linear', delay: 0.25 });
			Tween.to(this.body.scale, {
				duration: 0.1,
				y: Math.max(scale, 1),
				x: Math.max(Math.min(1 / scale, 1), 0.7),
				z: Math.max(Math.min(1 / scale, 1), 0.7),
			});
			Tween.to(this.body.scale, {
				duration: 0.1,
				y: Math.min(0.9 / scale, 0.7),
				x: Math.max(scale, 1.2),
				z: Math.max(scale, 1.2),
				ease: 'linear',
				delay: 0.1,
			});
			Tween.to(this.body.scale, { duration: 0.3, y: 1, x: 1, z: 1, ease: 'linear', delay: 0.2 });
		} else if (this.direction == 1) {
			// y
			Tween.to(this.box.rotation, { duration: 0.14, x: this.box.rotation.x - Math.PI });
			Tween.to(this.box.rotation, { duration: 0.18, x: this.box.rotation.x - 2 * Math.PI, ease: 'linear', delay: 0.14 });
			Tween.to(this.head.position, { duration: 0.1, y: this.head.position.y + 0.9 * scale, z: this.head.position.z - 0.45 * scale });
			Tween.to(this.head.position, {
				duration: 0.1,
				z: this.head.position.z + 0.45 * scale,
				y: this.head.position.y - 0.9 * scale,
				ease: 'linear',
				delay: 0.1,
			});
			Tween.to(this.head.position, { duration: 0.15, y: BOTTLE_CONF.radius * 3.3, z: 0, ease: 'linear', delay: 0.25 });
			Tween.to(this.body.scale, {
				duration: 0.05,
				y: Math.max(scale, 1),
				x: Math.max(Math.min(1 / scale, 1), 0.7),
				z: Math.max(Math.min(1 / scale, 1), 0.7),
			});
			Tween.to(this.body.scale, {
				duration: 0.05,
				y: Math.min(0.9 / scale, 0.7),
				x: Math.max(scale, 1.2),
				z: Math.max(scale, 1.2),
				ease: 'linear',
				delay: 0.1,
			});
			Tween.to(this.body.scale, { duration: 0.2, y: 1, x: 1, z: 1, ease: 'linear', delay: 0.2 });
		}
	}

	private scale: number = 1;
	private shrink(): void {
		const MIN_SCALE = 0.55;
		const HORIZON_DELTA_SCALE = 0.007;
		const DELTA_SCALE = 0.005;
		const HEAD_DELTA = 0.02;

		this.scale = Math.max(this.scale - DELTA_SCALE, MIN_SCALE);
		if (this.scale <= MIN_SCALE) return;

		this.body.scale.y = this.scale;
		this.body.scale.x += HORIZON_DELTA_SCALE;
		this.body.scale.z += HORIZON_DELTA_SCALE;
		this.head.position.y -= HEAD_DELTA;

		const bottleDeltaY = HEAD_DELTA / 2;
		const deltaY = (BLOCK_CONF.height * DELTA_SCALE) / 2;
		this.instance.position.y -= bottleDeltaY + deltaY * 2;
	}

	public startShrink(): void {
		this.status = 'shrink';
	}

	public stopShrink(): void {
		this.scale = 1;
		this.status = 'stop';
	}

	public onUpdate(): void {
		this.head.rotation.y += 0.06;
		if (this.status === 'shrink') {
			this.shrink();
		}
	}
}
