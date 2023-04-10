import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { StrapiData, TransformedStrapiData, UseFetchState } from './types';

const useCompetencyBySectionIdApi = (id?: string) => {
  const { settings } = useSettings();

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}sections?locale=${settings?.language}&filters[id][$eq]=${id}&populate[0]=competencies`,
  );

  let competencies = [];

  if (data?.length) {
    const sectionsData = data[0].attributes.competencies.data;
    competencies = sectionsData?.map(
      (section: StrapiData): TransformedStrapiData => ({
        id: section.id,
        locale: section.attributes.locale,
        title: section.attributes.title,
      }),
    );
  }

  return { loading, error, data: competencies };
};

export default useCompetencyBySectionIdApi;
