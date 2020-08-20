import { EqualsValidatorBase } from "./ValidatorBase";
export default class NumberValidator extends EqualsValidatorBase {
    constructor() {
        super();
        this.ruleCheckers.push(value => typeof value === "number");
    }
    equals(compareValue) {
        super.equals(compareValue);
        return this;
    }
    equalsNot(compareValue) {
        super.equalsNot(compareValue);
        return this;
    }
    equalsOneOf(...compareValues) {
        super.equalsOneOf(...compareValues);
        return this;
    }
    equalsNoneOf(...compareValues) {
        super.equalsNoneOf(...compareValues);
        return this;
    }
    isInt() {
        this.ruleCheckers.push(value => Number.isInteger(value));
        return this;
    }
    isFloat() {
        this.ruleCheckers.push(value => !Number.isInteger(value));
        return this;
    }
}
