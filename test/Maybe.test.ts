import { Maybe, StringValidator } from "../src"

describe("MaybeValidator", () => {
    it("maybe", () => {
        const isMaybeString = Maybe(new StringValidator().seal())
        expect(isMaybeString(true)).toBeFalsy()
        expect(isMaybeString(null)).toBeFalsy()
        expect(isMaybeString("abc")).toBeTruthy()
        expect(isMaybeString(undefined)).toBeTruthy()
    })
})
