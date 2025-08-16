import React, { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

const generationMessages = [
    "پیکربندی ساختار پروژه...",
    "نوشتن کدهای مربوط به پایگاه داده...",
    "ایجاد API های بک‌اند...",
    "طراحی کامپوننت‌های فرانت‌اند React...",
    "افزودن سیستم احراز هویت...",
    "آماده‌سازی فایل‌های Docker...",
    "جمع‌بندی نهایی پروژه...",
];

const StepGeneration: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState(generationMessages[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const nextProgress = prev + (10 + Math.random() * 5);
                if (nextProgress >= 100) {
                    clearInterval(interval);
                    setMessage("پروژه شما تقریباً آماده است!");
                    return 100;
                }
                
                const messageIndex = Math.min(
                    Math.floor(nextProgress / (100 / generationMessages.length)),
                    generationMessages.length - 1
                );
                setMessage(generationMessages[messageIndex]);
                return nextProgress;
            });
        }, 700);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-fade-in text-center py-10">
            <LoaderCircle className="w-16 h-16 text-teal-500 mx-auto mb-4 animate-spin" />
            <h2 className="text-2xl font-bold text-white mb-2">گام سوم: تولید کد</h2>
            <p className="text-slate-400 mb-8">هوش مصنوعی در حال نوشتن کد برای تمام فایل‌های پروژه است. این فرآیند ممکن است چند لحظه طول بکشد.</p>
            
            <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
                <div 
                    className="bg-teal-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-teal-400 font-semibold h-6">{message}</p>
        </div>
    );
};

export default StepGeneration;
