import { User } from 'context/UserContext';
import { useUser } from './useUser';
import { useLocalStorage } from './useLocalStorage';

interface ILogin {
  user: User;
  token: string;
}

const TOKEN = 'token';

export const useAuth = () => {
  const { setItem, getItem, removeItem } = useLocalStorage();
  const token = getItem(TOKEN);
  const { addUser, removeUser } = useUser();

  const login = ({ user, token }: ILogin) => {
    setItem(TOKEN, token);
    addUser(user);
  };

  const logout = () => {
    removeItem(TOKEN);
    removeUser();
  };

  return { token, login, logout };
};
