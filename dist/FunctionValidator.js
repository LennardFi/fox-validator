import { ValidatorBase } from "./ValidatorBase";
export default class FunctionValidator extends ValidatorBase {
    constructor() {
        super();
        this.ruleCheckers.push(value => typeof value === "function");
    }
    expectsArgumentCount(args) {
        this.ruleCheckers.push(value => value.length === args);
        return this;
    }
}
