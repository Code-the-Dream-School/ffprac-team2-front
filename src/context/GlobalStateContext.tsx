/* eslint-disable indent */
import { ReactNode, createContext, useReducer } from 'react';
import { Student } from '../models/interfaces';

interface GlobalStateProviderProps {
    children: ReactNode;
}

type Action = { type: 'SET_STUDENTS'; payload: Student[] };

export interface GlobalStateProps {
    students: Student[];
    dispatch: React.Dispatch<Action>;
}

const initialState: Student[] = [];

const reducer = (state: Student[], action: Action): Student[] => {
    switch (action.type) {
        case 'SET_STUDENTS':
            return action.payload;
        default:
            return state;
    }
};

export const GlobalStateContext = createContext<GlobalStateProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
    const [students, dispatch] = useReducer(reducer, initialState);

    const contextValue: GlobalStateProps = {
        students,
        dispatch,
    };

    return (
        <GlobalStateContext.Provider value={contextValue}>{children}</GlobalStateContext.Provider>
    );
};
