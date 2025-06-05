export default function productDetail() {
    return `
        <div class="p-4">
        <h2 class="text-2xl font-semibold">Product Detail Page</h2>
        <p>This is the product detail page of your TypeScript SPA.</p>
        <div class="mt-4">
            <h3 class="text-xl">Product Information</h3>
            <ul class="list-disc pl-5">
            <li>Product Name: Example Product</li>
            <li>Price: $99.99</li>
            <li>Description: This is a great product with amazing features.</li>
            <li>Category: Electronics</li>
            <li>Stock Status: In Stock</li>
            </ul>
        </div>
        </div>
    `;
}
