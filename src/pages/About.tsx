import React from 'react';
import { 
  BookOpen, 
  Target, 
  Lightbulb, 
  Heart,
  FileText,
  Code,
  GraduationCap,
  Send,
  Mail,
  MessageSquare
} from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-brand-600 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            About Student Resource Hub
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to democratizing education by providing high-quality, accessible, and organized study materials for students worldwide.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* What and Why */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <div className="flex items-center gap-3 mb-4 text-brand-600">
                <Lightbulb className="w-8 h-8" />
                <h2 className="text-3xl font-bold text-slate-900">What is It?</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Student Resource Hub is a centralized platform designed to solve the fragmentation of study materials. 
                Instead of scouring dozens of websites for notes, past papers, and tutorials, students can find 
                everything they need in one carefully organized, easily searchable location.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 text-brand-600">
                <Heart className="w-8 h-8" />
                <h2 className="text-3xl font-bold text-slate-900">Why We Built It</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                We experienced firsthand the frustration of missing lecture notes, disorganized past papers, and 
                expensive premium courses. We built this hub to ensure every student has equal access to the tools 
                required for academic success, regardless of their background.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-16 text-center border border-slate-100">
            <Target className="w-16 h-16 text-brand-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto italic">
              "To empower students to reach their full academic potential by providing frictionless access to 
              premium-quality educational resources, fostering a global community of collaborative learning."
            </p>
          </div>

          {/* What We Provide (Feature Cards) */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Provide</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">A comprehensive suite of tools and materials tailored for modern learning.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-shadow text-center">
                <BookOpen className="w-10 h-10 text-brand-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Detailed Notes</h3>
                <p className="text-sm text-slate-500">Comprehensive, peer-reviewed study notes for various subjects.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-shadow text-center">
                <FileText className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Past Papers</h3>
                <p className="text-sm text-slate-500">Extensive archives of past examinations to help you practice effectively.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-shadow text-center">
                <GraduationCap className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Premium Courses</h3>
                <p className="text-sm text-slate-500">Structured video courses and tutorials for deep-dive learning.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-shadow text-center">
                <Code className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Programming</h3>
                <p className="text-sm text-slate-500">Specialized resources, code snippets, and guides for developers.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Simple Contact Section */}
      <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-400">Have a question, feedback, or want to contribute a resource? We'd love to hear from you.</p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl flex flex-col md:flex-row gap-12">
            
            <div className="flex-1 space-y-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-700 rounded-xl">
                  <Mail className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Us</p>
                  <p className="font-medium">hello@studentresourcehub.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-700 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Join our Discord</p>
                  <p className="font-medium">discord.gg/studenthub</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
