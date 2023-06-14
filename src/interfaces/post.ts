export interface Code {
  syntax: string;
  pathFile: string;
}

export interface Comment {
  _id: string;
  username: string;
  createdAt: string;
  postId: string;
  text: string;
  code?: Code;
}

export interface UserPost {
  _id: string;
  username: string;
  title: string;
  desc?: string;
  createdAt: string;
  badge: string;
  like: number;
  category: string;
  linkSourceCode?: string;
  linkLiveDemo?: string;
  code?: Code;
  comments: Comment[];
}

export interface PostData {
  username: string;
  title: string;
  desc: string;
  badge: string;
  category: string;
  linkSourceCode: string;
  linkLiveDemo: string;
  code: Code;
}

export interface PostComment {
  postId: string;
  username: string;
  text: string;
  code: Code;
}
