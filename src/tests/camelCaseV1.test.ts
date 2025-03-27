import {toUpperCamelCaseV1} from "../core/camelCaseV1";

describe("To upper camel case should", () => {
    it("return a string: when the initial sentence is:", ()=>{
        expect(toUpperCamelCaseV1("")).toBe("");
    });
})