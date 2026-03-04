import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page">

      {/* HERO */}
      <section className="hero">
        <div>
          <p className="hero-kicker">FRONTEND DEVELOPER · FULL STACK MERN</p>
          <h1>Soy Nicolás Rodríguez</h1>
          <p className="hero-subtitle">
            Construyo interfaces web funcionales y bien estructuradas, con
            capacidad de integrar frontend y backend de punta a punta.
            Proyectos reales en producción.
          </p>
          <div className="hero-actions">
            <Link to="/proyectos" className="btn btn-primary">Ver proyectos</Link>
            <Link to="/cv" className="btn btn-secondary">Ver CV</Link>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="hero-panel-title">Stack principal</p>
          <ul className="hero-tags">
            <li>React &amp; Vite</li>
            <li>JavaScript (ES6+)</li>
            <li>CSS3 &amp; Canvas API</li>
            <li>Node.js &amp; Express</li>
            <li>MongoDB &amp; JWT</li>
            <li>Git &amp; GitHub</li>
          </ul>
          <p className="hero-panel-text">
            Stack MERN · buenas prácticas · proyectos listos para producción.
          </p>
        </aside>
      </section>

      {/* NEONBYTE */}
      <section className="section">
        <article className="project-card">
          <span className="project-badge">Proyecto destacado · Full Stack MERN</span>
          <h2>NeonByte · E-commerce gamer</h2>
          <p className="project-description">
            Interfaz en React con diseño propio, Canvas API y animaciones RGB.
            Autenticación JWT con roles, panel admin con CRUD, carrito y órdenes.
            API REST propia con Node.js/Express + MongoDB. Deploy en Vercel + Render.
          </p>
          <ul className="hero-tags" style={{ marginBottom: "12px" }}>
            {["React", "Vite", "CSS3", "Canvas API", "Node.js", "MongoDB", "JWT"].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="project-actions">
            <a href="https://neonbyte-one.vercel.app" target="_blank" rel="noreferrer" className="btn btn-primary">
              Ver NeonByte online
            </a>
            <a href="https://github.com/nicorodriguez23/Neonbyte" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Ver código
            </a>
          </div>
        </article>
      </section>

      {/* EL SIGUIENTE */}
      <section className="section">
        <article className="project-card">
          <span className="project-badge">Web app en producción</span>
          <h2>El Siguiente · Gestor de turnos</h2>
          <p className="project-description">
            App responsive con login, roles (profesional/paciente), creación y
            cancelación de turnos. Backend en Node/Express + MongoDB. Deploy en Vercel + Render.
          </p>
          <ul className="hero-tags" style={{ marginBottom: "12px" }}>
            {["React", "Node.js", "MongoDB", "JWT"].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="project-actions">
            <a href="https://el-siguiente.vercel.app" target="_blank" rel="noreferrer" className="btn btn-primary">
              Ver El Siguiente online
            </a>
            <a href="https://github.com/nicorodriguez23/el-siguiente-app" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Ver código
            </a>
          </div>
        </article>
      </section>

    </section>
  );
}