import type { Article } from '../types';

export const articlesData: readonly Article[] = [
  {
    id: 'inauguration-complexe-scolaire',
    title: 'Inauguration du nouveau complexe scolaire Ibn Rochd',
    publishedDate: '2024-07-26',
    category: 'Événement',
    author: { name: 'Service Communication', avatarUrl: '/path/to/avatar.png' },
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2832&auto=format&fit=crop',
    summary: 'La SETAM est fière d\'annoncer l\'achèvement et l\'inauguration du complexe scolaire de Tizi Ouzou, un projet phare pour l\'éducation dans la région.',
    content: '## Un projet d\'envergure\n\nLe complexe regroupe...', // Contenu en Markdown
    tags: ['éducation', 'tizi ouzou', 'construction durable']
  },
  {
    id: 'certification-hqe-el-khroub',
    title: 'Certification HQE obtenue pour l\'aménagement urbain d\'El Khroub',
    publishedDate: '2024-06-15',
    category: 'Annonce',
    author: { name: 'Le Directeur Technique', avatarUrl: '/path/to/avatar.png' },
    imageUrl: 'https://images.unsplash.com/photo-1593632487663-3b69a195a2da?q=80&w=2835&auto=format&fit=crop',
    summary: 'Notre engagement pour la construction durable est récompensé par l\'obtention de la certification Haute Qualité Environnementale pour le projet d\'El Khroub.',
    content: 'La certification HQE valide notre approche...',
    tags: ['environnement', 'certification', 'infrastructures']
  },
  {
    id: 'certification-hqe-el-khroub-2',
    title: 'Certification HQE obtenue pour l\'aménagement urbain d\'El Khroub',
    publishedDate: '2024-06-15',
    category: 'Annonce',
    author: { name: 'Le Directeur Technique', avatarUrl: '/path/to/avatar.png' },
    imageUrl: 'https://images.unsplash.com/photo-1593632487663-3b69a195a2da?q=80&w=2835&auto=format&fit=crop',
    summary: 'Notre engagement pour la construction durable est récompensé par l\'obtention de la certification Haute Qualité Environnementale pour le projet d\'El Khroub.',
    content: 'La certification HQE valide notre approche...',
    tags: ['environnement', 'certification', 'infrastructures']
  },
];