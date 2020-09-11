import { MaybeValidator, StringValidator } from "../src"

describe("MaybeValidator", () => {
    it("maybe", () => {
        const isMaybeString = new MaybeValidator<string>().maybe(new StringValidator().seal()).seal()
        expect(isMaybeString(true)).toBeFalsy()
        expect(isMaybeString(null)).toBeFalsy()
        expect(isMaybeString("abc")).toBeTruthy()
        expect(isMaybeString(undefined)).toBeTruthy()
    })
})
