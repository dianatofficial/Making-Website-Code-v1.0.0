

import React, { useState } from 'react';
import { GenerationStep, ProjectPlan } from '../types';
import StepIndicator from './StepIndicator';
import StepIdeation from './StepIdeation';
import StepPlanning from './StepPlanning';
import StepGeneration from './StepGeneration';
import StepDownload from './StepDownload';
import { generateProjectPlan, generateProjectCode } from '../services/geminiService';

const WebsiteGenerator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<GenerationStep>(GenerationStep.Ideation);
  const [projectIdea, setProjectIdea] = useState<string>('');
  const [projectPlan, setProjectPlan] = useState<ProjectPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePlanGeneration = async (idea: string) => {
    setIsLoading(true);
    setError(null);
    setProjectIdea(idea);
    try {
      const plan = await generateProjectPlan(idea);
      setProjectPlan(plan);
      setCurrentStep(GenerationStep.Planning);
    } catch (err) {
      setError('خطایی در تولید نقشه پروژه رخ داد. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeGeneration = async () => {
    if (!projectPlan) return;
    setIsLoading(true);
    setError(null);
    setCurrentStep(GenerationStep.Generation);
    try {
      await generateProjectCode(projectPlan);
      setCurrentStep(GenerationStep.Download);
    } catch (err) {
      setError('خطایی در تولید کد پروژه رخ داد. لطفاً دوباره تلاش کنید.');
      setCurrentStep(GenerationStep.Planning); // Go back to planning on error
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleEditPlan = () => {
    setCurrentStep(GenerationStep.Planning);
  };
  
  const handleStartOver = () => {
    setCurrentStep(GenerationStep.Ideation);
    setProjectIdea('');
    setProjectPlan(null);
    setError(null);
  };

  return (
    <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 sm:p-8 border border-slate-700">
      <StepIndicator currentStep={currentStep} />
      {error && <div className="bg-red-500/20 text-red-300 p-3 rounded-md my-4">{error}</div>}

      <div className="mt-8">
        {currentStep === GenerationStep.Ideation && (
          <StepIdeation onGeneratePlan={handlePlanGeneration} isLoading={isLoading} />
        )}
        {currentStep === GenerationStep.Planning && projectPlan && (
          <StepPlanning 
            plan={projectPlan} 
            onConfirm={handleCodeGeneration} 
            isLoading={isLoading}
            onPlanChange={setProjectPlan} 
          />
        )}
        {currentStep === GenerationStep.Generation && (
           <StepGeneration />
        )}
        {currentStep === GenerationStep.Download && projectPlan && (
           <StepDownload projectName={projectPlan.projectName} onStartOver={handleStartOver} onEditPlan={handleEditPlan} />
        )}
      </div>
    </div>
  );
};

export default WebsiteGenerator;