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

  useEffect(() => {
  alert("USE EFFECT RADI");

  setPortfolio([
    { id: 1, title: "Video 1" },
    { id: 2, title: "Video 2" },
  ]);
}, []);

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
    setPortfolio([]); // privremeno prazno
  } catch (error) {
    console.error('Error fetching portfolio:', error);
  } finally {
    setLoading(false);
  }
};

  const displayedPortfolio = showFull ? portfolio : portfolio.slice(0, 4);

  const openVideoModal = (item) => {
    setSelectedVideo(item);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
  <section className="py-20 bg-black text-white">
    <h2 className="text-3xl text-center mb-10">Portfolio</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {portfolio.map((item) => (
        <div
          key={item.id}
          className="bg-zinc-900 aspect-video flex items-center justify-center"
        >
          {item.title}
        </div>
      ))}
    </div>
  </section>
);
};
export default PortfolioSection;
