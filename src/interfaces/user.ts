export interface IUser {
  _id: string;
  socket_id: string;
  fullname: string;
  username: string;
  credential: {
    email: string;
    password: string;
  };
  bio: string;
  job: string;
  avatar: string;
  badge: Array<IBadge>;
  isActive: boolean;
  roles: 'user' | 'admin';
  following: Array<string>;
  followers: Array<string>;
  saved: Array<string>;
  interest: Array<string>;
  notification: Array<INotification>;
  createdAt: string;
}

export interface IBadge {
  name: string;
  description: string;
  type: string;
  created_at: number;
}

export interface INotification {
  user_id: string;
  post_id?: string;
  description: string;
  created_at: number;
}
