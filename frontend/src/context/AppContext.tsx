import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

export interface IAppContext {
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<Partial<IAppContext>>({});

type AppProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ error, setError, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};
