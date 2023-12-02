<script setup lang="ts">
defineOgImage()
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl  mx-auto">
      <div class="col-span-5  max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl  pb-2 font-bold ">
              Kelompok Pemrograman Web P11
              "Modul 4 (NUXT)"
            </h1>

            <div class="my-3 space-x-3 pb-10">
              <NuxtLink
                to="https://github.com/mrvlvenom/pweb-nuxt-P11-2023"
                target="_blank"
                class="p-2 bg-gray-300 text-gray-800 rounded-md"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5">
            <NuxtImg
              src="/Januar.jpg"
              width="125"
              height="115"
              quality="50"
              class="rounded-md"
            />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          Software Engineer, Problem Solver, Web Enthusiast.
        </h3>
        <p>M. Januar Eko Wicaksono (5027221006)
        </p>
        <p>Rehana Putri Salsabilla (5027221015)
        </p>
        <p>Angella Christie (5027221047)
        </p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg
          src="/Januar.jpg"
          width="450"
          height="500"
          quality="50"
          class="rounded-md"
        />
      </div>
    </div>
  </div>
</template>
