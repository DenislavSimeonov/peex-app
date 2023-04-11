import { memo } from 'react';
import useJobsByCompetencyIdApi from 'api/hooks/useJobsByCompetencyIdApi';
import useConstantsApi from 'api/hooks/useConstantsApi';
import { JobsTransformed } from 'api/hooks/types';
import './Jobs.scss';

type PropsType = {
  competencyId?: string;
};

const Jobs = ({ competencyId }: PropsType) => {
  const { loading, error, data: jobs } = useJobsByCompetencyIdApi(competencyId?.toString());
  const { loading: constantsLoading, error: constantsError, data: constants } = useConstantsApi();
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
