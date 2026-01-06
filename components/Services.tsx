
import React from 'react';

const services = [
  {
    title: 'New & Used Tires',
    description: 'Huge selection of top brands (Michelin, Goodyear, Bridgestone) and quality used tires for every budget.',
    icon: 'tire_repair'
  },
  {
    title: 'Flat Repair',
    description: 'Fast and reliable puncture repairs, patching, and plug services to get you back on the road safely.',
    icon: 'build'
  },
  {
    title: 'Balancing',
    description: 'Precision computer balancing to eliminate vibration and ensure your tires wear evenly.',
    icon: 'speed'
  },
  {
    title: 'Rotation',
    description: 'Extend the life of your tires with regular rotation services included with new tire purchases.',
    icon: 'sync'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#101922]" id="services">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Our Services
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-[720px]">
              From patching a flat to outfitting your truck with new treads, we provide comprehensive tire care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-gray-800 bg-background-light dark:bg-gray-900/50 p-6 transition-all hover:shadow-lg hover:border-primary/50 cursor-default"
              >
                <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">{service.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
