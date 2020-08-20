export default function sealedValidator(ruleCheckers) {
    const func = (value) => {
        return ruleCheckers.reduce((prevCheckResult, checker) => {
            if (!prevCheckResult) {
                return prevCheckResult;
            }
            return checker(value);
        }, true);
    };
    func.getCheckers = () => ruleCheckers;
    return func;
}
