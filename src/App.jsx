import { useEffect, useState } from 'react'
import {
  cvEnglish,
  cvSpanish,
  learningDashboard,
  operationsDashboard,
  portrait,
} from './media'

const profileLinks = {
  email: 'mailto:camilodelvallel@gmail.com',
  github: 'https://github.com/CamiloDelVallel',
  linkedin: 'https://www.linkedin.com/in/camilodelvallel',
  whatsapp: 'https://wa.me/573187068635',
}

const content = {
  es: {
    nav: { about: 'Perfil', experience: 'Experiencia', data: 'Power BI', contact: 'Contacto' },
    cv: 'Descargar CV',
    skip: 'Ir al contenido',
    availability: 'Medellín, Colombia · Abierto a nuevas oportunidades',
    heroTitle: 'Conecto ingeniería, software y datos para mejorar cómo operan los equipos.',
    heroBody:
      'Tech Lead e ingeniero mecánico con más de 12 años de experiencia profesional. Diseño soluciones digitales, lidero equipos y convierto procesos complejos en decisiones claras.',
    explore: 'Conocer mi trayectoria',
    contactMe: 'Hablemos',
    portraitAlt: 'Retrato profesional de Camilo Del Valle Ledesma',
    proof: [
      { value: '12+', label: 'años de experiencia profesional' },
      { value: '12', label: 'dashboards desarrollados en Riwi' },
      { value: '15', label: 'proyectos liderados en simultáneo' },
      { value: '+10 %', label: 'automatización lograda en línea de producción' },
    ],
    profileLabel: 'Una trayectoria que cruza disciplinas',
    profileTitle: 'Entiendo la operación antes de escribir la solución.',
    profileBody:
      'Mi experiencia comenzó en planta, continuó en desarrollo de software y hoy integra liderazgo técnico, automatización e inteligencia de negocios. Esa combinación me permite conversar con el negocio, entender el proceso y acompañar al equipo hasta la entrega.',
    disciplines: [
      { title: 'Ingeniería', text: 'Procesos, mejora continua, mantenimiento y producción industrial.' },
      { title: 'Software', text: 'Angular, .NET, SQL y soluciones escalables en entornos transaccionales.' },
      { title: 'Datos', text: 'Power BI, automatización y analítica para decisiones accionables.' },
    ],
    experienceLabel: 'Experiencia',
    experienceTitle: 'Liderazgo técnico con contexto de negocio.',
    roles: [
      {
        company: 'Riwi', role: 'Tech Lead', period: 'Ago 2025 — Actualidad',
        items: ['Diseño y desarrollo de componentes del modelo de entrenamiento en tecnología.', 'Impulso de prácticas investigativas y adopción de tecnologías innovadoras.', 'Creación de 12 dashboards en Power BI para seguimiento y toma de decisiones.'],
      },
      {
        company: 'Global Hitss', role: 'Desarrollador front-end Angular', period: 'Mar 2024 — Ago 2025',
        items: ['Desarrollo front-end en Angular y trabajo con bases de datos SQL Server.', 'Scrum Master y desarrollador de Factura Web para EPM.', 'Reconocimiento constante entre los 3 mejores desarrolladores por cierre de órdenes de trabajo.'],
      },
      {
        company: 'Bassis', role: 'Líder de Tecnología', period: 'Feb 2023 — Nov 2023',
        items: ['Liderazgo de equipo con hasta 15 proyectos simultáneos bajo Scrum.', 'Soluciones con Power Apps, Power Automate, Power BI, AppSheet y Looker Studio.'],
      },
      {
        company: 'Grupo Renault — Sofasa', role: 'Jefe de taller y otros cargos de ingeniería', period: 'Abr 2014 — Jul 2022',
        items: ['Implementación del proyecto HJD Renault Duster, que aumentó en más del 10 % la automatización de la línea de producción.', 'Gestión de taller y mantenimiento, y estandarización de procedimientos mediante el ciclo PHVA.'],
      },
      {
        company: 'Coldeplast', role: 'Ingeniero de Procesos y Practicante', period: 'Dic 2011 — Abr 2014',
        items: ['Inicio profesional en procesos industriales, estandarización y mejora continua.'],
      },
    ],
    dataLabel: 'Business Intelligence',
    dataTitle: 'Los datos sirven cuando ayudan a decidir.',
    dataBody:
      'He desarrollado 12 dashboards en Power BI para Riwi. Mi enfoque combina preguntas de negocio, modelado claro y visualizaciones que permiten actuar, no solo observar.',
    dashboardCaption: 'Visual conceptual creado para representar mi práctica de BI; no contiene información de clientes ni datos reales.',
    dashboardAlts: ['Dashboard conceptual de desempeño operativo', 'Dashboard conceptual de aprendizaje y talento'],
    capabilitiesLabel: 'Capacidades',
    capabilitiesTitle: 'Un stack pensado para entregar de extremo a extremo.',
    skills: [
      { group: 'Desarrollo', items: ['Angular', 'TypeScript', 'C#', '.NET', 'HTML & CSS'] },
      { group: 'Datos y BI', items: ['Power BI', 'SQL Server', 'Oracle', 'MySQL', 'Looker Studio'] },
      { group: 'Automatización', items: ['Power Automate', 'Power Apps', 'AppSheet', 'Low-code'] },
      { group: 'Liderazgo', items: ['Scrum', 'Gestión de proyectos', 'PDCA / PHVA', 'Azure DevOps'] },
    ],
    educationLabel: 'Formación e idiomas',
    education: [
      { title: 'Especialización en Gerencia para Ingenieros', place: 'Universidad Pontificia Bolivariana · 2018–2019' },
      { title: 'Ingeniería Mecánica', place: 'Universidad Nacional de Colombia · 2007–2012' },
      { title: 'Desarrollo Full Stack', place: 'Platzi, OIT y Sophos Solutions · 2022' },
    ],
    languages: 'Español nativo · Inglés B2 · Francés B1',
    contactLabel: 'Contacto',
    contactTitle: 'Construyamos la próxima mejora medible.',
    contactBody: 'Estoy interesado en oportunidades donde pueda unir liderazgo técnico, software, automatización y datos.',
    email: 'Enviar correo', whatsapp: 'Escribir por WhatsApp', viewLinkedin: 'Ver LinkedIn', viewGithub: 'Ver GitHub',
    cvEs: 'CV en español', cvEn: 'CV en inglés',
    footer: 'Diseñado alrededor de ingeniería, tecnología y decisiones basadas en datos.',
  },
  en: {
    nav: { about: 'Profile', experience: 'Experience', data: 'Power BI', contact: 'Contact' },
    cv: 'Download résumé',
    skip: 'Skip to content',
    availability: 'Medellín, Colombia · Open to new opportunities',
    heroTitle: 'I connect engineering, software and data to improve how teams operate.',
    heroBody:
      'Tech Lead and Mechanical Engineer with 12+ years of professional experience. I design digital solutions, lead teams and turn complex processes into clear decisions.',
    explore: 'Explore my experience',
    contactMe: 'Let’s talk',
    portraitAlt: 'Professional portrait of Camilo Del Valle Ledesma',
    proof: [
      { value: '12+', label: 'years of professional experience' },
      { value: '12', label: 'dashboards built at Riwi' },
      { value: '15', label: 'projects led simultaneously' },
      { value: '+10%', label: 'automation achieved on a production line' },
    ],
    profileLabel: 'A career across disciplines',
    profileTitle: 'I understand the operation before writing the solution.',
    profileBody:
      'My career began on the factory floor, evolved through software development, and now integrates technical leadership, automation and business intelligence. That combination helps me connect business needs, operational context and technical delivery.',
    disciplines: [
      { title: 'Engineering', text: 'Processes, continuous improvement, maintenance and industrial production.' },
      { title: 'Software', text: 'Angular, .NET, SQL and scalable solutions for transactional environments.' },
      { title: 'Data', text: 'Power BI, automation and analytics for actionable decisions.' },
    ],
    experienceLabel: 'Experience',
    experienceTitle: 'Technical leadership grounded in business context.',
    roles: [
      {
        company: 'Riwi', role: 'Tech Lead', period: 'Aug 2025 — Present',
        items: ['Design and development of technology training model components.', 'Research practices and adoption of innovative technologies.', 'Creation of 12 Power BI dashboards for monitoring and decision-making.'],
      },
      {
        company: 'Global Hitss', role: 'Angular Front-end Developer', period: 'Mar 2024 — Aug 2025',
        items: ['Angular front-end development and SQL Server database work.', 'Scrum Master and developer for EPM’s Web Billing product.', 'Consistently ranked among the Top 3 developers for Work Order closure.'],
      },
      {
        company: 'Bassis', role: 'Technology Lead', period: 'Feb 2023 — Nov 2023',
        items: ['Led a team handling up to 15 simultaneous projects under Scrum.', 'Solutions using Power Apps, Power Automate, Power BI, AppSheet and Looker Studio.'],
      },
      {
        company: 'Renault Group — Sofasa', role: 'Workshop Manager and engineering roles', period: 'Apr 2014 — Jul 2022',
        items: ['Implemented the Renault Duster HJD project, increasing production-line automation by more than 10%.', 'Managed workshop operations and maintenance, and standardized procedures using PDCA.'],
      },
      {
        company: 'Coldeplast', role: 'Process Engineer and Intern', period: 'Dec 2011 — Apr 2014',
        items: ['Began my career in industrial processes, standardization and continuous improvement.'],
      },
    ],
    dataLabel: 'Business Intelligence',
    dataTitle: 'Data matters when it supports a decision.',
    dataBody:
      'I have built 12 Power BI dashboards for Riwi. My approach combines business questions, clear modeling and visualizations designed for action, not just observation.',
    dashboardCaption: 'Conceptual visual created to represent my BI practice; it contains no client information or real data.',
    dashboardAlts: ['Conceptual operational performance dashboard', 'Conceptual learning and talent dashboard'],
    capabilitiesLabel: 'Capabilities',
    capabilitiesTitle: 'An end-to-end delivery stack.',
    skills: [
      { group: 'Development', items: ['Angular', 'TypeScript', 'C#', '.NET', 'HTML & CSS'] },
      { group: 'Data & BI', items: ['Power BI', 'SQL Server', 'Oracle', 'MySQL', 'Looker Studio'] },
      { group: 'Automation', items: ['Power Automate', 'Power Apps', 'AppSheet', 'Low-code'] },
      { group: 'Leadership', items: ['Scrum', 'Project management', 'PDCA', 'Azure DevOps'] },
    ],
    educationLabel: 'Education and languages',
    education: [
      { title: 'Specialization in Management for Engineers', place: 'Universidad Pontificia Bolivariana · 2018–2019' },
      { title: 'Mechanical Engineering', place: 'Universidad Nacional de Colombia · 2007–2012' },
      { title: 'Full Stack Development', place: 'Platzi, ILO and Sophos Solutions · 2022' },
    ],
    languages: 'Spanish native · English B2 · French B1',
    contactLabel: 'Contact',
    contactTitle: 'Let’s build the next measurable improvement.',
    contactBody: 'I am interested in opportunities where I can combine technical leadership, software, automation and data.',
    email: 'Send an email', whatsapp: 'Message me on WhatsApp', viewLinkedin: 'View LinkedIn', viewGithub: 'View GitHub',
    cvEs: 'Résumé in Spanish', cvEn: 'Résumé in English',
    footer: 'Designed around engineering, technology and data-driven decisions.',
  },
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

function ExternalIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 5H5v14h14v-3M12 5h7v7M19 5l-9 9" /></svg>
}

