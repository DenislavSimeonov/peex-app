import { useTranslation } from 'react-i18next';
import Card from 'components/Card';
import { CardTypes } from 'components/Card/enums';

const PageTwo = () => {
  const { t } = useTranslation();
  const header = t('pageHeader.pageTwo');

  return (
    <div className='page'>
      <Card type={CardTypes.PRIMARY} title={header}>
        <Card type={CardTypes.SECONDARY} title='Secondary Card'>
          Secondary Card Content
        </Card>
      </Card>
    </div>
  );
};

export default PageTwo;
