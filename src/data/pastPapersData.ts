import { PastPaper } from '../types';
import { STORAGE_CONFIG, getFileUrl } from '../config/storage';

export const pastPapersData: PastPaper[] = [
  {
    id: 'p1',
    subject: 'Programming',
    year: '2023',
    semester: 'Fall',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'programming-2023-fall.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'programming-2023-fall.pdf')
  },
  {
    id: 'p2',
    subject: 'Programming',
    year: '2023',
    semester: 'Spring',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'programming-2023-spring.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'programming-2023-spring.pdf')
  },
  {
    id: 'p3',
    subject: 'Database Systems',
    year: '2022',
    semester: 'Fall',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'db-2022-fall.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'db-2022-fall.pdf')
  },
  {
    id: 'p4',
    subject: 'Operating Systems',
    year: '2023',
    semester: 'Spring',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'os-2023-spring.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'os-2023-spring.pdf')
  },
  {
    id: 'p5',
    subject: 'Computer Networks',
    year: '2021',
    semester: 'Fall',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'networks-2021-fall.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'networks-2021-fall.pdf')
  },
  {
    id: 'p6',
    subject: 'Software Engineering',
    year: '2022',
    semester: 'Spring',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'se-2022-spring.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'se-2022-spring.pdf')
  },
  {
    id: 'p7',
    subject: 'Data Structures',
    year: '2023',
    semester: 'Fall',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'dsa-2023-fall.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'dsa-2023-fall.pdf')
  },
  {
    id: 'p8',
    subject: 'Database Systems',
    year: '2023',
    semester: 'Spring',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'db-2023-spring.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'db-2023-spring.pdf')
  }
];
