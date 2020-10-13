import { ValidatorBase } from "./ValidatorBase"

/**
 * A validator that returns always true
 */
export default class AnyValidator extends ValidatorBase<unknown> {
    constructor() {
        super()
        this.ruleCheckers.push(() => true)
    }
}
