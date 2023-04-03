import { useContext, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { UserContext, IUserContext, User } from '../context/UserContext';

const USER = 'user';

export const useUser = () => {
  const { setItem, getItem, removeItem } = useLocalStorage();
  const { user, setUser } = useContext(UserContext) as IUserContext;

  useEffect(() => {
    const userLocalStorage = getItem(USER);
    if (!user && userLocalStorage) {
      setUser(JSON.parse(userLocalStorage));
    }
  }, []);

  const addUser = (user: User) => {
    setUser(user);
    setItem(USER, JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    removeItem(USER);
  };

  return { user, addUser, removeUser };
};
