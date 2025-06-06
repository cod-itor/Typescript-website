export function onToggleMenu(element) {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks)
        return;
    element.setAttribute('name', element.getAttribute('name') === 'menu' ? 'close' : 'menu');
    navLinks.classList.toggle('top-[9%]');
}
