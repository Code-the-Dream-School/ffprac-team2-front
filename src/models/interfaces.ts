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
    image: string;
    tutorInfo?: StudentTutorInfo[];
}

export interface TutorStudents {
    name: string;
    id: string;
    parent: string;
    email: string;
    subject: string;
    availability: string;
}
export interface StudentRequest {
    name: string;
    grade: string;
    image?: string;
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
        email: string;
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
    _v?: number;
}

export interface TutorConnectionRequest {
    studentId: string;
    tutorId?: string;
    subject: string;
    availability: string;
}
export interface TableSearchProps {
    studentQuery: string;
    setStudentQuery: React.Dispatch<React.SetStateAction<string>>;
    parentQuery: string;
    setParentQuery: React.Dispatch<React.SetStateAction<string>>;
    subjectQuery: string;
    setSubjectQuery: React.Dispatch<React.SetStateAction<string>>;
}

//interface for tutorProfilePage form assemble
export interface TutorRequest {
    availability: string[];
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
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    role: 'parent' | 'tutor';
    token: string;
}
