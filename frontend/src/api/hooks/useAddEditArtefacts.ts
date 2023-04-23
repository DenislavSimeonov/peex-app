import { usePostPut, useSettings } from 'hooks';
import { usePostPutState } from './types';

const useAddEditArtefacts = () => {
  const { settings } = useSettings();
  const baseUrl = `${process.env.REACT_APP_BACKEND}artefacts`;

  const {
    loading,
    error,
    success,
    postPutData: addEditArtefacts,
  }: usePostPutState = usePostPut(baseUrl, settings?.language);

  return { loading, error, success, addEditArtefacts };
};

export default useAddEditArtefacts;
