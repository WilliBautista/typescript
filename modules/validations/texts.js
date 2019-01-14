"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGE = [
    "The text is very long",
    "The text is very short"
];
function messageError(numError) {
    if (numError > exports.MESSAGE.length - 1) {
        return "Max numbers of MESSAGE array are " + exports.MESSAGE.length;
    }
    return exports.MESSAGE[numError];
}
exports.default = messageError;
