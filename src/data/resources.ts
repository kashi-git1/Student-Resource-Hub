import { Resource } from '../types';
import { STORAGE_CONFIG, getFileUrl } from '../config/storage';

export const resourcesData: Resource[] = [
  {
    id: 'r1',
    title: 'Data Structures and Algorithms',
    category: 'Computer Science',
    description: 'Comprehensive notes covering arrays, linked lists, trees, graphs, and basic algorithms with Python examples.',
    subject: 'Programming',
    year: '2023',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PROGRAMMING, 'dsa-notes.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PROGRAMMING, 'dsa-notes.pdf')
  },
  {
    id: 'r2',
    title: 'Advanced Calculus Cheat Sheet',
    category: 'Mathematics',
    description: 'A quick reference guide for multivariable calculus, integrals, and differential equations.',
    subject: 'Calculus',
    year: '2022',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'calculus-cheat-sheet.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'calculus-cheat-sheet.pdf')
  },
  {
    id: 'r3',
    title: 'Organic Chemistry Reactions',
    category: 'Chemistry',
    description: 'Detailed reaction mechanisms and electron pushing for intermediate organic chemistry students.',
    subject: 'Organic Chemistry',
    year: '2023',
    fileType: 'Document',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'organic-chemistry-reactions.docx'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'organic-chemistry-reactions.docx')
  },
  {
    id: 'r4',
    title: 'Physics Mechanics Midterm 2023',
    category: 'Physics',
    description: 'Past exam paper focusing on Newtonian mechanics, kinematics, and energy conservation.',
    subject: 'Mechanics',
    year: '2023',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'physics-mechanics-2023.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PAST_PAPERS, 'physics-mechanics-2023.pdf')
  },
  {
    id: 'r5',
    title: 'Introduction to Macroeconomics',
    category: 'Economics',
    description: 'Summary slides on GDP, inflation, unemployment, and monetary policies.',
    subject: 'Macroeconomics',
    year: '2021',
    fileType: 'Presentation',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'macroeconomics-intro.pptx'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'macroeconomics-intro.pptx')
  },
  {
    id: 'r6',
    title: 'World War II Timeline',
    category: 'History',
    description: 'An interactive timeline document detailing major events, battles, and treaties of WWII.',
    subject: 'Modern History',
    year: '2020',
    fileType: 'Document',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'ww2-timeline.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'ww2-timeline.pdf')
  },
  {
    id: 'r7',
    title: 'React & TypeScript Best Practices',
    category: 'Computer Science',
    description: 'A guide to building scalable frontend architectures using React hooks and TypeScript.',
    subject: 'Web Development',
    year: '2024',
    fileType: 'PDF',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.PROGRAMMING, 'react-ts-best-practices.pdf'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.PROGRAMMING, 'react-ts-best-practices.pdf')
  },
  {
    id: 'r8',
    title: 'Human Anatomy Diagrams',
    category: 'Biology',
    description: 'High-resolution labeled diagrams of the human skeletal and muscular systems.',
    subject: 'Anatomy',
    year: '2022',
    fileType: 'Image',
    fileUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'anatomy-diagrams.zip'),
    downloadUrl: getFileUrl(STORAGE_CONFIG.PATHS.RESOURCES, 'anatomy-diagrams.zip')
  }
];
