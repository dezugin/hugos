# Professional Portfolio Website

A modern, responsive curriculum/portfolio website built with Next.js, React, and Tailwind CSS. Designed for web developers, translators, and researchers.

## Features

- 🎨 **Modern Design** - Clean, professional look with gradient accents
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works on all devices
- 🚀 **Fast Performance** - Built with Next.js 14
- ♿ **Accessible** - Semantic HTML and ARIA labels

## Sections

1. **Hero** - Eye-catching introduction with social links
2. **About** - Biography and quick stats
3. **Skills** - Technical skills and languages spoken
4. **Code Portfolio** - Showcase of development projects
5. **Research** - Published papers with PDF download links
6. **Courses** - Certifications and completed courses
7. **Translation** - Translation services and language pairs
8. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

### Personal Information

Edit the following files to add your information:

- `src/components/Hero.tsx` - Name and tagline
- `src/components/About.tsx` - Biography and stats
- `src/components/Skills.tsx` - Technical skills and languages
- `src/components/CodeProjects.tsx` - Your projects
- `src/components/Research.tsx` - Your publications
- `src/components/Courses.tsx` - Your certifications and courses
- `src/components/Contact.tsx` - Contact information
- `src/app/layout.tsx` - Site metadata

### Research Papers

1. Place your PDF files in `public/papers/`
2. Update the `publications` array in `src/components/Research.tsx`
3. Set the `pdfUrl` property to `/papers/your-paper.pdf`

### Social Links

Update the social media URLs in:

- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Colors

Modify the color scheme in `src/app/globals.css` (CSS variables) or `tailwind.config.ts`.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (available)

## Deployment

This site can be easily deployed to:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

```bash
# Build for production
npm run build

# The output will be in the .next folder
```

## License

MIT License - Feel free to use this template for your own portfolio!
