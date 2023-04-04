import { useTranslation } from 'react-i18next';
import useFetch from 'hooks/useFetch';
import Card from 'components/Card';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const { loading, error, data } = useFetch(
    `${process.env.REACT_APP_BACKEND}profiles?locale=${i18n.language}`,
  );

  return (
    <div className='page'>
      <Card type='primary' title={t('pageHeader.home', 'home page') as string}>
        <Card type='secondary' title='Secondary Card'>
          {loading && <div>Loading...</div>}
          {error && <div>Error message: {error['message']}</div>}
        </Card>
      </Card>
    </div>
  );
};

export default HomePage;
