<template>
    <div>
      <Html :lang="lang" :dir="lang === 'he'? 'rtl': 'ltr'"></Html>
      <div class="content">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  // const { locale } = useI18n()
  const store = useLangStore();
  const { lang } = storeToRefs(store)

  // onMounted(() => {
  //   locale.value = lang
  // });


  const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
  })
  </script>
  