<script setup>
const { data: memorials } = await useAsyncData('memorials', () =>
  queryContent('/memorial').find()
)

defineOgImage({ url : `https://forevergreen.devozs.com/images/home-cover.jpeg`, alt: `Forever Green` }) 
useHead({
  title: ()=> 'Memorials',
  titleTemplate: '%s %separator Forever Green'
})

</script>

<template>
  <h1 class="text-3xl my-8">{{ $t("memorial.title")}}</h1>

  {{ $t("memorial.content") }}

  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <Memorial :memorials="memorials" />
  </section>
</template>
