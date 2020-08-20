import { ValidatorBase } from "./ValidatorBase"

export default class AnyValidator extends ValidatorBase<unknown> {
    constructor() {
        super()
        this.ruleCheckers.push(() => true)
    }
}
