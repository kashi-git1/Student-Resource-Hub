import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Code, 
  GraduationCap, 
  Library, 
  Link as LinkIcon,
  ArrowRight,
  FolderTree,
  Zap,
  Users,
  Gift,
  Download
} from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-100 opacity-50 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything You Need to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Study Smarter</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students accessing high-quality study notes, past papers, 
            and premium educational content curated to help you achieve academic excellence.
          </p>

          <div className="max-w-2xl mx-auto pt-4 pb-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 md:py-5 border-2 border-slate-100 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 shadow-xl shadow-slate-100 transition-all text-lg"
                placeholder="Search for subjects, topics, or specific resources..."
              />
              <button className="absolute inset-y-2 right-2 px-6 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors shadow-card hidden sm:block">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link 
              to="/resources" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2"
            >
              Explore Resources <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="#categories" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:-translate-y-0.5 transition-all shadow-card flex items-center justify-center gap-2"
            >
              Browse Categories
            </a>
          </div>
        </div>
      </section>

      {/* 2. Categories Section */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Browse by Category</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Find exactly what you're looking for across our structured resource categories.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <CategoryCard title="Notes" icon={<BookOpen />} color="text-emerald-600" bg="bg-emerald-100" link="/notes" />
            <CategoryCard title="Past Papers" icon={<FileText />} color="text-purple-600" bg="bg-purple-100" link="/past-papers" />
            <CategoryCard title="Programming" icon={<Code />} color="text-brand-600" bg="bg-brand-100" link="/resources" />
            <CategoryCard title="Courses" icon={<GraduationCap />} color="text-orange-600" bg="bg-orange-100" link="/courses" />
            <CategoryCard title="Study Material" icon={<Library />} color="text-rose-600" bg="bg-rose-100" link="/resources" />
            <CategoryCard title="Useful Links" icon={<LinkIcon />} color="text-cyan-600" bg="bg-cyan-100" link="/resources" />
          </div>
        </div>
      </section>

      {/* 3. Featured Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Resources</h2>
              <p className="text-slate-600">Most downloaded and highest-rated materials this week.</p>
            </div>
            <Link to="/resources" className="hidden sm:flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors group">
              View All <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard 
              title="Advanced Data Structures"
              category="Programming"
              type="Document"
              downloads="1.2k"
              rating="4.9"
            />
            <ResourceCard 
              title="Calculus III Master Notes"
              category="Mathematics"
              type="Notes"
              downloads="850"
              rating="4.8"
            />
            <ResourceCard 
              title="Physics 2023 Final Paper"
              category="Past Papers"
              type="PDF Format"
              downloads="2.4k"
              rating="4.7"
            />
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/resources" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              View All Resources <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Student Resource Hub Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Student Resource Hub?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Built by students, for students. We understand what you need to succeed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title="Organized Resources" 
              description="Everything is categorized logically so you can find exactly what you need in seconds."
              icon={<FolderTree />}
            />
            <FeatureCard 
              title="Easy Access" 
              description="No complicated sign-ups. Get straight to the learning materials with a simple click."
              icon={<Zap />}
            />
            <FeatureCard 
              title="Student Friendly" 
              description="Content tailored specifically to current curriculum requirements and standards."
              icon={<Users />}
            />
            <FeatureCard 
              title="Free Materials" 
              description="Quality education shouldn't have a paywall. Access thousands of free resources."
              icon={<Gift />}
            />
          </div>
        </div>
      </section>

      {/* 5. Call-to-action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-50 opacity-50 transform -skew-y-3 origin-top-left -z-10"></div>
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-slate-100 relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-2xl mb-6">
            <GraduationCap className="w-8 h-8 text-brand-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Boost Your Grades?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Stop wasting time searching multiple sites. Get all the study materials, notes, and past papers you need in one centralized hub.
          </p>
          <Link 
            to="/resources" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-600 rounded-xl hover:bg-brand-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto"
          >
            Start Exploring Now
          </Link>
        </div>
      </section>
    </div>
  );
};

// Sub-components

const CategoryCard = ({ title, icon, color, bg, link }: { title: string, icon: React.ReactNode, color: string, bg: string, link: string }) => (
  <Link 
    to={link}
    className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className={`p-4 rounded-xl ${bg} ${color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
      {/* Clone element to add standard sizing */}
      {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
    </div>
    <h3 className="font-semibold text-slate-900 text-center">{title}</h3>
  </Link>
);

const ResourceCard = ({ title, category, type, downloads, rating }: { title: string, category: string, type: string, downloads: string, rating: string }) => (
  <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-card-hover hover:border-brand-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
    <div className="flex justify-between items-start mb-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-brand-50 text-brand-700">
        {category}
      </span>
      <span className="inline-flex items-center text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-md">
        ★ {rating}
      </span>
    </div>
    
    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{title}</h3>
    <p className="text-sm text-slate-500 mb-6 flex-grow">Comprehensive coverage of core concepts and principles.</p>
    
    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
      <div className="flex items-center gap-4 text-sm text-slate-500">
        <span className="flex items-center gap-1">
          <FileText className="w-4 h-4" /> {type}
        </span>
        <span className="flex items-center gap-1">
          <Download className="w-4 h-4" /> {downloads}
        </span>
      </div>
      <button className="p-2 text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
        <Download className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-800 transition-colors duration-300">
    <div className="p-4 bg-slate-800 rounded-2xl text-brand-400 mb-6 ring-1 ring-white/10 shadow-lg">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export default Home;
