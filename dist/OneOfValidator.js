import { ValidatorBase } from "./ValidatorBase";
export default class OneOfValidator extends ValidatorBase {
    constructor() {
        super();
    }
    oneOf(...subValidators) {
        this.ruleCheckers.push(value => subValidators.some(subValidator => subValidator(value)));
        return this;
    }
}
