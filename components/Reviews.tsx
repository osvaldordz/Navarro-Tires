
import React from 'react';

const reviews = [
  {
    name: 'Carlos M.',
    type: 'Local Guide',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrSxhmBsdXmI9ImFP4nnAeLh2VGmAsMQS5MB1L7kp35AgiijiKEGJW_5PDxTQ5eQwlWJKWD5du57ebtuh-8fVYIfuGhf1IR0I_LfOTrCA7NLZ55Gq0pOpb5RhHyIhSzTgB_JZLgZZs8H6LTM-uIM7h0hTYuVxqC83to2uU0S8NoAtW7ahelvbG0poZL7CUlKF_cQQRehkLS3i0IIrkAK2jRB0qmIVzzROvs4FtDyN4nlfutu9sQ5DTFAvfsq6i3N4uQ7JxFRpE0Sk',
    rating: 5,
    text: '"Saved me on a Sunday morning! Had a blowout on the freeway and they had the exact size I needed. In and out in 30 minutes. Highly recommend!"'
  },
  {
    name: 'Sarah Jenkins',
    type: 'Loyal Customer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcKYYuB6H5bE5KOmrSnXkiZPzklDK-_HJrnbRqlsWFSlNULMU_qB9anirFvkU9-WEnP_cRvesgPy57ly4j69m0Sbra2fGTBbRj0oWG5nKVjaFG1WJdRdyA7d1OmXWaZND4b8DivuVyInDpEOwWR0Q2pHn1jBOhRYXk8HzXd72-LRTi8sYGNyhvAYSQUbBJNdvVePuwONYzHdFrsavARqkZI0Y84Fxpst---1717u83LG_oqRg_phkyTVFJll1xNv5UxC3VEwBQzJo',
    rating: 5,
    text: '"Honest prices. I went to another shop that tried to upsell me on 4 tires when I only needed 2. Navarro told me the truth and saved me $300."'
  },
  {
    name: 'David R.',
    type: 'First-time Customer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhqdMWA_k7pQoh7hn_4V362VaiCmk8pDWviUyxFgzZcqfDTkbFOK5tM0ssJt-4EAlM4T-lYzN7FrvhjmJ5MSwi6Zo_4PXlr6mnsysbbJC-ouuTg-WnfjbYM1zv7YTnn0EPv1q7t3Qtc9nDyy3Es_yXA35M5iqQsgI_jgkfw0kYILefWDpTUNXfzQcUcFuPu-Q9FwuqLFtnS159xG-JFtFao0CAaND2_ZAFZgRyVVhmk9YmHgnrHiugsEY8E6S6xSynxuGLHkZjvdc',
    rating: 4.5,
    text: '"Great service for wheel alignment. My car drives straight as an arrow now. The waiting area is clean and the staff is super friendly."'
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#101922]" id="reviews">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-[#111418] dark:text-white text-3xl font-bold">Customer Reviews</h2>
          <div className="flex items-center gap-1 text-yellow-500">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="material-symbols-outlined text-[24px] material-symbols-fill">star</span>
            ))}
            <span className="text-[#111418] dark:text-white font-bold ml-2 text-lg">4.9/5</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400">Based on 150+ local reviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-background-light dark:bg-gray-900 p-6 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-slate-300 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url("${review.avatar}")` }}
                  ></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111418] dark:text-white">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.type}</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`material-symbols-outlined text-[18px] ${i < Math.floor(review.rating) ? 'material-symbols-fill' : ''}`}>
                    {i < Math.floor(review.rating) ? 'star' : (review.rating % 1 !== 0 ? 'star_half' : 'star')}
                  </span>
                ))}
              </div>
              <p className="text-[#111418] dark:text-gray-300 text-sm leading-relaxed italic">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
