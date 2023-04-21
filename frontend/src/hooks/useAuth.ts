import { User } from 'context/UserContext';
import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem } from 'global/helpers';
import useUser from './useUser';

interface ILogin {
  user: User;
  token: string;
}

const TOKEN = 'token';

const useAuth = () => {
  const token = getLocalStorageItem(TOKEN);
  const { addUser, removeUser } = useUser();

  const login = ({ user, token }: ILogin) => {
    setLocalStorageItem(TOKEN, token);
    addUser(user);
  };

  const logout = () => {
    removeLocalStorageItem(TOKEN);
    removeUser();
  };

  return { token, login, logout };
};

export default useAuth;
