import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSectionsByProfileIdApi from 'api/hooks/useSectionsByProfileIdApi';
import SideNavigation from 'containers/SideNavigation';
import Competency from './components/Competency';
import './SectionsPage.scss';

const SectionsPage = () => {
  const navigate = useNavigate();
  const { id: profileIdParam, section_id: sectionIdParam } = useParams();
  const { loading, error, data: sections } = useSectionsByProfileIdApi(profileIdParam);

  useEffect(() => {
    if (!sectionIdParam && sections?.length) {
      navigate(`/sections/${profileIdParam}/${sections[0]?.id}`);
    }
  }, [sectionIdParam, sections]);

  return (
    <div className='sections-page' data-testid='sections-page'>
      <SideNavigation
        items={sections}
        selectedItemId={Number(sectionIdParam)}
        handleClick={(id) => navigate(`/sections/${profileIdParam}/${id}`)}
      />
      <Competency profileId={profileIdParam} sectionId={sectionIdParam} />
    </div>
  );
};
export default SectionsPage;
