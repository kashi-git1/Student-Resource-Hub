import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  Layers, 
  HardDrive, 
  Globe, 
  Brain,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { notesSubjectsData } from '../data/notesData';
import { NoteSubject } from '../types';

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter notes subjects based on search query
  const filteredSubjects = useMemo(() => {
    if (!searchQuery.trim()) return notesSubjectsData;
    
    const lowerQuery = searchQuery.toLowerCase();
    return notesSubjectsData.filter(
      subject => 
        subject.subject.toLowerCase().includes(lowerQuery) || 
        subject.description.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const getSubjectIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-brand-600" };
    switch (iconName) {
      case 'cpu': return <Cpu {...iconProps} />;
      case 'database': return <Database {...iconProps} />;
      case 'network': return <Network {...iconProps} />;
      case 'code': return <Code {...iconProps} />;
      case 'layers': return <Layers {...iconProps} />;
      case 'hard-drive': return <HardDrive {...iconProps} />;
      case 'globe': return <Globe {...iconProps} />;
      case 'brain': return <Brain {...iconProps} />;
      default: return <BookOpen {...iconProps} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Study Notes</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              High-yield, peer-reviewed notes compiled by top students. Find detailed breakdowns of complex theories and concepts.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subjects or topics..."
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-card transition-all"
            />
          </div>
        </div>

        {/* Subjects Grid */}
        {filteredSubjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSubjects.map((subject: NoteSubject) => (
              <div 
                key={subject.id} 
                className="bg-white rounded-2xl shadow-card border border-slate-100 p-6 flex flex-col h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-brand-50 rounded-xl group-hover:scale-110 transition-transform">
                    {getSubjectIcon(subject.icon)}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                    {subject.resourceCount} Resources
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {subject.subject}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-3">
                  {subject.description}
                </p>
                
                <button className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-brand-600 font-semibold rounded-xl group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  View Notes <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center shadow-card border border-slate-100 py-24">
            <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-full mb-6">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No subjects found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any subjects matching "{searchQuery}". Try using different keywords.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-8 px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Notes;
