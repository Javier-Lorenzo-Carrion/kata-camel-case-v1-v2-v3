import {toUpperCamelCaseV2} from "../core/camelCaseV2";

describe("To upper camel version 2 case should", () => {
    it("return a string: when the initial sentence is:", () => {
        expect(toUpperCamelCaseV2("")).toBe("");
    })
})