import React from 'react';
import { GenerationStep } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: GenerationStep;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { id: GenerationStep.Ideation, name: 'ایده‌پردازی' },
    { id: GenerationStep.Planning, name: 'برنامه‌ریزی' },
    { id: GenerationStep.Generation, name: 'تولید کد' },
    { id: GenerationStep.Download, name: 'دریافت خروجی' },
  ];

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
            {currentStep > step.id ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-teal-600" />
                </div>
                <div className="relative flex h-9 w-9 items-center justify-center bg-teal-600 rounded-full shadow-lg shadow-teal-500/30">
                  <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <span className="block mt-2 text-xs sm:text-sm text-slate-200 font-medium">{step.name}</span>
              </>
            ) : currentStep === step.id ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-slate-700" />
                </div>
                <div className="relative flex h-9 w-9 items-center justify-center bg-slate-800 border-2 border-teal-500 rounded-full shadow-lg shadow-teal-500/30">
                  <span className="h-3 w-3 bg-teal-500 rounded-full" aria-hidden="true" />
                </div>
                <span className="block mt-2 text-xs sm:text-sm text-teal-400 font-bold">{step.name}</span>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-slate-700" />
                </div>
                <div className="group relative flex h-9 w-9 items-center justify-center bg-slate-800 border-2 border-slate-600 rounded-full">
                   <span className="h-3 w-3 bg-slate-600 rounded-full" aria-hidden="true" />
                </div>
                 <span className="block mt-2 text-xs sm:text-sm text-slate-500 font-medium">{step.name}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepIndicator;
