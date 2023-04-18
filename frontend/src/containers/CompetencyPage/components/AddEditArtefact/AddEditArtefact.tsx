import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAddEditArtefacts } from 'api/hooks';
import { useUser } from 'hooks';
import Button from 'components/Button';
import { ButtonTypes } from 'components/Button/enums';
import Input from 'components/Input';
import { InputTypes } from 'components/Input/enums';
import Textarea from 'components/Textarea';
import './AddEditArtefact.scss';

interface IAddEditArtefact {
  initialData?: {
    id: number;
    artefact: string;
    task: string;
  };
  jobId: number;
  handleSubmit: () => void;
}

const AddEditArtefact = ({ initialData, jobId, handleSubmit }: IAddEditArtefact) => {
  const { success, addEditArtefacts } = useAddEditArtefacts();
  const { user } = useUser();
  const { profileId, sectionId, competencyId } = useParams();

  const [task, setTask] = useState(initialData?.task || '');
  const [artefacts, setArtefacts] = useState(initialData?.artefact || '');

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
        task,
        artefact: artefacts,
        users_permissions_user: user?.id,
        profile: profileId,
        section: sectionId,
        competency: competencyId,
        job: jobId,
      },
    };

    addEditArtefacts(data);
  };

  return (
    <form onSubmit={onSubmit} className='add-edit-artefacts__form'>
      <Input
        dataTestId='task-input'
        label='Task'
        type={InputTypes.TEXT}
        placeholder='Task'
        name='task'
        value={task}
        isRequired
        fullWidth
        handleChange={setTask}
      />
      <Textarea
        dataTestId='artefacts-input'
        label='Artefacts'
        placeholder='Artefacts'
        name='artefacts'
        value={artefacts}
        isRequired
        fullWidth
        handleChange={setArtefacts}
      />
      <div className='submit-button__wrapper'>
        <Button type={ButtonTypes.SUBMIT} text={initialData ? 'Save' : 'Add'} />
      </div>
    </form>
  );
};

AddEditArtefact.defaultProps = {
  handleSubmit: () => null,
};

export default AddEditArtefact;
