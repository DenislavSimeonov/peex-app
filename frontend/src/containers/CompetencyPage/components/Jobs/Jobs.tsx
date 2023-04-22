import _ from 'lodash';
import {
  useJobsByCompetencyIdApi,
  useArtefactsByCompetencyIdApi,
  useMaterialsByCompetencyIdApi,
  useConstantsApi,
} from 'api/hooks';
import { JobsTransformed } from 'api/hooks/types';
import NoDataMessage from 'components/NoDataMessage';
import JobsItem from '../JobsItem';
import './Jobs.scss';
import { useState } from 'react';

type PropsType = {
  userId?: string;
  profileId?: string;
  sectionId?: string;
  competencyId?: string;
};

type JobByLevel = {
  level: string;
  jobsData: JobsTransformed[];
};

const Jobs = ({ userId, profileId, competencyId }: PropsType) => {
  const [openJobIdDetails, setOpenJobIdDetails] = useState<number | null>(null);
  const { data: jobs } = useJobsByCompetencyIdApi(profileId, competencyId);
  const { data: artefacts, forceFetching: forceArtefactsFetching } = useArtefactsByCompetencyIdApi(
    userId,
    profileId,
    competencyId,
  );
  const { data: materials, forceFetching: forceMaterialsFetching } = useMaterialsByCompetencyIdApi(
    userId,
    profileId,
    competencyId,
  );
  const { data: constants } = useConstantsApi();

  const { jobLevels, messages } = constants || {};

  const jobsByLevel =
    jobLevels &&
    Object.entries(jobLevels)?.map(([level, currentLanguageLevel]) => ({
      level: currentLanguageLevel,
      jobsData: jobs.filter((job) => job.level === level),
    }));

  const renderJobs = (data: JobsTransformed[]) => {
    if (!data.length) {
      return <NoDataMessage message={messages?.missingJobs} borders={['top']} />;
    }

    const artefactsByJobId = _.groupBy(artefacts, 'jobId');
    const materialsByJobId = _.groupBy(materials, 'jobId');

    return data?.map((job: JobsTransformed) => (
      <JobsItem
        key={job.id}
        data={{ ...job, artefacts: artefactsByJobId[job.id], materials: materialsByJobId[job.id] }}
        noArtefacsMessage={messages.missingArtefacts}
        noMaterialsMessage={messages.missingMaterials}
        forceArtefactsFetching={forceArtefactsFetching}
        forceMaterialsFetching={forceMaterialsFetching}
        isDetailsAccordionOpen={openJobIdDetails === job.id}
        setIsDetailsAccordionOpen={(val) => setOpenJobIdDetails(val ? job.id : null)}
      />
    ));
  };

  return (
    <div className='jobs' data-testid='jobs'>
      {jobsByLevel &&
        jobsByLevel?.map(({ level, jobsData }: JobByLevel) => (
          <div key={level} className='jobs__section'>
            <div className='jobs__level' data-testid={`jobs-level-${level}`}>
              {level}
            </div>
            {renderJobs(jobsData)}
          </div>
        ))}
    </div>
  );
};

export default Jobs;
