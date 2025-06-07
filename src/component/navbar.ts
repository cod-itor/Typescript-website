export default function Navbar(): HTMLElement {
  const navbar = document.createElement("nav");
  navbar.className = "text-white";
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

                <!-- Call-to-Action Button & Dark Mode Toggle -->
                <div class="hidden md:flex items-center space-x-4">
                    <a href="#about" class="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all">
                        Get in Touch
                    </a>
                    <button id="dark-toggle" class="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors" title="Toggle dark mode">
                        <svg id="dark-toggle-icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu Button (for smaller screens) & Dark Toggle -->
                <div class="md:hidden flex items-center space-x-2">
                    <button id="dark-toggle-mobile" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors" title="Toggle dark mode">
                        <svg id="dark-toggle-icon-mobile" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                    <button id="menu-button" class="text-white focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
  `;

  const menuButton = navbar.querySelector(
    "#menu-button"
  ) as HTMLButtonElement | null;
  const mobileMenu = navbar.querySelector("#mobile-menu") as HTMLElement | null;

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Dark mode toggle logic
  function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle("dark");
    // Optionally, persist preference
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  // Set initial theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.remove("dark");
  }
  // Desktop toggle
  const darkToggle = navbar.querySelector(
    "#dark-toggle"
  ) as HTMLButtonElement | null;
  if (darkToggle) {
    darkToggle.addEventListener("click", toggleDarkMode);
  }
  // Mobile toggle
  const darkToggleMobile = navbar.querySelector(
    "#dark-toggle-mobile"
  ) as HTMLButtonElement | null;
  if (darkToggleMobile) {
    darkToggleMobile.addEventListener("click", toggleDarkMode);
  }

  return navbar;
}
