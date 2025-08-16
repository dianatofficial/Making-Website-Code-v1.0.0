import React from 'react';
import { Home, CodeXml, Rocket } from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { name: 'صفحه اصلی', page: 'home', icon: <Home className="w-5 h-5" /> },
    { name: 'طراحی سایت', page: 'websiteGenerator', icon: <CodeXml className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-slate-950/70 backdrop-blur-sm p-6 border-l border-slate-800 hidden lg:block">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center border border-teal-500/20">
            <Rocket className="h-6 w-6 text-teal-400" />
        </div>
        <h2 className="text-xl font-bold text-white">ProjectGen</h2>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onNavigate(item.page as Page)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-right ${
              currentPage === item.page
                ? 'bg-teal-500/10 text-teal-400 font-semibold'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
