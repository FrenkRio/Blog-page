import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesData } from '../data/articles';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import SocialShareButtons from '../components/SocialShareButtons';

const ArticleDetailPage = () => {
  const { articleId } = useParams();
  const article = articlesData.find(a => a.id === articleId);
  const shareUrl = window.location.href;

  if (!article) return <div>Article non trouvé</div>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <Link to="/actualites" className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900">
        <FiArrowLeft /> Retour aux actualités
      </Link>
      <motion.div>
        <p className="text-base text-gray-500">{new Date(article.publishedDate).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} • <span className="font-semibold text-blue-600">{article.category}</span></p>
        <h1 className="text-5xl font-extrabold text-gray-900 my-4">{article.title}</h1>
        <div className="flex items-center gap-3 mb-8">
          <img src={article.author.avatarUrl} alt={article.author.name} className="w-12 h-12 rounded-full" />
          <span className="font-semibold">{article.author.name}</span>
        </div>
        <motion.img 
          layoutId={`article-image-${article.id}`} 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-96 object-cover rounded-lg shadow-xl mb-12" 
        />
        {/* Utiliser la classe `prose` de Tailwind Typography pour styliser le contenu */}
        <div className="prose prose-lg max-w-none">
          {/* Ici, on rendrait le contenu Markdown */}
          <p>Contenu de l'article : {article.content}</p>
        </div>
      </motion.div>
      <div className="mt-12 pt-8 border-t">
        <SocialShareButtons url={shareUrl} title={article.title} />
      </div>
    </div>
  );
};

export default ArticleDetailPage;