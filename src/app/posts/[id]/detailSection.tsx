'use client';

import Post from '@/components/common/post';
import PostSkeleton from '@/components/skeleton/postSkeleton';
import { UserPost } from '@/interfaces/post';
import { useUserPostStore } from '@/stores/postsStore';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

interface IDetail {
  data: UserPost;
  postId: string;
}

export default function DetailSection({ data, postId }: IDetail) {
  const [posts, addPost] = useUserPostStore((state) => [state.posts, state.addPost], shallow);

  useEffect(() => {
    addPost([data]);
  }, [addPost, data]);

  return (
    <div className='mx-auto w-full'>
      {posts.find((post) => post._id == postId) ? (
        <Post
          data={posts.find((post) => post._id === postId)!}
          context='detail'
          postId={postId}
          editorContext='detail'
        />
      ) : (
        <PostSkeleton />
      )}
    </div>
  );
}
