import React from 'react';
import WebsiteGenerator from './WebsiteGenerator';
import { Page } from '../types';
import { ArrowRight } from 'lucide-react';

interface WebsiteGeneratorPageProps {
  onNavigate: (page: Page) => void;
}

const WebsiteGeneratorPage: React.FC<WebsiteGeneratorPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <button 
          onClick={() => onNavigate('home')} 
          className="inline-flex items-center text-sm text-slate-400 hover:text-teal-400 transition-colors group"
        >
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover-arrow-translate-rtl" />
          <span>بازگشت به صفحه اصلی</span>
        </button>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">طراحی سایت</h2>
        <p className="text-slate-400 max-w-3xl mx-auto">
          فرآیند گام به گام ساخت وبسایت خود را از اینجا آغاز کنید. کافیست ایده خود را وارد کنید تا هوش مصنوعی نقشه راه و کدهای پروژه را برایتان تولید کند.
        </p>
      </div>
      <WebsiteGenerator />
    </div>
  );
};

export default WebsiteGeneratorPage;
