import { useFetch, useSettings } from 'hooks';
import { UseFetchState, useConstantsType } from './types';

const useConstantsApi = () => {
  const { settings } = useSettings();

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}constant?locale=${settings?.language}`,
  );

  const constants: useConstantsType = data?.attributes;

  return { loading, error, data: constants };
};

export default useConstantsApi;
