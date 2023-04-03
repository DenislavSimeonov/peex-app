import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';

const LoginPage = () => {
  const { login } = useAuth();

  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined);

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: username,
          password: password,
        }),
      });
      const json = await res.json();

      if (json.error) {
        throw json.error;
      }

      login({
        user: {
          id: json.user.id,
          name: json.user.username,
        },
        token: json.jwt,
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <form onSubmit={onSubmit} className='login-form'>
      {!!error && <div>Error: {error?.message}</div>}
      <label>
        Username
        <input
          type='text'
          placeholder='Username'
          name='username'
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        Password
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginPage;
