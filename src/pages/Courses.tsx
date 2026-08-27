import React from 'react';
import { 
  Layout, 
  Code, 
  FileJson, 
  Atom, 
  GitBranch, 
  Terminal, 
  Cloud, 
  Settings,
  ArrowRight,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

const Courses = () => {

  const getCourseIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-brand-600" };
    switch (iconName) {
      case 'layout': return <Layout {...iconProps} />;
      case 'code': return <Code {...iconProps} />;
      case 'file-json': return <FileJson {...iconProps} />;
      case 'atom': return <Atom {...iconProps} />;
      case 'git-branch': return <GitBranch {...iconProps} />;
      case 'terminal': return <Terminal {...iconProps} />;
      case 'cloud': return <Cloud {...iconProps} />;
      case 'settings': return <Settings {...iconProps} />;
      default: return <BookOpen {...iconProps} />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-50 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Advanced': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-2xl mb-4 md:hidden">
            <GraduationCap className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Premium Courses</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Level up your skills with our curated selection of comprehensive programming and technology courses.
            Master new technologies at your own pace.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl shadow-card border border-slate-100 flex flex-col h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Header (Icon & Badges) */}
              <div className="p-6 pb-0">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-brand-50 rounded-2xl group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(getCourseIcon(course.icon) as React.ReactElement, {
                      className: "w-8 h-8 group-hover:text-white transition-colors duration-300"
                    })}
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-1">
                  {course.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-3">
                  {course.description}
                </p>
              </div>

              {/* Footer (Resources & Button) */}
              <div className="p-6 pt-0 mt-auto border-t border-slate-50 pt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-slate-400" /> {course.resourceCount} Resources
                </span>
                
                <button className="flex items-center gap-1.5 text-brand-600 font-bold text-sm hover:text-brand-800 transition-colors group/btn">
                  Explore <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Courses;
