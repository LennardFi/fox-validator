import { ValidatorBase } from "./ValidatorBase";
export default class BooleanValidator extends ValidatorBase {
    constructor() {
        super();
        this.ruleCheckers.push(value => typeof value === "boolean");
    }
    isFalse() {
        this.ruleCheckers.push(value => value === false);
        return this;
    }
    isTrue() {
        this.ruleCheckers.push(value => value === true);
        return this;
    }
}
