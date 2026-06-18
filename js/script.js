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

// ================= PROJECTS DATA (with AXIOM E-Commerce) =================
const PROJECTS = [
  {
  title: "Skin911 Multi-Branch Booking & Sales Monitoring System",
  description: "Full-stack capstone project for Skin911: multi-branch appointment scheduling, sales monitoring, RBAC, and data flow diagrams (Level 0-2). Deployed on AWS EC2 with LAMP stack.",
  tech: ["PHP/Laravel", "MySQL", "AWS EC2", "Bootstrap", "JS"],
  gradient: "from-slate-700 to-slate-800",
  icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  iconLabel: "Laravel • PHP • AWS EC2",
  liveLink: "http://47.129.106.209/",
  githubLink: "https://github.com/atZekes/Skinn911Capstone"
},

  {
    title: "System Status Dashboard",
    description: "AWS service monitoring dashboard with real-time updates, incident timeline, region filtering, email/SMS alerts, and SLA tracking. Monitors 8+ AWS services across 3 regions.",
    tech: ["Chart.js", "AWS Monitoring", "Responsive", "Dark/Light Mode"],
    gradient: "from-emerald-600 to-teal-600",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    iconLabel: "Cloud Monitoring • Real-time",
    liveLink: "https://atzekes.github.io/AWSSystemStatusDashboard/",
    githubLink: "https://github.com/atzekes/AWSSystemStatusDashboard"
  },

  {
    title: "AXIOM — Premium Tech E-Commerce",
    description: "Luxury tech e-commerce platform featuring premium products, smooth cart system, filterable product grid, and responsive design. Fully deployed on AWS S3 with custom domain ready.",
    tech: ["HTML5", "CSS3", "JavaScript", "AWS S3", "E-Commerce"],
    gradient: "from-amber-700 to-yellow-600",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 18v3",
    iconLabel: "Premium E-Commerce • AWS S3",
    liveLink: "http://axiomecommerce.s3-website-ap-southeast-2.amazonaws.com/",
    
  },
  
  {
    title: "Tic-Tac-Toe Game",
    description: "Classic Tic-Tac-Toe game with AI opponent mode, score tracking, and smooth animations. Built with pure HTML, CSS, and JavaScript. Deployed on AWS S3.",
    tech: ["HTML5", "CSS3", "JavaScript", "AWS S3"],
    gradient: "from-purple-600 to-pink-600",
    icon: "M4 4v16h16V4H4zm2 2h12v12H6V6zm3 3h2v6H9V9zm4 0h2v6h-2V9z",
    iconLabel: "HTML/CSS/JS • AWS S3",
    liveLink: "http://mystatic-website111.s3-website-ap-southeast-2.amazonaws.com/",
    
  },
  
  {
    title: "Task Management API (Coming Soon)",
    description: "RESTful API for task management with JWT authentication, task sharing, and real-time updates.",
    tech: ["Python", "Django", "DRF", "PostgreSQL"],
    gradient: "from-blue-600 to-purple-600",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    iconLabel: "Django • DRF",
    liveLink: "#",
    githubLink: "#"
  }
];

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
    id: "deploy-ecommerce-aws-s3",
    title: "🛍️ Deploying a Premium E-Commerce Site on AWS S3",
    excerpt: "How I built and deployed a luxury tech e-commerce platform (AXIOM) on AWS S3 with zero backend costs.",
    date: "Mar 2026",
    markdown: `## Building AXIOM E-Commerce on AWS S3\n\nI built a complete luxury tech e-commerce website (AXIOM) featuring premium products, a functional cart system, and smooth animations — all hosted on AWS S3 for pennies per month.\n\n### Why AWS S3 for E-Commerce?\n\nFor a fully static e-commerce site (no user accounts, no payments on-site), S3 is perfect:\n\n**Cost**: ~$0.50/month for storage and transfer\n**Performance**: Global edge network with CloudFront\n**Reliability**: 99.999999999% durability\n**Security**: Built-in HTTPS and bucket policies\n\n### How I Built It:\n\n**Frontend Architecture:**\n- Product catalog with filtering by category (Audio, Computing, Mobile)\n- Shopping cart system using localStorage\n- Smooth animations and custom cursor\n- Responsive design for all devices\n- Newsletter signup mock\n\n**AWS S3 Setup:**\n\`\`\`bash\n# 1. Create S3 bucket with unique name\naws s3 mb s3://axiomecommerce --region ap-southeast-2\n\n# 2. Enable static website hosting\naws s3 website s3://axiomecommerce --index-document index.html --error-document 404.html\n\n# 3. Set bucket policy for public read\naws s3api put-bucket-policy --bucket axiomecommerce --policy file://policy.json\n\`\`\`\n\n**Bucket Policy:**\n\`\`\`json\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Allow\",\n    \"Principal\": \"*\",\n    \"Action\": \"s3:GetObject\",\n    \"Resource\": \"arn:aws:s3:::axiomecommerce/*\"\n  }]\n}\n\`\`\`\n\n### Features Implemented:\n\n✅ Product catalog with 8+ premium products\n✅ Category filtering (Audio, Computing, Mobile)\n✅ Shopping cart with quantity management\n✅ Featured product section\n✅ Client testimonials\n✅ Newsletter subscription (mock)\n✅ Custom cursor and luxury aesthetic\n✅ Fully responsive design\n\n### Challenges & Solutions:\n\n**Challenge 1: Cart Persistence**\n- *Solution*: Used localStorage to save cart between page refreshes\n\n**Challenge 2: Product Images**\n- *Solution*: Optimized all images to WebP format for faster loading\n\n**Challenge 3: S3 Caching**\n- *Solution*: Set proper Cache-Control headers for assets\n\n### Deployment Process:\n\n\`\`\`bash\n# Sync local files to S3\naws s3 sync ./ s3://axiomecommerce --exclude \".git/*\" --exclude \"*.md\"\n\n# Set cache headers for static assets\naws s3 cp --recursive ./ s3://axiomecommerce --exclude \"*.html\" --cache-control \"max-age=31536000\"\n\n# Invalidate CloudFront (if using)\naws cloudfront create-invalidation --distribution-id XYZ --paths \"/*\"\n\`\`\`\n\n### Live Demo:\nhttp://axiomecommerce.s3-website-ap-southeast-2.amazonaws.com/\n\n### Lessons Learned:\n1. S3 is perfect for static e-commerce (catalog-only sites)\n2. localStorage is sufficient for cart without backend\n3. CloudFront dramatically improves global load times\n4. Always set proper CORS if using custom fonts\n5. Use environment variables for API keys (even in static sites)\n\n### Future Enhancements:\n- [ ] Add Stripe Checkout integration\n- [ ] Implement user accounts with AWS Cognito\n- [ ] Add product search functionality\n- [ ] Connect to a headless CMS for product management\n- [ ] Add email notifications for \"orders\"\n\nThis project proves that you can build a premium e-commerce experience without expensive backend infrastructure!`
  },
  {
  id: "laravel-multi-branch-system",
  title: "🏢 Deploying Skin911 Booking System on AWS EC2",
  excerpt: "Full-stack Laravel application with multi-branch booking, RBAC, and sales monitoring — deployed on AWS EC2 with LAMP stack.",
  date: "Dec 2025",
  markdown: `## Skin911 Multi-Branch Booking & Sales Monitoring System

This full-stack Laravel application was built as a capstone project for Skin911, a multi-branch beauty services provider. The system handles appointment scheduling, sales monitoring, and user role management across multiple branches.

### System Architecture:

**Frontend:** Bootstrap 5 with custom CSS, responsive design
**Backend:** Laravel 10 with Eloquent ORM
**Database:** MySQL (Amazon RDS)
**Server:** AWS EC2 (Ubuntu 22.04 LTS)
**Web Server:** Apache with mod_rewrite
**Deployment:** Manual setup with Git pulls and artisan commands

### Key Features:

- ✅ **Multi-Branch Support** - Manage 4+ branches with individual schedules
- ✅ **Role-Based Access Control** - Admin, Branch Manager, Staff roles
- ✅ **Appointment Booking** - Real-time slot validation per branch
- ✅ **Sales Monitoring** - Daily, weekly, and monthly sales reports
- ✅ **Data Flow Diagrams** - Complete documentation (Level 0-2)
- ✅ **Authentication** - Laravel Breeze with custom guards

### AWS EC2 Deployment Setup:

**1. Launch EC2 Instance:**
\`\`\`bash
# Ubuntu 22.04 LTS - t2.micro (Free Tier)
# Security Groups: HTTP (80), HTTPS (443), SSH (22), MySQL (3306)
\`\`\`

**2. Install LAMP Stack:**
\`\`\`bash
sudo apt update
sudo apt install apache2 mysql-server php php-mysql php-mbstring php-xml php-curl php-zip
\`\`\`

**3. Configure Apache for Laravel:**
\`\`\`bash
# Enable mod_rewrite
sudo a2enmod rewrite

# Create virtual host for Laravel
sudo nano /etc/apache2/sites-available/laravel.conf

<VirtualHost *:80>
    DocumentRoot /var/www/skin911/public
    <Directory /var/www/skin911/public>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>

# Enable site
sudo a2ensite laravel.conf
sudo systemctl reload apache2
\`\`\`

**4. Deploy the Application:**
\`\`\`bash
cd /var/www
git clone https://github.com/leogenodiala/skin911-booking-system.git
cd skin911-booking-system

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Environment setup
cp .env.example .env
php artisan key:generate
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set permissions
sudo chown -R www-data:www-data /var/www/skin911
sudo chmod -R 775 /var/www/skin911/storage
sudo chmod -R 775 /var/www/skin911/bootstrap/cache
\`\`\`

**5. Database Setup (RDS):**
\`\`\`bash
# Create MySQL database and user
sudo mysql
CREATE DATABASE skin911_db;
CREATE USER 'skin911_user'@'%' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON skin911_db.* TO 'skin911_user'@'%';
FLUSH PRIVILEGES;
\`\`\`

**6. Run Migrations & Seeders:**
\`\`\`bash
php artisan migrate --force
php artisan db:seed --force
\`\`\`

### Live Demo:
🔗 http://47.129.106.209/

### Lessons Learned:

1. **AWS EC2 Setup** - Configuring security groups, SSH access, and public IP routing
2. **LAMP Stack Management** - Installing and configuring Apache, MySQL, PHP extensions
3. **Laravel Production** - Optimizing for performance (caching, queuing, logging)
4. **Deployment Automation** - Using Git for continuous deployment
5. **Database Migration** - Handling schema changes without downtime
6. **Security Hardening** - Setting proper file permissions and environment variables

### Future Improvements:
- [ ] Switch to AWS CodeDeploy for automated deployment
- [ ] Use S3 for file uploads (branch branding)
- [ ] Implement Redis for session management
- [ ] Add CloudFront for static asset delivery
- [ ] Set up AWS CloudWatch for monitoring

This project proves I can build full-stack applications and deploy them to production on AWS EC2 from end to end!`
},
  {
    id: "deploy-static-website-aws-s3",
    title: "🚀 Deploying Static Websites on AWS S3",
    excerpt: "Step-by-step guide to host your static website on AWS S3 bucket with public access and custom domain.",
    date: "Mar 2026",
    markdown: `## Hosting Static Websites on AWS S3\n\nAmazon S3 (Simple Storage Service) isn't just for file storage — it can also host static websites! This is perfect for portfolios, blogs, and frontend apps.\n\n### Step-by-Step Guide:\n\n**1. Create an S3 Bucket**\n- Go to AWS Console → S3 → Create bucket\n- Bucket name must be unique globally\n- Choose region closest to your audience (ap-southeast-2 for Sydney)\n- Uncheck \"Block all public access\" (we need public access for website hosting)\n\n**2. Enable Static Website Hosting**\n- Go to bucket → Properties → Static website hosting\n- Enable: \"Host a static website\"\n- Index document: \`index.html\`\n- Error document: \`404.html\` (optional)\n\n**3. Set Bucket Permissions**\n- Go to Permissions → Bucket Policy\n- Add this policy to make files publicly readable:\n\n\`\`\`json\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Principal\": \"*\",\n      \"Action\": \"s3:GetObject\",\n      \"Resource\": \"arn:aws:s3:::YOUR-BUCKET-NAME/*\"\n    }\n  ]\n}\n\`\`\`\n\n**4. Upload Your Files**\n- Upload \`index.html\`, \`style.css\`, \`script.js\`, and any assets\n- Make sure files are publicly readable\n\n**5. Access Your Website**\n- Your website URL: \`http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com/\`\n\n### Cost Analysis:\n- **S3 Storage**: $0.023 per GB/month (first 50GB free)\n- **Data Transfer**: $0.09 per GB (first 100GB free)\n- **Total monthly cost**: ~$0.50 for low-traffic portfolio\n\n### Advantages:\n- ✅ Extremely cheap (pennies per month)\n- ✅ Scales automatically\n- ✅ High availability (99.999999999% durability)\n- ✅ No server management\n- ✅ CDN ready (CloudFront)\n\nThis is how I deployed my Tic-Tac-Toe game and AXIOM e-commerce site!`
  },
  {
    id: "static-markdown-portfolio",
    title: "📄 Why Static Portfolio + Markdown Blog is underrated",
    excerpt: "Pure HTML/CSS/JS + marked.js to simulate a full blog without database - perfect for GitHub Pages.",
    date: "Feb 2026",
    markdown: `## Lightweight, secure, and fast\n\nThis very site uses embedded markdown (or you can fetch .md files). Benefits: zero server costs, instant deploys, and easy content updates.\n\n**Great for cloud portfolios** — shows you understand decoupled frontends and can work with APIs (even if it's just fetching markdown).`
  },
  {
    id: "serverless-best-practices",
    title: "⚡ Serverless Best Practices for Production",
    excerpt: "Cold starts, timeout handling, and cost optimization strategies for AWS Lambda.",
    date: "Jan 2026",
    markdown: `## Production-Ready Serverless\n\nAfter working with AWS Lambda for several projects, here are key lessons:\n\n### Best Practices:\n- **Provisioned Concurrency** for critical functions\n- **Lambda Power Tuning** to find optimal memory settings\n- **Dead Letter Queues** for failed async invocations\n- **Structured logging** with correlation IDs`
  },
  {
    id: "cicd-pipelines",
    title: "🚀 CI/CD Pipelines with GitHub Actions",
    excerpt: "Automating tests, builds, and deployments for web applications.",
    date: "Dec 2025",
    markdown: `## Automating Everything\n\nGitHub Actions changed how I deploy applications:\n\n### My Typical Pipeline:\n1. Run tests on pull request\n2. Build production assets\n3. Deploy to staging\n4. Run integration tests\n5. Deploy to production on merge to main`
  }
];

