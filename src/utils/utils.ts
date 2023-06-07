import axios from 'axios';
import type { PostComment, PostData } from '@/interfaces/post';

export function cn(...cns: Array<string>) {
  return cns.join(' ');
}

export const axiosWithCors = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-Type': 'application/json',
  },
});

export async function postData({
  username,
  title,
  desc,
  badge,
  category,
  linkSourceCode,
  linkLiveDemo,
  code,
}: PostData) {
  try {
    const res = await axiosWithCors.post('/posts', {
      username,
      title,
      desc,
      badge,
      category,
      linkSourceCode,
      linkLiveDemo,
      code,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postComment({ postId, username, text, code }: PostComment) {
  try {
    const res = await axiosWithCors.post('/comments', {
      postId,
      username,
      text,
      code,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
