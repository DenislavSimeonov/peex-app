import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAddEditMaterials } from 'api/hooks';
import { useUser } from 'hooks';
import Button from 'components/Button';
import { ButtonTypes } from 'components/Button/enums';
import Textarea from 'components/Textarea';

import './AddEditMaterials.scss';

interface IAddEditMaterials {
  initialData?: {
    id: number;
    materials: string;
  };
  jobId: number;
  handleSubmit: () => void;
}

const AddEditMaterials = ({ initialData, jobId, handleSubmit }: IAddEditMaterials) => {
  const { success, addEditMaterials } = useAddEditMaterials(initialData?.id);
  const { user } = useUser();
  const { profileId, sectionId, competencyId } = useParams();

  const [materials, setMaterials] = useState(initialData?.materials || '');

  useEffect(() => {
    if (success) {
      handleSubmit();
    }
  }, [success]);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data = {
      id: initialData?.id,
      data: {
        materials,
        users_permissions_user: user?.id,
        profile: profileId,
        section: sectionId,
        competency: competencyId,
        job: jobId,
      },
    };

    addEditMaterials(data);
  };

  return (
    <form onSubmit={onSubmit} className='add-edit-materials__form'>
      <Textarea
        dataTestId='materials-input'
        label='Materials'
        placeholder='Materials'
        name='materials'
        value={materials}
        isRequired
        fullWidth
        handleChange={setMaterials}
      />
      <div className='submit-button__wrapper'>
        <Button type={ButtonTypes.SUBMIT} text={initialData ? 'Save' : 'Add'} />
      </div>
    </form>
  );
};

AddEditMaterials.defaultProps = {
  handleSubmit: () => null,
};

export default AddEditMaterials;
