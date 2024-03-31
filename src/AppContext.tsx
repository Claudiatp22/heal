import React, {createContext, useState} from 'react';
import {IPainLevel} from './PainTracker/content';

interface IRegisteredPainLevel {
  readonly level: string;
  readonly helperText: string;
  readonly value: string;
  readonly color: string;
}

export interface IAppContext {
  readonly registeredPainLevel: IRegisteredPainLevel | undefined;
  readonly setRegisteredPainLevel: (painLevel: IPainLevel) => void;
}

export const AppContext = createContext<IAppContext>({
  registeredPainLevel: undefined,
  setRegisteredPainLevel: () => {},
});

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const [registeredPainLevel, setRegisteredPainLevel] =
    useState<IRegisteredPainLevel>();

  return (
    <AppContext.Provider value={{registeredPainLevel, setRegisteredPainLevel}}>
      {children}
    </AppContext.Provider>
  );
};
