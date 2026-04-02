import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const PortfolioSection = ({ showFull = false }) => {
 const { language, t: originalT } = useLanguage();

const t = (key) => {
  const value = originalT(key);
  if (typeof value === "object" && value !== null) {
    return value.label || "";
  }
  return value || "";
};
  const [portfolio, setPortfolio] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const categories = [
  { id: 'all', label: String(t('portfolio.categories.all') || "") },
  { id: 'fitness', label: String(t('portfolio.categories.fitness') || "") },
  { id: 'business', label: String(t('portfolio.categories.business') || "") },
  { id: 'social-media', label: String(t('portfolio.categories.socialMedia') || "") },
];

  useEffect(() => {
    fetchPortfolio();
  }, [activeCategory]);

  const fetchPortfolio = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/portfolio`, {
      params: activeCategory !== 'all' ? { category: activeCategory } : {}
    });

   console.log("API DATA:", response.data);  
   
    const data = Array.isArray(response.data)
      ? response.data
      : response.data?.data || [];

    setPortfolio(
      data.map(item => ({
        ...item,
        category:
          typeof item.category === "object"
            ? item.category.label
            : item.category
      }))
    );

  } catch (error) {
    console.error('Error fetching portfolio:', error);
  } finally {
    setLoading(false);
  }
};

  const safePortfolio = Array.isArray(portfolio) ? portfolio : [];

const displayedPortfolio = (showFull ? safePortfolio : safePortfolio.slice(0, 4)).map(item => ({
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

 return <h1>PORTFOLIO RADI</h1>;

        

export default PortfolioSection;
