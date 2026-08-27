import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'c1',
    title: 'Web Development',
    description: 'Learn the fundamentals of building modern, responsive websites using HTML, CSS, and modern web APIs.',
    difficulty: 'Beginner',
    resourceCount: 42,
    icon: 'layout'
  },
  {
    id: 'c2',
    title: 'Python Programming',
    description: 'Master Python syntax, data structures, and object-oriented programming concepts from scratch.',
    difficulty: 'Beginner',
    resourceCount: 35,
    icon: 'code'
  },
  {
    id: 'c3',
    title: 'JavaScript',
    description: 'Deep dive into ES6+, async programming, DOM manipulation, and frontend logic.',
    difficulty: 'Intermediate',
    resourceCount: 28,
    icon: 'file-json'
  },
  {
    id: 'c4',
    title: 'React',
    description: 'Build interactive UI components, manage state with hooks, and handle routing in modern React applications.',
    difficulty: 'Intermediate',
    resourceCount: 31,
    icon: 'atom'
  },
  {
    id: 'c5',
    title: 'Git & GitHub',
    description: 'Learn version control, branching strategies, pull requests, and collaborative development workflows.',
    difficulty: 'Beginner',
    resourceCount: 15,
    icon: 'git-branch'
  },
  {
    id: 'c6',
    title: 'Linux Fundamentals',
    description: 'Navigate the command line, manage file permissions, shell scripting, and system administration basics.',
    difficulty: 'Intermediate',
    resourceCount: 22,
    icon: 'terminal'
  },
  {
    id: 'c7',
    title: 'Cloud Computing',
    description: 'Introduction to AWS, Azure, and GCP, covering core compute, storage, and networking services.',
    difficulty: 'Advanced',
    resourceCount: 19,
    icon: 'cloud'
  },
  {
    id: 'c8',
    title: 'DevOps Fundamentals',
    description: 'Understand CI/CD pipelines, containerization with Docker, and infrastructure as code.',
    difficulty: 'Advanced',
    resourceCount: 25,
    icon: 'settings'
  }
];
