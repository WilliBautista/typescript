"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_1 = __importDefault(require("./validations/numbers"));
var texts_1 = __importDefault(require("./validations/texts"));
console.log(numbers_1.default(20, 15));
console.log(texts_1.default(2));
