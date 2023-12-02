<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Dapatkan berita terbaru dan paling hangat di sini. Berita terbaru seringkali menjadi sorotan utama karena informasi terkini bisa memberikan wawasan mendalam tentang peristiwa terbaru di dunia politik, teknologi, hiburan, dan banyak lagi.',
    },
  ],
  titleTemplate: 'Our\'s Blog - %s',
})

// a. Use the Composition API
defineOgImage({
  title: 'P11\'s Blog',
  description: 'Dapatkan berita terbaru dan paling hangat di sini. Berita terbaru seringkali menjadi sorotan utama karena informasi terkini bisa memberikan wawasan mendalam tentang peristiwa terbaru di dunia politik, teknologi, hiburan, dan banyak lagi.',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
