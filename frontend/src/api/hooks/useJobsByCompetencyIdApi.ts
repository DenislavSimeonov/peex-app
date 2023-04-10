import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { StrapiJobData, TransformedJobStrapiData, UseFetchState } from './types';

const useJobsByCompetencyIdApi = (id?: string) => {
  const { settings } = useSettings();

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}competencies?locale=${settings?.language}&filters[id][$eq]=${id}&populate[0]=jobs`,
  );

  let jobs = [];

  if (data?.length) {
    const competenciesData = data[0].attributes.jobs.data;
    jobs = competenciesData?.map(
      (competency: StrapiJobData): TransformedJobStrapiData => ({
        id: competency.id,
        locale: competency.attributes.locale,
        title: competency.attributes.title,
        isKey: competency.attributes.isKey,
      }),
    );
  }

  return { loading, error, data: jobs };
};

export default useJobsByCompetencyIdApi;
