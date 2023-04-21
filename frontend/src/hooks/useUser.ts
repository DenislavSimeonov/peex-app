import { useContext, useEffect } from 'react';
import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem } from 'global/helpers';
import { UserContext, IUserContext, User } from '../context/UserContext';

const USER = 'user';

const useUser = () => {
  const { user, setUser } = useContext(UserContext) as IUserContext;

  useEffect(() => {
    const userLocalStorage = getLocalStorageItem(USER);

    if (!user && userLocalStorage) {
      setUser(JSON.parse(userLocalStorage));
    }
  }, []);

  const addUser = (user: User) => {
    setUser(user);
    setLocalStorageItem(USER, JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    removeLocalStorageItem(USER);
  };

  return { user, addUser, removeUser };
};

export default useUser;
