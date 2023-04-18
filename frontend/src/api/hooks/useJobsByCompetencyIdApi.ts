import _ from 'lodash';
import { useFetch, useSettings } from 'hooks';
import { JobsFromStrapi, JobsTransformed, UseFetchState } from './types';

const useJobsByCompetencyIdApi = (profileId?: string, competencyId?: string) => {
  const skip = !profileId || !competencyId;
  const { settings } = useSettings();

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}jobs?locale=${settings?.language}&filters[profiles][id][$eq]=${profileId}&filters[competencies][id][$eq]=${competencyId}`,
    { skip },
  );

  const jobs = data?.map(
    (job: JobsFromStrapi): JobsTransformed => ({
      id: job.id,
      title: job.attributes.title,
      isKey: job.attributes.isKey,
      level: job.attributes.level,
    }),
  );

  return { loading, error, data: _.sortBy(jobs, ['level', 'title']) };
};

export default useJobsByCompetencyIdApi;
