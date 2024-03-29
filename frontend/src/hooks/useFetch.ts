import { useEffect, useState } from 'react';
import { useAuth, useErrorNotifications, useIsAppLoading } from 'hooks';
import { ErrorType } from 'global/types';

type Options = {
  skip?: boolean;
};

const useFetch = (url: string, options?: Options) => {
  const { token } = useAuth();
  const [data, setData] = useState();
  const [error, setError] = useState<ErrorType | null>(null);
  const [loading, setLoading] = useState(true);

  useErrorNotifications(error);
  useIsAppLoading(loading);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    // Added for test purposes
    await new Promise((resolve) => setTimeout(resolve, 300));

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    fetch(url, { headers })
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

  useEffect(() => {
    if (!options?.skip) {
      fetchData();
    }
  }, [url, token]);

  return { loading, error, data, forceFetching: fetchData };
};

export default useFetch;
