import type { UserPost } from './post';

export interface PostStore {
  posts: UserPost[];
  addPost: (newPosts: UserPost[]) => void;
}
