import _ from 'lodash';
import { useFetch, useSettings } from 'hooks';
import { JobsFromStrapi, JobsTransformed, UseFetchState } from './types';

const useJobsByCompetencyIdApi = (id?: string) => {
  const { settings } = useSettings();

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}competencies?locale=${settings?.language}&filters[id][$eq]=${id}&populate[0]=jobs`,
  );

  let jobs = [];

  if (data?.length) {
    const competenciesData = data[0].attributes.jobs.data;
    jobs = competenciesData?.map(
      (competency: JobsFromStrapi): JobsTransformed => ({
        id: competency.id,
        title: competency.attributes.title,
        isKey: competency.attributes.isKey,
        level: competency.attributes.level,
      }),
    );
  }

  return { loading, error, data: _.sortBy(jobs, ['level', 'title']) };
};

export default useJobsByCompetencyIdApi;
