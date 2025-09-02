import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NewsPage from './pages/NewsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

function App() {
  const location = useLocation();

  return (

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<NewsPage />} />
          <Route path="/actualites" element={<NewsPage />} />
          <Route path="/actualites/:articleId" element={<ArticleDetailPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AnimatePresence>
   
  );
}

export default App;