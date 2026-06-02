// ================= DARK MODE TOGGLE =================
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
}

function toggleTheme() {
  if (document.body.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// ================= PROJECTS DATA =================
const PROJECTS = [
  {
    title: "Multi-Branch Booking & Sales System",
    description: "Complete capstone project for Skin911: multi-branch appointment scheduling, sales monitoring, RBAC, and data flow diagrams (Level 0-2).",
    tech: ["PHP/Laravel", "MySQL", "Bootstrap", "JS"],
    gradient: "from-slate-700 to-slate-800",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    iconLabel: "Laravel • PHP • MySQL"
  },
  {
    title: "Cloud Quest: Serverless Dashboard",
    description: "Hands-on AWS simulation: built event-driven notifications, used Lambda + DynamoDB, practiced IAM roles — part of AWS Skill Builder journey.",
    tech: ["Python", "AWS CLI", "CloudWatch"],
    gradient: "from-cyan-800 to-indigo-700",
    icon: "M19.5 10.5c0 1.5-.75 2.25-2.25 2.25h-4.5c-1.5 0-2.25-.75-2.25-2.25V6c0-1.5.75-2.25 2.25-2.25h4.5c1.5 0 2.25.75 2.25 2.25v4.5zM9 10.5c0 1.5-.75 2.25-2.25 2.25h-4.5C.75 12.75 0 12 0 10.5V6c0-1.5.75-2.25 2.25-2.25h4.5c1.5 0 2.25.75 2.25 2.25v4.5z",
    iconLabel: "AWS Lambda • S3 • EC2"
  },
  {
    title: "Static Portfolio & Markdown Blog",
    description: "Responsive personal site with blog powered by Markdown + marked.js. Showcases modern frontend skills, deployed via GitHub Pages — pure static, zero backend.",
    tech: ["Tailwind CSS", "JavaScript", "Markdown"],
    gradient: "from-indigo-500 to-purple-600",
    icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
    iconLabel: "HTML/CSS/JS + Tailwind"
  }
];

// Render projects dynamically
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  
  container.innerHTML = PROJECTS.map(project => `
    <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm card-hover overflow-hidden">
      <div class="h-44 bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white">
        <div class="text-center">
          <svg class="w-12 h-12 mx-auto mb-2 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${project.icon}" />
          </svg>
          <span class="text-xs text-gray-300">${project.iconLabel}</span>
        </div>
      </div>
      <div class="p-5">
        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${escapeHtml(project.title)}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">${escapeHtml(project.description)}</p>
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${project.tech.map(tech => `<span class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">${escapeHtml(tech)}</span>`).join('')}
        </div>
        <div class="flex gap-3 text-sm">
          <a href="#" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline demo-link">Learn more →</a>
          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 demo-link">GitHub</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ================= BLOG POSTS =================
const BLOG_POSTS = [
  {
    id: "aws-cloud-practitioner-journey",
    title: "☁️ My AWS Cloud Practitioner Journey: Cloud Quest & SimuLearn",
    excerpt: "Hands-on labs with Lambda, S3, and IAM — insights from AWS Skill Builder and prep for certification.",
    date: "Jan 2026",
    markdown: `## Learning AWS the right way\n\nInstead of just theory, I dove into **AWS Cloud Quest** and **SimuLearn** — role-playing scenarios that require building real architectures.\n\n### Key takeaways:\n- **Lambda & API Gateway**: Built a serverless ticketing system.\n- **S3 + CloudFront**: Static hosting with edge caching.\n- **IAM policies**: Least privilege principle in practice.\n\nNext step: take the AWS Cloud Practitioner exam and then Solutions Architect Associate.`
  },
  {
    id: "laravel-multi-branch-system",
    title: "🏢 Building a Multi-Branch Booking System with Laravel",
    excerpt: "How we architected RBAC, branch-based appointments, and sales monitoring for Skin911.",
    date: "Dec 2025",
    markdown: `## Laravel in production-like capstone\n\nThe system supported 4 branches, real-time booking validation, and role dashboards (admin, branch manager, staff).\n\n### Technical highlights:\n- **Database Design**: normalized tables for branches, services, bookings, sales logs.\n- **Authentication**: Laravel Breeze with custom guards.\n- **Frontend**: Bootstrap + vanilla JS for dynamic branch selection.\n\nWe delivered full documentation (DFD Level 0-2) and the client praised usability.`
  },
  {
    id: "static-markdown-portfolio",
    title: "📄 Why Static Portfolio + Markdown Blog is underrated",
    excerpt: "Pure HTML/CSS/JS + marked.js to simulate a full blog without database - perfect for GitHub Pages.",
    date: "Feb 2026",
    markdown: `## Lightweight, secure, and fast\n\nThis very site uses embedded markdown (or you can fetch .md files). Benefits: zero server costs, instant deploys, and easy content updates.\n\n**Great for cloud portfolios** — shows you understand decoupled frontends and can work with APIs (even if it's just fetching markdown).`
  }
];

function renderBlogCards() {
  const container = document.getElementById('blogContainer');
  if (!container) return;
  container.innerHTML = '';
  BLOG_POSTS.forEach(post => {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm blog-card transition-all';
    card.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">${escapeHtml(post.title)}</h3>
        <span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">${post.date}</span>
      </div>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">${escapeHtml(post.excerpt)}</p>
      <div class="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium gap-1">Read full article <span>→</span></div>
    `;
    card.addEventListener('click', () => openModalWithPost(post));
    container.appendChild(card);
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// Modal functions
const modal = document.getElementById('blogModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');

function openModalWithPost(post) {
  if (modalTitle && modalContent) {
    modalTitle.innerText = post.title;
    modalContent.innerHTML = marked.parse(post.markdown);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// Demo links handler
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderBlogCards();
  
  document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('🔗 This link can be updated with your actual repository or live demo URL.');
    });
  });
});