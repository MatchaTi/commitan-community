export interface Code {
  syntax: string;
  pathFile: string;
}

export interface Comment {
  id: string;
  username: string;
  createdAt: string;
  postId: string;
  text: string;
  code?: Code;
}

export interface Post {
  id: string;
  username: string;
  title: string;
  desc?: string;
  createdAt: string;
  badge: string;
  category: string;
  linkSourceCode?: string;
  linkLiveDemo?: string;
  code?: Code;
  comments: Comment[];
}
