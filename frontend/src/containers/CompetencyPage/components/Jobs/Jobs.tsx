import { memo } from 'react';
import { useErrorNotifications, useIsAppLoading } from 'hooks';
import { useJobsByCompetencyIdApi, useConstantsApi } from 'api/hooks';
import { JobsTransformed } from 'api/hooks/types';
import './Jobs.scss';

type PropsType = {
  competencyId?: string;
};

const Jobs = ({ competencyId }: PropsType) => {
  const {
    loading: jobsLoading,
    error: jobsError,
    data: jobs,
  } = useJobsByCompetencyIdApi(competencyId?.toString());
  const { loading: constantsLoading, error: constantsError, data: constants } = useConstantsApi();

  useErrorNotifications(jobsError || constantsError);
  useIsAppLoading((jobsLoading && !jobs) || (constantsLoading && !constants));

  const jobLevels = constants?.jobLevels;

  console.log(jobLevels);

  return (
    <div className='job' data-testid='job'>
      {jobs?.map((job: JobsTransformed) => (
        <div key={job.id}>
          <span>{job.title}</span>
          {job.isKey && <span>KEY</span>}
          <span>{job.level}</span>
        </div>
      ))}
    </div>
  );
};

export default memo(Jobs);
