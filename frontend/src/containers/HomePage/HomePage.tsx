import { useTranslation } from 'react-i18next';
import Card from 'components/Card';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <Card type='primary' title={t('pageHeader.home', 'home page') as string}>
        <Card type='secondary' title='Secondary Card'>
          Secondary Card Content
        </Card>
      </Card>
    </div>
  );
};

export default HomePage;
