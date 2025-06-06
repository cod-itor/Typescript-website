import { Home } from "../pages/Home";
import Products from "../pages/Product";
import About from "../pages/About-me";
import { createLayout } from "./layout";

export function initRouter(): void {
    window.addEventListener('popstate', renderRoute);

    document.addEventListener('click', e => {
        const target = (e.target as HTMLElement).closest('a[data-link]');
        if (target) {
            e.preventDefault();
            const href = target.getAttribute('href')!;
            history.pushState(null, '', href);
            renderRoute();
        }
    });

    renderRoute();
}

function renderRoute(): void {
    const path = window.location.pathname;
    let contentFn: () => HTMLElement;

    switch (path) {
        case '/':
            contentFn = Home;
            break;
        case '/products':
            contentFn = Products;
            break;
        case '/about':
            contentFn = About;
            break;
        default:
            contentFn = Home;
    }
    createLayout(contentFn);
}
