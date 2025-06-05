import Home from "../pages/Home.js";
import Products from "../pages/Product.js"; 
import About from "../pages/About-me.js";   
import Navbar from "../component/navbar.js";

export default function Router(): void {
    const route = window.location.hash.replace("#", "") || "home";
    const app = document.getElementById("app");
    if (!app) return; 
    let pageContent = "";
    switch (route) {
        case "home":
            pageContent = Home();
            break;
        case "products":
            pageContent = Products();
            break;
        case "about":
            pageContent = About();
            break;
        default:
            pageContent = Home();
            break;
    }
    app!.innerHTML = `
    ${Navbar()} 
    <main>
        ${pageContent}
      </main>
  `;
}