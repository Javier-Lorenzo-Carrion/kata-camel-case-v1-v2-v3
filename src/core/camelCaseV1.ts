export function toUpperCamelCaseV1(text: string): string {
    let convertedText = text.charAt(0).toUpperCase() + text.slice(1);
    return convertedText;
}