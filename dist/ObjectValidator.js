import { EqualsValidatorBase } from "./ValidatorBase";
export default class ObjectValidator extends EqualsValidatorBase {
    constructor() {
        super();
        this.ruleCheckers.push(value => typeof value === "object" && value !== null);
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
    map(validatorMap) {
        this.ruleCheckers.push(value => {
            return Object.keys(validatorMap).reduce((prevResult, key) => {
                if (!prevResult) {
                    return prevResult;
                }
                const subValidator = validatorMap[key];
                if (Array.isArray(subValidator)) {
                    return subValidator.some(subValidator => subValidator(value[key]));
                }
                return subValidator(value[key]);
            }, true);
        });
        return this;
    }
}
