<template>
      <div>
        <div class="shadow-sm md:shadow w-full rounded-full border-2 flex items-center mb-4 py-2.5 md:py-3.5 pr-4">
            <SearchIcon />
            <input placeholder="암거나 검색해보세요 찾으시는 건 없겠지만..." v-model="query" type="search" autocomplete="off" 
            class="flex-auto text-sm md:text-base text-gray-600 pr-3.5 md:pr-6 flex items-center placeholder-text-gray-400" />
        </div>

        <ul v-if="articles.length" class="shadow-sm md:shadow rounded-md border-2 px-4">
          <li class="text-gray-500 py-2.5 md:py-3.5 border-b text-sm md:text-base lastborder" v-for="article of articles" :key="article.slug">
            <nuxt-link :to='`/articles/${article.slug}`'>{{ article.title }}</nuxt-link>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      articles: []
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .search(query)
        .fetch()
    }
  }
}
</script>

<style scoped>
.lastborder:last-child{
    border-bottom: none;
}
input:focus, textarea:focus, select:focus{
        outline: none;
    }
input::-ms-clear,
input::-ms-reveal{
	display:none;width:0;height:0;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration{
	display:none;
}
</style>