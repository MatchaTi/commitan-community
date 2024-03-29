'use client';

import type { UserPost } from '@/interfaces/post';
import { usePagination } from '@/libs/hooks';
import { useUserPostStore } from '@/stores/postsStore';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import InfiniteScroll from 'react-infinite-scroll-component';
import { shallow } from 'zustand/shallow';
import PostSkeleton from '../skeleton/postSkeleton';
import Post from './post';
import axios from 'axios';

export default function PostList() {
  const [posts, addPost] = useUserPostStore((state) => [state.posts, state.addPost], shallow);
  const { data, isReachingEnd, isLoading, error, mutate, size, setSize } = usePagination<UserPost>(
    `${process.env.API_URL}/post/index`
  );

  useEffect(() => {
    // const res = async () => {
    //   const response = await axios.get(`${process.env.API_URL}/post/index/0/5`);
    //   console.log(response.data);
    // };
    // res();

    if (data) {
      console.log(data);
      const newPosts = data.flat();
      addPost(newPosts);
    }
  }, [data, addPost]);

  return (
    <section className='w-full max-w-full'>
      <Toaster toastOptions={{ duration: 5000 }} />
      {error && <p className='py-4 text-center text-base font-semibold'>Mohon maaf, terjadi error ...</p>}
      {isLoading && <PostSkeleton />}
      {data && (
        <InfiniteScroll
          next={() => setSize(size + 1)}
          hasMore={!isReachingEnd}
          loader={<PostSkeleton />}
          endMessage={<p className='pb-40 pt-10 text-center text-base font-semibold sm:pb-10'>No more post...</p>}
          dataLength={posts.length}
        >
          {posts.map((post) => (
            <Post key={post._id} context='home' postId={post._id} data={post} editorContext='posted' />
          ))}
        </InfiniteScroll>
      )}
    </section>
  );
}
