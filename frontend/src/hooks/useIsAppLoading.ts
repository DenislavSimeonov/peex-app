import { useEffect, useContext } from 'react';
import { AppContext, IAppContext } from 'context/AppContext';

const useIsAppLoading = (loading?: boolean) => {
  const { isLoading, setIsLoading } = useContext(AppContext) as IAppContext;

  useEffect(() => {
    if (loading !== undefined) {
      setIsLoading(loading);
    }
  }, [loading, setIsLoading]);

  return isLoading;
};

export default useIsAppLoading;
