import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { ErrorType } from 'global/types';

const useFetch = (url: string) => {
  const { token } = useAuth();
  const [data, setData] = useState();
  const [error, setError] = useState<ErrorType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      fetch(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(({ data }) => setData(data))
        .catch(setError)
        .finally(() => setLoading(false));
    };

    fetchData();
  }, [url, token]);

  return { loading, error, data };
};

export default useFetch;
