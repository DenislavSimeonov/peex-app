import { useState } from 'react';
import useLogin from 'api/hooks/useLogin';
import AppLoader from 'containers/AppLoader';
import Card from 'components/Card';
import { CardTypes } from 'components/Card/enums';
import Button from 'components/Button';
import { ButtonTypes } from 'components/Button/enums';
import Input from 'components/Input';
import { InputTypes } from 'components/Input/enums';
import Notification from 'components/Notification';
import { NotificationTypes } from 'components/Notification/enums';
import './LoginPage.scss';

const LoginPage = () => {
  const { login, loading, error } = useLogin();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({ username, password });
  };

  if (loading) {
    return <AppLoader />;
  }

  return (
    <div className='login-page' data-testid='login-page'>
      <Card type={CardTypes.SECONDARY}>
        <form onSubmit={onSubmit} className='login-page__form'>
          {!!error && <Notification type={NotificationTypes.ERROR} message={error?.message} />}
          <Input
            dataTestId='username'
            label='Username'
            type={InputTypes.TEXT}
            placeholder='Username'
            name='username'
            value={username}
            isRequired
            fullWidth
            handleChange={setUsername}
          />
          <Input
            dataTestId='password'
            label='Password'
            type={InputTypes.PASSWORD}
            placeholder='Password'
            name='password'
            value={password}
            isRequired
            fullWidth
            handleChange={setPassword}
          />
          <Button type={ButtonTypes.SUBMIT} text='Login' fullWidth />
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
