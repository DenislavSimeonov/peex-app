import useCompetencyBySectionIdApi from 'api/hooks/useCompetencyBySectionIdApi';
import useJobsByCompetencyIdApi from 'api/hooks/useJobsByCompetencyIdApi';
import './Competency.scss';

type PropsType = {
  profileId?: string;
  sectionId?: string;
};

const Competency = ({ profileId, sectionId }: PropsType) => {
  const {
    loading: competenciesLoading,
    error: competenciesError,
    data: competencies,
  } = useCompetencyBySectionIdApi(sectionId);
  const {
    loading: jobsLoading,
    error: jobsError,
    data: jobs,
  } = useJobsByCompetencyIdApi(competencies[0]?.id);

  console.log(competencies, jobs);
  return (
    <div className='section' data-testid='section'>
      {`"ProfileId =>" ${profileId}`}
      {`"SectionId =>" ${sectionId}`}
    </div>
  );
};

export default Competency;
