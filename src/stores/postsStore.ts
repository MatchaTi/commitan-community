import { create } from 'zustand';
import type { PostStore } from '@/interfaces/userPost';

export const useUserPostStore = create<PostStore>()((set) => ({
  posts: [],
  addPost: (newPosts) => {
    set((state) => {
      const updatedPosts = state.posts.filter((post) => !newPosts.some((newPost) => newPost._id === post._id));
      return {
        posts: [...newPosts, ...updatedPosts],
      };
    });
  },
}));
