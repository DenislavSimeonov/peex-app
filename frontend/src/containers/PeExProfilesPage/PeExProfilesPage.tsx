import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import usePeExProfilesApi from 'api/hooks/usePeExProfilesApi';
import AppLoader from 'containers/AppLoader';
import Card from 'components/Card';
import { CardTypes } from 'components/Card/enums';
import Notification from 'components/Notification';
import { NotificationTypes } from 'components/Notification/enums';
import './PeExProfilesPage.scss';

const PeExProfilesPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { loading, error, data: profiles } = usePeExProfilesApi();

  return (
    <div className='peex-profiles-page'>
      {loading && !profiles.length && <AppLoader />}
      {error && <Notification type={NotificationTypes.ERROR} message={error?.message} />}
      {profiles.map(({ id, title, type, subType }, index) => (
        <Fragment key={id}>
          <Card
            dataTestId={`profile-${index}-title`}
            type={CardTypes.SECONDARY}
            title={title}
            hoverEffect
            handleClick={() => navigate(`/competency/${id}`)}
          >
            <div className='profile-type-subtitle-wrapper'>
              <div data-testid={`profile-${index}-type`}>{type}</div>
              <div data-testid={`profile-${index}-subtitle`}>{subType}</div>
            </div>
          </Card>
        </Fragment>
      ))}
    </div>
  );
};

export default PeExProfilesPage;
