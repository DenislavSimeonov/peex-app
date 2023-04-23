import { ReactNode, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import NoDataMessage from 'components/NoDataMessage';
import AnchorLink from 'components/AnchorLink';
import './Accordion.scss';

interface IAccordion {
  dataTestId: string;
  title: string | ReactNode;
  children: ReactNode;
  anchorLinkId?: string;
  className?: string;
  noDataMessage: string;
  isNoDataMessageShown: boolean;
  isOpenExternal?: boolean;
  setIsOpenExternal?: (val: boolean) => void;
}

const Accordion = ({
  dataTestId,
  title,
  children,
  anchorLinkId,
  className,
  noDataMessage,
  isNoDataMessageShown,
  isOpenExternal,
  setIsOpenExternal,
}: IAccordion) => {
  const animationDuration = 500;
  const scrollDelay = 530;
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const handleToggle = () =>
    setIsOpenExternal ? setIsOpenExternal(!isOpenExternal) : setIsOpenInternal((state) => !state);

  const isOpen = setIsOpenExternal ? isOpenExternal : isOpenInternal;

  return (
    <div
      id={anchorLinkId}
      className={`accordion ${isOpen ? 'accordion--open' : 'accordion--closed'} ${className}`}
      data-testid={dataTestId}
      tabIndex={1}
    >
      <AnchorLink id={anchorLinkId} scrollDelay={scrollDelay}>
        <div
          className='accordion__title'
          data-testid={`${dataTestId}-title`}
          onClick={handleToggle}
        >
          {title}
        </div>
      </AnchorLink>

      <AnimateHeight duration={animationDuration} height={isOpen ? 'auto' : 0}>
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
  className: '',
};

export default Accordion;
