export function toUpperCamelCaseV2(text: string): string{
    let restOfLetters: string = "";
    for(let i: number = 1; i < text.length; i++){
        restOfLetters = restOfLetters + text.charAt(i).toLowerCase();
    }
    return text.charAt(0).toUpperCase() + restOfLetters;
}