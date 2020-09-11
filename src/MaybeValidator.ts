import { SealedValidator } from "./SealedValidator"
import UndefinedValidator from "./UndefinedValidator"
import { ValidatorBase } from "./ValidatorBase"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class MaybeValidator<T extends any = any> extends ValidatorBase<T> {
    constructor() {
        super()
    }

    maybe(typeValidator: SealedValidator<T>): MaybeValidator<T> {
        const subValidators = [
            new UndefinedValidator().seal(),
            typeValidator,
        ]
        this.ruleCheckers.push(value => subValidators.some(subValidator => subValidator(value)))
        return this
    }
}
