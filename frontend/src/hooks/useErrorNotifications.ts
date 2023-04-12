import { useEffect, useContext } from 'react';
import { AppContext, IAppContext } from 'context/AppContext';
import { ErrorType } from 'global/types';

const useErrorNotifications = (error?: ErrorType | null) => {
  const { error: errorContext, setError } = useContext(AppContext) as IAppContext;

  useEffect(() => {
    if (error !== undefined) {
      setError(error?.message || null);
    }
  }, [error?.message, setError]);

  return errorContext;
};

export default useErrorNotifications;
