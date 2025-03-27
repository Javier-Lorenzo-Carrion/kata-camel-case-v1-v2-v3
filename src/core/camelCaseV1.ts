export function toUpperCamelCaseV1(text: string): string {
    if(text === " ") return text;
    let separatedWordsByHyphen:string [] = text.split(/[-_\s]+/);
    let joinedText: string = "";
    for(let i = 0; i < text.split(/[-_\s]+/).length; i++){
        let firstLetterToUpperCase: string = separatedWordsByHyphen[i].charAt(0).toUpperCase();
        let lowerCaseWord:string = separatedWordsByHyphen[i].toLowerCase();
        joinedText = joinedText + firstLetterToUpperCase + lowerCaseWord.substring(1);
    }
    return joinedText;
}