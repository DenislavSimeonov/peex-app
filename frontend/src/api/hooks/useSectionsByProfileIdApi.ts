import _ from 'lodash';
import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { SectionsFromStrapi, SectionsTransformed, CompetenciesFromStrapi } from './types';

const useSectionsByProfileIdApi = (id?: string) => {
  const { settings } = useSettings();

  const {
    loading,
    error,
    data = [],
  } = useFetch(
    `${process.env.REACT_APP_BACKEND}sections?locale=${settings?.language}&filters[profile][id][$eq]=${id}&populate[0]=profile&populate[1]=competencies`,
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
