import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useErrorNotifications, useIsAppLoading } from 'hooks';
import { usePeExProfilesApi } from 'api/hooks';
import Card from 'components/Card';
import { CardTypes } from 'components/Card/enums';
import './PeExProfilesPage.scss';

const PeExProfilesPage = () => {
  const navigate = useNavigate();
  const { loading, error, data: profiles } = usePeExProfilesApi();
  useErrorNotifications(error);
  useIsAppLoading(loading && !profiles);

  return (
    <div className='peex-profiles-page'>
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
