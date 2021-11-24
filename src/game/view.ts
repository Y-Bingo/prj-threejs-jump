import GameOverPage from '../pages/game-over.page';
import GamePage from '../pages/game-page';

export class GameView {
	private name: string = 'gameView';

	private gamePage: GamePage;
	private gameOverPage: GameOverPage;

	constructor() {}

	/**
	 * @method 初始化游戏界面
	 */
	public initGamePage(callbacks: () => void): void {
		this.gamePage = new GamePage(callbacks);
		this.gamePage.init();
	}

	public initGameOverPage(callbacks: () => void): void {
		this.gameOverPage = new GameOverPage(callbacks);
		this.gameOverPage.init();
	}

	/**
	 * 显示 gameOverPage
	 */
	public showGameOverPage(): void {
		this.gameOverPage.show();
	}

	/**
	 * 重新开始游戏
	 */
	public restartGame(): void {
		this.gamePage.restartGame();
	}
}
