import { memo } from 'react';
import {
  useJobsByCompetencyIdApi,
  useArtefactsByCompetencyIdApi,
  useConstantsApi,
} from 'api/hooks';
import { JobsTransformed } from 'api/hooks/types';
import Accordion from 'components/Accordion';
import NoDataMessage from 'components/NoDataMessage';
import './Jobs.scss';

type PropsType = {
  userId?: string;
  profileId?: string;
  competencyId?: string;
};

type JobByLevel = {
  level: string;
  jobsData: JobsTransformed[];
};

const Jobs = ({ userId, profileId, competencyId }: PropsType) => {
  const { data: jobs } = useJobsByCompetencyIdApi(profileId, competencyId);
  const { data: artefacts } = useArtefactsByCompetencyIdApi(userId, profileId, competencyId);
  const { data: constants } = useConstantsApi();

  const { jobLevels, messages } = constants || {};

  const jobsByLevel =
    jobLevels &&
    Object.values(jobLevels)?.map((level) => ({
      level,
      jobsData: jobs.filter((job) => job.level === level),
    }));

  const renderJobs = (data: JobsTransformed[]) => {
    if (!data.length) {
      return <NoDataMessage message={messages?.missingJobs} borders={['top']} />;
    }

    return data?.map((job: JobsTransformed) => (
      <Accordion
        key={job.id}
        title={
          <>
            <span className='job__title'>{job.title}</span>
            {job.isKey && <span className='job__key'>KEY</span>}
          </>
        }
        noDataMessage={messages?.missingJobInfo}
        isNoDataMessageShown={true}
      >
        <></>
      </Accordion>
    ));
  };

  return (
    <div className='jobs' data-testid='jobs'>
      {jobsByLevel &&
        jobsByLevel?.map(({ level, jobsData }: JobByLevel) => (
          <div key={level} className='job'>
            <div className='job__level' data-testid={`job-level-${level}`}>
              {level}
            </div>
            {renderJobs(jobsData)}
          </div>
        ))}
    </div>
  );
};

export default memo(Jobs);
