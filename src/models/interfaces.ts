interface StudentTutorInfo {
    tutorId: string;
    subject: string;
    grade: string | number;
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

export interface Tutor {
    availability: string;
    userId: any;
    firstName: string;
    lastName: string;
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
    subject: string;
}