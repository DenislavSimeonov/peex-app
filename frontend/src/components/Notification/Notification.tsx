import { NotificationTypes } from './enums';
import './Notification.scss';

interface INotification {
  dataTestId: string;
  type: NotificationTypes;
  message: string;
}
const Notification = ({ dataTestId, type, message }: INotification) => {
  return (
    <div data-testid={dataTestId} className={`notification notification--${type}`}>
      {message}
    </div>
  );
};

Notification.defaultProps = {
  dataTestId: 'notification',
};

export default Notification;
