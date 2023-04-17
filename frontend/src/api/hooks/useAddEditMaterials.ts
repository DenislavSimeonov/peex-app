import { usePostPut, useSettings } from 'hooks';
import { usePostPutState } from './types';

const useAddEditMaterials = (id?: number) => {
  const { settings } = useSettings();
  const url = id
    ? `${process.env.REACT_APP_BACKEND}materials/${id}?locale=${settings?.language}`
    : `${process.env.REACT_APP_BACKEND}materials?locale=${settings?.language}`;

  const {
    loading,
    error,
    success,
    postPutData: addEditMaterials,
  }: usePostPutState = usePostPut(url);

  return { loading, error, success, addEditMaterials };
};

export default useAddEditMaterials;
