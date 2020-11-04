import { OneOfValidator, NumberValidator, StringValidator } from "../src"

describe("OneOfValidator", () => {
    it("oneOf", () => {
        const isStringOrNumber = new OneOfValidator().oneOf(
            new NumberValidator().seal(),
            new StringValidator().seal(),
        ).seal()
        expect(isStringOrNumber(true)).toBeFalsy()
        expect(isStringOrNumber(null)).toBeFalsy()
        expect(isStringOrNumber("abc")).toBeTruthy()
        expect(isStringOrNumber(123)).toBeTruthy()
    })
})
