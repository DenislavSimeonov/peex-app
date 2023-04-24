import { JobsTransformed, ArtefactTransformed, MaterialsTransformed } from 'api/hooks/types';
import Accordion from 'components/Accordion';
import { publish } from 'global/events';
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
  isDetailsAccordionOpen: boolean;
  // setIsDetailsAccordionOpen: (val: boolean) => void;
}

const JobsItem = ({
  data,
  noArtefacsMessage,
  noMaterialsMessage,
  forceArtefactsFetching,
  forceMaterialsFetching,
  // setIsDetailsAccordionOpen,
  isDetailsAccordionOpen,
}: IJobsItem) => {
  return (
    <Accordion
      className='jobs-item__accordion'
      key={data.id}
      anchorLinkId={`job-${data.id}-${data.level}`}
      title={
        <>
          <span className='jobs-item__title'>{data.title}</span>
          {data.isKey && <span className='jobs-item__key'>KEY</span>}
        </>
      }
      isOpenExternal={isDetailsAccordionOpen}
      setIsOpenExternal={(val) => {
        publish('toggleJobAccordion', { id: data.id, val });
        // setIsDetailsAccordionOpen(val);
      }}
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

export default JobsItem;
