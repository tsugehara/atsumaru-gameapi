// http://ch.nicovideo.jp/indies-game/blomaga/ar1163608


interface Subscription {
	unsubscribe(): void;
	closed: boolean;
}

interface StorageAPI {
	getItems(): Promise<{key: string, value: string}[]>;
	setItems(items:  {key: string, value: string}[]): Promise<void>;
	removeItem(key: string): Promise<void>;
}
interface CommentAPI {
	changeScene(sceneName: string): void;
	resetAndChangeScene(sceneName: string): void;
	pushContextFactor(factor: string): void;
	pushMinorContenxt(): void;
	setContext(context: string): void;
}
interface ControllerEvent {
	type: string;
	key: string;
}
interface Observer {
	next(val: ControllerEvent): void;
	error?(err: any): void;
	complete?(): void;
}
interface ControllerAPI {
	// Subscribes to the sequence with an observer
	subscribe(observer : Observer) : Subscription;

	// Subscribes to the sequence with callbacks
	subscribe(onNext : Function, onError? : Function, onComplete? : Function) : Subscription;
}
interface Controllers {
	defaultController: ControllerAPI;
}

interface AtsumaruGameAPI {
	storage: StorageAPI;
	controllers: Controllers;
	comment: CommentAPI;
}

declare var RPGAtsumaru: AtsumaruGameAPI;