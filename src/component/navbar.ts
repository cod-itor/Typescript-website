
export default function Navbar(): string {
  return `
    <header class="bg-gradient-to-l from-[#603813] to-[#b29f94]">
        <nav class="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img class="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="...">
            </div>
            <div
                class="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-500" href="#home">Home</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#products">Product</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#about">About</a>
                </ul>
            </div>
            <div class="flex items-center gap-6">
                <button class="bg-[#603813] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
    </header>
  `;
}
