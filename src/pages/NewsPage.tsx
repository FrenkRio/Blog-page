import React, { useState, useMemo } from 'react';
import { articlesData } from '../data/articles';
import type { ArticleCategory } from '../types';
import ArticleCard from '../components/ArticleCard';
import NewsFilter from '../components/NewsFilter'; 

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<{ category: ArticleCategory | null; tag: string | null }>({
    category: null,
    tag: null,
  });

  const availableCategories = useMemo(() => [...new Set(articlesData.map(a => a.category))].sort(), []);
  const availableTags = useMemo(() => [...new Set(articlesData.flatMap(a => a.tags))].sort(), []);

  const handleFilterChange = (type: 'category' | 'tag', value: string) => {
    const isReset = value === 'Toutes' || value === 'Tous';
    setFilters(prev => ({ ...prev, [type]: isReset ? null : value }));
  };

  const filteredArticles = useMemo(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return articlesData.filter(article => {
      const categoryMatch = !filters.category || article.category === filters.category;
      const tagMatch = !filters.tag || article.tags.includes(filters.tag);
      const searchMatch = lowercasedQuery === '' || 
        article.title.toLowerCase().includes(lowercasedQuery) ||
        article.summary.toLowerCase().includes(lowercasedQuery);
      return categoryMatch && tagMatch && searchMatch;
    });
  }, [filters, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Actualités</h1>
        <p className="mt-4 text-lg text-gray-600">Les dernières nouvelles et événements de la SETAM.</p>
      </header>

      <NewsFilter 
        categories={availableCategories}
        tags={availableTags}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => <ArticleCard key={article.id} article={article} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">Aucun article ne correspond à votre recherche.</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;