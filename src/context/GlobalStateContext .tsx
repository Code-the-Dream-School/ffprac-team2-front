import { ReactNode, createContext, useContext, useReducer } from 'react';
import { GlobalState } from '../models/interfaces';
import stateReducer, { initialState } from '../reducer/stateReduser';
import { getAllData } from '../util';

interface GlobalStateProviderProps {
    children: ReactNode;
}

// const GlobalStateContext = createContext<GlobalStateContextType | null>(null);
const GlobalStateContext = createContext<GlobalState>(initialState);

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const updateStudents = async () => {
        const data = await getAllData(`${import.meta.env.VITE_REACT_URL}students`);
        console.log(data);
        dispatch({ type: 'UPDATE_STUDENT', payload: data.students });
    };

    const value = {
        students: state.students,
        updateStudents,
    };

    return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
};

const useStateContext = () => {
    const context = useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error('useStateContext must be used within a GlobalStateProvider');
    }
    return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useStateContext;
