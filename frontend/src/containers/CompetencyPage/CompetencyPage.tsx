import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSectionsByProfileIdApi } from 'api/hooks';
import SideNavigation from 'containers/SideNavigation';
import Jobs from './components/Jobs';
import './CompetencyPage.scss';

const CompetencyPage = () => {
  const navigate = useNavigate();
  const { id: profileId, competency_id: competencyId } = useParams();
  const { data: sections } = useSectionsByProfileIdApi(profileId);

  useEffect(() => {
    if (!competencyId && sections?.length) {
      const firstCompetencyId = sections[0].competencies[0]?.id;
      navigate(`/competency/${profileId}/${firstCompetencyId}`, { replace: true });
    }
  }, [competencyId, sections]);

  return (
    <div className='competency-page' data-testid='competency-page'>
      <SideNavigation
        items={sections}
        selectedItemId={Number(competencyId)}
        handleClick={(competencyId) =>
          navigate(`/competency/${profileId}/${competencyId}`, { replace: true })
        }
      />
      <Jobs profileId={profileId} competencyId={competencyId} />
    </div>
  );
};
export default CompetencyPage;
