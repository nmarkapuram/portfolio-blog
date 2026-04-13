# 🚀 Personal Architecture Blog & Portfolio

A modern, performance-first frontend platform built to showcase architecture thinking, system design, and real-world frontend engineering practices.

🔗 Live: https://nagaraj.dev/

---

## 🧠 Vision

This is not just a blog.

It’s a frontend architecture lab — where ideas around scalability, performance, and developer experience are translated into working systems.

“Great UI is not built — it is architected.”

---

## ⚙️ Tech Stack

- Framework: Next.js (App Router)
- Rendering: SSR, Streaming, Edge-ready architecture
- Content: MDX (dynamic blog + architecture articles)
- Styling: Tailwind CSS
- Diagrams: Mermaid.js (runtime rendering)
- Hosting: Vercel (with automatic SSL + CDN)

---

## 🏗️ Key Features

### 1. MDX-Driven Content System
- Blogs and architecture content are authored in `.mdx`
- Dynamic routing via `/blog/[slug]`
- Automatic content discovery (no hardcoding links)

---

### 2. Mermaid Diagram Integration
- Custom React-based Mermaid renderer
- Handles SSR issues and DOM timing
- Uses unique IDs for safe rendering
- Enables architecture diagrams directly inside MDX

---

### 3. Smart Navigation System
- Scroll-aware navigation using IntersectionObserver
- Smooth section scrolling without hash-based bugs
- Mobile-first responsive navigation with hamburger menu
- Active link highlighting (Home / Architecture / Blog / Profile)

---

### 4. Performance-First Architecture
- Static + dynamic rendering strategy
- Optimized asset loading
- Minimal runtime overhead
- Lighthouse-friendly structure

---

### 5. Domain & Deployment
- Custom domain via Namecheap → Vercel DNS
- Automatic HTTPS (no manual SSL required)
- Edge CDN delivery

---

## 🧩 Architecture Overview

User → Vercel Edge → Next.js App Router  
                         ↓  
                 MDX Content Layer  
                         ↓  
     React Components + Mermaid Renderer  

---

## 📁 Project Structure

app/  
  blog/  
    [slug]/page.js      # Dynamic blog rendering  
  components/  
    Header.js           # Smart navigation  
    Mermaid.js          # Diagram renderer  
  layout.js  

content/  
  blog/                 # Blog MDX files  
  *.mdx                # Architecture domain content  

lib/  
  posts.js             # Content loader  

---

## 🧠 Notable Engineering Decisions

### 1. Avoided Hash-Based Navigation
Replaced `/#section` with scrollIntoView to prevent persistent scroll bugs across routes.

---

### 2. IntersectionObserver over Scroll Events
- Better performance
- Cleaner logic
- Accurate section detection

---

### 3. Mermaid Rendering Strategy
- Client-side rendering only
- Controlled lifecycle with useEffect
- Safe DOM updates to avoid runtime crashes

---

### 4. Content Decoupling via MDX
- Separation of content and presentation
- Scalable for future CMS integration

---

## 🚧 Upcoming Enhancements

### UX & UI
- Animated mobile menu (hamburger → close)
- Scroll progress indicator
- Improved blog listing UI (cards, tags)

---

### Content & Depth
- Premium articles with diagrams and case studies
- Design System deep dive (Clarity-based)
- Frontend observability case study

---

### Platform Improvements
- Search functionality
- Tag-based filtering
- RSS feed support
- Sitemap + SEO enhancements

---

### Advanced Engineering
- Edge caching strategies (SWR, ISR tuning)
- Observability integration (Sentry / OpenTelemetry)
- Bundle size monitoring

---

## 🧪 Local Development

npm install  
npm run dev  

Visit: http://localhost:3000

---

## 🚀 Deployment

Hosted on Vercel with:
- Git-based CI/CD
- Preview deployments
- Global CDN

---

## 💡 Learnings & Challenges Solved

- MDX + Mermaid integration issues
- Next.js App Router routing pitfalls
- Navigation bugs caused by hash persistence
- Mobile UX inconsistencies (Safari issues)
- DNS + SSL configuration

---

## 👤 Author

Nagaraja Markapuram  
Frontend Architect | UI Systems | Performance Engineering  

---

## ⭐ Final Thought

This project reflects how I think about frontend systems:
not as pages, but as scalable, observable, and evolvable architectures.