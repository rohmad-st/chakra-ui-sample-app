import useSWR from 'swr';

const API_URL = process.env.REACT_APP_API_URL || 'https://newsapi.org';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function useArticles() {
  const fetcher = (...args) => fetch(...args).then(async res => {
    const data = await res.json()
    return data.articles;
  });

  const { data, error } = useSWR(
    `${API_URL}/v2/top-headlines?${new URLSearchParams({
      country: 'id',
      apiKey: API_KEY,
    })}`,
    fetcher
  );

  return {
    articles: data || [],
    isLoading: !error && !data,
    isEmpty: !error && !(Array.isArray(data) && data.length > 0),
    isError: error,
  };
}
