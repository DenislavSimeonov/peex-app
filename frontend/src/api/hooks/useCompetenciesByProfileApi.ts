import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';

export type Competencies = {
  createdAt: string;
  locale: string;
  publishedAt: string;
  title: string;
  updatedAt: string;
};

export type PeExProfile = {
  id: number;
  attributes: Competencies;
};

export type TransformedCompetencies = {
  id: number;
  locale: string;
  title: string;
};

type UseFetchProps = {
  loading: boolean;
  error: any;
  data?: any;
};

const useCompetenciesByProfileApi = (id?: string) => {
  const { settings } = useSettings();

  console.log(settings);

  const { loading, error, data }: UseFetchProps = useFetch(
    `${process.env.REACT_APP_BACKEND}profiles?locale=${settings?.language}&filters[id][$eq]=${id}&populate[0]=competencies`,
  );

  let competencies = [];

  if (data?.length) {
    const competenciesData = data[0].attributes.competencies.data;

    competencies = competenciesData?.map(
      (competency: PeExProfile): TransformedCompetencies => ({
        id: competency.id,
        locale: competency.attributes.locale,
        title: competency.attributes.title,
      }),
    );
  }

  return { loading, error, data: competencies };
};

export default useCompetenciesByProfileApi;
