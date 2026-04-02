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
  <section>
    <h1>PORTFOLIO SECTION RADI</h1>
  </section>
);
export default PortfolioSection;
