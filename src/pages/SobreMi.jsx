import React from "react";

export default function SobreMi() {
  return (
    <section className="page">
      <section className="section">
        <header className="section-header">
          <h1>Sobre mí</h1>
          <p>
            Quién soy, de dónde vengo y qué puedo aportar a tu equipo.
          </p>
        </header>

        <div className="about-layout">
          <div className="about-text">
            <p>
              Soy <strong>Nicolás Rodríguez</strong>, Frontend Developer con
              base full stack (MERN). Vengo del rubro comercio, donde lideré
              equipos, coordiné operaciones y trabajé cara a cara con clientes
              durante más de 4 años en Adidas.
            </p>

            <p>
              Esa experiencia me dio una base sólida de{" "}
              <strong>comunicación</strong>, <strong>organización</strong> y{" "}
              <strong>resolución de problemas</strong> bajo presión — habilidades
              que no son comunes en perfiles técnicos y que aplico directamente
              al desarrollo de software.
            </p>

            <p>
              Me especializo en construir interfaces con <strong>React</strong>{" "}
              que sean funcionales, bien estructuradas y con buena experiencia
              de usuario. También manejo el backend con{" "}
              <strong>Node.js/Express + MongoDB</strong>, lo que me permite
              integrar frontend y backend de punta a punta sin depender de otro
              equipo para salir a producción.
            </p>

            <p>
              Mi proyecto principal es <strong>NeonByte</strong>, un e-commerce
              gamer completo con autenticación JWT, roles, panel de
              administración, carrito, órdenes y deploy en producción. También
              desarrollé <strong>El Siguiente</strong>, un gestor de turnos para
              profesionales y pacientes con login, roles y manejo de reservas.
            </p>

            <p>
              Busco incorporarme a un equipo donde pueda aportar desde el día
              uno y seguir creciendo profesionalmente.
            </p>
          </div>

          <aside>
            <h2 style={{ marginTop: 0 }}>En resumen</h2>
            <ul className="tags-list">
              <li>React &amp; Vite</li>
              <li>JavaScript (ES6+)</li>
              <li>CSS3 &amp; Canvas API</li>
              <li>Node.js &amp; Express</li>
              <li>MongoDB &amp; Mongoose</li>
              <li>JWT &amp; autenticación</li>
              <li>Diseño responsive</li>
              <li>Git &amp; GitHub</li>
              <li>Liderazgo operativo</li>
              <li>Trabajo en equipo</li>
            </ul>

            <p style={{ color: "var(--text-soft)", marginBottom: "12px" }}>
              Podés ver mis proyectos en producción acá:
            </p>

            <a
              href="https://neonbyte-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginBottom: "10px" }}
            >
              Ver NeonByte online
            </a>

            <a
              href="https://el-siguiente.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ marginBottom: "10px" }}
            >
              Ver El Siguiente online
            </a>

            <br />

            <a
              href="https://www.linkedin.com/in/nicolas-rodriguez-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Ir a mi perfil de LinkedIn
            </a>
          </aside>
        </div>
      </section>
    </section>
  );
}