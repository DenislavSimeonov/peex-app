import { usePostPut, useSettings } from 'hooks';
import { usePostPutState } from './types';

const useAddEditArtefacts = (id?: number) => {
  const { settings } = useSettings();
  const url = id
    ? `${process.env.REACT_APP_BACKEND}artefacts/${id}?locale=${settings?.language}`
    : `${process.env.REACT_APP_BACKEND}artefacts?locale=${settings?.language}`;

  const {
    loading,
    error,
    success,
    postPutData: addEditArtefacts,
  }: usePostPutState = usePostPut(url);

  return { loading, error, success, addEditArtefacts };
};

export default useAddEditArtefacts;
