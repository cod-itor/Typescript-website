export default function product(): HTMLElement {
  const div = document.createElement("div");
  type Products = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    image: string;
    rating: number;
    difficulty: string;
  };
  async function fetchProducts(): Promise<Products[]> {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched service data:", data);
      return data.recipes as Products[];
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  }
  function renderSkeletonCards(count: number) {
    div.innerHTML = "";
    const grid = document.createElement("div");
    grid.className =
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-auto max-w-7xl";
    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement("div");
      skeleton.innerHTML = `
      <div class="group w-72 h-[28rem] mt-10 bg-gray-200 dark:bg-[#333] rounded-2xl overflow-hidden shadow-lg animate-pulse flex flex-col" style="min-width: 18rem; max-width: 18rem;">
        <div class="w-full h-44 bg-gray-300 dark:bg-[#444]"></div>
        <div class="p-5 flex flex-col flex-1">
          <div class="h-6 bg-gray-300 dark:bg-[#444] rounded mb-2 w-3/4"></div>
          <div class="h-4 bg-gray-300 dark:bg-[#444] rounded mb-2 w-full"></div>
          <div class="h-3 bg-gray-300 dark:bg-[#444] rounded mb-3 w-5/6"></div>
          <div class="flex justify-between items-center mb-3 mt-auto">
            <div class="h-5 w-16 bg-gray-300 dark:bg-[#444] rounded"></div>
            <div class="h-4 w-10 bg-gray-300 dark:bg-[#444] rounded"></div>
          </div>
          <div class="w-full h-9 bg-gray-300 dark:bg-[#444] rounded-full"></div>
        </div>
      </div>
      `;
      grid.appendChild(skeleton);
    }
    div.appendChild(grid);
  }
  renderSkeletonCards(8);

  function renderCards(products: Products[]) {
    console.log("Rendering products:", products);
    // Clear previous content and create a grid container
    div.innerHTML = "";
    const grid = document.createElement("div");
    grid.className =
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-auto max-w-7xl"; // Tailwind classes for centering and 4 columns

    products.forEach((product) => {
      console.log(product.id);
      const card = document.createElement("div");
      card.innerHTML = `
      <div
        class="group w-72 h-[28rem] mt-10 bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col"
        style="min-width: 18rem; max-width: 18rem;"
      >
        <a href="/products-detail?id=${product.id}" data-link><img
          class="w-full h-44 object-cover"
          src="${product.image}"
          alt="${product.name}"
        /></a>
        <div class="p-5 flex flex-col flex-1">
          <h2 class="text-xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white line-clamp-1">${
            product.name
          }</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-2 text-sm line-clamp-2">${product.ingredients.join(
            ", "
          )}</p>
          <p class="text-gray-500 dark:text-gray-400 mb-3 text-xs line-clamp-2">${
            product.instructions
          }</p>
          <div class="flex justify-between items-center mb-3 mt-auto">
        <div class="flex items-center text-yellow-500 text-lg font-bold">
          <ion-icon name="star"></ion-icon>
          <span class="text-black dark:text-white ml-1">${product.rating}</span>
        </div>
        <span class="text-xs text-gray-500 dark:text-gray-400">${
          product.difficulty
        }</span>
          </div>
          <a href="/products-detail?id=${product.id}" data-link><button
        class="w-full py-2 border border-rose-600 dark:border-gray-500 text-rose-700 dark:text-white rounded-full uppercase font-bold transition duration-300 hover:bg-rose-600 hover:text-white dark:hover:bg-white hover:cursor-pointer dark:hover:text-black text-sm"
          >
       Read More
          </button></a>
        </div>
      </div>
      `;
      grid.appendChild(card);
    });
    div.appendChild(grid);
  }

  // Main execution
  (async () => {
    try {
      const products = await fetchProducts();
      renderCards(products);
    } catch (error) {
      console.error("Error:", error);
    }
  })();

  return div;
}
