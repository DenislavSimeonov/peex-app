import { useTranslation } from 'react-i18next';
import Card from 'components/Card';

const PageTwo = () => {
  const { t } = useTranslation();
  const header = t('pageHeader.pageTwo');

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

export default PageTwo;
