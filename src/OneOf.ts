import sealedValidator, { SealedValidator } from "./SealedValidator"

/**
 * Validates to `true` if at least one of the sub validators return `true`.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OneOf<T extends SealedValidator<any>>(subValidators: T[]): T {
    return sealedValidator([value => subValidators.some(subValidator => subValidator(value))]) as T
}
