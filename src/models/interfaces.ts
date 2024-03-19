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
