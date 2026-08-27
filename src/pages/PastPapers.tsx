import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Filter, 
  Search,
  Calendar,
  BookOpen
} from 'lucide-react';
import { pastPapersData } from '../data/pastPapersData';
import { PastPaper } from '../types';

const PastPapers = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique filters
  const subjects = useMemo(() => {
    const subs = new Set(pastPapersData.map(p => p.subject));
    return ['All', ...Array.from(subs)].sort();
  }, []);

  const years = useMemo(() => {
    const yrs = new Set(pastPapersData.map(p => p.year));
    return ['All', ...Array.from(yrs)].sort((a, b) => b.localeCompare(a)); // Sort years descending
  }, []);

  // Filter papers
  const filteredPapers = useMemo(() => {
    let result = pastPapersData;

    if (searchQuery.trim() !== '') {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => p.subject.toLowerCase().includes(lowerQuery));
    }

    if (selectedSubject !== 'All') {
      result = result.filter(p => p.subject === selectedSubject);
    }

    if (selectedYear !== 'All') {
      result = result.filter(p => p.year === selectedYear);
    }

    return result;
  }, [searchQuery, selectedSubject, selectedYear]);

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Past Exam Papers</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Practice with real past exam papers to familiarize yourself with question formats and test your knowledge before the finals.
          </p>
        </div>

        {/* Layout: Sidebar Filters + Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-card border border-slate-100 sticky top-6">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5 text-brand-600" /> Filters
              </h2>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Search Subject</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g. Programming"
                      className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Subject Filter */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {subjects.map(subject => (
                      <label key={subject} className="flex items-center group cursor-pointer">
                        <input 
                          type="radio" 
                          name="subject"
                          value={subject}
                          checked={selectedSubject === subject}
                          onChange={(e) => setSelectedSubject(e.target.value)}
                          className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500 cursor-pointer" 
                        />
                        <span className={`ml-3 text-sm transition-colors ${selectedSubject === subject ? 'text-brand-700 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>
                          {subject}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Academic Year</label>
                  <div className="space-y-2">
                    {years.map(year => (
                      <label key={year} className="flex items-center group cursor-pointer">
                        <input 
                          type="radio" 
                          name="year"
                          value={year}
                          checked={selectedYear === year}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500 cursor-pointer" 
                        />
                        <span className={`ml-3 text-sm transition-colors ${selectedYear === year ? 'text-brand-700 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>
                          {year}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSubject('All');
                    setSelectedYear('All');
                  }}
                  className="w-full py-2.5 px-4 bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium rounded-lg transition-colors text-sm"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex-grow">
            {filteredPapers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredPapers.map((paper: PastPaper) => (
                  <div 
                    key={paper.id} 
                    className="bg-white rounded-xl shadow-card border border-slate-100 p-5 hover:shadow-card-hover hover:border-brand-200 transition-all duration-200 flex flex-col group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-red-50 text-red-500 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 leading-tight group-hover:text-brand-600 transition-colors">
                          {paper.subject}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 font-medium bg-slate-100 inline-block px-2 py-0.5 rounded">
                          Final Examination
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{paper.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        <span>{paper.semester} Semester</span>
                      </div>
                    </div>

                    <div className="flex gap-2 border-t border-slate-50 pt-4">
                      <a 
                        href={paper.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-brand-50 text-brand-700 text-sm font-medium rounded-lg hover:bg-brand-100 transition-colors"
                      >
                        <Eye className="w-4 h-4" /> View
                      </a>
                      <a 
                        href={paper.downloadUrl}
                        download
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-brand-600 transition-colors"
                      >
                        <Download className="w-4 h-4" /> Save
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-card border border-slate-100 h-full flex flex-col items-center justify-center min-h-[400px]">
                <div className="p-4 bg-slate-50 rounded-full mb-4">
                  <Filter className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No papers found</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-6">
                  We couldn't find any past papers matching your selected filters.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSubject('All');
                    setSelectedYear('All');
                  }}
                  className="px-6 py-2.5 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PastPapers;
