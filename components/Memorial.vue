<script setup>
const store = useLangStore();

const { lang } = storeToRefs(store)

const props = defineProps(['memorials'])

</script>

<template>
  <client-only>
  <div v-for="memorial in props.memorials" :key="memorial.slug"
    class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
    <NuxtLink :to="memorial._path">
      <img :src="`/images/memorial/${memorial.cover}`" alt="Memorial Cover Image" class="w-full h-48 object-cover">
    </NuxtLink>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">{{ lang === 'he' ? memorial.title_he : memorial.title_en }}</h2>
      <p class="text-gray-700 mb-4">{{ memorial.date }}</p>
      <p class="text-gray-700 mb-4">{{ lang === 'he' ? memorial.description_he : memorial.description_en }}</p>
      <NuxtLink :to="memorial._path"
        class="inline-block bg-green-800 hover:bg-green-900 text-white py-2 px-4 rounded float-right mb-8">{{ $t('memorial.read_more') }}
      </NuxtLink>
    </div>
  </div>
</client-only>
</template>
