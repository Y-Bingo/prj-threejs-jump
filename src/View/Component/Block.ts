import { BLOCK_CONF } from '../../Game/GameConfig';

/**
 * Block
 */
export class Block {
	public width: number = BLOCK_CONF.W;
	public height: number = BLOCK_CONF.H;
	public x: number = 0;
	public y: number = 0;
	public z: number = 0;
	public type: string; //  'cuboid' | 'cylinder'

	constructor(type: string) {
		this.type = type;
	}
}
