import { useEffect, useContext } from 'react';
import { AppContext, IAppContext } from 'context/AppContext';

type ErrorType = {
  message?: string;
} | null;
const useErrorNotifications = (error?: ErrorType) => {
  const { error: errorContext, setError } = useContext(AppContext) as IAppContext;

  useEffect(() => {
    if (error !== undefined) {
      setError(error?.message || null);
    }
  }, [error?.message, setError]);

  return errorContext;
};

export default useErrorNotifications;
