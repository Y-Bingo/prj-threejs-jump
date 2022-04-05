import { Background } from '../View/Background';
import GameOverPage from '../View/GameOverPage';
import GamePage from '../View/GamePage';
import { Environment } from './Environment';

export class GameView {
	private name: string = 'gameView';

	private environment: Environment;
	private background: Background;
	private gamePage: GamePage;
	private gameOverPage: GameOverPage;

	constructor() {}

	public initPage(): void {
		this.environment = new Environment();
		this.background = new Background();
	}

	public initGamePage(callbacks: () => void): void {
		this.gamePage = new GamePage(callbacks);
		this.gamePage.init();
	}

	public initGameOverPage(callbacks: () => void): void {
		this.gameOverPage = new GameOverPage(callbacks);
		this.gameOverPage.init();
	}

	public showGamePage(): void {
		this.gamePage.show();
		this.gamePage.restartGame();
		this.gameOverPage.hide();
	}

	public showGameOverPage(): void {
		this.gameOverPage.show();
	}

	public restartGame(): void {
		this.gamePage.restartGame();
	}
}
