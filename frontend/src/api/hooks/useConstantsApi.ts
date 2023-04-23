import { useFetch, useSettings } from 'hooks';
import { UseFetchState, useConstantsType } from './types';

const useConstantsApi = () => {
  const { settings } = useSettings();
  const url = `${process.env.REACT_APP_BACKEND}constant?locale=${settings?.language}`;

  const { loading, error, data }: UseFetchState = useFetch(url);

  const constants: useConstantsType = data?.attributes;

  return { loading, error, data: constants };
};

export default useConstantsApi;
