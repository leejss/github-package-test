export class ActionController {
    _actions = new Map();
    register(actionName, handler) {
        this._actions.set(actionName, handler);
    }
    call(actionName, ...args) {
        const handler = this._actions.get(actionName);
        if (!handler)
            throw new Error("No handler for this action");
        return handler(...args);
    }
}
