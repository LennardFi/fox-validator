import { ValidatorBase } from "./ValidatorBase"

export default class NullValidator extends ValidatorBase {
    constructor() {
        super()
        this.ruleCheckers.push(value => value === null)
    }
}
