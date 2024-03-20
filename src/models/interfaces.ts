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

export interface TutorConnectionRequest {
    studentId: string;
    tutorId?: string;
    subjects: {
        math: string;
        english: string;
        science: string;
        socialStudies: string;
        foringLanguage: string;
    };
    grade: string;
}
