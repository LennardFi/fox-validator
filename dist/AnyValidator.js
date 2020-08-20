import { ValidatorBase } from "./ValidatorBase";
export default class AnyValidator extends ValidatorBase {
    constructor() {
        super();
        this.ruleCheckers.push(() => true);
    }
}
