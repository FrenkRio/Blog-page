import React from 'react';
import type { Article } from '../types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    // Le Link doit prendre toute la hauteur pour que la zone cliquable soit correcte
    <Link to={`/actualites/${article.id}`} className="block h-full">
      {/* C'est ce motion.div qui porte TOUTE la logique d'animation */}
      <motion.div
        // 1. État initial : invisible et légèrement décalé vers le bas
        initial={{ opacity: 0, y: 50 }}
        // 2. État final : visible et à sa position normale
        whileInView={{ opacity: 1, y: 0 }}
        // 3. Configuration du déclenchement
        viewport={{ once: true, amount: 0.2 }}
        // 4. Définition de la durée et du type de l'animation
        transition={{ duration: 0.5, ease: 'easeOut' }}
        // L'animation au survol reste pour l'interactivité
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col group cursor-pointer"
      >
        <div className="overflow-hidden">
          {/* L'image pour la transition partagée vers la page de détail */}
          <motion.img 
            layoutId={`article-image-${article.id}`} 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-gray-500 mb-2">
            {new Date(article.publishedDate).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} • <span className="font-semibold text-blue-600">{article.category}</span>
          </p>
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">{article.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
          <div className="mt-auto text-blue-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Lire la suite <FiArrowRight />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ArticleCard;