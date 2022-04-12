<template>
<div>
    <div class="relative">
        <div class="bg-img section w-full py-48 sm:py-64 md:py-72 xl:py-80 inline-block" style="background-image: url(main_1.jpg)"></div>
        <div class="absolute bottom-0 w-full h-full bg-gradient-to-t from-zinc-800"></div>
        <div class="absolute bottom-0 w-full">
        <div class="max-w-7xl mx-auto pb-6 md:pb-14 px-6 md:px-6">
            <div class="text-white font-semibold text-3xl md:text-4xl pb-2.5 md:pb-4">
                기록은 필수!
            </div>
            <div class="text-slate-300 text-sm md:text-base keep-all">
                굳이 대학 전공 수업을 온라인에 기록하는 이유는 안 까먹으려고요... <br class="hidden md:inline"/> 요즘은 그냥 회고 안 하면 아무것도 안 한 거다라는 생각으로 살고 있습니다.ㅎ
            </div>
        </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto pt-9 md:pt-16 pb-12 md:pb-20 px-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-5">
        <div v-for='course of courses' :key="course">
            <nuxt-link :to='`/courses/${course.slug}`'>
            <div class="group relative">
                <div class="lead-box rounded-lg h-52 sm:h-60 md:h-72 mb-5 bg-slate-500 bg-img group-hover:scale-105 transition duration-300" :style="{ backgroundImage: `url(/${course.img})` }">
                <div class="absolute bottom-0 w-full h-full bg-gradient-to-t from-zinc-600 rounded-lg"></div>
                <div class="absolute bottom-0 w-full py-6 px-6">
                    <div class="text-white text-2xl font-medium pb-2">{{course.title}}</div>
                    <div class="text-slate-300 text-sm keep-all">{{course.description}}</div>
                </div>
                </div>
            </div>
            </nuxt-link>
        </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const courses = await $content('courses')
        .sortBy('order', 'asc')
        .fetch();
        return { courses }
    },
}
</script>

<style scoped>
.keep-all{
    word-break: keep-all;
}
.bg-img {
        background-position: center;
        background-repeat:  no-repeat;
        /* background-attachment: fixed; */
        background-size:  cover;
        background-color: #000000;
 }
.section {
  position: relative;
}
.inner {
  box-sizing: border-box;
  position: relative;
}
.keep-all {
  word-break: keep-all;
}
.lead-box {
    overflow: hidden;
}
.square-box {
    overflow: hidden;
}
.profile {
    object-fit: cover;
    /* overflow: hidden; */
}
</style>