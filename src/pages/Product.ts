export default function product(): HTMLElement {
    const div = document.createElement('div');
    type Products = {
        id:number;
        name:string;
        ingredients:string[];
        instructions:string;
        image:string;
        rating:number;
        difficulty:string;
    };
    async function fetchProducts(): Promise<Products[]> {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched service data:', data);
      return data.products as Products[];
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }
  // Set initial loading state
  div.innerHTML = `<p>Loading services...</p>`;

  function renderCards(products: Products[]) {
    console.log('Rendering products:', products);

  // Clear previous content and create a grid container
  div.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] m-auto";

  products.forEach((product) => {
    console.log(product.id);
    const card = document.createElement('div');
    card.innerHTML = `
      <img src="${product.image[0]}" alt="${product.name}" width="300" height="300" />
      <h2>${product.ingredients}</h2>
      <p>${product.instructions}</p>
      <p>Price: $${product.rating}</p>
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