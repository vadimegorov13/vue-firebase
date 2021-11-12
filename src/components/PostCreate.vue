<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-goup">
        <label for="title">Title</label>
        <input type="text" v-model="form.title" class="form-control" required />
      </div>

      <div class="form-goup mt-3">
        <label for="body">Body</label>
        <input type="text" v-model="form.body" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-success mt-3">Create Post</button>
    </form>
  </div>
</template>

<script>
import { createPost } from "@/firebase";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({ title: "", body: "" });

    const onSubmit = async () => {
      await createPost({ ...form });
      form.title = "";
      form.body = "";
    };

    return { form, onSubmit };
  },
};
</script>
