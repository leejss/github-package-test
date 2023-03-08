export type ActionHandler = (...args: any) => any;
export declare class ActionController {
    private _actions;
    register(actionName: string, handler: ActionHandler): void;
    call(actionName: string, ...args: any): any;
}
