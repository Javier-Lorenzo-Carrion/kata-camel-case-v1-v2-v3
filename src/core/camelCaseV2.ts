export function toUpperCamelCaseV2(text: string): string{
    let firstLetter: string = text.charAt(0).toUpperCase();
    let restOfLetters: string = "";
    for(let i: number = 1; i < text.length; i++){
        restOfLetters = restOfLetters + text.charAt(i).toLowerCase();
    }
    return firstLetter + restOfLetters;
}