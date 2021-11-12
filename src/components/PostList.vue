<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">body</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, title, body } in posts" :key="id">
          <td>{{ title }}</td>
          <td>{{ body }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deletePost(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadPosts, deletePost } from "@/firebase";
export default {
  setup() {
    const posts = useLoadPosts();
    return { posts, deletePost };
  },
};
</script>
