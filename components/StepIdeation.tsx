import React, { useState } from 'react';
import Button from './Button';
import { Rocket } from 'lucide-react';

interface StepIdeationProps {
  onGeneratePlan: (idea: string) => void;
  isLoading: boolean;
}

const StepIdeation: React.FC<StepIdeationProps> = ({ onGeneratePlan, isLoading }) => {
  const [idea, setIdea] = useState('');
  const exampleIdeas = [
    "یک وبسایت نمونه کار برای یک عکاس",
    "یک فروشگاه آنلاین برای فروش قهوه",
    "یک پلتفرم وبلاگ نویسی ساده",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onGeneratePlan(idea);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-white mb-2">گام اول: ایده‌پردازی</h2>
      <p className="text-slate-400 mb-6">ایده اصلی وب‌سایت خود را توصیف کنید. هر چه جزئیات بیشتری ارائه دهید، نتیجه دقیق‌تر خواهد بود.</p>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={8}
          className="w-full bg-slate-900 border border-slate-700 rounded-md p-4 text-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
          placeholder="مثال: یک وبسایت برای رزرو آنلاین کلاس‌های یوگا با قابلیت پرداخت و پروفایل کاربری برای مربیان و شاگردان..."
        />
        <div className="mt-6 text-left">
          <Button type="submit" isLoading={isLoading} disabled={!idea.trim() || isLoading} icon={Rocket}>
            ایجاد نقشه پروژه
          </Button>
        </div>
      </form>

      <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-300 mb-3">یا از یک ایده نمونه استفاده کنید:</h3>
          <div className="flex flex-wrap gap-2">
            {exampleIdeas.map((ex, index) => (
                <button key={index} onClick={() => setIdea(ex)} className="bg-slate-700 text-sm text-slate-300 px-3 py-1 rounded-full hover:bg-slate-600 transition">
                    {ex}
                </button>
            ))}
          </div>
      </div>
    </div>
  );
};

export default StepIdeation;
