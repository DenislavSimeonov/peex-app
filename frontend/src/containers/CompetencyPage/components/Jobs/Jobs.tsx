import { memo } from 'react';
import { useJobsByCompetencyIdApi, useConstantsApi } from 'api/hooks';
import { JobsTransformed } from 'api/hooks/types';
import './Jobs.scss';

type PropsType = {
  competencyId?: string;
};

const Jobs = ({ competencyId }: PropsType) => {
  const { data: jobs } = useJobsByCompetencyIdApi(competencyId?.toString());
  const { data: constants } = useConstantsApi();

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
