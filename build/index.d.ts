interface Subscription {
    unsubscribe(): void;
    closed: boolean;
}
interface StorageAPI {
    getItems(): Promise<{
        key: string;
        value: string;
    }[]>;
    setItems(items: {
        key: string;
        value: string;
    }[]): Promise<void>;
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
    subscribe(observer: Observer): Subscription;
    subscribe(onNext: Function, onError?: Function, onComplete?: Function): Subscription;
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
