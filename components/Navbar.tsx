
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#101922]/95 backdrop-blur-sm border-b border-[#f0f2f4] dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-3">
        <header className="flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-3 text-[#111418] dark:text-white">
            <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">tire_repair</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold leading-tight tracking-[-0.015em]">Navarro Tires</h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              <a className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
              <a className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
              <a className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#reviews">Reviews</a>
              <a className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-md shadow-blue-500/20">
              <span className="truncate flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call Now
              </span>
            </button>
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
