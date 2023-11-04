<script setup>

const { data: memorias } = await useAsyncData('latest-memorials', () =>
  queryContent('/memorial')
    .sort({ data: 1 })
    .limit(3)
    .find()
)


</script>

<template>
  <section>
    <h1 class="text-5xl font-bold mt-10">{{ $t('home.title') }}</h1>
    <p class="text-base text-gray-900 p-2 italic">{{ $t('home.sub_title') }}</p>
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">{{ $t('home.thier_stories') }}</h2>
      <p class="text-lg py-2">
        {{ $t('home.thier_stories_1') }}
      </p>
      <p class="text-lg py-2">
        {{ $t('home.thier_stories_2') }}
      </p>
      <p class="text-lg py-2">
        {{ $t('home.thier_stories_3') }}
      </p>
    </div>
    <img src="/images/home-cover.jpeg" class="w-1/2 md:max-w-sm p-8 mx-auto rounded-full" />
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-8">{{ $t('home.latest') }}</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <!-- <client-only> -->
        <Memorial :memorials="memorias" />
      <!-- </client-only> -->
    </div>
  </section>

  <!-- <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section> -->
</template>
