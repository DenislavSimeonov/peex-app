import { useTranslation } from 'react-i18next';
import Card from 'components/Card';

const PageOne = () => {
  const { t } = useTranslation();
  const header = t('pageHeader.pageOne');

  return (
    <div className='page'>
      <Card type='primary' title={header}>
        <Card type='secondary' title='Secondary Card'>
          Secondary Card Content
        </Card>
      </Card>
    </div>
  );
};
export default PageOne;
