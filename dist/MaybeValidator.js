import UndefinedValidator from "./UndefinedValidator";
import { ValidatorBase } from "./ValidatorBase";
export default class MaybeValidator extends ValidatorBase {
    constructor() {
        super();
    }
    maybe(typeValidator) {
        const subValidators = [
            new UndefinedValidator().seal(),
            typeValidator,
        ];
        this.ruleCheckers.push(value => subValidators.some(subValidator => subValidator(value)));
        return this;
    }
}
