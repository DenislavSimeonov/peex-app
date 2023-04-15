import './NoDataMessage.scss';

interface INoDataMessage {
  message: string;
  dataTestId: string;
  borders?: ('top' | 'right' | 'bottom' | 'left')[];
}
const NoDataMessage = ({ dataTestId, message, borders }: INoDataMessage) => (
  <div
    className={`no-data-message
    ${borders?.includes('top') && 'no-data-message--border-top'}
    ${borders?.includes('right') && 'no-data-message--border-right'}
    ${borders?.includes('bottom') && 'no-data-message--border-bottom'}
    ${borders?.includes('left') && 'no-data-message--border-left'}
  `}
    data-testid={dataTestId}
  >
    {message}
  </div>
);

NoDataMessage.defaultProps = {
  dataTestId: 'no-data-message',
};

export default NoDataMessage;
