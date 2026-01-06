
import React from 'react';

const WhyChoose: React.FC = () => {
  const chooseImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCYATBdY590sgVsmtReDg3f4gOLv-YO2ncG1d3Tf41hz03XMpgmc6iavWaeFeJ3RjYOVbtMGRBqnk9IPYbh113RzQEP4t9FC4nCSLmVbVNaxuSe2WjpjLXYbVpmcO6LuDpzKtymEoG52CqezBnEL0K98ItEZdZORKNnRQ_ud43h96UCNbqDIj_r6vWJqFdfb-Zmwx15seoJ1_hwbmm_FcoYWl_VZ3_s5ip7Zwqvbh7D0FXcsBQb4yjqTM5JKPEHlN2LkzpRpHui07E";

  const features = [
    {
      title: 'Fast Turnaround',
      description: 'Most services completed in under 45 minutes. No appointment needed for flats.',
      icon: 'timer'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees. We quote the full price including installation and disposal.',
      icon: 'attach_money'
    },
    {
      title: 'Warranty Included',
      description: 'All new tires come with manufacturer warranty and our service guarantee.',
      icon: 'verified_user'
    }
  ];

  return (
    <section className="py-16 bg-background-light dark:bg-[#0b1219]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Content */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative h-[400px]">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-110" 
              style={{ backgroundImage: `url("${chooseImg}")` }}
            ></div>
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div>
              <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight mb-4">Why Choose Navarro Tires?</h2>
              <p className="text-slate-600 dark:text-slate-400">We are a locally owned business committed to honesty and quality. We treat every car like it's our own.</p>
            </div>
            <div className="flex flex-col gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm h-fit text-primary">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[#111418] dark:text-white font-bold text-lg">{feature.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
