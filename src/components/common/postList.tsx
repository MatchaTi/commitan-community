'use client';

import { usePagination } from '@/libs/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './post';
import type { UserPost } from '@/interfaces/post';

export default function PostList() {
  const { paginatedPosts, isReachingEnd, isLoading, error, mutate, size, setSize } = usePagination<UserPost>(
    `${process.env.API_URL}/posts`
  );
  return (
    <div>
      {error && <div>Terjadi error...</div>}
      {isLoading && <div>Loading...</div>}
      {paginatedPosts && (
        <InfiniteScroll
          next={() => setSize(size + 1)}
          hasMore={!isReachingEnd}
          loader={<p>Loading...</p>}
          endMessage={<p>No more post...</p>}
          dataLength={paginatedPosts.length}
        >
          {paginatedPosts.map((post) => (
            <Post key={post.id} postId={post.id} data={post} mutate={mutate} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
}
