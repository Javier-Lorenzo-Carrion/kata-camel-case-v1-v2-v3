export function toUpperCamelCaseV2(text:string): string{
    if(text === " ") return text;
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i) === "-" || text.charAt(i) === " "){
            newText = newText + text.charAt(i+1).toUpperCase();
            i++;
        } else{
            newText = newText + text.charAt(i).toLowerCase();
        }
    }
    newText = newText.charAt(0).toUpperCase() + newText.substring(1);
    return newText;
}