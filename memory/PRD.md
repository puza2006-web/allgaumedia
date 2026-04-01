# Allgau Media Website - PRD

## Original Problem Statement
Create a modern, high-converting, responsive website for a digital agency called Allgau Media with:
- Full-width hero section with background video and company logo
- Multilingual support (German default, English)
- Dark cinematic premium theme
- Multi-page structure (Home, Services, Portfolio, Admin)
- Contact form with database storage and admin dashboard
- Google Maps integration
- Local SEO optimization for Memmingen/Allgäu/Bavaria

## User Personas
1. **Local Business Owner** - Looking for video production/webdesign services in Memmingen area
2. **Marketing Manager** - Needs professional video content for campaigns
3. **Admin User** - Reviews and manages contact form submissions

## Core Requirements
- [x] Responsive design (desktop, tablet, mobile)
- [x] German/English language switcher
- [x] Hero section with video background
- [x] About Us section with company description
- [x] Services section (Videoproduktion, Video Editing, Webdesign, Hosting)
- [x] Portfolio grid with category filters
- [x] Contact form with database storage
- [x] Google Maps integration
- [x] Admin dashboard for contact management
- [x] SEO meta tags and structured data

## What's Been Implemented (2026-04-01)

### Backend (FastAPI + MongoDB)
- Contact form API (CRUD operations)
- Portfolio API with category filtering
- Contact statistics endpoint
- Automatic portfolio seeding

### Frontend (React)
- Multi-page routing (Home, Services, Portfolio, Admin, Privacy, Imprint)
- Language context with DE/EN translations
- Responsive sticky navigation
- Hero with video background
- Service cards with icons
- Portfolio grid with category filters
- Contact form with validation
- Admin dashboard with contact table
- Dark cinematic theme

### Pages
1. **Home** - Hero, About, Services preview, Portfolio preview, Why Us, Contact
2. **Services** - Detailed service cards
3. **Portfolio** - Full grid with category filters
4. **Admin** - Contact management dashboard
5. **Privacy** - Privacy policy page
6. **Imprint** - Legal imprint page

## Prioritized Backlog

### P0 (Done)
- ✅ All core sections implemented
- ✅ Contact form working
- ✅ Admin dashboard functional
- ✅ Language switching

### P1 (Nice to have)
- Password protection for admin dashboard
- Email notifications for new contacts
- Social media links integration

### P2 (Future)
- Blog section
- Testimonials/Reviews section
- FAQ section
- Analytics integration

## Next Tasks
1. Add authentication for admin dashboard if needed
2. Integrate email notifications for contact submissions
3. Add social media profiles when available
4. Optimize images for better performance
