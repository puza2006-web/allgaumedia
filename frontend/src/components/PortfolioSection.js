import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PortfolioSection = ({ showFull = false }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // ============================================
  // VIDEO PORTFOLIO - dodaj nove videe ovdje
  // ============================================
  const portfolio = [
    {
      id: 1,
      title: "Apollo Gym",
      description: "Videoproduktion Allgäu",
      category: "fitness",
      youtubeId: "riTnD55ERzw",
    },
  ];

  const categories = [
    { id: 'all', label: t('portfolio.categories.all') || 'Alle' },
    { id: 'fitness', label: t('portfolio.categories.fitness') || 'Fitness' },
    { id: 'business', label: t('portfolio.categories.business') || 'Business' },
    { id: 'social-media', label: t('portfolio.categories.socialMedia') || 'Social Media' },
  ];

  const filteredPortfolio = activeCategory === 'all'
    ? portfolio
    : portfolio.filter(item => item.category === activeCategory);

  const displayedPortfolio = showFull
    ? filteredPortfolio
    : filteredPortfolio.slice(0, 4);

  const openVideoModal = (item) => {
    setSelectedVideo(item);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => {
        if (e.key === 'Escape') closeVideoModal();
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [selectedVideo]);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-10">Portfolio</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {displayedPortfolio.length === 0 ? (
          <p className="text-center text-zinc-400 py-10">
            Keine Videos in dieser Kategorie.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {displayedPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer bg-zinc-900"
                onClick={() => openVideoModal(item)}
              >
                <img
                  src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                    <Play className="w-7 h-7 text-white group-hover:text-black ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  {item.description && (
                    <p className="text-zinc-300 text-sm mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white hover:text-zinc-400 transition z-10"
              aria-label="Schließen"
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold">
                  {selectedVideo.title}
                </h3>
                {selectedVideo.description && (
                  <p className="text-zinc-400 mt-1">{selectedVideo.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
