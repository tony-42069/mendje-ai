# MendjeAI 🤖

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

Albanian Language AI Chat Assistant powered by HuggingFace's AI models.

## Overview
MendjeAI is a Progressive Web App that provides an AI chat interface fully in Albanian language. It's designed to be simple, fast, and accessible across all devices.

![MendjeAI Preview](public/images/preview.png)

## Features
- 🇦🇱 Full Albanian language support
- 💬 Real-time chat interface
- 🤖 AI-powered responses using HuggingFace's Mistral model
- 📱 Progressive Web App capabilities
- 🎨 Clean, modern UI with TailwindCSS

## Tech Stack
- **Frontend**: React + Vite
- **Styling**: TailwindCSS
- **AI**: HuggingFace Inference API
- **Model**: Mistral-7B-Instruct-v0.2
- **Hosting**: Vercel (Frontend)

## Project Structure
```
mendje-ai/
├── src/
│   ├── components/
│   │   └── Chat/               
│   │       ├── ChatBox.jsx     # Main chat interface
│   │       └── Message.jsx     # Message bubbles
│   ├── services/
│   │   └── ai.js              # HuggingFace integration
│   ├── translations/
│   │   └── al.js              # Albanian translations
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── manifest.json          # PWA manifest
```

## Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with:
   ```env
   VITE_HUGGINGFACE_API_KEY=your_api_key_here
   ```
4. Run development server:
   ```bash
   npm run dev
   ```

## Development Progress
- ✅ Project initialization
- ✅ Basic project structure
- ✅ Chat interface components
- ✅ HuggingFace AI integration
- ✅ Albanian translations
- ✅ Basic PWA setup
- 🔄 Deployment configuration (pending)
- 🔄 Production testing (pending)

## Contributing
This project is currently under active development. Feel free to submit issues and pull requests.

## License
ISC