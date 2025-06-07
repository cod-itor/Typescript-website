"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productDetail;
function productDetail() {
    const div = document.createElement("div");
    function fetchProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://dummyjson.com/recipes");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = yield response.json();
                console.log("Fetched service data:", data);
                return data.recipes;
            }
            catch (error) {
                console.error("Fetch error:", error);
                return [];
            }
        });
    }
    function renderSkeletonDetail() {
        div.innerHTML = `
      <div class="flex flex-wrap animate-pulse">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <div class="h-10 bg-gray-200 dark:bg-gray-700 w-1/3 mb-4 rounded"></div>
            <div class="h-8 bg-gray-200 dark:bg-gray-700 w-1/4 mb-6 rounded"></div>
            <div class="h-16 bg-gray-200 dark:bg-gray-700 w-3/4 mb-4 rounded"></div>
            <div class="h-8 bg-gray-200 dark:bg-gray-700 w-1/2 mb-4 rounded"></div>
            <div class="h-12 bg-gray-200 dark:bg-gray-700 w-1/3 mb-4 rounded"></div>
            <div class="h-10 bg-gray-200 dark:bg-gray-700 w-1/4 mb-4 rounded"></div>
            <div class="h-12 bg-gray-200 dark:bg-gray-700 w-1/2 mb-4 rounded"></div>
            <div class="h-10 bg-gray-200 dark:bg-gray-700 w-1/3 mb-4 rounded"></div>
          </div>
        </div>
        <div class="w-full sm:w-4/12 flex items-center justify-center">
          <div class="w-full h-48 sm:h-96 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    `;
    }
    function renderProductDetail(product) {
        div.innerHTML = `
      <div class="flex flex-wrap">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <nav class="flex px-4 justify-between items-center">
              <div class="text-4xl font-bold">
                ${product.name} <span class="text-green-700">.</span>
              </div>
              <div>
                <img src="${product.image}" alt="" class="w-8 rounded-full">
              </div>
            </nav>
            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold">${product.name}</h1>
                <div class="w-20 h-2 bg-green-700 my-4"></div>
                <p class="text-xl mb-4"><strong>Ingredients:</strong> ${product.ingredients.join(", ")}</p>
                <p class="text-lg mb-10">${product.instructions}</p>
                <div class="flex items-center space-x-4 mb-6">
                  <span class="text-yellow-500 font-bold flex items-center"><ion-icon name="star"></ion-icon> ${product.rating}</span>
                  <span class="text-gray-500 dark:text-gray-400">${product.difficulty}</span>
                </div>
                <a href="products"><button class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:shadow-2xl transition-all duration-300 transform hover:cursor-pointer">Order Now</button></a>
              </div>
            </header>
          </div>
        </div>
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover sm:h-screen sm:w-4/12 rounded">
      </div>
    `;
    }
    function getProductIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        return id ? parseInt(id, 10) : null;
    }
    renderSkeletonDetail();
    (() => __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield fetchProducts();
            const productId = getProductIdFromUrl();
            let product;
            if (productId !== null) {
                product = products.find((p) => p.id === productId);
            }
            if (!product && products.length > 0) {
                product = products[0];
            }
            if (product) {
                renderProductDetail(product);
            }
            else {
                div.innerHTML =
                    '<p class="text-center text-red-500">No product found.</p>';
            }
        }
        catch (error) {
            div.innerHTML =
                '<p class="text-center text-red-500">Failed to load product details.</p>';
        }
    }))();
    return div;
}
