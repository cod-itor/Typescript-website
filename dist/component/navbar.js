export default function Navbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'text-white';
    navbar.innerHTML = `
   <!-- Header Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
                <!-- Logo Section -->
                <div class="flex-shrink-0">
                    <a href="/" class="text-2xl font-bold">FOODIE </a>
                </div>

                <!-- Navigation Menu -->
                <nav class="hidden md:flex space-x-10 text-lg">
                    <a href="home" data-link class="hover:text-gray-300 transition-all">Home</a>
                    <a href="products" data-link class="hover:text-gray-300 transition-all">Product</a>
                    <a href="about" data-link class="hover:text-gray-300 transition-all">About</a>
                </nav>

                <!-- Call-to-Action Button -->
                <div class="hidden md:block">
                    <a href="#about" class="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all">
                        Get in Touch
                    </a>
                </div>

                <!-- Mobile Menu Button (for smaller screens) -->
                <div class="md:hidden flex items-center">
                    <button id="menu-button" class="text-white focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
  `;
    const menuButton = navbar.querySelector('#menu-button');
    const mobileMenu = navbar.querySelector('#mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    return navbar;
}
