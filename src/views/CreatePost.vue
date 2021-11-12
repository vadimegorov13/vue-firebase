<template>
  <CreatePost />
</template>

<script>
// @ is an alias to /src
import CreatePost from "@/components/CreatePost.vue";

export default {
  name: "Home",
  components: {
    CreatePost,
  },
};
</script>
