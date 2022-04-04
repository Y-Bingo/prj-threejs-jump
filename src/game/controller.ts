import { EGamePage } from './Constants';
import { GameModel } from './Model';
import { GameView } from './View';

export default class GameController {
	private name: string = 'controller';
	private gameView: GameView;
	private gameModel: GameModel;

	constructor() {
		this.gameModel = new GameModel();
		this.gameView = new GameView();
		this.gameModel.stageChange.attach((sender, args) => {
			const stageName = args.stage;
			switch (stageName) {
				case EGamePage.GAME_OVER:
					this.gameView.showGameOverPage();
					break;
				case EGamePage.GAME_PAGE:
					this.gameView.showGamePage();
					break;
			}
		});
	}

	/**
	 * 初始化页面
	 */
	public initPages(): void {
		const gamePageCallbacks = () => {
			showGameOverPage: () => {
				this.gameModel.setStage(EGamePage.GAME_OVER);
			};
		};

		const gameOverPageCallbacks = () => {
			restartGame: () => {
				this.gameModel.setStage(EGamePage.GAME_PAGE);
			};
		};

		this.gameView.initGamePage(gamePageCallbacks);
		this.gameView.initGameOverPage(gameOverPageCallbacks);
	}
}
