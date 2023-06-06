import axios from 'axios';
import useSWRInfinite from 'swr/infinite';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const PAGE_SIZE = 2;

export function usePagination<T>(url: string) {
  function getKey(pageIndex: number, previousPageData: T[]) {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null;
    return `${url}?_page=${pageIndex}&_limit=${PAGE_SIZE}`;
  }

  const { data, isLoading, error, size, setSize, mutate } = useSWRInfinite(getKey, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const paginatedPosts: T[] = data?.flat()!;
  const isReachingEnd = data && data[data.length - 1].length < PAGE_SIZE;
  const loadingMore = data && typeof data[size - 1] === 'undefined';

  return {
    paginatedPosts,
    isReachingEnd,
    loadingMore,
    isLoading,
    error,
    size,
    setSize,
    mutate,
  };
}