// ================= RENDER FUNCTIONS =================
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
          <span class="text-xs text-gray-300">${escapeHtml(project.iconLabel)}</span>
        </div>
      </div>
      <div class="p-5">
        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${escapeHtml(project.title)}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">${escapeHtml(project.description)}</p>
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${project.tech.map(tech => `<span class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">${escapeHtml(tech)}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.liveLink && project.liveLink !== '#' ? 
            `<a href="${project.liveLink}" target="_blank" class="live-demo-btn">🚀 Live Demo <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>` :
            `<a href="#" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline demo-link">Learn more →</a>`
          }
          ${project.githubLink && project.githubLink !== '#' ? 
            `<a href="${project.githubLink}" target="_blank" class="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">GitHub →</a>` :
            `<a href="#" class="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 demo-link">GitHub →</a>`
          }
        </div>
      </div>
    </div>
  `).join('');
}

function renderBlogCards() {
  const container = document.getElementById('blogContainer');
  if (!container) return;
  container.innerHTML = '';
  
  BLOG_POSTS.forEach(post => {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm blog-card transition-all cursor-pointer';
    card.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <h3 class="blog-title text-xl font-bold text-gray-900 dark:text-white">${escapeHtml(post.title)}</h3>
        <span class="blog-date text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">${post.date}</span>
      </div>
      <p class="blog-excerpt text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">${escapeHtml(post.excerpt)}</p>
      <div class="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium gap-1">Read full article <span>→</span></div>
    `;
    card.addEventListener('click', () => openModalWithPost(post));
    container.appendChild(card);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// ================= MODAL FUNCTIONS =================
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

// ================= DRAG-TO-SCROLL FUNCTIONALITY =================
function setupDragScroll(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  let isDown = false;
  let startX;
  let scrollLeft;
  
  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.style.cursor = 'grabbing';
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  
  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });
  
  container.addEventListener('mouseup', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });
  
  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
  
  container.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  
  container.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
  
  container.addEventListener('touchend', () => {
    isDown = false;
  });
  
  container.style.cursor = 'grab';
}

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderBlogCards();
  
  setTimeout(() => {
    setupDragScroll('projectsDragScroll');
    setupDragScroll('blogDragScroll');
  }, 300);
  
  document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('🔗 This link can be updated with your actual repository or live demo URL.');
    });
  });
});