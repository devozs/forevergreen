<script setup>
const store = useLangStore();

const { lang } = storeToRefs(store)

const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .findOne()
})

function containsEnglish(str) {
    const englishCharRegex = /[a-zA-Z]/;
    return englishCharRegex.test(str);
}


function containsHebrew(str) {
    const hebrewCharRegex = /[\u0590-\u05FF]/;
    return hebrewCharRegex.test(str);
}

const title = ref(lang.value === 'he' ? data.title_he :  data.title_en)
const desc = ref(lang === 'he' ? data.description_he : data.description_en)

useSeoMeta({
  ogImage: () => `https://forevergreen.devozs.com/images/memorial/${data.cover}?timestamp=${new Date().getMilliseconds()}`,
})

</script>

<template>
  <div class="my-10 mx-auto max-w-7xl">

    <div class="flex">
      <!-- Left Div -->
      <div class="flex">
        <img :src="`/images/memorial/${data.cover}`" alt="Memorial Cover Image" class="w-full h-48 object-cover">
      </div>

      <!-- Right Div -->
      <div class="flex flex-col justify-center m-3">
        <h1 class="text-4xl font-bold">{{ title }}</h1>
        <h1 class="text-xl font-bold">{{ data.date }}</h1>
        <h1 class="text-xl font-bold">{{ desc }}</h1>
      </div>
    </div>

    <div v-for="par in data.body.children" :key="par">
      <p v-if="lang === 'he' && containsHebrew(par.children[0].value)" class="mt-2 prose">
        {{ par.children[0].value }}
      </p>
      <p v-if="lang === 'en' && containsEnglish(par.children[0].value)" class="mt-2 prose">
        {{ par.children[0].value }}
      </p>
      
    </div>
    <!-- <ContentRenderer :value="data" class="mt-2 prose"  /> -->

    <!-- <p class="mt-2 prose">
      {{ data.story_he }}
    </p> -->

    <!-- <ContentRenderer :value="content_en" class="mt-2 prose" />
    <ContentRenderer :value="content_he" class="mt-2 prose" /> -->

    <!-- <div class="my-8">
      <a v-for="tag in  data.tags " :key="tag" :href="`/memorial/tags/${tag}`"
        class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-green-900 uppercase last:mr-0 mr-4">
        <Icon name="pajamas:label" size="1.5rem" class="text-gray-100 mr-2" /> {{ tag }}
      </a>
    </div> -->

  </div>
</template>
