import _ from 'lodash';
import { useFetch, useSettings } from 'hooks';
import { SectionsFromStrapi, SectionsTransformed, CompetenciesFromStrapi } from './types';

const useSectionsByProfileIdApi = (id?: string) => {
  const { settings } = useSettings();

  const {
    loading,
    error,
    data = [],
  } = useFetch(
    `${process.env.REACT_APP_BACKEND}sections?locale=${settings?.language}&filters[profiles][id][$contains]=${id}&populate[0]=competencies`,
  );

  const sections = data?.map((section: SectionsFromStrapi): SectionsTransformed => {
    const competencies = section.attributes.competencies.data.map(
      ({ id, attributes }: CompetenciesFromStrapi) => ({ id, title: attributes.title }),
    );
    return {
      id: section.id,
      title: section.attributes.title,
      competencies,
    };
  });

  return { loading, error, data: _.sortBy(sections, ['title']) };
};

export default useSectionsByProfileIdApi;
