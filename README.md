# EdgeCareer - AI-Powered Career Assistant 🚀

EdgeCareer is a full-stack web application that leverages AI to help job seekers build and optimize their careers. From resume and cover letter generation to interview preparation, EdgeCareer streamlines the entire job-seeking process.

## 🔗 Live Demo
👉 [Visit Live App](https://edge-career2-brhc-git-main-arshitas-projects-593ec6ba.vercel.app/)

---

## ✨ Features

- ✅ **AI-Powered Resume Builder** – Generate tailored resumes with intelligent suggestions
- ✅ **Cover Letter Assistant** – Create compelling cover letters with Gemini AI
- ✅ **Interview Prep Mode** – Practice mock interviews and review key tips
- ✅ **Dashboard & Insights** – Track progress and access industry-specific guidance
- ✅ **Authentication with Clerk** – Secure sign-in & sign-up workflows
- ✅ **Quote of the Day** – Daily motivational quote fetched from ZenQuotes API
- ✅ **Responsive Design** – Fully optimized for mobile and desktop
- ✅ **Elegant Animations** – Scroll-based motion and hover effects using Framer Motion

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, Tailwind CSS
- **Backend:** Prisma, PostgreSQL (hosted on Railway)
- **Authentication:** Clerk
- **AI Integration:** Gemini API (Google Generative AI)
- **Styling & Animation:** Framer Motion, ShinyText, Lucide Icons

---

## 📦 Getting Started (Dev)


git clone https://github.com/YOUR_USERNAME/edge-career2
cd edge-career2
npm install
Create a .env file with the following:

env
Copy
Edit
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
DATABASE_URL=your_postgresql_url
GEMINI_API_KEY=your_gemini_api_key
Then:


Copy
Edit
npx prisma db push
npm run dev
📤 Deployment
This project is deployed on Vercel and uses a Railway PostgreSQL instance.
Ensure all environment variables are added in the Vercel dashboard before deploying.

🙌 Credits
Made with ❤️ by Arshita Chatha
