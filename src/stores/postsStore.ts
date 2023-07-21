import type { PostStore } from '@/interfaces/postsStore';
import { create } from 'zustand';

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
  editPost: (postId, updatedPost) => {
    set((state) => {
      const updatedPosts = state.posts.map((post) => (post._id === postId ? updatedPost : post));
      return {
        posts: updatedPosts,
      };
    });
  },
  deletePost: (postId) => {
    set((state) => {
      const updatedPosts = state.posts.filter((post) => post._id !== postId);
      return {
        posts: updatedPosts,
      };
    });
  },
  addComment: (postId, newComment) => {
    set((state) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      });
      return {
        posts: updatedPosts,
      };
    });
  },
  editComment: (postId, commentId, updatedComment) => {
    set((state) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === postId) {
          const updatedComments = post.comments.map((comment) => {
            if (comment._id === commentId) {
              return {
                ...comment,
                ...updatedComment,
              };
            }
            return comment;
          });
          return {
            ...post,
            comments: updatedComments,
          };
        }
        return post;
      });
      return {
        posts: updatedPosts,
      };
    });
  },
  deleteComment: (postId, commentId) => {
    set((state) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === postId) {
          const updatedComments = post.comments.filter((comment) => comment._id !== commentId);
          return {
            ...post,
            comments: updatedComments,
          };
        }
        return post;
      });
      return {
        posts: updatedPosts,
      };
    });
  },
}));
