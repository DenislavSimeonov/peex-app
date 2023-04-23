import { useEffect, useState } from 'react';
import { sanitize } from 'dompurify';
import { ArtefactTransformed } from 'api/hooks/types';
import NoDataMessage from 'components/NoDataMessage';
import AddEditArtefact from '../AddEditArtefact';
import './JobArtefactsCard.scss';

interface IJobArtefactsCard {
  jobId: number;
  noDataMessage: string;
  artefactsData: ArtefactTransformed[];
  forceArtefactsFetching: () => void;
}
const JobArtefactsCard = ({
  jobId,
  noDataMessage,
  artefactsData,
  forceArtefactsFetching,
}: IJobArtefactsCard) => {
  const [editArtefactId, setEditArtefactId] = useState<number | null>(null);
  const [showAddNewArtefactsForm, setShowAddNewArtefactsForm] = useState(false);

  const handleAddEditMaterials = () => {
    forceArtefactsFetching();
    setEditArtefactId(null);
  };

  useEffect(() => {
    setShowAddNewArtefactsForm(!artefactsData?.length);
  }, [artefactsData?.length]);

  return (
    <div className='job-artefacts-card'>
      <div className='job-artefacts-card__title'>Artefacts:</div>
      <div className='job-artefacts-card__body'>
        {!artefactsData ? (
          <NoDataMessage message={noDataMessage} />
        ) : (
          artefactsData?.map(({ id, artefact, task }: ArtefactTransformed) => (
            <div key={id} className='job-artefacts-card__item'>
              {editArtefactId === id ? (
                <AddEditArtefact
                  initialData={{ id, artefact, task }}
                  jobId={jobId}
                  handleSubmit={handleAddEditMaterials}
                />
              ) : (
                <>
                  <div className='job-artefacts-card__item__task-wrapper'>
                    <div className='job-artefacts-card__item__task'>Task: {task}</div>
                    <span
                      className='job-artefacts-card__item__edit-button'
                      onClick={() => setEditArtefactId(id)}
                    >
                      Edit
                    </span>
                  </div>
                  <div
                    className='job-artefacts-card__item__artefact'
                    dangerouslySetInnerHTML={{ __html: sanitize(artefact) }}
                  />
                </>
              )}
            </div>
          ))
        )}
        {showAddNewArtefactsForm ? (
          <div>
            <div className='job-artefacts-card__title'>
              {artefactsData ? 'Add New Artefacts:' : 'Add Artefacts:'}
            </div>
            <div className='job-artefacts-card__add-item'>
              <AddEditArtefact jobId={jobId} handleSubmit={handleAddEditMaterials} />
            </div>
          </div>
        ) : (
          <div className='job-artefacts-card__item__add-new-button__wrapper'>
            <span
              className='job-artefacts-card__item__add-new-button'
              onClick={() => setShowAddNewArtefactsForm(true)}
            >
              + Add New Artefacts
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobArtefactsCard;
