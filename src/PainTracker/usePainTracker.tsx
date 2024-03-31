import {useCallback, useContext} from 'react';
import {AppContext} from '../AppContext';
import {painLevels} from './content';

export const usePainTracker = () => {
  const {registeredPainLevel, setRegisteredPainLevel} = useContext(AppContext);

  const registerPainLevel = useCallback(
    (level: string) => {
      const painLevel = painLevels.find(l => l.level === level);
      painLevel && setRegisteredPainLevel(painLevel);
    },
    [setRegisteredPainLevel],
  );

  return {registeredPainLevel, registerPainLevel};
};
