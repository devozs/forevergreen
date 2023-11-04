<template>
  <NuxtLayout>
    <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineOgImageScreenshot()

const store = useLangStore();

const { lang } = storeToRefs(store)
const { locale } = useI18n()

onMounted(() => {
  locale.value = lang.value
});

watch(lang, (newVal: string) => {
  locale.value = newVal
})

// useHead({
//   title: 'ForeverGreen',
//   titleTemplate: '%s'
// })

</script>
