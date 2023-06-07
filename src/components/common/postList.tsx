'use client';

import { usePagination } from '@/libs/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './post';
import type { UserPost } from '@/interfaces/post';
import PostSkeleton from '../skeleton/postSkeleton';

export default function PostList() {
  const { paginatedPosts, isReachingEnd, isLoading, error, mutate, size, setSize } = usePagination<UserPost>(
    `${process.env.API_URL}/posts`
  );
  return (
    <div>
      {error && <p className='py-4 text-center text-base font-semibold'>Terjadi error ...</p>}
      {isLoading && <PostSkeleton />}
      {paginatedPosts && (
        <InfiniteScroll
          next={() => setSize(size + 1)}
          hasMore={!isReachingEnd}
          loader={<PostSkeleton />}
          endMessage={<p className='py-4 text-center text-base font-semibold'>No more post...</p>}
          dataLength={paginatedPosts.length}
        >
          {paginatedPosts.map((post) => (
            <Post key={post.id} postId={post.id} data={post} mutate={mutate} editorContext='posted' />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
}
