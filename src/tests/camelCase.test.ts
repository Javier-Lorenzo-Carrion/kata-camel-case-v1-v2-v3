import {toUpperCamelCaseV1, toUpperCamelCaseV2, toUpperCamelCaseV3} from "../core/camelCase";

describe("To upper camel case version 1 should eliminate: ", () => {
    it("nothing when input is an empty string to return the same string", ()=>{
        expect(toUpperCamelCaseV1("")).toBe("");
    });
    it("one space to return an empty string", ()=>{
        expect(toUpperCamelCaseV1(" ")).toBe("");
    });
    it("many spaces to return an empty string", ()=>{
        expect(toUpperCamelCaseV1("    ")).toBe("");
    });
    it("the initial lower case letter in a word and replace for upper case letter to return the word", ()=>{
        expect(toUpperCamelCaseV1("hola")).toBe("Hola");
    });
    it("capitalized letters except the initial one in a word to return the word", ()=>{
        expect(toUpperCamelCaseV1("HoLa")).toBe("Hola");
    });
    it("capitalized letters except the initials ones in each word and middle hyphens to return joined words", ()=>{
        expect(toUpperCamelCaseV1("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle hyphens and middle underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV1("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle spaces, middle hyphens and middle underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV1("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle spaces, initial and middle hyphens and underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV1("- _Hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
})

describe("To upper camel case version 2 should eliminate:", () => {
    it("nothing when input is an empty string to return the same string", ()=>{
        expect(toUpperCamelCaseV2("")).toBe("");
    });
    it("one space to return an empty string", ()=>{
        expect(toUpperCamelCaseV2(" ")).toBe("");
    });
    it("many spaces to return an empty string", ()=>{
        expect(toUpperCamelCaseV2("    ")).toBe("");
    });
    it("the initial lower case letter in a word and replace for upper case letter to return the word", ()=>{
        expect(toUpperCamelCaseV2("hola")).toBe("Hola");
    });
    it("capitalized letters except the initial one in a word to return the word", ()=>{
        expect(toUpperCamelCaseV2("HoLa")).toBe("Hola");
    });
    it("capitalized letters except the initials ones in each word and middle hyphens to return joined words", ()=>{
        expect(toUpperCamelCaseV2("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle hyphens and middle underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV2("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle spaces, middle hyphens and middle underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV2("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle spaces, initial and middle hyphens and underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV2("- _Hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
})

describe("To upper camel case version 3 should eliminate:", () => {
    it("nothing when input is an empty string to return the same string", ()=>{
        expect(toUpperCamelCaseV3("")).toBe("");
    });
    it("one space to return an empty string", ()=>{
        expect(toUpperCamelCaseV3(" ")).toBe("");
    });
    it("many spaces to return an empty string", ()=>{
        expect(toUpperCamelCaseV3("    ")).toBe("");
    });
    it("the initial lower case letter in a word and replace for upper case letter to return the word", ()=>{
        expect(toUpperCamelCaseV3("hola")).toBe("Hola");
    });
    it("capitalized letters except the initial one in a word to return the word", ()=>{
        expect(toUpperCamelCaseV3("HoLa")).toBe("Hola");
    });
    it("capitalized letters except the initials ones in each word and middle hyphens to return joined words", ()=>{
        expect(toUpperCamelCaseV3("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle hyphens and middle underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV3("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle spaces, middle hyphens and middle underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV3("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
    it("capitalized letters except the initials ones in each word, middle spaces, initial and middle hyphens and underscores to return joined words", ()=>{
        expect(toUpperCamelCaseV3("- _Hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
})