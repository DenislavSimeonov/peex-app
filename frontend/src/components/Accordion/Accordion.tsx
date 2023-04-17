import { ReactNode, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import NoDataMessage from 'components/NoDataMessage';
import './Accordion.scss';

interface IAccordion {
  title: string | ReactNode;
  children: ReactNode;
  dataTestId: string;
  noDataMessage: string;
  isNoDataMessageShown: boolean;
}

const Accordion = ({
  dataTestId,
  title,
  children,
  noDataMessage,
  isNoDataMessageShown,
}: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((state) => !state);

  return (
    <div className='accordion' data-testid={dataTestId}>
      <div className='accordion__title' data-testid={`${dataTestId}-title`} onClick={handleToggle}>
        {title}
      </div>
      <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
        {!isNoDataMessageShown ? (
          <div className='accordion__body' data-testid={`${dataTestId}-body`}>
            {children}
          </div>
        ) : (
          <NoDataMessage message={noDataMessage} borders={['top']} />
        )}
      </AnimateHeight>
    </div>
  );
};

Accordion.defaultProps = {
  dataTestId: 'accordion',
  noDataMessage: '',
  isNoDataMessageShown: false,
};

export default Accordion;
