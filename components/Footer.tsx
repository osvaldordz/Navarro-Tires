
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#101922] border-t border-slate-200 dark:border-gray-800 py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">tire_repair</span>
            </div>
            <span className="text-lg font-bold text-[#111418] dark:text-white tracking-tight">Navarro Tires - Llantas</span>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">Home</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#services">Services</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#reviews">Reviews</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#contact">Contact</a>
          </div>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
        <div className="h-px bg-slate-100 dark:bg-gray-800 w-full"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 Navarro Tires. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-slate-600 dark:hover:text-slate-200" href="#">Privacy Policy</a>
            <a className="hover:text-slate-600 dark:hover:text-slate-200" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
