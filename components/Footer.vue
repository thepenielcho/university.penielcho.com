<template>
    <footer class="w-full bg-stone-800 py-11 md:py-14 md:pt-20 md:pb-24 px-2 md:px-5">
        
        <div class="max-w-7xl mx-auto block md:flex relative px-0 md:px-4">

            <div class="justify-around md:justify-start px-8 md:px-0 items-start flex">
                <ul class="w-25 md:w-36 md:ml-0 md:m-0">
                    <li class="mb-3 font-medium text-gray-300">University</li>
                    <li class="mb-1.5 font-normal text-gray-500 hover:underline"><nuxt-link to="/">홈</nuxt-link></li>
                    <li class="mb-1.5 font-normal text-gray-500 hover:underline"> <nuxt-link :to="{path: '/courses'}">아티클별</nuxt-link> </li>
                    <li class="mb-1.5 font-normal text-gray-500 hover:underline"> <nuxt-link :to="{path: '/articles'}">강의별</nuxt-link> </li>
                </ul>

                <ul class="w-25 md:w-36 md:ml-0 md:m-0">
                    <li class="mb-3 font-medium text-gray-300">Links</li>
                    <li class="mb-1.5 font-normal text-gray-500 hover:underline"><a href="https://blog.penielcho.com">블로그</a></li>
                    <li class="mb-1.5 font-normal text-gray-500 hover:underline"><a href="https://blog.naver.com/penielcho98">일상</a></li>
                    <li class="mb-1.5 font-normal text-gray-500 hover:underline"><a href="https://github.com/thepenielcho">깃헙</a></li>
                </ul>

                <ul class="w-25 md:w-36 md:ml-0 md:m-0">
                    <li class="mb-3 font-medium text-gray-300">Contact</li>
                    <li class="mb-1.5 font-normal text-gray-500 hover:underline"><a href="mailto:mail@penielcho.com">이메일</a></li>
                    <li class="mb-1.5 font-normal text-gray-500 hover:underline"><a href="https://www.linkedin.com/in/peniel-cho/">링크드인</a></li>
                </ul>
            </div>

            <a href="https://cosadama.com" target="blank" class="hidden md:block flex justify-center md:absolute md:top-0 md:right-0 md:items-center md:m-0">
                <div class="pr-1.5"><FooterLogo/></div>
            </a>

            <ul class="flex justify-center md:absolute md:bottom-0 md:right-0 md:block mt-10 md:mt-0">
                <li class="text-xs md:text-sm font-normal text-gray-500">Developed by 
                    <a class="underline" href="https://github.com/thepenielcho">Peniel Cho</a> </li>
            </ul>

        </div>

    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
</style>