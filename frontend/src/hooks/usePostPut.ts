import { useState } from 'react';
import { useAuth, useErrorNotifications, useIsAppLoading } from 'hooks';
import { ErrorType, ObjectType } from 'global/types';
import { httpRequestMethods } from 'global/constants';

const usePostPut = (url: string) => {
  const { token } = useAuth();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<ErrorType | null>(null);
  const [loading, setLoading] = useState(false);

  useErrorNotifications(error);
  useIsAppLoading(loading);

  const postPutData = async (data: ObjectType) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const method = data.id ? httpRequestMethods.PUT : httpRequestMethods.POST;

    fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(() => setSuccess(true))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { loading, error, success, postPutData };
};

export default usePostPut;
