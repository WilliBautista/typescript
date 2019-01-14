export const MESSAGE:string[] = [
    "The text is very long",
    "The text is very short"
]

export default function messageError(numError:number) {
    if (numError > MESSAGE.length - 1) {
        return `Max numbers of MESSAGE array are ${ MESSAGE.length }`
    }

    return MESSAGE[numError];
}
