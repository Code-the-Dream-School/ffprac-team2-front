interface StudentTutorInfo {
    tutorId: string;
    subject: string;
    grade: string | number;
}
export interface User {
    user_id: string; // Auto-generated
    firstName: string; // First name with required validation
    lastName: string; // Last name with required validation
    email: string; // Email with required validation
    password: string; // Password with required validation
    role: UserRole; // Role using a UserRole enum
}

export enum UserRole {
    admin,
    tutor,
    parent,
}
export interface Student {
    name: string;
    grade: string | number;
    _id: string;
    tutorInfo?: StudentTutorInfo;
}
export interface Subject {
    _id: string; // Subject ID from the database
    name: string; // Subject name
}
export interface Tutor extends User {
    _id: string;
    user: string; // Reference to the User document
    subjects: Subject[]; // Array of Subject objects
    grades: string[]; // Array of grade levels (e.g., ['K', '1', '2', ...])
    about: string; // Summary about the tutor (max 150 characters)
    education?: string; // Optional education details
    students?: string[]; // Array of student user IDs (optional)
    image?: string; // Optional image URL for the tutor
    availability?: string[]; // Array of availability objects (optional)
    expirience?: string; //Optional expirience
}
