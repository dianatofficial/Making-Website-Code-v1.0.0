import React, { useState, useEffect } from 'react';
import { ProjectPlan } from '../types';
import Button from './Button';
import { CodeXml, Database, Server, LayoutTemplate, Lock, Unlock, Smartphone, Component, FileCode2, TestTube, Container, Store, Eye, Code, Save } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Smartphone, Component, FileCode2, TestTube, Container, Store, Database, Server, LayoutTemplate
};

const DynamicIcon: React.FC<{ name: string, className?: string }> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

interface StepPlanningProps {
  plan: ProjectPlan;
  onConfirm: () => void;
  isLoading: boolean;
  onPlanChange: (newPlan: ProjectPlan) => void;
}

const MethodBadge: React.FC<{ method: string }> = ({ method }) => {
    const colors: { [key: string]: string } = {
        GET: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
        POST: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        PUT: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        DELETE: 'bg-red-500/20 text-red-400 border-red-500/30',
    };
    return (
        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${colors[method] || 'bg-slate-500/20 text-slate-400 border-slate-500/30'}`}>
            {method}
        </span>
    );
};

const PlanSection: React.FC<{ title: string; description: string; icon: string; children: React.ReactNode; }> = ({ title, description, icon, children }) => (
    <div className="bg-slate-900/70 rounded-lg border border-slate-700 overflow-hidden">
        <div className="flex items-start gap-4 p-4 border-b border-slate-700 bg-slate-900">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600/50 flex-shrink-0 mt-1">
                <DynamicIcon name={icon} className="w-6 h-6 text-teal-400" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-400">{description}</p>
            </div>
        </div>
        <div className="p-4">{children}</div>
    </div>
);


const StepPlanning: React.FC<StepPlanningProps> = ({ plan, onConfirm, isLoading, onPlanChange }) => {
  const [viewMode, setViewMode] = useState<'pretty' | 'raw'>('pretty');
  const [jsonString, setJsonString] = useState('');
  const [jsonError, setJsonError] = useState<string | null>(null);

  useEffect(() => {
    setJsonString(JSON.stringify(plan, null, 2));
    setJsonError(null);
  }, [plan]);
  
  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonString(e.target.value);
    try {
      JSON.parse(e.target.value);
      setJsonError(null);
    } catch (error) {
      setJsonError("JSON نامعتبر است.");
    }
  };
  
  const handleSaveChanges = () => {
    if (jsonError) return;
    try {
      const newPlan = JSON.parse(jsonString);
      onPlanChange(newPlan);
      setViewMode('pretty');
    } catch (error) {
      setJsonError("خطا در ذخیره سازی: JSON نامعتبر است.");
    }
  }

  const PrettyView = () => (
    <div className="space-y-6">
      {/* Project Overview */}
      <div className="text-center">
          <h3 className="text-2xl font-bold text-white">{plan.projectName}</h3>
          <p className="text-slate-400 max-w-3xl mx-auto mt-2">{plan.description_fa}</p>
      </div>

      {/* Architecture Highlights */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">اصول معماری</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plan.architectureHighlights.map(highlight => (
            <div key={highlight.title} className="bg-slate-900/70 p-4 rounded-lg border border-slate-700 flex gap-4 items-start">
              <DynamicIcon name={highlight.icon} className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-slate-200">{highlight.title}</p>
                <p className="text-slate-400 text-sm">{highlight.description_fa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Technologies */}
      <div>
         <h3 className="text-lg font-semibold text-white mb-3">پشته فناوری (Tech Stack)</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                    <LayoutTemplate className="w-7 h-7 text-sky-400" /> <p className="font-bold text-slate-300">فرانت‌اند</p>
                </div>
                <p className="font-semibold text-slate-400 text-sm mb-1">{plan.technologies.frontend.name}</p>
                <p className="text-slate-500 text-xs">{plan.technologies.frontend.description_fa}</p>
            </div>
             <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                    <Server className="w-7 h-7 text-emerald-400" /> <p className="font-bold text-slate-300">بک‌اند</p>
                </div>
                <p className="font-semibold text-slate-400 text-sm mb-1">{plan.technologies.backend.name}</p>
                <p className="text-slate-500 text-xs">{plan.technologies.backend.description_fa}</p>
            </div>
             <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                    <Database className="w-7 h-7 text-amber-400" /> <p className="font-bold text-slate-300">پایگاه داده</p>
                </div>
                <p className="font-semibold text-slate-400 text-sm mb-1">{plan.technologies.database.name}</p>
                <p className="text-slate-500 text-xs">{plan.technologies.database.description_fa}</p>
            </div>
        </div>
      </div>

      {/* Database Schema */}
      <PlanSection title="ساختار پایگاه داده" description={plan.databaseSchema.description_fa} icon="Database">
           <div className="space-y-4">
              {Object.entries(plan.databaseSchema.tables).map(([tableName, table]) => (
                  <div key={tableName} className="bg-slate-800/50 p-4 rounded-md border border-slate-600/50">
                      <p className="font-mono font-bold text-teal-300 mb-2">{tableName}</p>
                      <ul className="space-y-1">
                          {Object.entries(table.columns).map(([colName, colType]) => (
                              <li key={colName} className="flex justify-between items-center text-sm font-mono text-slate-300">
                                  <span>{colName}</span>
                                  <span className="text-slate-400">{colType}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
           </div>
      </PlanSection>
      
      {/* Backend API */}
      <PlanSection title="API های بک‌اند" description={plan.backendAPI.description_fa} icon="Server">
          <div className="space-y-2">
              {Object.entries(plan.backendAPI.endpoints).map(([endpoint, details]) => (
                  <div key={endpoint} className="bg-slate-800/50 p-3 rounded-md border border-slate-600/50">
                      <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-3">
                              <MethodBadge method={details.method} />
                              <p className="font-mono text-sm text-teal-300">{endpoint}</p>
                          </div>
                          {details.authRequired 
                              ? <span title="نیاز به احراز هویت"><Lock className="w-4 h-4 text-amber-400" /></span> 
                              : <span title="احراز هویت نیاز نیست"><Unlock className="w-4 h-4 text-emerald-400" /></span>}
                      </div>
                      <p className="text-slate-400 text-sm">{details.description}</p>
                  </div>
              ))}
          </div>
      </PlanSection>

      {/* Frontend Components */}
       <PlanSection title="کامپوننت‌های فرانت‌اند" description={plan.frontendComponents.description_fa} icon="LayoutTemplate">
          <div className="flex flex-wrap gap-2">
              {plan.frontendComponents.components.map(comp => (
                  <span key={comp} className="bg-slate-700/80 text-slate-300 text-sm font-mono px-3 py-1 rounded-md border border-slate-600/50">
                      {`<${comp} />`}
                  </span>
              ))}
          </div>
      </PlanSection>
    </div>
  );
  
  const RawView = () => (
    <div>
        <textarea
          value={jsonString}
          onChange={handleJsonChange}
          className="w-full bg-slate-950 border border-slate-700 rounded-md p-4 text-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition font-mono text-xs"
          rows={30}
        />
        {jsonError && <p className="text-red-400 text-sm mt-2">{jsonError}</p>}
        <div className="mt-4 text-left">
            <Button onClick={handleSaveChanges} disabled={!!jsonError} icon={Save}>
                ذخیره تغییرات
            </Button>
        </div>
    </div>
  );

  return (
    <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-2xl font-bold text-white">گام دوم: برنامه‌ریزی</h2>
                <p className="text-slate-400">نقشه پروژه را بازبینی و در صورت نیاز ویرایش کنید.</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg p-1 bg-slate-900/70 border border-slate-700">
                <button
                  onClick={() => setViewMode('pretty')}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-md flex items-center gap-2 transition-colors ${viewMode === 'pretty' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  <Eye className="w-4 h-4"/> نمایش گرافیکی
                </button>
                <button
                  onClick={() => setViewMode('raw')}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-md flex items-center gap-2 transition-colors ${viewMode === 'raw' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  <Code className="w-4 h-4"/> ویرایش JSON
                </button>
            </div>
        </div>

        {viewMode === 'pretty' ? <PrettyView /> : <RawView />}

        <div className="mt-8 border-t border-slate-700 pt-6 text-left">
            <Button onClick={onConfirm} isLoading={isLoading} icon={CodeXml}>
                تایید نقشه و تولید کد
            </Button>
        </div>
    </div>
  );
};

export default StepPlanning;