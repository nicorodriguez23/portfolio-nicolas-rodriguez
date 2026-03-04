import React from "react";

const CV_PDF_PATH = "/CV_Nicolas_Rodriguez.pdf";

export default function CV() {
  return (
    <section className="page">
      <section className="section">
        <header className="section-header">
          <h1>Currículum / Perfil profesional</h1>
          <p>
            Acá podés ver y descargar mi CV actualizado, y el certificado de
            formación como Full Stack Developer de Educación IT.
          </p>
        </header>

        <div className="cv-layout">
          <div>
            <h2 style={{ marginTop: 0 }}>Nicolás Rodríguez</h2>
            <p style={{ marginBottom: 6, color: "var(--text-soft)" }}>
              <strong>Frontend Developer · Full Stack MERN · React · Node.js</strong>
            </p>
            <p style={{ marginTop: 0, color: "var(--text-soft)" }}>
              Frontend Developer con base full stack (MERN). Construí y deployé
              aplicaciones web reales con React, diseño responsive, autenticación
              JWT y APIs REST. Me especializo en construir interfaces funcionales,
              bien estructuradas y con buena experiencia de usuario. Mi background
              en liderazgo operativo me da una mirada práctica y orientada a
              resultados que no es común en perfiles técnicos. Busco incorporarme
              a un equipo donde pueda aportar desde el día uno y seguir creciendo.
            </p>

            <ul className="cv-list">
              <li>
                Frontend: React, Vite, JavaScript (ES6+), CSS3, Canvas API,
                Responsive Design.
              </li>
              <li>
                Backend: Node.js, Express, MongoDB, Mongoose, JWT, APIs REST.
              </li>
              <li>
                Proyecto destacado: <strong>NeonByte</strong> — e-commerce gamer
                completo con roles, panel admin, carrito, órdenes y deploy en
                producción.
              </li>
            </ul>
          </div>

          <div className="cv-mock">
            <h3 className="cv-title">Acciones rápidas</h3>
            <p className="cv-subtitle">CV actualizado · Marzo 2026</p>

            <div className="cv-actions">
              <a
                href={CV_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ver CV en PDF
              </a>

              <a
                href={CV_PDF_PATH}
                download="CV_Nicolas_Rodriguez.pdf"
                className="btn btn-secondary"
              >
                Descargar CV
              </a>

              <a
                href="https://www.educacionit.com/perfil/nicolas-rodriguez-1034216/certificado/73593?_gl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Ver Certificado Educación IT
              </a>
            </div>

            <p className="cv-note" style={{ marginTop: 14 }}>
              Certificación práctica como <strong>Full Stack Developer</strong>{" "}
              con stack MERN · JavaScript, React, Node.js, Express, MongoDB.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}