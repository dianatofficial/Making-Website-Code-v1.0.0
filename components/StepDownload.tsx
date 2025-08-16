import React from 'react';
import Button from './Button';
import { CheckCircle2, Package } from 'lucide-react';

interface StepDownloadProps {
  projectName: string;
  onStartOver: () => void;
  onEditPlan: () => void;
}

const StepDownload: React.FC<StepDownloadProps> = ({ projectName, onStartOver, onEditPlan }) => {
  return (
    <div className="animate-fade-in text-center py-10">
      <div className="relative inline-block">
        <div className="absolute -inset-2 bg-teal-500/20 rounded-full blur-xl"></div>
        <CheckCircle2 className="relative w-20 h-20 text-teal-400 mx-auto mb-4" />
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-2">پروژه شما آماده است!</h2>
      <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
        پروژه <span className="font-bold text-teal-400">{projectName}</span> با موفقیت ایجاد شد.
        اکنون می‌توانید فایل .zip پروژه را دانلود کرده و با دستورالعمل‌های داخل فایل README.md آن را اجرا کنید.
      </p>

      <div className="flex justify-center gap-4">
        <Button onClick={onStartOver} variant="secondary">
          شروع یک پروژه جدید
        </Button>
        <a href="/mock-project.zip" download={`${projectName}.zip`}>
            <Button variant="primary" icon={Package}>
                دانلود پروژه (.zip)
            </Button>
        </a>
      </div>
       <button onClick={onEditPlan} className="text-slate-400 hover:text-teal-400 mt-6 text-sm transition-colors">
        بازگشت و ویرایش نقشه
       </button>
    </div>
  );
};

export default StepDownload;
