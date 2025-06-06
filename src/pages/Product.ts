export default function Product(): HTMLElement {
    const product = document.createElement('div');
    product.innerHTML = `
        <div class="w-full h-full py-16">
  <div class="max-w-6xl mx-auto flex flex-col justify-center items-center">
    <!-- Title -->
    <p class="pb-2 text-lg lg:text-2xl text-rose-600 font-semibold">Category</p>
    <h2 class="text-3xl lg:text-5xl text-center font-serif font-semibold mb-12 dark:text-white">
      Choose Your Best Food
    </h2>

    <!-- Cards -->
    <div class="flex flex-wrap gap-8 justify-center items-center">
      <!-- Card 1 -->
      <div
        class="group w-[18rem] sm:w-[20rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <img
          class="w-full h-[14rem] object-cover"
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Sushi"
        />
        <div class="p-5">
          <h2 class="text-2xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white">Sushi Delight</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">Salmon, Rice & Avocado</p>
          <div class="flex justify-between items-center mb-4">
            <div class="flex -space-x-3">
              <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
              <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
              <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/52.jpg" alt="" />
            </div>
            <div class="flex items-center text-yellow-500 text-xl font-bold">
              <ion-icon name="star"></ion-icon>
              <span class="text-black dark:text-white ml-1">4.9</span>
            </div>
          </div>
          <button
            class="w-full py-2 border border-rose-600 dark:border-gray-500 text-rose-700 dark:text-white rounded-full uppercase font-bold transition duration-300 hover:bg-rose-600 hover:text-white dark:hover:bg-white dark:hover:text-black">
            Order now
          </button>
        </div>
      </div>

      <!-- Card 2 -->
 <div
  class="group w-[18rem] sm:w-[20rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
   <img
          class="w-full h-[14rem] object-cover"
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Sushi"
        />
  <div class="p-5">
    <h2 class="text-2xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white">Creamy Pasta</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-4">Cream, Cheese & Basil</p>
    <div class="flex items-center justify-between">
      <div class="flex -space-x-3">
        <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/11.jpg" alt="">
        <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/12.jpg" alt="">
        <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/13.jpg" alt="">
      </div>
      <span class="flex items-center text-yellow-500 font-semibold text-lg">
        <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.186 3.655a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.186 3.655c.3.921-.755 1.688-1.54 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.785.57-1.84-.197-1.54-1.118l1.186-3.655a1 1 0 00-.364-1.118L2.421 9.082c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.186-3.655z"/>
        </svg>
        4.8
      </span>
    </div>
    <button
      class="mt-4 w-full border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-semibold py-2 px-4 rounded-full transition duration-300">
      ORDER NOW
    </button>
  </div>
</div>


      <!-- Card 3 -->
      <div
        class="group w-[18rem] sm:w-[20rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
         <img
          class="w-full h-[14rem] object-cover"
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Sushi"
        />

        <div class="p-5">
          <h2 class="text-2xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white">Chocolate Bliss</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">Dark Chocolate & Cream</p>
          <div class="flex justify-between items-center mb-4">
            <div class="flex -space-x-3">
              <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/25.jpg" alt="" />
              <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/21.jpg" alt="" />
              <img class="w-9 h-9 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/62.jpg" alt="" />
            </div>
            <div class="flex items-center text-yellow-500 text-xl font-bold">
              <ion-icon name="star"></ion-icon>
              <span class="text-black dark:text-white ml-1">5.0</span>
            </div>
          </div>
          <button
            class="w-full py-2 border border-rose-600 dark:border-gray-500 text-rose-700 dark:text-white rounded-full uppercase font-bold transition duration-300 hover:bg-rose-600 hover:text-white dark:hover:bg-white dark:hover:text-black">
            Order now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Ionicons -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    `;
    return product;
    }