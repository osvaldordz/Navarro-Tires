
import React from 'react';

const Hero: React.FC = () => {
  const heroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuD3NaRi4sd5ZyoorZycM6e5BPxS6Zm-kWJmjfy0efLq45w0KKXAkRCVT1FwK5dtNEMhVQGIFytGrBMgvzVtJNA4OEgegr5xMEsVWRUpp6Og_InH6PuvP5MoGJXTSwEugMWMJNRwj8VfYCMIcFAz9-7Q8rDu86LPB98G1YNH81uahhQd_HMR3zAyb_0yvQNTxXXYBFrxPq5x9Xm7iM-rsUfTq3R6q84FIOqjT8HjeLe7ZzA9dVemLDUjY540noW139wymPunR9WvoUc";

  return (
    <section className="relative flex min-h-[560px] flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105" 
          style={{ backgroundImage: `url("${heroImg}")` }}
        ></div>
      </div>
      <div className="max-w-[1280px] mx-auto w-full relative z-20 px-4 md:px-10 py-20">
        <div className="flex flex-col gap-6 max-w-[640px]">
          <div className="flex flex-col gap-4 text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-200 text-xs font-bold w-fit uppercase tracking-wider backdrop-blur-md">
              Expert Tire Service
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-sm">
              Keep Rolling with <span className="text-primary">Confidence</span>
            </h1>
            <p className="text-gray-200 text-base md:text-lg font-normal leading-relaxed max-w-[540px]">
              Navarro Tires - Llantas: Your trusted local expert for new tires, flat repairs, wheel alignment, and balancing. We get you back on the road safely.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined">directions</span>
                Get Directions
              </span>
            </button>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_month</span>
                Book Service
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
