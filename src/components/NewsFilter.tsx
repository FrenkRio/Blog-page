import React, { useState, useRef, useEffect } from 'react';
import { FiFilter, FiX, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import type { ArticleCategory } from '../types';

interface NewsFilterProps {
  categories: ArticleCategory[];
  tags: string[];
  activeFilters: { category: ArticleCategory | null; tag: string | null };
  onFilterChange: (type: 'category' | 'tag', value: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const NewsFilter: React.FC<NewsFilterProps> = ({ 
  categories, 
  tags, 
  activeFilters, 
  onFilterChange,
  searchQuery,
  onSearchChange
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filterComponentRef = useRef<HTMLDivElement>(null);

  const activeFilterCount = [activeFilters.category, activeFilters.tag].filter(Boolean).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterComponentRef.current && !filterComponentRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={filterComponentRef}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>

      <input
        type="text"
        placeholder="Rechercher un article..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full py-3 pl-12 pr-14 text-lg bg-white border border-gray-200 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
      />

      <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative p-2.5 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
        >
          <FiFilter />
          {activeFilterCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-[350px] max-w-[90vw] bg-white border border-gray-200 rounded-lg shadow-xl z-10 p-6"
          >
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
              <h4 className="text-lg font-bold text-gray-800">Filtrer les articles</h4>
              <button onClick={() => setIsDropdownOpen(false)} className="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-600"><FiX size={20} /></button>
            </div>
            
            <div className="mb-6">
              <span className="block text-sm font-semibold text-gray-700 mb-3">Catégorie :</span>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => onFilterChange('category', 'Toutes')} className={`${!activeFilters.category ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'} px-4 py-1.5 text-sm border border-gray-300 rounded-full transition-colors`}>Toutes</button>
                {categories.map((cat) => <button key={cat} onClick={() => onFilterChange('category', cat)} className={`${activeFilters.category === cat ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'} px-4 py-1.5 text-sm border border-gray-300 rounded-full transition-colors`}>{cat}</button>)}
              </div>
            </div>

            <div>
              <span className="block text-sm font-semibold text-gray-700 mb-3">Tags :</span>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => onFilterChange('tag', 'Tous')} className={`${!activeFilters.tag ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'} px-4 py-1.5 text-sm border border-gray-300 rounded-full transition-colors`}>Tous</button>
                {tags.map((tag) => <button key={tag} onClick={() => onFilterChange('tag', tag)} className={`${activeFilters.tag === tag ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'} px-4 py-1.5 text-sm border border-gray-300 rounded-full transition-colors`}>{tag}</button>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsFilter;