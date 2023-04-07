import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import usePeExProfiles from 'api/hooks/usePeExProfiles';
import AppLoader from 'containers/AppLoader';
import Card from 'components/Card';
import { CardTypes } from 'components/Card/enums';
import Notification from 'components/Notification';
import { NotificationTypes } from 'components/Notification/enums';
import './PeExProfilesPage.scss';

const PeExProfilesPage = () => {
  const { t } = useTranslation();
  const { loading, error, data: profiles } = usePeExProfiles();

  return (
    <div className='peex-profiles-page'>
      {loading && !profiles.length && <AppLoader />}
      {error && <Notification type={NotificationTypes.ERROR} message={error?.message} />}
      <Card type={CardTypes.PRIMARY} title={t('pageHeader.profiles') as string}>
        <>
          {profiles.map(({ id, title, type, subType }, index) => (
            <Fragment key={id}>
              <Card dataTestId={`profile-${index}-title`} type={CardTypes.SECONDARY} title={title}>
                <div className='profile-type-subtitle-wrapper'>
                  <div data-testid={`profile-${index}-type`}>{type}</div>
                  <div data-testid={`profile-${index}-subtitle`}>{subType}</div>
                </div>
              </Card>
            </Fragment>
          ))}
        </>
      </Card>
    </div>
  );
};

export default PeExProfilesPage;
