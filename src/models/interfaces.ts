interface StudentTutorInfo {
    tutorId: string;
    subject: string;
    availability: string;
    tutorName: string;
}

export interface Student {
    name: string;
    grade: string;
    _id: string;
    createdAt: string;
    parentId: string;
    updatedAt: string;
    tutorInfo?: StudentTutorInfo[];
}

export interface StudentRequest {
    name: string;
    grade: string;
}

/*export interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: 'parent' | 'tutor';
}
*/
export interface LoginData {
    email: string;
    password: string;
}

export interface Tutor {
    availability: string[];
    userId: {
        _id: string;
        firstName: string;
        lastName: string;
        // email: string;
    };
    about: string;
    grades: string[];
    avatar?: string;
    education: string;
    yearsOfExperience: number;
    MathSubject: string[];
    ForeignLanguages: string[];
    English: string[];
    SocialStudies: string[];
    Science: string[];
    _id: string;
}

export interface TutorConnectionRequest {
    studentId: string;
    tutorId?: string;
    subject: string;
    availability: string;
}

export interface GlobalState {
    // isLoggedIn: boolean;
    // user: User | null;
    students: Student[] | [];
    // teacherSearchResults: string[];
    updateStudents: () => Promise<void>;
}
