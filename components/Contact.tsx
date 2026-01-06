
import React from 'react';

const Contact: React.FC = () => {
  const mapImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDfJ3-zWOHR30sYgAfbl7qqh7RIJfyljtf1CZL3GBavaEJQeQ6JFT2HZ_2xLA4lsWQFT62ynVtxCqPymK1pWkinrg8PyhroN70H_keBLk-x7hCIO8ukTZAk4QbeEfzBFEQKzfRaEHUUCyCcbKIL9NukcnqeNTpNzTLtxWNZT4kxs4pwSmoHm5C54PecKQocNjJF7oS8bMsGyQlf-8rg3YvkRPyG9O1t0WaQ0Jdp0TzZ4OphSUTKLFvQH9VramNHvAvzHAt8Fm4Iflc";
  const satelliteImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuD_vh3VzsQODjh_jyFgEtvtA3myNMquJC43vq5u2L7cbouhZgt-4QhxPCkIPteONHMwTl2GtNWMrm46mZE2T7Fg7hwld-qMWozZQuz7noIqkYoklhqsA4h4BciqLL-QBXHoed7I6ZUxaTdHKNIDzp36ykah6F1ZLWePJskZMuO5M_wetB3ZPbKSj4e7ZqMo4xrCVqn2nXY38pxi7R5UY1GSNOvRt3tnUY9KOJ-m8GFNfcCw4BqT7MrCj3OZdyqoREp8vhj9XmowTnQ";

  return (
    <section className="py-16 bg-background-light dark:bg-[#0b1219]" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="bg-white dark:bg-[#101922] rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-gray-800 flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col gap-8 border-r border-slate-100 dark:border-gray-800">
            <div>
              <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">Visit Us Today</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Stop by for a free air pressure check!</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <h4 className="font-bold text-[#111418] dark:text-white">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">1234 Autoplex Drive<br />San Antonio, TX 78201</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                <div>
                  <h4 className="font-bold text-[#111418] dark:text-white">Opening Hours</h4>
                  <div className="text-slate-600 dark:text-slate-400 text-sm grid grid-cols-[80px_1fr] gap-x-2">
                    <span>Mon-Fri:</span> <span>8:00 AM - 6:00 PM</span>
                    <span>Sat:</span> <span>9:00 AM - 4:00 PM</span>
                    <span>Sun:</span> <span className="text-red-500 font-medium">Closed</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">call</span>
                <div>
                  <h4 className="font-bold text-[#111418] dark:text-white">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">(210) 555-0199</p>
                  <a className="text-primary text-sm font-bold hover:underline" href="tel:2105550199">Call now</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">mail</span>
                <div>
                  <h4 className="font-bold text-[#111418] dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">service@navarrotires.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Map Side */}
          <div className="w-full md:w-2/3 h-[400px] md:h-auto bg-slate-200 relative group overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url("${mapImg}")` }}
            ></div>
            {/* Map overlay UI (Mock) */}
            <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded shadow-lg flex flex-col gap-1 w-[120px]">
              <div className="h-16 bg-slate-100 dark:bg-gray-700 rounded mb-1 overflow-hidden relative">
                <div 
                  className="w-full h-full bg-cover bg-center opacity-70" 
                  style={{ backgroundImage: `url("${satelliteImg}")` }}
                ></div>
              </div>
              <span className="text-[10px] font-bold text-center text-[#111418] dark:text-white">Satellite View</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <span className="material-symbols-outlined text-primary text-6xl drop-shadow-2xl animate-bounce material-symbols-fill">location_on</span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-black/20 rounded-full blur-[2px]"></div>
              </div>
            </div>
            {/* Map Label */}
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-[#101922]/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-md flex flex-col">
                <span className="text-xs font-bold text-[#111418] dark:text-white">San Antonio</span>
                <span className="text-[10px] text-slate-500">Texas, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
