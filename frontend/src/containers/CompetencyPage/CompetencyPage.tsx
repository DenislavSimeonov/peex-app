import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSectionsByProfileIdApi from 'api/hooks/useSectionsByProfileIdApi';
import SideNavigation from 'containers/SideNavigation';
import Jobs from './components/Jobs';
import './CompetencyPage.scss';

const CompetencyPage = () => {
  const navigate = useNavigate();
  const { id: profileIdParam, competency_id: competencyId } = useParams();
  const { loading, error, data: sections } = useSectionsByProfileIdApi(profileIdParam);

  useEffect(() => {
    if (!competencyId && sections?.length) {
      const firstCompetencyId = sections[0].competencies[0]?.id;
      navigate(`/competency/${profileIdParam}/${firstCompetencyId}`, { replace: true });
    }
  }, [competencyId, sections]);

  return (
    <div className='competency-page' data-testid='competency-page'>
      <SideNavigation
        items={sections}
        selectedItemId={Number(competencyId)}
        handleClick={(competencyId) =>
          navigate(`/competency/${profileIdParam}/${competencyId}`, { replace: true })
        }
      />
      <Jobs competencyId={competencyId} />
    </div>
  );
};
export default CompetencyPage;
