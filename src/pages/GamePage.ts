import { EGamePage } from '../Game/Constants';

export default class GamePage {
	private name: string = EGamePage.GAME_PAGE;

	private cb: () => void;
	constructor(callbacks: () => void) {
		this.cb = callbacks;
	}

	/**
	 * 初始化
	 */
	public init(): void {
		console.log('init: ', this.name);
	}

	/**
	 * 显示
	 */
	public show(): void {
		console.log('show: ', this.name);
	}

	/**
	 * 显示
	 */
	public hide(): void {
		console.log('hide: ', this.name);
	}

	/**
	 * 重新开始游戏
	 */
	public restartGame(): void {
		console.log('restart game: ', this.name);
	}
}
