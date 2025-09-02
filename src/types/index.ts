

export type ArticleCategory = 'Annonce' | 'Chantier' | 'Innovation' | 'Événement';

export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Article {
  id: string; // Utiliser un slug (ex: "lancement-nouveau-projet") est souvent mieux pour le SEO
  title: string;
  publishedDate: string; // Format ISO comme "2024-07-26"
  category: ArticleCategory;
  author: Author;
  imageUrl: string;
  summary: string; // Un résumé court pour la carte de l'article
  content: string; // Le contenu complet de l'article (peut être du Markdown)
  tags: string[];
}