import { EqualsValidatorBase } from "./ValidatorBase";
export default class ArrayValidator extends EqualsValidatorBase {
    constructor() {
        super();
        this.ruleCheckers.push(value => typeof value === "object" && Array.isArray(value));
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
    validateItems(...subValidators) {
        this.ruleCheckers.push(value => {
            return !value.some(item => {
                return !subValidators.some(subValidator => {
                    return subValidator(item);
                });
            });
        });
        return this;
    }
    validateTupel(...validatorTupel) {
        this.ruleCheckers.push(value => {
            if (value.length !== validatorTupel.length) {
                return false;
            }
            return value.reduce((prevResult, tupelValue, i) => {
                if (!prevResult || validatorTupel[i] === undefined) {
                    return prevResult;
                }
                return validatorTupel[i](tupelValue);
            }, true);
        });
        return this;
    }
}
