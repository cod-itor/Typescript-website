import router from './utils/router.js';
// import { onToggleMenu } from './component/navbar-toggle';

// (window as any).onToggleMenu = onToggleMenu;
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);
