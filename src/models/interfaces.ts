interface StudentTutorInfo {
    tutorId: string;
    subject: string;
    grade: string | number;
}

export interface Student {
    name: string;
    grade: string | number;
    _id: string;
    tutorInfo?: StudentTutorInfo;
}

export interface StudentRequest {
    name: string;
    grade: string;
}
