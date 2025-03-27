export function toUpperCamelCaseV1(text: string): string {
    let separatedWordsByHyphen:string [] = text.split("-");
    let joinedText: string = "";
    for(let i = 0; i < separatedWordsByHyphen.length; i++){
        let firstLetterToUpperCase: string = separatedWordsByHyphen[i].charAt(0).toUpperCase();
        let lowerCaseWord:string = separatedWordsByHyphen[i].toLowerCase();
        joinedText = joinedText + firstLetterToUpperCase + lowerCaseWord.substring(1);
    }
    return joinedText;
}