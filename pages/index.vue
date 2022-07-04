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
                현재는 운영되지 않는 블로그입니다.
            </div>
        </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto pt-9 md:pt-28 pb-12 md:pb-28 px-5 sm:px-16 md:px-28">
      <Search />
    </div>

</div>
</template>

<script>
export default {
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