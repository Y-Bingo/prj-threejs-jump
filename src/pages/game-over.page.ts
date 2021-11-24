export default class GameOverPage {
	private name: string = 'gameOverPage';

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
}
