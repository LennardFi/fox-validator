import { ValidatorBase } from "./ValidatorBase"
import { SealedValidator } from "./SealedValidator"

export default class OneOfValidator extends ValidatorBase {
    constructor() {
        super()
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    oneOf(...subValidators: SealedValidator<any>[]): OneOfValidator {
        this.ruleCheckers.push(value => subValidators.some(subValidator => subValidator(value)))
        return this
    }
}
