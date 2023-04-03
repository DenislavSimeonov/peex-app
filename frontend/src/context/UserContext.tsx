import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

export type User = {
  id: number;
  name: string;
} | null;

export interface IUserContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const UserContext = createContext<Partial<IUserContext>>({});

type UserProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
