import AnyValidator from "./AnyValidator"
import ArrayValidator from "./ArrayValidator"
import BooleanValidator from "./BooleanValidator"
import FunctionValidator from "./FunctionValidator"
import NullValidator from "./NullValidator"
import NumberValidator from "./NumberValidator"
import ObjectValidator from "./ObjectValidator"
import OneOfValidator from "./OneOfValidator"
import StringValidator from "./StringValidator"
import UndefinedValidator from "./UndefinedValidator"

export type Validator =
    AnyValidator |
    ArrayValidator |
    BooleanValidator |
    FunctionValidator |
    NullValidator |
    NumberValidator |
    // eslint-disable-next-line @typescript-eslint/ban-types
    ObjectValidator<object> |
    OneOfValidator |
    StringValidator |
    UndefinedValidator

export {
    AnyValidator,
    ArrayValidator,
    BooleanValidator,
    FunctionValidator,
    NullValidator,
    NumberValidator,
    ObjectValidator,
    OneOfValidator,
    StringValidator,
    UndefinedValidator,
}
