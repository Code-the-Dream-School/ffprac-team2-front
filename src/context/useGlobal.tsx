import { useContext } from 'react';
import { GlobalStateContext, GlobalStateProps } from './GlobalStateContext';

export const useGlobal = (): GlobalStateProps => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobal must be used within an GlobalStateContext');
    }
    return context;
};
