import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, Book, FileText, GraduationCap, Info, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Resources', path: '/resources', icon: <Book className="w-4 h-4" /> },
    { name: 'Notes', path: '/notes', icon: <FileText className="w-4 h-4" /> },
    { name: 'Past Papers', path: '/past-papers', icon: <FileText className="w-4 h-4" /> },
    { name: 'Courses', path: '/courses', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' : 'bg-white border-b border-slate-100 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-brand-600 text-white p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">StudentHub</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-brand-50 text-brand-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2">Log in</button>
            <button className="text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 transition-colors px-5 py-2.5 rounded-lg shadow-sm">Sign up</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 flex flex-col gap-1 max-w-7xl mx-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {React.cloneElement(link.icon as React.ReactElement, { className: 'w-5 h-5' })}
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button className="w-full text-center py-3 text-slate-600 font-medium bg-slate-50 rounded-xl">Log in</button>
              <button className="w-full text-center py-3 bg-brand-600 text-white font-medium rounded-xl shadow-sm">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <div className="bg-brand-600 text-white p-2 rounded-lg">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">StudentHub</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              The premier platform for university and college students to access high-quality, verified study materials and premium educational resources.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/notes" className="text-slate-400 hover:text-white transition-colors">Study Notes</Link></li>
              <li><Link to="/past-papers" className="text-slate-400 hover:text-white transition-colors">Past Papers</Link></li>
              <li><Link to="/courses" className="text-slate-400 hover:text-white transition-colors">Premium Courses</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white transition-colors">Programming</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3.5 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Copyright Info</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Student Resource Hub. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social placeholder links */}
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-brand-100 selection:text-brand-900 font-sans">
      <Navbar />
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
