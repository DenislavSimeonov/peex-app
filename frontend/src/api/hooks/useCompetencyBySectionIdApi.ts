import _ from 'lodash';
import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { CompetenciesFromStrapi, CompetenciesTransformed, UseFetchState } from './types';

const useCompetencyBySectionIdApi = (id?: string) => {
  const { settings } = useSettings();

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}sections?locale=${settings?.language}&filters[id][$eq]=${id}&populate[0]=competencies`,
  );

  let competencies = [];

  if (data?.length) {
    const sectionsData = data[0].attributes.competencies.data;
    competencies = sectionsData?.map(
      (section: CompetenciesFromStrapi): CompetenciesTransformed => ({
        id: section.id,
        title: section.attributes.title,
      }),
    );
  }

  return { loading, error, data: _.sortBy(competencies, ['title']) };
};

export default useCompetencyBySectionIdApi;
