export default function Product() {
    return `
        <div class="w-full h-full bg-rose-100/30 dark:bg-[#1b1b1b]">

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
</div>
    </div>
</div>

<!-- Icons -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>



    `;
}
