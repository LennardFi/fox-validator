import sealedValidator from "../src/SealedValidator"

describe("sealedValidator", () => {
    it("", () => {
        expect(sealedValidator([])("abc")).toBeTruthy()
        expect(sealedValidator<string>([value => typeof value === "string"])("abc")).toBeTruthy()
    })
    it("getCheckers", () => {
        expect(sealedValidator([]).getCheckers.length).toBe(0)
        expect(sealedValidator([]).getCheckers()).toMatchObject([])
        expect(sealedValidator([]).getCheckers()).toHaveLength(0)
    })
})
