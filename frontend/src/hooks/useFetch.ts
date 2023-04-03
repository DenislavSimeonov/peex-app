import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';

const useFetch = (url: string) => {
  const { token } = useAuth();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();

        if (json.error) {
          throw json.error;
        }

        setData(json);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]);

  return { loading, error, data };
};

export default useFetch;
