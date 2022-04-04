import EEvent from '../Utils/Event';

export class GameModel {
	private stage: string;
	public stageChange: EEvent;

	constructor() {
		this.stage = '';
		this.stageChange = new EEvent(this);
	}

	public getStage(): string {
		return this.stage;
	}

	public setStage(stage: string): void {
		this.stage = stage;
		this.stageChange.notify({
			stage: stage,
		});
	}
}
