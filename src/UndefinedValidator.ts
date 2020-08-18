import { ValidatorBase } from "./ValidatorBase"

export default class UndefinedValidator extends ValidatorBase<undefined> {
    constructor() {
        super()
        this.ruleCheckers.push(value => value === undefined)
    }
}