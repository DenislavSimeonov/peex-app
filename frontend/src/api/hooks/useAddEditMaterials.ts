import { usePostPut, useSettings } from 'hooks';
import { usePostPutState } from './types';

const useAddEditMaterials = () => {
  const { settings } = useSettings();
  const baseUrl = `${process.env.REACT_APP_BACKEND}materials`;

  const {
    loading,
    error,
    success,
    postPutData: addEditMaterials,
  }: usePostPutState = usePostPut(baseUrl, settings?.language);

  return { loading, error, success, addEditMaterials };
};

export default useAddEditMaterials;
