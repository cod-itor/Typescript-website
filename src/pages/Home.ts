export function Home(): HTMLElement {
  const div = document.createElement('div');
  div.innerHTML = `
  <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">EAT MORE GAIN MORE. NEVER STOP EATING</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-grey-700 hover:bg-grey-800 focus:ring-4 focus:ring-grey-300 dark:focus:ring-primary-900">
                FOODIE HERE
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               ENJOY FOOD
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://pngimg.com/d/burger_sandwich_PNG4135.png" alt="mockup">
        </div>                
    </div>
</section>


<div class="w-full h-full bg-gray-100 dark:bg-[#1a1a1a]">

    <div class="w-full h-full flex flex-col justify-center items-center py-10">
        <!-- Title -->
        <p class="pb-2 text-lg lg:text-2xl text-rose-600 font-semibold">Category</p>
        <h2 class="text-3xl lg:text-5xl text-center font-serif font-semibold mb-10 dark:text-white">Choose Your Best Food</h2>

        <div class="flex gap-6 flex-wrap lg:flex-nowrap justify-center items-center">
        <!-- 1 -->
        <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
            <!-- Card Image -->
            <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <!--  -->
                <div class="flex items-center justify-between my-4">
                    <!-- Rater -->
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <!-- Rate -->
                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">5.0</p>
                    </div>
                </div>

                <!-- Description -->

                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Pizza Slice</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>

        <!-- 2 -->
        <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
            <!-- Card Image -->
            <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/chicken.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <!--  -->
                <div class="flex items-center justify-between my-4">
                    <!-- Rater -->
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <!-- Rate -->
                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">4.6</p>
                    </div>
                </div>

                <!-- Description -->

                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Chicken Paradise</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>

        <!-- 3 -->
        <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
            <!-- Card Image -->
            <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/burger.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <!--  -->
                <div class="flex items-center justify-between my-4">
                    <!-- Rater -->
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <!-- Rate -->
                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">5.0</p>
                    </div>
                </div>

                <!-- Description -->

                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Cheese Burger</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>
         <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
            <!-- Card Image -->
            <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <!--  -->
                <div class="flex items-center justify-between my-4">
                    <!-- Rater -->
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <!-- Rate -->
                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">5.0</p>
                    </div>
                </div>

                <!-- Description -->

                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Pizza Slice</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>
</div>
    </div>
</div>


<section class="text-white body-font">
  <div class="flex justify-center mt-10 text-4xl font-regular">
    Why Us?
  </div>
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap text-center justify-center">
      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/5235/5235253.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Latest FOOD INFORMATION</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/10366/10366416.png     " class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Reasonable Price</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3703/3703377.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3570/3570168.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>

    </div>
  </div>
</section>



<div class="w-full min-h-screen flex items-center">
    <div class="max-w-full py-5 mt-10 mb-20 mx-auto overflow-hidden">
        <div class="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
            <p class="text-sm sm:text-lg font-semibold text-red-700">Words That Matter</p>
            <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">See Why Clients Keep Coming
                Back</h3>
        </div>
        <div class="flex flex-col gap-3">
            <!-- Top -->
            <div style="mask-image:linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"
                class="relative flex justify-around gap-5 overflow-hidden shrink-0">
                <div class="max-w-full mx-auto">
                    <div class="px-4 md:px-10 mx-auto w-full">
                        <div
                            class="animate-scrollReverse flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
                            <!-- 1 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-lg font-extralight md:text-lg">
                                    "Working with Samuel was a game-changer! His Tailwind CSS skills brought our
                                    UI to life with a clean, modern, and fully responsive design."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1665686307516-1915b9616526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmZW1hbGV8ZW58MHwwfHx8MTc0MzU5Njc5OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Sarah M</h5>
                                            <p class="text-sm md:text-base mt-[-4px] text-white/50 dark:text-black/30">
                                                Startup Founder</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 2 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "Finding a great Laravel developer is tough, but Samuel exceeded all my
                                    expectations. His code is clean, efficient, and highly scalable.
                                    "
                                </p>
                                <div
                                    class="flex overflow-hidden md:h-[28%] h-[30%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Daniel S</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Business Owner</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "A rare talent who excels in Tailwind, Nuxt.js, and Laravel! He built a full-stack
                                    web app that is both powerful and beautiful."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">John M</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Startup CEO</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 4 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "I struggled with bloated CSS files until Samuel revamped our frontend using
                                    Tailwind. The result? A lightweight, maintainable, and stunning interface!"
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1473830394358-91588751b241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">James L</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Frontend Engineer</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 5 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "I can’t recommend Samuel enough! He transformed our Vue.js project into a
                                    high-performance Nuxt.js app with seamless API integration."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8cGVyc29ufGVufDB8MHx8fDE3NDMzMjcxMzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Laura P</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Marketing Manager</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 6 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "If you’re looking for a top-tier Laravel developer, look no further. Samuel
                                    delivers quality code and always meets deadlines."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8d29tYW58ZW58MHwwfHx8MTc0MzM5ODE0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Lisa T</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Tech Founder
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 7 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "Thanks to Samuel, our Nuxt.js app now loads in a fraction of the time and ranks
                                    higher on search engines!"
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8bWVufGVufDB8MHx8fDE3NDMzOTgxOTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md"> Kevin H</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Digital Marketer
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- Bottom -->
            <div style="mask-image:linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"
                class="relative flex justify-around gap-5 overflow-hidden shrink-0">
                <div class="max-w-full mx-auto">
                    <div class="px-4 md:px-10 mx-auto w-full">
                        <div
                            class="animate-scroll flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
                            <!-- 1 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "Nuxt.js can be tricky, but Samuel made everything look effortless. From state
                                    management to routing, they nailed it."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxwZXJzb258ZW58MHwwfHx8MTc0MzU5NTUxMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Marry J.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Startup Founder</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 2 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "The Laravel API Samuel built for us was robust, secure, and well-documented. Our
                                    mobile app team loved working with it!
                                    "
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZXJzb258ZW58MHwwfHx8MTc0MzU5NTUxMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md"> Jason K.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Mobile App Developer</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "We had a messy PHP codebase, and Samuel expertly migrated it to Laravel. The new
                                    system is modern, scalable, and easy to maintain."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxtZW58ZW58MHwwfHx8MTc0MzU5NTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Mark E.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Software Architect</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 4 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "The way Samuel implements Tailwind is incredible. Our website now looks amazing and
                                    performs better than ever!"
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1450133064473-71024230f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8bWVufGVufDB8MHx8fDE3NDM1OTU5OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">David T.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                E-commerce Manager
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 darK:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 5 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "A complete package! Samuel crafted a sleek UI with Tailwind, built a
                                    high-performance Nuxt.js frontend, and powered it with a rock-solid Laravel
                                    backend."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxtZW58ZW58MHwwfHx8MTc0MzU5NTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Steve J.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Project Manager</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 6 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "From the frontend to the backend, Samuel handled everything flawlessly. Their
                                    attention to detail and problem-solving skills are unmatched."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxtZW58ZW58MHwwfHx8MTc0MzU5NTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Ethan F.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Lead Developer</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 7 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "Our team was new to Tailwind, but Samuel guided us through the transition
                                    effortlessly, making our development process faster and more efficient."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8cHJvZ3JhbW1lcnxlbnwwfDB8fHwxNzQzNTk2NDUxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Melissa K.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                SaaS Founder</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</div>


<section class="w-full flex">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center space-y-5">
            <h2 class="text-base font-semibold text-red-800 tracking-wide uppercase">SEE WHO YOU'RE HERE WITH</h2>
            <div class="inline-flex items-end justify-center w-full text-center mx-auto">
                <img src="https://randomuser.me/api/portraits/men/47.jpg"
                    class="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/men/49.jpg"
                    class="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/women/46.jpg"
                    class="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/men/48.jpg"
                    class="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/women/43.jpg"
                    class="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative">
            </div>
            <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Discover
                your
                FOODIE
                <span class="px-2 py-1 relative inline-block">
                    <svg class="stroke-current bottom-0 absolute text-rose-300 -translate-x-2" viewBox="0 0 410 18"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="12" fill="none"
                            fill-rule="evenodd" stroke-linecap="round"></path>
                    </svg>
                    <span class="relative">with us</span>
                </span>
            </p>

            <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-100">
                NO NEED TO SIGN UP, JUST START EXPLORING! CONNECT US WITH YOUR FAVORITE FOOD PLACES AND
            </p>

            <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-2.5 items-center justify-center">
                <!-- Sign up with Email -->
                <a href="#" class="w-full sm:w-auto">
                    <button type="button"
                        class="flex items-center justify-center px-4 py-3 w-full  shadow-sm font-medium rounded-full border border-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-200 transition duration-250 ease-in-out">
                        <span class="text-base"> Email</span>
                    </button>
                </a>

                <!-- Sign up with Google -->
                <a href="#" class="w-full sm:w-auto sm:mt-0 mt-2 sm:ml-0 ml-2">
                    <button type="button"
                        class="flex items-center justify-center gap-4 px-4 py-3 w-full border border-rose-400 shadow-sm font-medium rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-200 transition duration-250 ease-in-out">
                        <!-- Google Logo -->
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-0.5 0 48 48" version="1.1">
                            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                        <path
                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                            id="Fill-1" fill="#FBBC05">

                                        </path>
                                        <path
                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                            id="Fill-2" fill="#EB4335">

                                        </path>
                                        <path
                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                            id="Fill-3" fill="#34A853">

                                        </path>
                                        <path
                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                            id="Fill-4" fill="#4285F4">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="text-base"> Google</span>
                    </button>
                </a>
            </div>

        </div>
    </div>
</section>





<!-- Icons -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

   
  `;
  return div;
}
