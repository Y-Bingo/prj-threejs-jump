import GameOverPage from '../View/GameOverPage';
import GamePage from '../View/GamePage';

export class GameView {
	private name: string = 'gameView';

	private gamePage: GamePage;
	private gameOverPage: GameOverPage;

	constructor() {}

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
