import {toUpperCamelCase} from "../core/camelCaseV1";

describe("To upper camel case should", () => {
    it("return a string: when the initial sentence is:", ()=>{
        expect(toUpperCamelCase("")).toBe("");
    });
})