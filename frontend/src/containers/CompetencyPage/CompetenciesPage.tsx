import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from 'hooks';
import { useSectionsByProfileIdApi } from 'api/hooks';
import SideNavigation from 'containers/SideNavigation';
import Jobs from './components/Jobs';
import './CompetenciesPage.scss';

const CompetenciesPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { profileId, competencyId } = useParams();
  const { data: sections } = useSectionsByProfileIdApi(profileId);

  useEffect(() => {
    if (!competencyId && sections?.length) {
      const firstSectionId = sections[0].id;
      const firstCompetencyId = sections[0].competencies[0]?.id;
      navigate(`/competency/${profileId}/${firstSectionId}/${firstCompetencyId}`, {
        replace: true,
      });
    }
  }, [competencyId, sections]);

  return (
    <div className='competencies-page' data-testid='competencies-page'>
      <SideNavigation
        sections={sections}
        selectedItemId={Number(competencyId)}
        handleClick={(sectionId, competencyId) =>
          navigate(`/competency/${profileId}/${sectionId}/${competencyId}`, { replace: true })
        }
      />
      <Jobs userId={user?.id?.toString()} profileId={profileId} competencyId={competencyId} />
    </div>
  );
};
export default CompetenciesPage;
