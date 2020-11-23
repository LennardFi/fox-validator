import { ArrayValidator, NumberValidator, StringValidator } from "../src"

describe("ArrayValidator", () => {
    it("", () => {
        const isArray = new ArrayValidator().seal()
        expect(isArray(123)).toBeFalsy()
        expect(isArray({})).toBeFalsy()
        expect(isArray([])).toBeTruthy()
    })
    it("equals", () => {
        const arr = [1, 2, 3]
        const isSameArray = new ArrayValidator().equals(arr).seal()
        expect(isSameArray([])).toBeFalsy()
        expect(isSameArray({})).toBeFalsy()
        expect(isSameArray(123)).toBeFalsy()
        expect(isSameArray(arr)).toBeTruthy()
    })
    it("equalsNot", () => {
        const arr = [1, 2, 3]
        const isNotSameArray = new ArrayValidator().equalsNot(arr).seal()
        expect(isNotSameArray(123)).toBeFalsy()
        expect(isNotSameArray(arr)).toBeFalsy()
        expect(isNotSameArray([...arr])).toBeTruthy()
    })
    it("equalsNoneOf", () => {
        const arr1 = [1, 2, 3]
        const arr2: unknown[] = []
        const isSameArray = new ArrayValidator().equalsNoneOf(arr1, arr2).seal()
        expect(isSameArray(123)).toBeFalsy()
        expect(isSameArray(arr1)).toBeFalsy()
        expect(isSameArray(arr2)).toBeFalsy()
        expect(isSameArray([])).toBeTruthy()
        expect(isSameArray([...arr1])).toBeTruthy()
    })
    it("equalsOneOf", () => {
        const arr1 = [1, 2, 3]
        const arr2: unknown[] = []
        const isSameArray = new ArrayValidator().equalsOneOf(arr1, arr2).seal()
        expect(isSameArray([])).toBeFalsy()
        expect(isSameArray({})).toBeFalsy()
        expect(isSameArray(123)).toBeFalsy()
        expect(isSameArray(arr1)).toBeTruthy()
        expect(isSameArray(arr2)).toBeTruthy()
    })
    it("validateItems", () => {
        const isNumberArray = new ArrayValidator().validateItems(
            new NumberValidator().seal(),
            new StringValidator().seal(),
        ).seal()
        expect(isNumberArray([null, undefined, []])).toBeFalsy()
        expect(isNumberArray([])).toBeTruthy()
        expect(isNumberArray([1, "2", 3])).toBeTruthy()
        expect(isNumberArray([1, 2, 3])).toBeTruthy()
        expect(isNumberArray(["1", "2", "3"])).toBeTruthy()
    })
    it("validateTupel", () => {
        const isDoubleNumberTupel = new ArrayValidator().validateTupel(
            new NumberValidator().seal(),
            new NumberValidator().seal(),
        ).seal()
        expect(isDoubleNumberTupel([null, null])).toBeFalsy()
        expect(isDoubleNumberTupel([1])).toBeFalsy()
        expect(isDoubleNumberTupel([1, null])).toBeFalsy()
        expect(isDoubleNumberTupel([1, 2, 3])).toBeFalsy()
        expect(isDoubleNumberTupel([0, 1])).toBeTruthy()
    })
})
