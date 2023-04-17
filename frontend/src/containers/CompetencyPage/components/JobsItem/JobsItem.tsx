import { memo } from 'react';
import { JobsTransformed, ArtefactTransformed, MaterialsTransformed } from 'api/hooks/types';
import Accordion from 'components/Accordion';
import JobArtefactsCard from '../JobArtefactsCard';
import JobMaterialsCard from '../JobMaterialsCard';
import './JobsItem.scss';

type JobsItemData = JobsTransformed & {
  artefacts: ArtefactTransformed[];
  materials: MaterialsTransformed[];
};

interface IJobsItem {
  data: JobsItemData;
  noArtefacsMessage: string;
  noMaterialsMessage: string;
  forceArtefactsFetching: () => void;
  forceMaterialsFetching: () => void;
}

const JobsItem = ({
  data,
  noArtefacsMessage,
  noMaterialsMessage,
  forceArtefactsFetching,
  forceMaterialsFetching,
}: IJobsItem) => {
  return (
    <Accordion
      key={data.id}
      title={
        <>
          <span className='jobs-item__title'>{data.title}</span>
          {data.isKey && <span className='jobs-item__key'>KEY</span>}
        </>
      }
    >
      <JobArtefactsCard
        jobId={data.id}
        noDataMessage={noArtefacsMessage}
        artefactsData={data?.artefacts}
        forceArtefactsFetching={forceArtefactsFetching}
      />
      <JobMaterialsCard
        jobId={data.id}
        noDataMessage={noMaterialsMessage}
        materialsData={data?.materials}
        forceMaterialsFetching={forceMaterialsFetching}
      />
    </Accordion>
  );
};

export default memo(JobsItem);
