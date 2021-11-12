<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PostCreate />
  </div>
</template>

<script>
// @ is an alias to /src
import PostCreate from "@/components/PostCreate.vue";

export default {
  name: "Home",
  components: {
    PostCreate,
  },
};
</script>
