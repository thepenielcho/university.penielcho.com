<template>
  <div class="w-full">

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


<div class="max-w-7xl mx-auto">

        <div class="max-w-7xl grid grid-cols-1 md:grid-cols-1 mt-4 md:mt-6 mb-8 md:mb-14">
            <div class="px-6 md:px-6 group" v-for="article of articles" :key="article">
              <nuxt-link :to="{path: `/articles/${article.slug}`}">
                  <div class="article-inner flex border-b py-6 md:py-8 border-gray-200">
                    <div class="px-0 md:px-4">
                        <h3 class="mb-1.5 md:mb-3 text-xl md:text-2xl font-semibold text-gray-600 keep-all">{{ article.title }}</h3>
                        <p class="mb-1.5 md:mb-3 text-sm md:text-base text-gray-400 custom-text keep-all">{{article.description}}</p>
                        <p class="text-sm md:text-base text-gray-400">{{article.course}} · {{ formatDate(article.createdAt) }}</p>
                    </div>
                  </div>
              </nuxt-link>
            </div>
        </div>

<infinite-loading class="pb-12 md:pb-16" @infinite="infiniteHandler" spinner="spiral">
                <div slot="no-more" class="mx-auto">
                  <div class="text-gray-600 font-medium text-base md:text-lg md:pb-2.5 pb-4">더 이상 배운 게 없답니다. 끝이에요.</div>
                  <div class="text-gray-600 font-medium underline text-sm md:text-base"> </div>
                </div>
                <div slot="no-results" class="">
                  <div class="text-gray-600 font-medium text-base md:text-lg md:pb-2.5 pb-4">찾고자 하시는 글이 없어요.</div>
                  <div class="text-gray-600 font-medium underline text-sm md:text-base"> </div>
                </div>
                <div slot="error" slot-scope="{ trigger }" class="text-gray-600 font-medium text-base md:text-lg">
                  뭔가 문제가 있나봐요.
                  <a href="javascript:;" @click="trigger">여기</a> 를 눌러주세요.
                </div>
</infinite-loading>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      limit: 8,
      articles: [],
    };
  },

  
  async fetch() {
    this.articles = await this.fetchData();
  },
  fetchOnServer: true,
  methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ko', options)
        },
        fetchData() {
          return this.$content("articles")
          .limit(this.limit)
          .skip(this.limit * this.page)
          .sortBy('createdAt', 'desc')
          .fetch();
        },
        infiniteHandler($state) {
          setTimeout(async () => {
            this.page += 1;
            let additionalItems = await this.fetchData();
            if (additionalItems.length > 0) {
              this.articles.push(...additionalItems);
              $state.loaded();
            } else {
              $state.complete();
            }
          }, 500);
        },
  },
}
</script>

<style scoped>
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
    border-radius: 70%;
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
