import React from 'react';
import { Rocket, CodeXml, ArrowLeft } from 'lucide-react';
import { Page } from '../types';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl md:text-7xl">
          مولد وبسایت با هوش مصنوعی
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400 sm:text-xl">
          ایده خود را به یک پروژه کامل، مدرن و آماده اجرا با فرانت‌اند، بک‌اند و دیتابیس تبدیل کنید.
        </p>
         <div className="mt-8 flex justify-center">
            <button 
                onClick={() => onNavigate('websiteGenerator')}
                className="inline-flex items-center justify-center rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 px-8 py-3 text-lg shadow-lg shadow-teal-500/20"
            >
                همین حالا شروع کنید
                <Rocket className="w-6 h-6 mr-2" />
            </button>
        </div>
      </header>

      {/* Tools Section */}
      <section className="mt-4 text-center">
         <h2 className="text-3xl font-bold text-white mb-3">ابزارها</h2>
         <p className="text-slate-400 max-w-3xl mx-auto mb-10">
            از ابزارهای قدرتمند ما برای سرعت بخشیدن به فرآیند توسعه خود استفاده کنید.
         </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Website Generator Card */}
            <div 
                onClick={() => onNavigate('websiteGenerator')}
                className="group bg-slate-800/50 rounded-xl shadow-lg p-6 border border-slate-700 hover:border-teal-500 hover:bg-slate-800 transition-all duration-300 cursor-pointer flex flex-col justify-between text-right"
            >
                <div>
                    <div className="flex items-center justify-center w-12 h-12 bg-slate-700/50 rounded-lg mb-4 border border-slate-600/50">
                        <CodeXml className="w-7 h-7 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">طراحی سایت</h3>
                    <p className="text-slate-400 text-sm">
                        ایده خود را وارد کنید تا هوش مصنوعی یک نقشه کامل از پروژه شامل ساختار دیتابیس، APIها و کامپوننت‌های فرانت‌اند را طراحی کرده و کدهای آن را تولید کند.
                    </p>
                </div>
                <div className="mt-6 flex items-center text-teal-400 font-semibold transition-colors group-hover:text-teal-300">
                    <span>وارد ابزار شوید</span>
                    <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover-arrow-translate" />
                </div>
            </div>

            {/* Placeholder for future cards */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-dashed border-slate-700 flex flex-col items-center justify-center text-slate-500">
                <p>قابلیت‌های جدید</p>
                <p className="text-sm">به زودی...</p>
            </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;
