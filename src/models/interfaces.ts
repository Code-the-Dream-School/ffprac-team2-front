interface StudentTuterInfo {
  tutorId: string;
  subject: string;
  grade: string | number;
}

export interface Student {
  name: string;
  grade: string | number;
  _id: string;
  tuterInfo: StudentTuterInfo;
}
