import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useCompetenciesByProfileApi from 'api/hooks/useCompetenciesByProfileApi';
import SideNavigation from 'containers/SideNavigation';
import Section from './components/Section';
import './CompetenciesPage.scss';

const CompetenciesPage = () => {
  const navigate = useNavigate();
  const { id: profileIdParam, section_id: sectionIdParam } = useParams();
  const { loading, error, data: competencies } = useCompetenciesByProfileApi(profileIdParam);

  useEffect(() => {
    if (!sectionIdParam && competencies?.length) {
      navigate(`/competencies/${profileIdParam}/${competencies[0]?.id}`);
    }
  }, [sectionIdParam, competencies]);

  return (
    <div className='competencies-page' data-testid='competencies-page'>
      <SideNavigation
        items={competencies}
        selectedItemId={Number(sectionIdParam)}
        handleClick={(id) => navigate(`/competencies/${profileIdParam}/${id}`)}
      />
      <Section profileId={Number(profileIdParam)} sectionId={Number(sectionIdParam)} />
    </div>
  );
};
export default CompetenciesPage;
