"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLayout = createLayout;
const navbar_1 = __importDefault(require("../component/navbar"));
const footer_1 = require("../component/footer");
function createLayout(contentFn) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    const header = (0, navbar_1.default)();
    const content = contentFn();
    const footer = (0, footer_1.Footer)();
    app.append(header, content, footer);
}
