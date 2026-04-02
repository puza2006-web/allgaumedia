import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const PortfolioSection = ({ showFull = false }) => {
  const { language, t } = useLanguage();
  const [portfolio, setPortfolio] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const categories = [
    { id: 'all', label: t('portfolio.categories.all') },
    { id: 'fitness', label: t('portfolio.categories.fitness') },
    { id: 'business', label: t('portfolio.categories.business') },
    { id: 'social-media', label: t('portfolio.categories.socialMedia') },
  ];

  useEffect(() => {
    fetchPortfolio();
  }, [activeCategory]);

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/portfolio`, {
        params: activeCategory !== 'all' ? { category: activeCategory } : {}
      });
      setPortfolio(response.data);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const displayedPortfolio = (showFull ? portfolio : portfolio.slice(0, 4)).map(item => ({
  ...item,
  title: typeof item.title === "string" ? item.title : "",
  title_en: typeof item.title_en === "string" ? item.title_en : "",
  description: typeof item.description === "string" ? item.description : "",
  description_en: typeof item.description_en === "string" ? item.description_en : "",
  category: typeof item.category === "object" ? item.category.label : item.category
}));

  const openVideoModal = (item) => {
    setSelectedVideo(item);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-32 bg-[#050505]"
      data-testid="portfolio-section"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - only show if not on dedicated page */}
        {!showFull && (
          <div className="text-center mb-12">
            <span 
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 block"
              data-testid="portfolio-badge"
            >
             {String(t('portfolio.badge') || "")}
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
              data-testid="portfolio-title"
            >
              {String(t('portfolio.title') || "")}
            </h2>
            <p 
              className="text-zinc-400 max-w-2xl mx-auto"
              data-testid="portfolio-subtitle"
            >
             {String(t('portfolio.subtitle') || "")}
            </p>
          </div>
        )}

        {/* Categories Filter */}
        {showFull && (
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="portfolio-categories">
            {categories||[].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-all ${
                  activeCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-transparent border border-white/20 text-zinc-400 hover:border-white/40 hover:text-white'
                }`}
                data-testid={`portfolio-category-${category.id}`}
              >
                {String(category.label||"")}
              </button>
            ))}
          </div>
        )}

        {/* Portfolio Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-zinc-900 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="portfolio-grid">
            {displayedPortfolio||[].map((item, index) => (
              <div
                key={item.id}
                onClick={() => openVideoModal(item)}
                className="group relative aspect-video overflow-hidden bg-zinc-950 border border-white/10 card-hover cursor-pointer"
                data-testid={`portfolio-item-${index}`}
              >
                {/* Thumbnail */}
                <img
                  src={item.thumbnail||""}
                  alt={String((language === 'de' ? item.title : item.title_en)|| ""}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                  {/* Play button */}
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-white text-center mb-2">
                    {String((language === 'de' ? item.title : item.title_en)||"")}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm text-center max-w-xs">
                    {String((language === 'de' ? item.description : item.description_en) || "")}
                  </p>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-xs uppercase tracking-wider text-zinc-300">
                  {typeof item.category === "object"?
                   item.category.label : item.category || ""}
                </div>

                {/* Play icon always visible */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                  <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All CTA */}
        {!showFull && portfolio.length > 4 && (
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="btn-secondary inline-flex items-center space-x-2 group"
              data-testid="portfolio-view-all"
            >
              <span>{t('portfolio.viewProject')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
          data-testid="video-modal"
        >
          <button
            onClick={closeVideoModal}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors rounded-full"
            data-testid="close-video-modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div 
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Title */}
            <h3 className="text-2xl font-medium text-white text-center mb-6">
              {String((language === 'de' ? selectedVideo.title : selectedVideo.title_en) || "")}
            </h3>

            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                src={selectedVideo.video_url}
                controls
                autoPlay
                className="w-full h-full object-contain"
                data-testid="video-player"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Description */}
            <p className="text-zinc-400 text-center mt-6 max-w-2xl mx-auto">
              {String((language === 'de' ? selectedVideo.description : selectedVideo.description_en) || "")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
