import Application from '../Game/Application';
import { EGamePage } from '../Game/Constants';
import { Bottle } from './Component/Bottle';
import { Cuboid } from './Component/Cuboid';
import { Cylinder } from './Component/Cylinder';
import { GameBaseView } from './GameBaseView';

export default class GamePage extends GameBaseView {
	private name: string = EGamePage.GAME_PAGE;

	private cb: () => void;
	constructor(callbacks: () => void) {
		super();
		this.cb = callbacks;

		// setup
		this.app = new Application();
		this.scene = this.app.scene;
	}

	public init(): void {
		console.log('init: ', this.name);

		const cuboid = new Cuboid(-10, 0, 0);
		const cylinder = new Cylinder(10, 0, 0);

		this.scene.add(cuboid.instance);
		this.scene.add(cylinder.instance);

		const bottle = new Bottle();
		this.scene.add(bottle.instance);
	}

	public show(): void {
		console.log('show: ', this.name);
	}

	public hide(): void {
		console.log('hide: ', this.name);
	}

	public restartGame(): void {
		console.log('restart game: ', this.name);
	}
}
