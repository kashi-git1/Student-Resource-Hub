export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  subject: string;
  year?: string;
  fileType: string;
  fileUrl: string;
  downloadUrl: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  resourceCount: number;
  icon: string;
}

export interface NoteSubject {
  id: string;
  subject: string;
  description: string;
  resourceCount: number;
  icon: string;
}

export interface PastPaper {
  id: string;
  subject: string;
  year: string;
  semester: string;
  fileType: string;
  fileUrl: string;
  downloadUrl: string;
}
