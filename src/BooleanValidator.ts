import { ValidatorBase } from "./ValidatorBase"

export default class BooleanValidator extends ValidatorBase<boolean> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "boolean")
    }

    isFalse(): BooleanValidator {
        this.ruleCheckers.push(value => value === false)
        return this
    }

    isTrue(): BooleanValidator {
        this.ruleCheckers.push(value => value === true)
        return this
    }
}
