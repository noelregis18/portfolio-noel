# Personal Portfolio Website

## Overview
This is a modern, responsive personal portfolio website for Noel Regis, a full-stack developer. The portfolio showcases professional skills, projects, and contact information with an elegant, pixel-art inspired design theme.

## Features
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional interface with pixel-art inspired elements
- **Interactive Sections**: Hero, About, Skills, Projects, and Contact sections
- **Real-time Clock**: Dynamic date and time display
- **Smooth Scrolling**: Enhanced navigation experience
- **Animated Elements**: Subtle animations for improved user experience

## Technologies Used
- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next generation frontend tooling for fast development
- **Lucide Icons**: Beautiful, consistent icon set
- **Shadcn UI**: Reusable component library

## Project Structure
```
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── ui/          # UI components
│   │   └── ...          # Section components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   └── ...              # Other source files
├── package.json         # Project dependencies
├── tailwind.config.ts   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Key Components
- **HeroSection**: Main landing section with introduction and call-to-action buttons
- **AboutSection**: Personal information and background
- **SkillsSection**: Technical skills and expertise
- **ProjectsSection**: Portfolio of completed projects
- **ContactSection**: Contact form and information
- **Navbar**: Navigation menu
- **Footer**: Site footer with additional links

## Installation and Setup

### Prerequisites
- Node.js (v14.0.0 or later)
- npm or yarn package manager

### Installation
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd noelregis
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production
```bash
npm run build
# or
yarn build
```

## Customization
- Edit the content in the component files to personalize the portfolio
- Modify the theme colors in `tailwind.config.ts` to change the color scheme
- Add or remove sections as needed in the main page component

## License
MIT

## Author
Noel Regis - Full Stack Developer