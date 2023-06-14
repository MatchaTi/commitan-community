import type { UserPost, Comment } from './post';

export interface PostStore {
  posts: UserPost[];
  addPost: (newPosts: UserPost[]) => void;
  editPost: (postId: string, updatedPost: UserPost) => void;
  deletePost: (postId: string) => void;
  addComment: (postId: string, newComment: Comment) => void;
  editComment: (postId: string, commentId: string, updatedComment: Comment) => void;
}
