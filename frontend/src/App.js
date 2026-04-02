import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AdminPage from "./pages/AdminPage";
import PrivacyPage from "./pages/PrivacyPage";
import ImprintPage from "./pages/ImprintPage";
import VideoproductionPage from "./pages/VideoproductionPage";
import VideoEditingPage from "./pages/VideoEditingPage";
import WebdesignPage from "./pages/WebdesignPage";
import HostingPage from "./pages/HostingPage";
import "./App.css";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Layout wrapper
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

// Admin layout (no footer)
const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <ServicesPage />
                </Layout>
              }
            />
            <Route
              path="/videoproduction"
              element={
                <Layout>
                  <VideoproductionPage />
                </Layout>
              }
            />
            <Route
              path="/video-editing"
              element={
                <Layout>
                  <VideoEditingPage />
                </Layout>
              }
            />
            <Route
              path="/webdesign-development"
              element={
                <Layout>
                  <WebdesignPage />
                </Layout>
              }
            />
            <Route
              path="/hosting-domains"
              element={
                <Layout>
                  <HostingPage />
                </Layout>
              }
            />
           <Route
             path="/portfolio"
               element={<h1>PORTFOLIO TEST</h1>}
             />
            />
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <AdminPage />
                </AdminLayout>
              }
            />
            <Route
              path="/privacy"
              element={
                <Layout>
                  <PrivacyPage />
                </Layout>
              }
            />
            <Route
              path="/imprint"
              element={
                <Layout>
                  <ImprintPage />
                </Layout>
              }
            />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
