import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  FileText, 
  FileImage, 
  MonitorPlay, 
  File, 
  Eye, 
  Download,
  BookOpen
} from 'lucide-react';
import { resourcesData } from '../data/resources';
import { Resource } from '../types';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('title-asc');

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = new Set(resourcesData.map(r => r.category));
    return ['All', ...Array.from(cats)].sort();
  }, []);

  // Filter and sort resources
  const filteredResources = useMemo(() => {
    let result = resourcesData;

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        r => 
          r.title.toLowerCase().includes(lowerQuery) || 
          r.description.toLowerCase().includes(lowerQuery) ||
          r.subject.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(r => r.category === selectedCategory);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'title-desc') {
        return b.title.localeCompare(a.title);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const getFileIcon = (fileType: string) => {
    const type = fileType.toLowerCase();
    if (type.includes('pdf')) return <FileText className="w-8 h-8 text-red-500" />;
    if (type.includes('image')) return <FileImage className="w-8 h-8 text-green-500" />;
    if (type.includes('presentation')) return <MonitorPlay className="w-8 h-8 text-orange-500" />;
    if (type.includes('document')) return <File className="w-8 h-8 text-brand-500" />;
    return <BookOpen className="w-8 h-8 text-slate-500" />;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Study Resources</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Browse our comprehensive collection of study materials, notes, and past papers. 
            Use the filters below to find exactly what you need for your courses.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-6 rounded-2xl shadow-card border border-slate-100 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            
            {/* Search Bar */}
            <div className="relative flex-grow w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, description, or subject..."
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              />
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              {/* Category Filter */}
              <div className="relative w-full md:w-48">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-4 w-4 text-slate-400" />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full pl-9 pr-8 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 appearance-none transition-all cursor-pointer"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full md:w-48 px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all cursor-pointer"
              >
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
                <option value="category">Category</option>
              </select>
            </div>
            
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource: Resource) => (
              <div 
                key={resource.id} 
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-card-hover hover:border-brand-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">
                    {getFileIcon(resource.fileType)}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-50 text-brand-700">
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
                  {resource.title}
                </h3>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                    Subject: {resource.subject}
                  </span>
                  {resource.year && (
                    <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                      Year: {resource.year}
                    </span>
                  )}
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                    Type: {resource.fileType}
                  </span>
                </div>

                <p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-3">
                  {resource.description}
                </p>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-50">
                  <a 
                    href={resource.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-50 text-brand-700 font-medium rounded-xl hover:bg-brand-100 transition-colors"
                  >
                    <Eye className="w-4 h-4" /> View
                  </a>
                  <a 
                    href={resource.downloadUrl}
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-600 text-white font-medium rounded-xl hover:bg-brand-700 transition-colors shadow-card shadow-brand-600/20"
                  >
                    <Download className="w-4 h-4" /> Save
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center shadow-card border border-slate-100 py-24">
            <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-full mb-6">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No resources found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any resources matching your current search or filter criteria. 
              Try adjusting your filters or searching with different keywords.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSortBy('title-asc');
              }}
              className="mt-8 px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Resources;
