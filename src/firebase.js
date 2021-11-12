import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyBriY1FNcqZiMpHTydzPM3o93Wwcohzdos",
  authDomain: "fir-test-131d9.firebaseapp.com",
  projectId: "fir-test-131d9",
  storageBucket: "fir-test-131d9.appspot.com",
  messagingSenderId: "570322399715",
  appId: "1:570322399715:web:93a0b7bbc75efaa396b0d6",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const postsCollection = db.collection("posts");

export const createPost = (post) => {
  return postsCollection.add(post);
};

export const getPost = async (id) => {
  const post = await postsCollection.doc(id).get();
  return post.exists ? post.data() : null;
};

export const updatePost = (id, post) => {
  return postsCollection.doc(id).update(post);
};

export const deletePost = (id) => {
  return postsCollection.doc(id).delete();
};

export const useLoadPosts = () => {
  const posts = ref([]);
  const close = postsCollection.onSnapshot((snapshot) => {
    posts.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return posts;
};
