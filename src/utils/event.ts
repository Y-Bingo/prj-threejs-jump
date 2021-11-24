class EEvent {
	private sender: any;
	private listeners: any[] = [];

	constructor(sender) {
		this.sender = sender;
		this.listeners = [];
	}

	attach(callback: any): void {
		this.listeners.push(callback);
	}

	notify(args: any) {
		for (let i = 0; i < this.listeners.length; i++) {
			this.listeners[i](this.sender, args);
		}
	}
}
