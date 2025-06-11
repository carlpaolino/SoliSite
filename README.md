# Solomon Nackashi - Personal Portfolio Website

A modern, responsive React portfolio website built with TypeScript, Tailwind CSS, and Framer Motion. This website showcases Solomon's work as a mechanical engineer specializing in automation and robotics at Georgia Tech.

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling navigation and animated sections
- **PDF Resume Viewer**: Built-in PDF viewer with download functionality
- **Contact Form**: Functional contact form with EmailJS integration
- **Content Management**: Easy content updates via JSON files
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🚀 Quick Start

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- A code editor like **VS Code** (recommended)

### Step-by-Step Setup

1. **Download or Clone the Project**
   ```bash
   # If you have git installed:
   git clone <repository-url>
   cd solomon-portfolio
   
   # Or download the ZIP file and extract it
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will download all required packages. It may take a few minutes.

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   You should see output like:
   ```
   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ```

4. **Open Your Browser**
   Navigate to `http://localhost:3000` to view the website.

### 🔧 First-Time Customization

#### Step 1: Update Personal Information
Edit `src/data/profile.json`:
```json
{
  "name": "Your Full Name",
  "tagline": "Your professional title and focus",
  "bio": "Write a brief description about yourself and your work",
  "profileImage": "/images/profile.jpg",
  "interests": [
    "Your Interest 1",
    "Your Interest 2",
    "Your Interest 3"
  ],
  "lookingFor": [
    "What opportunities you're seeking",
    "Types of projects you want to work on"
  ]
}
```

#### Step 2: Add Your Contact Information
Edit `src/data/links.json`:
```json
{
  "resumeURL": "/resume/Your_Resume.pdf",
  "email": "your.email@example.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourusername",
  "phone": "+1 (555) 123-4567"
}
```

#### Step 3: Add Your Projects
Edit `src/data/projects.json`:
```json
[
  {
    "id": "unique-project-id",
    "title": "Your Project Title",
    "blurb": "A short 1-2 sentence description",
    "descriptionMD": "A longer description with details about the project. You can use **bold text** and bullet points:\n\n- Feature 1\n- Feature 2\n- Feature 3",
    "tech": ["Technology 1", "Technology 2", "Technology 3"],
    "image": "/images/projects/your-project.jpg",
    "githubUrl": "https://github.com/yourusername/project-repo",
    "demoUrl": "https://your-demo-link.com"
  }
]
```

#### Step 4: Add Your Images
1. **Profile Photo**: Save as `public/images/profile.jpg`
2. **Project Images**: Save in `public/images/projects/` folder
3. **Resume PDF**: Save as `public/resume/Your_Resume.pdf`

### 📁 Project Structure

```
solomon-portfolio/
├── public/                 # Static files
│   ├── images/
│   │   ├── profile.jpg    # Your profile photo
│   │   └── projects/      # Project screenshots
│   ├── resume/
│   │   └── Your_Resume.pdf # Your resume PDF
│   └── vite.svg
├── src/
│   ├── components/        # Website sections
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Hero.tsx       # Landing section
│   │   ├── About.tsx      # About me section
│   │   ├── Portfolio.tsx  # Projects showcase
│   │   ├── Resume.tsx     # Resume viewer
│   │   └── Contact.tsx    # Contact form
│   ├── data/             # Content files (EDIT THESE!)
│   │   ├── profile.json   # Personal information
│   │   ├── projects.json  # Your projects
│   │   └── links.json     # Contact links
│   ├── App.tsx           # Main app
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies
├── tailwind.config.js    # Styling configuration
└── README.md            # This file
```

## 🛠️ Advanced Customization

### Changing Colors and Fonts

Edit `tailwind.config.js` to customize:
- **Colors**: Change the navy and teal color values
- **Fonts**: Update font families
- **Spacing**: Adjust margins and padding

### Email Form Setup (Optional)

To make the contact form functional:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Update the form configuration** in `src/components/Contact.tsx`:
   ```typescript
   await emailjs.send(
     'your_service_id',     // From EmailJS dashboard
     'your_template_id',    // From EmailJS dashboard
     formData,
     'your_user_id'         // From EmailJS dashboard
   )
   ```

## 🚀 Deployment

### Option 1: Vercel (Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Import Project" and select your GitHub repository
4. Vercel will automatically deploy your site!

### Option 2: Netlify
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to deploy

### Option 3: GitHub Pages
1. Install the GitHub Pages package: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Build and deploy: `npm run build && npm run deploy`

## ❗ Troubleshooting

### Common Issues

**"Cannot find module" errors:**
- Make sure you ran `npm install`
- Try deleting `node_modules` and running `npm install` again

**Website doesn't load:**
- Check that you're using `http://localhost:3000`
- Make sure the dev server is running (`npm run dev`)

**Images don't show:**
- Check that image files are in the correct `public/` folders
- Verify file names match exactly (case-sensitive)

**PDF resume doesn't load:**
- Make sure your PDF is saved as `public/resume/Solomon_Nackashi_Resume.pdf`
- Or update the path in `src/data/links.json`

### Getting Help

If you're stuck:
1. Check the browser console for error messages (F12)
2. Make sure all file paths are correct
3. Verify JSON files have valid syntax (use a JSON validator)
4. Ask for help with specific error messages

## 📱 Responsive Design

The website automatically adapts to:
- **Mobile phones** (320px and up)
- **Tablets** (768px and up)  
- **Desktop computers** (1024px and up)
- **Large screens** (1440px and up)

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## 🎨 Tech Stack

- **React 18** - User interface framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React PDF** - PDF viewing
- **EmailJS** - Contact form emails

## 📄 License

This project is open source and available under the MIT License.

---

**Need help?** Contact Solomon at snackashi@gatech.edu

**Built with ❤️ by Solomon Nackashi**