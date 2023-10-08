import { useState } from 'react';
import { useLogin } from 'api/hooks';
import { useErrorNotifications, useIsAppLoading } from 'hooks';
import Card from 'components/Card';
import { CardTypes } from 'components/Card/enums';
import Button from 'components/Button';
import { ButtonTypes } from 'components/Button/enums';
import Input from 'components/Input';
import { InputTypes } from 'components/Input/enums';

import './LoginPage.scss';

const LoginPage = () => {
  const { login, loading, error } = useLogin();

  useErrorNotifications(error);
  useIsAppLoading(loading);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className='login-page' data-testid='login-page'>
      <Card type={CardTypes.SECONDARY}>
        <form onSubmit={onSubmit} className='login-page__form'>
          Test
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
