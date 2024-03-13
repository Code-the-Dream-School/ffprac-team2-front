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

export interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

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
export interface Subject {
    _id: string; // Subject ID from the database
    name: string; // Subject name
}
export interface Tutor {
    _id: string;
    user: string; // Reference to the User document
    subjects: Subject[]; // Array of Subject objects
    grades: string[]; // Array of grade levels (e.g., ['K', '1', '2', ...])
    aboutSummary: string; // Summary about the tutor (max 150 characters)
    education?: string; // Optional education details
    students?: string[]; // Array of student user IDs (optional)
    image?: string; // Optional image URL for the tutor
    availability?: string[]; // Array of availability objects (optional)
}
export interface AuthPageProps {
    activeTab: 'register' | 'login';
}
