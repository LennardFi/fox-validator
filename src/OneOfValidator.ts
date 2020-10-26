import { SealedValidator } from "./SealedValidator"
import { ValidatorBase } from "./ValidatorBase"

/**
 * Validates to `true` if at least one of the sub validators return `true`.
 */
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
