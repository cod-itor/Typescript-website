export default function Navbar() {
    return `
    <nav class="bg-blue-600 px-4 py-3 flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">MyApp</span>
      </div>
      <div class="block lg:hidden">
        <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div id="nav-menu" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <div class="text-sm lg:flex-grow">
          <a href="#home" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4">
            Home
          </a>
          <a href="#products" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4">
            Products
          </a>
          <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200">
            About
          </a>
        </div>
      </div>
    </nav>
    <script>
      // Simple toggle for mobile menu
      document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        if (toggle && menu) {
          toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
          });
        }
      });
    </script>
  `;
}
