 import HeroSection from "../component/heroSection";
export default function Home(): string {
  return `
    <div class="p-4">
      <h2 class="text-2xl font-semibold">Home Page</h2>
      <p>Welcome to the home page of your TypeScript SPA.</p>
      <div class="mt-4">
        <h3 class="text-xl">Hero Section</h3>
         ${HeroSection()}
      </div>
    `;
}