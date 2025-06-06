import Navbar from '../component/navbar';
import { Footer } from '../component/footer';
export function createLayout(contentFn) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    const header = Navbar();
    const content = contentFn();
    const footer = Footer();
    app.append(header, content, footer);
}
