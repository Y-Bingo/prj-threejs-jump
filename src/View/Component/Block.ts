import { BLOCK_CONF } from '../../Game/GameConfig';

/**
 * Block
 */
export class Block {
	public width: number = BLOCK_CONF.width;
	public height: number = BLOCK_CONF.height;
	public x: number = 0;
	public y: number = 0;
	public z: number = 0;
	public type: string; //  'cuboid' | 'cylinder';

	public instance: THREE.Mesh;
	protected status: string = 'stop';
	protected scale: number = 1;

	constructor(type: string) {
		this.type = type;
	}

	public startShrink(): void {
		this.status = 'shrink';
	}

	public rebound(): void {
		this.status = 'stop';
		this.scale = 1;
	}

	private shrink(): void {
		const DELTA_SCALE = 0.005;
		const MIN_SCALE = 0.55;
		this.scale = Math.max(MIN_SCALE, this.scale - DELTA_SCALE);
		if (this.scale <= MIN_SCALE) return;

		this.instance.scale.y = this.scale;
		const deltaY = (this.height * DELTA_SCALE) / 2;
		this.instance.position.y -= deltaY;
	}

	public onUpdate(): void {
		if (this.status === 'shrink') {
			this.shrink();
		}
	}
}