function App() {
  const [lang, setLang] = useState(() => new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'es')
  const t = content[lang]
  const cvPath = lang === 'es' ? cvSpanish : cvEnglish
  const cvFilename = lang === 'es' ? 'Camilo-Del-Valle-CV-ES.pdf' : 'Camilo-Del-Valle-CV-EN.pdf'

  const changeLanguage = (nextLanguage) => {
    const url = new URL(window.location.href)
    if (nextLanguage === 'en') url.searchParams.set('lang', 'en')
    else url.searchParams.delete('lang')
    window.history.replaceState({}, '', url)
    setLang(nextLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'es' ? 'Camilo Del Valle — Tech Lead' : 'Camilo Del Valle — Tech Lead'
  }, [lang])

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Camilo Del Valle — inicio">
          <span>CDV</span><i />
        </a>
        <nav aria-label={lang === 'es' ? 'Navegación principal' : 'Primary navigation'}>
          <a href="#perfil">{t.nav.about}</a>
          <a href="#experiencia">{t.nav.experience}</a>
          <a href="#datos">{t.nav.data}</a>
          <a href="#contacto">{t.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={lang === 'es' ? 'Seleccionar idioma' : 'Select language'}>
            <button className={lang === 'es' ? 'active' : ''} onClick={() => changeLanguage('es')} aria-pressed={lang === 'es'}>ES</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')} aria-pressed={lang === 'en'}>EN</button>
          </div>
          <a className="header-cv" href={cvPath} download={cvFilename}>{t.cv}</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="availability"><span />{t.availability}</p>
            <p className="hero-name">Camilo Del Valle Ledesma</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-body">{t.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experiencia">{t.explore}<ArrowIcon /></a>
              <a className="button button-quiet" href="#contacto">{t.contactMe}</a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-code" aria-hidden="true"><span>ENG</span><span>DEV</span><span>BI</span></div>
            <img src={portrait} alt={t.portraitAlt} width="800" height="800" fetchPriority="high" />
            <div className="portrait-note"><strong>Tech Lead</strong><span>Software · Data · Automation</span></div>
          </div>
        </section>

        <section className="proof-strip" aria-label={lang === 'es' ? 'Resultados destacados' : 'Selected results'}>
          {t.proof.map((item) => <div className="proof-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </section>

        <section className="section profile-section" id="perfil">
          <div className="section-heading">
            <p className="section-label">{t.profileLabel}</p>
            <h2>{t.profileTitle}</h2>
          </div>
          <div className="profile-content">
            <p className="profile-lead">{t.profileBody}</p>
            <div className="discipline-flow">
              {t.disciplines.map((item, index) => (
                <article key={item.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="section-heading sticky-heading">
            <p className="section-label">{t.experienceLabel}</p>
            <h2>{t.experienceTitle}</h2>
          </div>
          <div className="timeline">
            {t.roles.map((role, index) => (
              <article className="timeline-role" key={`${role.company}-${role.role}`}>
                <span className="timeline-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="timeline-meta"><p>{role.company}</p><time>{role.period}</time></div>
                <div className="timeline-detail"><h3>{role.role}</h3><ul>{role.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="data-section" id="datos">
          <div className="data-intro">
            <div><p className="section-label light">{t.dataLabel}</p><h2>{t.dataTitle}</h2></div>
            <p>{t.dataBody}</p>
          </div>
          <div className="dashboard-gallery">
            {[operationsDashboard, learningDashboard].map((image, index) => (
              <figure key={image}>
                <img src={image} alt={t.dashboardAlts[index]} width="1400" height="876" loading="lazy" />
                <figcaption><span>{index === 0 ? 'Operations' : 'Learning'}</span>{t.dashboardCaption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section capabilities-section">
          <div className="section-heading">
            <p className="section-label">{t.capabilitiesLabel}</p>
            <h2>{t.capabilitiesTitle}</h2>
          </div>
          <div className="skills-grid">
            {t.skills.map((skill) => <article key={skill.group}><h3>{skill.group}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
          <div className="education-block">
            <div><p className="section-label">{t.educationLabel}</p><p className="language-line">{t.languages}</p></div>
            <div className="education-list">
              {t.education.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.place}</p></article>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-copy"><p className="section-label light">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactBody}</p></div>
          <div className="contact-links">
            <a href={profileLinks.email}>{t.email}<ArrowIcon /></a>
            <a href={profileLinks.whatsapp} target="_blank" rel="noreferrer">{t.whatsapp}<ExternalIcon /></a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">{t.viewLinkedin}<ExternalIcon /></a>
            <a href={profileLinks.github} target="_blank" rel="noreferrer">{t.viewGithub}<ExternalIcon /></a>
          </div>
          <div className="cv-downloads">
            <a href={cvSpanish} download="Camilo-Del-Valle-CV-ES.pdf">{t.cvEs}</a>
            <a href={cvEnglish} download="Camilo-Del-Valle-CV-EN.pdf">{t.cvEn}</a>
          </div>
        </section>
      </main>

      <footer><a href="#top">Camilo Del Valle</a><p>{t.footer}</p><span>© {new Date().getFullYear()}</span></footer>
    </>
  )
}

export default App
