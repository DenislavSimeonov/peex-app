import _ from 'lodash';
import { useFetch, useSettings } from 'hooks';
import { SectionsFromStrapi, SectionsTransformed, CompetenciesFromStrapi } from './types';

const useSectionsByProfileIdApi = (id?: string) => {
  const skip = !id;
  const { settings } = useSettings();
  const url = `${process.env.REACT_APP_BACKEND}sections?locale=${settings?.language}&filters[profiles][id][$eq]=${id}&populate[0]=competencies`;

  const { loading, error, data = [] } = useFetch(url, { skip });

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
