<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, HomeIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { useLangStore } from '~/stores/lang';

const route = useRoute();
const store = useLangStore();

const { lang } = storeToRefs(store)
const { locale } = useI18n()

const changeLang = () => {
  console.log('lang', lang.value)
  const newVal = (lang.value === 'he' ? 'en' : 'he')
  console.log('newVal', newVal)
  store.change(newVal)
}
const navigation = [
  { name: 'Home', href: '/', current: route.name == 'index' },
  { name: 'Memorial', href: '/memorial', current: route.name == 'memorial' },
]
</script>

<template>
  <Disclosure as="nav" class="bg-green-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">

            <img class="block h-8 w-auto lg:hidden" src="~/assets/images/header.jpeg" alt="ForeverGreen" />
            <img class="hidden h-8 w-auto lg:block" src="~/assets/images/header.jpeg" alt="ForeverGreen" />
          </div>

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'bg-green-900 text-white' : 'text-green-300 hover:bg-green-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">
                <HomeIcon v-if="item.name === 'Home'" class="block h-6 w-6" />
                <HeartIcon v-else class="block h-6 w-6" />
                
              </a>
            </div>
          </div>
          <div class="sm:ml-6">
            <div class="flex space-x-4">
              <!-- <client-only> -->
                <NuxtLink @click="changeLang" class="bg-green-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page">{{ lang.toUpperCase() }}</NuxtLink>
              <!-- </client-only> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-green-900 text-white' : 'text-green-300 hover:bg-green-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ $t('menu.' + item.name.toLowerCase()) }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>


