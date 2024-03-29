import { useState } from 'react';
import { useAuth } from 'hooks';
import { ErrorType } from 'global/types';
import { errorMessagesConst } from 'global/constants';

type FormData = {
  username: string;
  password: string;
};

const useLogin = () => {
  const { login: useAuthLoginFn } = useAuth();
  const [error, setError] = useState<ErrorType | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }: FormData) => {
    setLoading(true);
    setError(null);

    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({
      identifier: username,
      password: password,
    });

    fetch(`${process.env.REACT_APP_BACKEND}auth/local`, { method: 'POST', headers, body })
      .then((response) => {
        if (!response.ok) {
          throw Error(errorMessagesConst.LOGIN_ERROR);
        }
        return response.json();
      })
      .then((data) => {
        useAuthLoginFn({
          user: {
            id: data.user.id,
            name: data.user.username,
          },
          token: data.jwt,
        });
      })
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { login, loading, error };
};

export default useLogin;
