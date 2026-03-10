# CleanServ Project - Claude Context

## Project Overview
**Name:** UrbanAxis Property Services
**Type:** Static HTML/CSS/JS website for a cleaning company
**Repository:** https://github.com/dui-kai/cleanserv
**Live URL:** https://cleanserv-ecru.vercel.app
**Deployment:** Vercel (auto-deploys from main branch)

## Brand Guidelines

### Colors
- **Primary (Gold):** #D4AF37
- **Secondary (Teal):** #0E6B66
- **White:** #FFFFFF
- **Text:** #222222

### Logo
Multi-colored text logo with sparkle icon:
- "Urban" in teal (#0E6B66)
- "Axis" in gold (#D4AF37)
- "Property Services" in default text color

### Typography
- Font: Poppins (Google Fonts)
- Weights: 400, 500, 600, 700, 800

## File Structure
```
cleanserv/
├── index.html          # Homepage
├── residential.html    # Residential services (13 services)
├── commercial.html     # Commercial services (13 services)
├── css/
│   └── styles.css      # All styles with CSS variables
├── js/
│   └── main.js         # Mobile menu, sticky header, form validation
├── vercel.json         # Vercel config with rewrites and headers
└── CLAUDE.md           # This file
```

## Clean URLs (Vercel Rewrites)
- `/residential` → `/residential.html`
- `/commercial` → `/commercial.html`

All internal links use clean URLs (no .html extension).

## Key Features
- Responsive mobile-first design
- Sticky header (moves to top when top-bar scrolls away)
- Mobile hamburger menu with social links
- Mobile bottom action bar (Call & Book buttons)
- Contact form with validation
- Top bar hidden on mobile by design

## Placeholder Content
- Phone: (555) 000-0000
- Email: hello@example.com
- Social URLs: facebook.com/urbanaxis, instagram.com/urbanaxis, tiktok.com/@urbanaxis

## Services

### Residential (13 services)
1. Regular Home Cleaning
2. Deep Cleaning
3. Move-In / Move-Out Cleaning
4. Post-Construction Cleaning
5. Carpet & Upholstery Cleaning
6. Window Cleaning
7. Laundry & Ironing Services
8. Garage & Basement Cleaning
9. Seasonal Cleaning (Spring/Fall)
10. Eco-Friendly / Green Cleaning
11. Pet-Related Cleaning
12. Organizing & Decluttering Assistance
13. Exterior House Washing

### Commercial (13 services)
1. Office Cleaning
2. Retail Store Cleaning
3. Medical & Dental Facility Cleaning
4. Restaurant & Kitchen Cleaning
5. Warehouse & Industrial Cleaning
6. Gym & Fitness Center Cleaning
7. School & Daycare Cleaning
8. Bank & Financial Institution Cleaning
9. Hotel & Hospitality Cleaning
10. Post-Event Cleanup
11. Floor Care (Stripping, Waxing, Polishing)
12. Window & Glass Cleaning
13. Pressure Washing & Exterior Cleaning

## Pending SEO Tasks
- [ ] Add Open Graph meta tags (og:title, og:description, og:image, og:url)
- [ ] Add Twitter Card meta tags
- [ ] Add canonical URLs to all pages
- [ ] Add favicon
- [ ] Create robots.txt file
- [ ] Create sitemap.xml file
- [ ] Add Schema.org LocalBusiness structured data

## CSS Variables (in :root)
```css
--primary: #D4AF37;
--primary-dark: #B8962F;
--primary-light: #FAF5E6;
--secondary: #0E6B66;
--secondary-dark: #0A4F4B;
--secondary-light: #128680;
--accent: #0E6B66;
--text: #222222;
--background: #FFFFFF;
--white: #FFFFFF;
```

## Responsive Breakpoints
- Mobile: default
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

## Design References
Originally inspired by instaclean.co styling.
