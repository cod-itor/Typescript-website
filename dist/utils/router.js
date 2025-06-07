"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRouter = initRouter;
const Home_1 = require("../pages/Home");
const Product_1 = __importDefault(require("../pages/Product"));
const About_me_1 = __importDefault(require("../pages/About-me"));
const layout_1 = require("./layout");
function initRouter() {
    window.addEventListener('popstate', renderRoute);
    document.addEventListener('click', e => {
        const target = e.target.closest('a[data-link]');
        if (target) {
            e.preventDefault();
            const href = target.getAttribute('href');
            history.pushState(null, '', href);
            renderRoute();
        }
    });
    renderRoute();
}
function renderRoute() {
    const path = window.location.pathname;
    let contentFn;
    switch (path) {
        case '/':
            contentFn = Home_1.Home;
            break;
        case '/products':
            contentFn = Product_1.default;
            break;
        case '/about':
            contentFn = About_me_1.default;
            break;
        default:
            contentFn = Home_1.Home;
    }
    (0, layout_1.createLayout)(contentFn);
}
