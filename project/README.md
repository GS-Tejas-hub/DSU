# DSU School of Engineering Website

A modern, responsive website for Dayananda Sagar University's School of Engineering, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal layout with professional aesthetics
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and semantic HTML
- **SEO Optimized**: Proper meta tags, structured data, and semantic markup
- **Performance**: Optimized for fast loading (≤1s LCP target)

## 🏗️ Architecture

### Components Structure
```
src/
├── components/
│   ├── Navbar.tsx          # Fixed navigation with smooth scroll
│   ├── Hero.tsx            # Full-width hero section with CTA
│   ├── Programs.tsx        # Interactive program cards
│   ├── About.tsx           # Two-column about section
│   ├── FacultyLabs.tsx     # Faculty carousel and labs grid
│   ├── Calendar.tsx        # Academic calendar widget
│   ├── NewsletterModal.tsx # Newsletter signup modal
│   └── Footer.tsx          # Comprehensive footer
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Design System

### Brand Colors
- **DSU Blue**: `#1e40af` - Primary brand color
- **DSU Gold**: `#f59e0b` - Secondary accent color

### Color Palette
- **Primary**: Blue tones (50-900)
- **Secondary**: Teal tones (50-900)
- **Accent**: Orange tones (50-900)
- **Success**: Green tones (50-900)
- **Warning**: Amber tones (50-900)
- **Error**: Red tones (50-900)
- **Neutral**: Gray tones (50-900)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800
- **Line Heights**: 120% for headings, 150% for body text

### Spacing System
- Based on 8px grid system
- Consistent spacing throughout the interface
- Proper white space for readability

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🔧 Customization

### Content Updates
- **Hero Section**: Update text and CTA in `src/components/Hero.tsx`
- **Programs**: Modify program data in `src/components/Programs.tsx`
- **Faculty**: Update faculty information in `src/components/FacultyLabs.tsx`
- **Events**: Modify calendar events in `src/components/Calendar.tsx`

### Styling Changes
- **Colors**: Update brand colors in `tailwind.config.js`
- **Fonts**: Change font family in `tailwind.config.js` and `index.html`
- **Animations**: Customize animations in individual components

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 🎯 Performance Optimizations

- **Image Optimization**: Uses optimized external images from Pexels
- **Code Splitting**: React lazy loading for better performance
- **Bundle Optimization**: Vite's built-in optimizations
- **Font Loading**: Preconnect to Google Fonts for faster loading

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: JSON-LD schema for search engines
- **Semantic Markup**: Proper HTML5 semantic elements
- **Open Graph**: Facebook and Twitter card support

## 📊 Analytics Ready

The website is prepared for analytics integration:
- Google Analytics 4 ready
- Event tracking structure in place
- Conversion tracking setup

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Connect your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## 📞 Support

For technical support or customization requests:
- Email: support@dsu.edu.in
- Phone: +91-80-26721802

## 📄 License

This project is proprietary to Dayananda Sagar University. All rights reserved.

---

**Note**: This website template is designed to be production-ready with modern web standards, accessibility compliance, and optimal performance. All placeholder content should be replaced with actual DSU information before deployment.