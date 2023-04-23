import { useState } from 'react';
import { sanitize } from 'dompurify';
import { MaterialsTransformed } from 'api/hooks/types';
import NoDataMessage from 'components/NoDataMessage';
import AddEditMaterials from '../AddEditMaterials';
import './JobMaterialsCard.scss';

interface IJobMaterialsCard {
  jobId: number;
  noDataMessage: string;
  materialsData: MaterialsTransformed[];
  forceMaterialsFetching: () => void;
}
const JobMaterialsCard = ({
  jobId,
  noDataMessage,
  materialsData,
  forceMaterialsFetching,
}: IJobMaterialsCard) => {
  const [editMaterialsId, setEditMaterialsId] = useState<number | null>(null);
  const handleAddEditMaterials = () => {
    forceMaterialsFetching();
    setEditMaterialsId(null);
  };

  return (
    <div className='job-materials-card'>
      <div className='job-materials-card__title'>materials:</div>
      <div className='job-materials-card__body'>
        {!materialsData ? (
          <>
            <NoDataMessage message={noDataMessage} />
            <div>
              <div className='job-materials-card__title'>Add materials:</div>
              <div className='job-materials-card__add-item'>
                <AddEditMaterials jobId={jobId} handleSubmit={handleAddEditMaterials} />
              </div>
            </div>
          </>
        ) : (
          materialsData?.map(({ id, materials }: MaterialsTransformed) => (
            <div key={id} className='job-materials-card__item'>
              {editMaterialsId === id ? (
                <AddEditMaterials
                  initialData={{ id, materials }}
                  jobId={jobId}
                  handleSubmit={handleAddEditMaterials}
                />
              ) : (
                <>
                  <div className='job-materials-card__item__materials-wrapper'>
                    <div
                      className='job-materials-card__item__materials'
                      dangerouslySetInnerHTML={{ __html: sanitize(materials) }}
                    />
                    <span
                      className='job-materials-card__item__edit-button'
                      onClick={() => setEditMaterialsId(id)}
                    >
                      Edit
                    </span>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobMaterialsCard;
