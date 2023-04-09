import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';

export type PeExProfile = {
  id: number;
  attributes: {
    createdAt: string;
    locale: string;
    publishedAt: string;
    subType: string;
    title: string;
    type: string;
    updatedAt: string;
  };
};

export type TransformedPeExProfile = {
  id: number;
  locale: string;
  subType: string;
  title: string;
  type: string;
};

const usePeExProfilesApi = () => {
  const { settings } = useSettings();

  const {
    loading,
    error,
    data = [],
  } = useFetch(`${process.env.REACT_APP_BACKEND}profiles?locale=${settings?.language}`);

  const profiles = data?.map(
    (profile: PeExProfile): TransformedPeExProfile => ({
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
