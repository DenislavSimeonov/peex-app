import { Fragment, memo } from 'react';
import { useJobsByCompetencyIdApi, useConstantsApi } from 'api/hooks';
import { JobsTransformed } from 'api/hooks/types';
import './Jobs.scss';

type PropsType = {
  profileId?: string;
  competencyId?: string;
};

type JobByLevel = {
  level: string;
  jobsData: JobsTransformed[];
};

const Jobs = ({ profileId, competencyId }: PropsType) => {
  const { data: jobs } = useJobsByCompetencyIdApi(profileId?.toString(), competencyId?.toString());
  const { data: constants } = useConstantsApi();

  const jobLevels = constants?.jobLevels;

  const jobsByLevel =
    jobLevels &&
    Object.values(jobLevels)?.map((level: string) => ({
      level,
      jobsData: jobs.filter((job) => job.level === level),
    }));

  const renderJobs = (data: JobsTransformed[]) =>
    data?.map((job: JobsTransformed) => (
      <div key={job.id}>
        <span>{job.title}</span>
        {job.isKey && <span>KEY</span>}
        <span>{job.level}</span>
      </div>
    ));

  return (
    <div className='job' data-testid='job'>
      {jobsByLevel &&
        jobsByLevel?.map(({ level, jobsData }: JobByLevel) => (
          <Fragment key={level}>
            <div>{level}</div>
            {renderJobs(jobsData)}
          </Fragment>
        ))}
    </div>
  );
};

export default memo(Jobs);
