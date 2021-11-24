import GameController from './controller';

export default class Game {
	private gameController: GameController;

	constructor() {
		this.gameController = new GameController();
	}

	public init(): void {
		this.gameController.initPages();
	}
}
