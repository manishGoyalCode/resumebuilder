# TechResumePro 🚀

> A modern, feature-rich resume builder with 10 professional templates, auto-save, and real-time preview.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite)](https://vitejs.dev/)

---

## ✨ Features

### 🎨 **10 Industry-Standard Templates**
- **Modern** - Clean and contemporary design
- **Classic** - Traditional professional layout
- **Creative** - Bold and artistic style
- **Executive** - ATS-friendly corporate format
- **Minimalist** - Simple and elegant
- **Professional** - Formal traditional design
- **Tech** - Developer-focused with code aesthetics
- **Designer** - Creative portfolio showcase
- **Academic** - Research and CV format
- **Startup** - Modern and energetic

### 💾 **Smart Data Management**
- ✅ **Auto-Save** - Automatic saving with visual indicator
- ✅ **LocalStorage Persistence** - Data saved across sessions
- ✅ **Real-time Preview** - See changes instantly
- ✅ **Character Counter** - Keep content concise with color-coded warnings

### 🎯 **Professional Editing**
- ✅ **Floating Label Inputs** - Modern, clean input fields
- ✅ **Multiple Sections** - Personal Info, Skills, Experience, Projects, Education
- ✅ **Dynamic Forms** - Add/remove entries easily
- ✅ **Delete Confirmations** - Prevent accidental data loss

### 🌓 **Customization**
- ✅ **Dark Mode** - Eye-friendly dark theme
- ✅ **Template Switching** - Change templates without losing data
- ✅ **Responsive Design** - Works on desktop and tablet

### 📄 **Export Options**
- ✅ **PDF Export** - One-click download with proper formatting
- ✅ **Single Page Layout** - Optimized for ATS systems
- ✅ **Print-Ready** - Professional print styles

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/manishGoyalCode/resumebuilder.git
cd resumebuilder
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5174
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
resume/
├── public/
│   └── favicon.png          # App icon
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Input.tsx
│   │   │   ├── TextArea.tsx
│   │   │   └── SaveStatus.tsx
│   │   ├── editor/          # Form components
│   │   │   ├── Editor.tsx
│   │   │   ├── PersonalInfoForm.tsx
│   │   │   ├── SkillsForm.tsx
│   │   │   ├── ExperienceForm.tsx
│   │   │   ├── ProjectsForm.tsx
│   │   │   ├── EducationForm.tsx
│   │   │   └── TemplatesForm.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── SplitView.tsx
│   │   ├── preview/         # Preview components
│   │   │   ├── Preview.tsx
│   │   │   ├── ResumePreview.tsx
│   │   │   └── EmptyState.tsx
│   │   └── templates/       # Resume templates
│   │       ├── Modern.tsx
│   │       ├── Classic.tsx
│   │       ├── Creative.tsx
│   │       ├── Executive.tsx
│   │       ├── Minimalist.tsx
│   │       ├── Professional.tsx
│   │       ├── Tech.tsx
│   │       ├── Designer.tsx
│   │       ├── Academic.tsx
│   │       └── Startup.tsx
│   ├── context/             # React Context
│   │   ├── ResumeContext.tsx
│   │   └── ThemeContext.tsx
│   ├── services/            # Services
│   │   └── storage.ts
│   ├── styles/              # Global styles
│   │   ├── variables.css
│   │   ├── print.css
│   │   └── index.css
│   ├── types/               # TypeScript types
│   │   └── resume.ts
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Tech Stack

- **Framework**: React 18+
- **Language**: TypeScript 5+
- **Build Tool**: Vite 5+
- **Styling**: CSS Modules + CSS Variables
- **State Management**: React Context API
- **Storage**: LocalStorage
- **Fonts**: Inter (Google Fonts)

---

## 🎨 Design System

### Color Palette
- **Primary**: `#3b82f6` (Blue)
- **Secondary**: `#8b5cf6` (Purple)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Orange)
- **Error**: `#ef4444` (Red)

### Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Font Sizes**: 0.75rem - 2rem
- **Line Heights**: 1.4 - 1.8

### Spacing Scale
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)

---

## 📖 Usage Guide

### 1. **Enter Personal Information**
- Fill in your name, title, contact details
- Add a professional summary

### 2. **Add Skills**
- Create skill categories (e.g., "Frontend", "Backend")
- Add skills separated by commas

### 3. **Add Experience**
- Add your work history
- Include role, company, dates, and description
- Use the "Current" checkbox for ongoing roles

### 4. **Add Projects**
- Showcase your best work
- Include technologies used
- Add project links

### 5. **Add Education**
- List your degrees
- Include institution and dates

### 6. **Choose a Template**
- Go to the "Templates" tab
- Click on your preferred template
- Preview updates in real-time

### 7. **Download**
- Click "Download PDF" in the header
- Your resume downloads as a print-ready PDF

---

## 🔮 Upcoming Features

See [Feature Roadmap](./docs/feature_roadmap.md) for the complete list.

### Next Release (v2.0)
- 🎯 Section Visibility Toggle
- 📝 Export to DOCX
- 🎨 Font Selection
- 📐 Layout Density Control
- ↕️ Drag & Drop Reordering

### Future Releases
- 🤖 AI Content Suggestions
- 📊 ATS Score & Optimization
- 🔗 Import from LinkedIn
- 📱 Mobile App
- 🌐 Shareable Resume Links

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Manish Goyal**

- LinkedIn: [linkedin.com/in/manish-goyal-8900b2188](https://www.linkedin.com/in/manish-goyal-8900b2188/)
- GitHub: [@manishGoyalCode](https://github.com/manishGoyalCode)

---

## 🙏 Acknowledgments

- Design inspiration from modern resume builders
- Icons from React Icons
- Fonts from Google Fonts
- Built with ❤️ using React and TypeScript

---

## 📞 Support

If you have any questions or run into issues, please:
1. Check the [Feature Roadmap](./docs/feature_roadmap.md)
2. Open an issue on GitHub
3. Contact via LinkedIn

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Manish Goyal

</div>
