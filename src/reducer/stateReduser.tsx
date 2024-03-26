/* eslint-disable indent */
import { GlobalState, Student } from '../models/interfaces';

export type Action = { type: 'UPDATE_STUDENT'; payload: Student[] };

export const initialState: GlobalState = {
    // isLoggedIn: false,
    // user: null,
    students: [],
    // teacherSearchResults: [],
    updateStudents: async () => {},
};

const stateReducer = (state: GlobalState, action: Action) => {
    switch (action.type) {
        case 'UPDATE_STUDENT':
            return { ...state, students: action.payload };
        default:
            return state;
    }
};

export default stateReducer;
