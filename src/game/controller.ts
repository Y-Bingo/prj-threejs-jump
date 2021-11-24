import { GameModel } from './model';
import { GameView } from './view';

export default class GameController {
	private name: string = 'controller';
	private gameView: GameView;
	private gameModel: GameModel;

	constructor() {
		this.gameModel = new GameModel();
		this.gameView = new GameView();
	}

	/**
	 * 初始化页面
	 */
	public initPages(): void {
		const gamePageCallbacks = () => {
			showGameOverPage: this.showGameOverPage;
		};

		const gameOverPageCallbacks = () => {
			restartGame: this.restartGame;
		};

		this.gameView.initGamePage(gamePageCallbacks);
		this.gameView.initGameOverPage(gameOverPageCallbacks);
	}

	/**
	 * 显示 game-over-page
	 */
	private showGameOverPage(): void {
		this.gameView.showGameOverPage();
	}

	/**
	 * 重新开始游戏
	 */
	private restartGame(): void {
		this.gameView.restartGame();
	}
}
