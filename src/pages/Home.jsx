import { Link } from "react-router-dom";

const featured = {
  title: "NeonByte · E-commerce gamer",
  description:
    "Tienda online de componentes para PC gamer con autenticación por roles, panel de administración, carrito, creación de órdenes y deploy completo (frontend + backend).",
  stack: ["MERN", "JWT", "Panel admin", "Deploy"],
  liveUrl: "https://neonbyte-one.vercel.app",
  codeUrl: "https://github.com/nicorodriguez23/Neonbyte",
};

const elSiguiente = {
  title: "El Siguiente · Gestor de turnos médicos",
  description:
    "Aplicación web para profesionales y pacientes, con registro de usuarios, login, gestión de turnos y cancelación, desarrollada con React, Node.js, Express y MongoDB.",
  stack: ["React", "Node.js", "Express", "MongoDB"],
  liveUrl: "https://el-siguiente.vercel.app",
  codeUrl: "https://github.com/nicorodriguez23/el-siguiente-app",
};

export default function Home() {
  return (
    <section className="page">
      <section className="hero">
        <div>
          <p className="hero-kicker"> DESARROLLADOR WEB</p>
          <h1>¡Bienvenidos! soy Nicolás Rodríguez</h1>
          <p className="hero-subtitle">
            Desarrollador Full Stack. Construyo proyectos
            reales buscando nuevas oportunidades en el mundo IT.
          </p>

          <div className="hero-actions">
            <Link to="/proyectos" className="btn btn-primary">
              Ver proyectos
            </Link>
            <Link to="/cv" className="btn btn-secondary">
              Ver CV
            </Link>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="hero-panel-title">Stack principal</p>
          <ul className="hero-tags">
            <li>React &amp; Vite</li>
            <li>Node.js &amp; Express</li>
            <li>MongoDB &amp; Mongoose</li>
            <li>Git &amp; GitHub</li>
          </ul>
          <p className="hero-panel-text">
            Hoy estoy enfocado en el stack MERN, buenas prácticas y proyectos
            listos para producción. Me interesa trabajar en equipo y seguir
            aprendiendo en un entorno profesional.
          </p>
        </aside>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Proyecto Neonbyte</h2>
          <p>
            NeonByte es mi e-commerce completo para componentes gamer, donde
            puse en práctica autenticación, roles, panel de administración,
            carrito y órdenes.
          </p>
        </header>

        <article className="project-card">
          <span className="project-badge">Proyecto destacado</span>
          <h2>{featured.title}</h2>
          <p className="project-description">{featured.description}</p>

          <div className="hero-tags" style={{ marginBottom: "12px" }}>
            {featured.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </div>

          <div className="project-actions">
            <a
              href={featured.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Ver NeonByte online
            </a>
            <a
              href={featured.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Ver código
            </a>
          </div>
        </article>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Gestor de turnos · El Siguiente</h2>
          <p>
            Web app para gestionar turnos entre profesionales y pacientes, con
            login, roles y manejo simple de reservas.
          </p>
        </header>

        <article className="project-card">
          <span className="project-badge">Web app en producción</span>
          <h2>{elSiguiente.title}</h2>
          <p className="project-description">{elSiguiente.description}</p>

          <div className="hero-tags" style={{ marginBottom: "12px" }}>
            {elSiguiente.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </div>

          <div className="project-actions">
            <a
              href={elSiguiente.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Ver El Siguiente online
            </a>
            <a
              href={elSiguiente.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Ver código
            </a>
          </div>
        </article>
      </section>
    </section>
  );
}
