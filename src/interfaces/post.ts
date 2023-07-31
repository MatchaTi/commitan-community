import { IUser } from './user';

export interface Code {
  syntax: string;
  pathFile: string;
}

export interface IComment {
  _id: string;
  post_id: string;
  user_id: string;
  users: IUser;
  description: string;
  isEdited: boolean;
  created_at: string;
  code?: Code;
}

export interface UserPost {
  _id: string;
  user_id: string;
  users: IUser;
  title: string;
  category: string;
  description: string;
  code?: Code;
  image: string;
  isEdited: boolean;
  likes: number;
  linkSourceCode: string;
  linkLiveDemo: string;
  comment: Array<IComment>;
  createdAt: string;
}

export interface PostComment {
  postId: string;
  username: string;
  text: string;
  code: Code;
}

export interface UserUpload {
  title: string;
  desc: string;
  category: string;
  linkSourceCode: string;
  linkLiveDemo: string;
  image: any;
}
