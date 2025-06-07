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
  // Set initial loading state
  div.innerHTML = `<p>Loading services...</p>`;

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
        class="group w-72 h-[28rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col"
        style="min-width: 18rem; max-width: 18rem;"
      >
        <img
          class="w-full h-44 object-cover"
          src="${product.image}"
          alt="${product.name}"
        />
        <div class="p-5 flex flex-col flex-1">
          <h2 class="text-xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white line-clamp-1">${product.name}</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-2 text-sm line-clamp-2">${product.ingredients.join(", ")}</p>
          <p class="text-gray-500 dark:text-gray-400 mb-3 text-xs line-clamp-2">${product.instructions}</p>
          <div class="flex justify-between items-center mb-3 mt-auto">
        <div class="flex items-center text-yellow-500 text-lg font-bold">
          <ion-icon name="star"></ion-icon>
          <span class="text-black dark:text-white ml-1">${product.rating}</span>
        </div>
        <span class="text-xs text-gray-500 dark:text-gray-400">${product.difficulty}</span>
          </div>
          <button
        class="w-full py-2 border border-rose-600 dark:border-gray-500 text-rose-700 dark:text-white rounded-full uppercase font-bold transition duration-300 hover:bg-rose-600 hover:text-white dark:hover:bg-white dark:hover:text-black text-sm"
          >
        Order now
          </button>
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
