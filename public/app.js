:root {
  --primary: #1d4ed8;
  --primary-dark: #12339d;
  --secondary: #f59e0b;
  --accent: #ecfeff;
  --dark: #0f172a;
  --dark-soft: #1e293b;
  --muted: #475569;
  --line: #e2e8f0;
  --white: #ffffff;
  --success: #16a34a;
  --shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: #f8fafc;
  color: var(--dark);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img { max-width: 100%; }

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(248, 250, 252, 0.82);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #3b82f6);
  color: var(--white);
  font-weight: 800;
  box-shadow: var(--shadow);
}

.brand strong,
.brand small {
  display: block;
}

.brand small {
  font-size: 0.72rem;
  color: var(--muted);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.96rem;
  color: var(--dark-soft);
}

.hero {
  padding: 84px 0 52px;
  background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 36px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  margin: 0 0 12px;
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
}

.lead {
  max-width: 620px;
  margin: 20px 0 0;
  font-size: 1.06rem;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 1.4rem;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;
}

.btn-sm { padding: 0.7rem 1rem; font-size: 0.9rem; }

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #3b82f6);
  color: var(--white);
  box-shadow: 0 14px 28px rgba(29, 78, 216, 0.25);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 30px rgba(29, 78, 216, 0.3);
}

.btn-secondary {
  background: var(--white);
  border: 1px solid var(--line);
  color: var(--dark);
}

.btn-block { width: 100%; }

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero-badges span {
  padding: 0.58rem 0.8rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: var(--primary-dark);
  font-size: 0.82rem;
  font-weight: 600;
}

.hero-panel {
  display: grid;
  gap: 18px;
}

.mini-card {
  padding: 24px;
  border-radius: 24px;
  background: var(--white);
  box-shadow: var(--shadow);
  border: 1px solid rgba(226, 232, 240, 0.9);
}

.mini-card.accent { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
.mini-card.info { background: linear-gradient(135deg, #fef3c7, #fef9c3); }

.mini-card span {
  display: block;
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 8px;
}

.mini-card strong {
  font-size: 1.5rem;
  letter-spacing: -0.05em;
}

.stats { padding: 8px 0 36px; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.stat-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px 20px;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.04);
}

.stat-card span {
  display: block;
  color: var(--muted);
  font-size: 0.84rem;
}

.stat-card strong {
  display: block;
  margin-top: 10px;
  font-size: clamp(1.4rem, 3vw, 2rem);
  letter-spacing: -0.05em;
}

.section { padding: 92px 0; }
.alt-bg { background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%); }

.section-heading { margin-bottom: 34px; }
.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.05em;
}

.service-grid,
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.service-card,
.package-card,
.contact-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 30px 26px;
  box-shadow: var(--shadow);
}

.service-card.accent { background: linear-gradient(135deg, #eff6ff, #ffffff); }

.icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  font-size: 1.8rem;
  border-radius: 16px;
  background: rgba(29, 78, 216, 0.08);
  margin-bottom: 16px;
}

.service-card h3,
.package-card h3,
.contact-card h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
}

.service-card p,
.package-card p,
.contact-card p {
  margin: 0 0 15px;
  color: var(--muted);
}

.service-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--dark-soft);
}

.about-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 30px;
  align-items: center;
}

.about-grid h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.05em;
}

.about-grid p {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 1.02rem;
}

.package-card { padding: 28px 24px; }
.package-card p {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--dark);
  margin: 0 0 8px;
}
.package-card span { color: var(--primary); font-weight: 600; }

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;
}

.support-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}

.contact-item span {
  color: var(--muted);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-item a { font-weight: 600; }

.form-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--dark-soft);
}

input, textarea, select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  padding: 0.88rem 0.9rem;
  font: inherit;
  color: var(--dark);
}

input:focus, textarea:focus, select:focus {
  outline: 2px solid rgba(59, 130, 246, 0.2);
  border-color: #93c5fd;
}

.footer {
  background: var(--dark);
  color: rgba(255, 255, 255, 0.78);
  padding: 26px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.admin-body { background: #f1f5f9; }
.admin-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: var(--white);
  padding: 28px 22px;
  position: sticky;
  top: 0;
  height: 100vh;
}

.sidebar-brand { margin-bottom: 40px; }
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar-nav a {
  padding: 0.85rem 0.9rem;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.8);
  transition: 0.2s ease;
}

.sidebar-nav a:hover,
.sidebar-nav a.active {
  background: rgba(30, 64, 175, 0.28);
  color: var(--white);
}

.sidebar-footer {
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: rgba(255, 255, 255, 0.75);
}

.sidebar-footer p { margin: 0; font-weight: 700; }

.admin-main {
  flex: 1;
  padding: 30px;
}

.admin-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.admin-topbar h1 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.05em;
}

.admin-panel {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.04);
  padding: 22px;
}

.admin-stats { margin-bottom: 24px; }

.admin-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-bottom: 24px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.panel-header h3 { margin: 0; font-size: 1.1rem; }

.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(30, 64, 175, 0.08);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
}

.pill.success {
  background: rgba(22, 163, 74, 0.08);
  color: var(--success);
}

.data-list { display: grid; gap: 12px; }
.data-item {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 16px;
  background: #f8fafc;
}

.data-item strong { display: block; margin-bottom: 4px; }
.data-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.84rem;
  color: var(--muted);
  flex-wrap: wrap;
}

.admin-form { display: grid; gap: 14px; }
.message-list .data-item { background: #fff; }

@media (max-width: 980px) {
  .hero-grid,
  .about-grid,
  .contact-grid,
  .admin-grid,
  .service-grid,
  .card-grid,
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .admin-shell { flex-direction: column; }
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }

  .nav-links {
    gap: 12px;
    font-size: 0.8rem;
  }
}

@media (max-width: 720px) {
  .nav,
  .footer-inner,
  .admin-topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links,
  .service-grid,
  .card-grid,
  .stats-grid,
  .hero-grid,
  .about-grid,
  .contact-grid,
  .admin-grid {
    grid-template-columns: 1fr;
  }

  .nav-links { width: 100%; flex-wrap: wrap; }
  .hero { padding-top: 60px; }
  .admin-main { padding: 18px; }
  .sidebar { padding: 20px 18px; }
}
