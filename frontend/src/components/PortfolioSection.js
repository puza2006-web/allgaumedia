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
    { id: 'all', label: t('portfolio.categories.all') || 'All' },
    { id: 'fitness', label: t('portfolio.categories.fitness') || 'Fitness' },
    { id: 'business', label: t('portfolio.categories.business') || 'Business' },
    { id: 'social-media', label: t('portfolio.categories.socialMedia') || 'Social Media' },
  ];

  useEffect(() => {
    // Privremeni test podaci
    setPortfolio([
      { id: 1, title: "Video 1", videoUrl: "https://example.com/video1.mp4" },
      { id: 2, title: "Video 2", videoUrl: "https://example.com/video2.mp4" },
      { id: 3, title: "Video 3", videoUrl: "https://example.com/video3.mp4" },
      { id: 4, title: "Video 4", videoUrl: "https://example.com/video4.mp4" },
    ]);
    setLoading(false);
  }, []);

  const displayedPortfolio = showFull ? portfolio : portfolio.slice(0, 4);

  const openVideoModal = (item) => {
    setSelectedVideo(item);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  if (loading) {
    return (
      <section className="py-20 bg-black text-white text-center">
        <p>Loading portfolio...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-10">Portfolio</h2>

        {/* Kategorije - dodaj ovo da vidiš kategorije */}
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

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displayedPortfolio.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 aspect-video flex items-center justify-center rounded-lg cursor-pointer hover:bg-zinc-800 transition"
              onClick={() => openVideoModal(item)}
            >
              <div className="text-center">
                <Play className="w-12 h-12 mx-auto mb-2 text-white" />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video modal - ako imaš */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl mx-4">
              <div className="bg-black aspect-video flex items-center justify-center">
                <p className="text-white">Video: {selectedVideo.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
