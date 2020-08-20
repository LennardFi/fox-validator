import { EqualsValidatorBase } from "./ValidatorBase";
export default class StringValidator extends EqualsValidatorBase {
    constructor() {
        super();
        this.ruleCheckers.push((value) => {
            if (typeof value === "string") {
                return true;
            }
            return false;
        });
    }
    contains(searchString, ignoreCase) {
        if (ignoreCase) {
            this.ruleCheckers.push(value => searchString.toUpperCase().includes(value.toUpperCase()));
            return this;
        }
        this.ruleCheckers.push(value => searchString.includes(value));
        return this;
    }
    equals(compareValue) {
        super.equals(compareValue);
        return this;
    }
    equalsIgnoreCasing(compareValue) {
        this.ruleCheckers.push(value => value.toUpperCase() === compareValue.toUpperCase());
        return this;
    }
    equalsNot(compareValue) {
        super.equalsNot(compareValue);
        return this;
    }
    equalsNotIgnoreCasing(compareValue) {
        this.ruleCheckers.push(value => value.toUpperCase() !== compareValue.toUpperCase());
        return this;
    }
    equalsOneOf(...compareValues) {
        super.equalsOneOf(...compareValues);
        return this;
    }
    equalsOneOfIgnoreCasing(...compareValues) {
        this.ruleCheckers.push(value => compareValues.map(s => s.toUpperCase()).includes(value.toUpperCase()));
        return this;
    }
    equalsNoneOf(...compareValues) {
        super.equalsNoneOf(...compareValues);
        return this;
    }
    equalsNoneOfIgnoreCasing(...compareValues) {
        this.ruleCheckers.push(value => !compareValues.map(s => s.toUpperCase()).includes(value.toUpperCase()));
        return this;
    }
    hasLength(minOrEqual, max) {
        if (max === undefined) {
            this.ruleCheckers.push(value => {
                return value.length === minOrEqual;
            });
        }
        else {
            this.ruleCheckers.push(value => {
                return value.length > minOrEqual && value.length < max;
            });
        }
        return this;
    }
    match(pattern) {
        this.ruleCheckers.push(value => value.match(pattern) ? true : false);
        return this;
    }
}
