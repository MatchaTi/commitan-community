import axios from 'axios';
import useSWRInfinite from 'swr/infinite';

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);
const PAGE_SIZE = 2;

export function usePagination<T>(url: string) {
  function getKey(pageIndex: number, previousPageData: T[]) {
    if (previousPageData && !previousPageData.length) return null;
    return `${url}/${pageIndex * PAGE_SIZE}/${PAGE_SIZE}`;
  }

  const { data, isLoading, error, size, setSize, mutate } = useSWRInfinite(getKey, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const isReachingEnd = data && data[data.length - 1].length < PAGE_SIZE;
  const loadingMore = data && typeof data[size - 1] === 'undefined';

  return {
    data,
    isReachingEnd,
    loadingMore,
    isLoading,
    error,
    size,
    setSize,
    mutate,
  };
}
