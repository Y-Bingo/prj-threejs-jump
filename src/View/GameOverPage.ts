import * as THREE from 'three';
import { EGamePage } from '../Game/Constants';
import { GameBaseView } from './GameBaseView';

export default class GameOverPage extends GameBaseView {
	private name: string = EGamePage.GAME_OVER;
	// private
	private pageCanvas: HTMLCanvasElement;
	private pageTexture: THREE.Texture;
	private pageContext: CanvasRenderingContext2D;
	private obj: THREE.Mesh;
	private material: THREE.MeshBasicMaterial;
	private geometry: THREE.PlaneBufferGeometry;

	private cb: () => void;
	constructor(callbacks: () => void) {
		super();
		this.cb = callbacks;
	}

	public init(): void {
		this.initGameOverCanvas();
		this.hide();
	}

	private initGameOverCanvas(): void {
		const w = this.sizes.displayWidth;
		const h = this.sizes.displayHeight;
		// draw page
		this.pageCanvas = document.createElement('canvas');
		this.pageCanvas.width = w;
		this.pageCanvas.height = h;
		this.pageTexture = new THREE.CanvasTexture(this.pageCanvas);
		this.material = new THREE.MeshBasicMaterial({
			map: this.pageTexture,
			transparent: true,
			side: THREE.DoubleSide,
		});
		this.geometry = new THREE.PlaneBufferGeometry(w, h);
		this.obj = new THREE.Mesh(this.geometry, this.material);
		this.obj.position.z = 1;
		this.pageContext = this.pageCanvas.getContext('2d');
		this.pageContext.save();
		this.pageContext.fillStyle = '#fff';
		this.pageContext.fillRect(0, 0, w, h);
		this.pageContext.restore();
		this.pageContext.save();
		this.pageContext.fillStyle = '#333';
		this.pageContext.fillRect((w - 200) / 2, (h - 100) / 2, 200, 100);
		this.pageContext.restore();
		this.pageContext.save();
		this.pageContext.fillStyle = '#eee';
		this.pageContext.font = '20px Georgia';
		this.pageContext.fillText('Game Over', w / 2 - 50, h / 2 + 5);
		this.pageContext.restore();
		this.pageTexture.needsUpdate = true;
		this.scene.add(this.obj);
	}

	public show(): void {
		this.obj.visible = true;
		console.log('show: ', this.name);
	}

	public hide(): void {
		this.obj.visible = false;
		console.log('hide: ', this.name);
	}
}
