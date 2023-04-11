import _ from 'lodash';
import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { UseFetchState } from './types';

const useConstantsApi = () => {
  const { settings } = useSettings();

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}constant?locale=${settings?.language}`,
  );

  const constants = data?.attributes;

  return { loading, error, data: constants };
};

export default useConstantsApi;
