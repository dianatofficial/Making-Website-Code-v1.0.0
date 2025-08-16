import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import WebsiteGeneratorPage from './components/WebsiteGeneratorPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen flex">
      <Sidebar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
          {currentPage === 'websiteGenerator' && <WebsiteGeneratorPage onNavigate={navigateTo} />}
        </div>
      </main>
    </div>
  );
};

export default App;