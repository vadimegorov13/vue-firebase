<template>
  <div class="card card-body mt-4">
    <h3>Edit posts</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Title</label>
        <input v-model="form.title" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Body</label>
        <input v-model="form.body" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPost, updatePost } from "@/firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const postId = computed(() => route.params.id);
    const form = reactive({ title: "", body: "" });
    onMounted(async () => {
      const post = await getPost(postId.value);
      console.log(post, postId.value);
      form.title = post.title;
      form.body = post.body;
    });
    const update = async () => {
      await updatePost(postId.value, { ...form });
      router.push("/");
      form.title = "";
      form.body = "";
    };
    return { form, update };
  },
};
</script>