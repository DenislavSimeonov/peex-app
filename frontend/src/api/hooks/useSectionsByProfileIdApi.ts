import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { StrapiData, TransformedStrapiData, UseFetchState } from './types';

const useSectionsByProfileIdApi = (id?: string) => {
  const { settings } = useSettings();

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}profiles?locale=${settings?.language}&filters[id][$eq]=${id}&populate[0]=sections`,
  );

  let sections = [];

  if (data?.length) {
    const sectionsData = data[0].attributes.sections.data;
    sections = sectionsData?.map(
      (section: StrapiData): TransformedStrapiData => ({
        id: section.id,
        locale: section.attributes.locale,
        title: section.attributes.title,
      }),
    );
  }

  return { loading, error, data: sections };
};

export default useSectionsByProfileIdApi;
