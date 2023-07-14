import type { Comment, UserPost, UserUpload } from './post';

export interface PostStore {
  posts: UserPost[];
  addPost: (newPosts: UserPost[]) => void;
  editPost: (postId: string, updatedPost: UserPost) => void;
  deletePost: (postId: string) => void;
  addComment: (postId: string, newComment: Comment) => void;
  editComment: (postId: string, commentId: string, updatedComment: Comment) => void;
  deleteComment: (postId: string, commentId: string) => void;
}

export interface UserUploadStore {
  inputUserUpload: UserUpload;
  imageMsg: string;
  imagePreview: string;
  setImageMsg: (msg: string) => void;
  setHeightValue: (value: string) => void;
  heightValue: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  clearField: () => void;
  clearImage: () => void;
}
