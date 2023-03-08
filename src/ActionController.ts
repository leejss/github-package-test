export type ActionHandler = (...args: any) => any;
export class ActionController {
  private _actions: Map<string, ActionHandler> = new Map();

  register(actionName: string, handler: ActionHandler) {
    this._actions.set(actionName, handler);
  }

  call(actionName: string, ...args: any) {
    const handler = this._actions.get(actionName);
    if (!handler) throw new Error("No handler for this action");
    return handler(...args);
  }
}
