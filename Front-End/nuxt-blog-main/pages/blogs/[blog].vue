<template>
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12 ">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :date="data.date"
        :description="data.description"
        :tags="data.tags"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
    <BlogToc />
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';

const blogData = ref(null);
const dataFetched = ref(false);

onMounted(async () => {
  const response = await axios.get("http://localhost:5000/api/blog");
  const fetchedPosts = response.data.docs;

  blogData.value = fetchedPosts.map((blog) => ({
    id: blog.id,
    title: blog.title,
    author: blog.author,
    releaseDate: blog.releaseDate,
    imageLink: blog.imageLink,
    content: blog.content,
  }));

  dataFetched.value = true;
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
};

// Watch for changes in blogData to handle cases where data is fetched quickly
watch(blogData, () => {
  if (blogData.value !== null) {
    dataFetched.value = true;
  }
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.text-gray-800 {
  margin-bottom: 1rem;
}
</style>
