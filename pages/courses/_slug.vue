<template>
    <div>
        <div class="relative">
            <div class="bg-img section w-full py-48 sm:py-64 md:py-72 xl:py-80 inline-block" :style="{ backgroundImage: `url(/${course.img})` }"></div>
            <div class="absolute bottom-0 w-full h-full bg-gradient-to-t from-zinc-800"></div>
            <div class="absolute bottom-0 w-full">
            <div class="max-w-7xl mx-auto pb-6 md:pb-14 px-6 md:px-6">
                <div class="text-white font-medium text-3xl md:text-4xl pb-2.5 md:pb-4">
                    {{course.title}}
                </div>
                <div class="text-slate-300 text-sm md:text-base keep-all">
                {{course.description}}
                </div>
            </div>
            </div>
        </div>

        <div class="max-w-7xl grid grid-cols-1 md:grid-cols-1 mt-4 md:mt-6 mb-8 md:mb-14 mx-auto">
            <div class="px-6 md:px-6 group" v-for="article of articles" :key="article">
                <nuxt-link :to="{path: `/articles/${article.slug}`}">
                    <div class="article-inner flex border-b py-6 md:py-8 border-gray-200">
                        <div class="h-content hidden md:block">
                        </div>
                        <div class="px-0 md:px-4">
                            <p class="mb-1.5 md:mb-3 text-sm md:text-base text-gray-400">{{article.course}}</p>
                            <h3 class="mb-1.5 md:mb-3 text-xl md:text-2xl font-semibold text-gray-600 keep-all">{{ article.title }}</h3>
                            <p class="mb-1.5 md:mb-3 text-sm md:text-base text-gray-400 custom-text keep-all">{{article.description}}</p>
                            <p class="text-sm md:text-base text-gray-400">{{ formatDate(article.createdAt) }} · 조용주</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>


    </div> 
</template>

<script>
export default {
    async asyncData({ $content, params }) {

        const course = await $content('courses', params.slug)
        .fetch();

        const courseKR = course.title;

        const articles = await $content('articles', params)
        .sortBy('createdAt', 'desc')
        .where({course: courseKR})
        .fetch();

        return { course, courseKR, articles }
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ko', options)
        },
    },
    head() {
        return {
            title: `${this.course.title} | TIL University`,
            htmlAttrs: {
            lang: 'ko'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 't-type',
                name: 'twitter:card',
                content: 'summary'
            },
            {
            hid: 'og-type',
            property: 'og:type',
            content: 'website'
            },
            {
            hid: 'og:title',
            property: 'og:title',
            content: `${this.course.title} | TIL University`
            },
            {
            hid: 'og:description',
            property: 'og:description',
            content: this.course.description
            },
            {
            hid: 'og:image',
            property: 'og:image',
            // content: this.article.img
            content: `https://raw.githubusercontent.com/thepenielcho/university.penielcho.com/main/static/${this.course.img}`
            },
            {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: `https://raw.githubusercontent.com/thepenielcho/university.penielcho.com/main/static/${this.course.img}`
            },
            {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: 'article image'
            },
            {
            hid: 'og:url',
            name: 'og:url',
            content: `https://university.penielcho.com/courses/${this.course.slug}`
            },
            ],
        }
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