import { describe, expect, it } from "vitest";
import { ActionController } from "./ActionController";

describe("ActionHandler TEST", () => {
  it("registering and calling handler", () => {
    const actionHanlder = new ActionController();

    let msg: string = "";
    actionHanlder.register("send", (payload: string) => {
      msg = payload;
    });
    actionHanlder.call("send", "Hello World");
    expect(msg).toBe("Hello World");
  });
});
