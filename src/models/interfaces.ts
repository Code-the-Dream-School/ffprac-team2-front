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