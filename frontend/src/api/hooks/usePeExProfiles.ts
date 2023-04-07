import { useTranslation } from 'react-i18next';
import useFetch from 'hooks/useFetch';

type PeExProfile = {
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

const usePeExProfiles = () => {
  const { i18n } = useTranslation();

  const {
    loading,
    error,
    data = [],
  } = useFetch(`${process.env.REACT_APP_BACKEND}profiles?locale=${i18n.language}`);

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

export default usePeExProfiles;
