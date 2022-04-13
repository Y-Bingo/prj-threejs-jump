import Application from '../Game/Application';
import { EGamePage } from '../Game/Constants';
import { Block } from './Component/Block';
import { Bottle } from './Component/Bottle';
import { Cuboid } from './Component/Cuboid';
import { Cylinder } from './Component/Cylinder';
import { GameBaseView } from './GameBaseView';

export default class GamePage extends GameBaseView {
	private name: string = EGamePage.GAME_PAGE;

	private bottle: Bottle;
	private currentBlock: Block;

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

		this.bottle = new Bottle();
		this.scene.add(this.bottle.instance);

		this.currentBlock = cuboid;
	}

	private mouseDownCallback: () => void;
	private mouseUpCallback: () => void;
	private addEvent(): void {
		console.log('gamePage add Event');
		this.mouseDownCallback = () => {
			this.onMouseDown();
		};
		this.mouseUpCallback = () => {
			this.onMouseUp();
		};
		this.canvas.addEventListener('mousedown', this.mouseDownCallback);
		this.canvas.addEventListener('mouseup', this.mouseUpCallback);
	}

	private removeEvent(): void {
		console.log('gamePage remove Event');
		this.canvas.removeEventListener('mousedown', this.mouseDownCallback);
		this.canvas.removeEventListener('mouseup', this.mouseUpCallback);
		this.mouseDownCallback = null;
		this.mouseUpCallback = null;
	}

	private onMouseDown(): void {
		// console.log('on mouse down');
		this.bottle.startShrink();
		this.currentBlock?.startShrink();
	}

	private onMouseUp(): void {
		// console.log('on mouse up');
		// this.bottle.rotate();
		this.bottle.stopShrink();
		this.currentBlock?.rebound();
	}

	public show(): void {
		this.bottle.showUp();
		console.log('show: ', this.name);
		this.addEvent();
	}

	public hide(): void {
		console.log('hide: ', this.name);
		this.removeEvent();
	}

	public restartGame(): void {
		console.log('restart game: ', this.name);
	}

	public onResize(): void {}

	public onUpdate(): void {
		this.bottle?.onUpdate();
		this.currentBlock?.onUpdate();
	}
}
