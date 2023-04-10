import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { StrapiProfileData, TransformedProfileStrapiData } from './types';

const usePeExProfilesApi = () => {
  const { settings } = useSettings();

  const {
    loading,
    error,
    data = [],
  } = useFetch(`${process.env.REACT_APP_BACKEND}profiles?locale=${settings?.language}`);

  const profiles = data?.map(
    (profile: StrapiProfileData): TransformedProfileStrapiData => ({
      id: profile.id,
      locale: profile.attributes.locale,
      subType: profile.attributes.subType,
      title: profile.attributes.title,
      type: profile.attributes.type,
    }),
  );

  return { loading, error, data: profiles };
};

export default usePeExProfilesApi;
