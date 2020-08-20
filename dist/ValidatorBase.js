import sealedValidator from "./SealedValidator";
export class ValidatorBase {
    constructor() {
        this.ruleCheckers = [];
    }
    seal() {
        return sealedValidator(this.ruleCheckers);
    }
}
export class EqualsValidatorBase extends ValidatorBase {
    constructor() {
        super();
    }
    equals(compareValue) {
        this.ruleCheckers.push(value => compareValue === value);
        return this;
    }
    equalsNot(compareValue) {
        this.ruleCheckers.push(value => compareValue !== value);
        return this;
    }
    equalsOneOf(...compareValues) {
        this.ruleCheckers.push(value => compareValues.indexOf(value) !== -1);
        return this;
    }
    equalsNoneOf(...compareValue) {
        this.ruleCheckers.push(value => compareValue.indexOf(value) === -1);
        return this;
    }
}
