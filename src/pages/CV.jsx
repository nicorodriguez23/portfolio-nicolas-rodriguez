import React from "react";

const CV_PDF_PATH = "/nicolas-rodriguez-cv.pdf";

export default function CV() {
  return (
    <section className="page">
      <section className="section">
        <header className="section-header">
          <h1>Currículum / Perfil profesional</h1>
          <p>
            Acá podés ver mi CV en PDF y mi certificado de
            Full Stack que realicé en Educación IT.
          </p>
        </header>

        <div className="cv-layout">
          <div>
            <h2 style={{ marginTop: 0 }}>Ignacio Nicolás Rodríguez</h2>
            <p style={{ marginBottom: 6, color: "var(--text-soft)" }}>
              <strong>Desarrollador Full Stack</strong>
            </p>
            <p style={{ marginTop: 0, color: "var(--text-soft)" }}>
              Enfocado en construir aplicaciones web modernas, que faciliten
              la navegacion del usuario, con React, Vite, Node/Express y
              MongoDB. Vengo del rubro comercio, con experiencia liderando
              equipos y trabajando con clientes en primera línea. Busco mi
              primera oportunidad profesional en IT, aportando tanto habilidades
              técnicas como blandas.
            </p>

            <ul className="cv-list">
              <li>
                Stack principal: React, Vite, Node.js/Express, MongoDB, JWT.
              </li>
              <li>
                Proyecto destacado: <strong>NeonByte</strong>, e-commerce gamer
                completo (roles, panel admin, carrito y órdenes).
              </li>
              <li>
                Otros proyectos: gestor de turnos (web app) y portfolio personal
                en React/Vite.
              </li>
            </ul>
          </div>
          <div className="cv-mock">
            <h3 className="cv-title">Acciones rápidas</h3>
            <p className="cv-subtitle"></p>

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
                href="https://www.educacionit.com/perfil/nicolas-rodriguez-1034216/certificado/73593?_gl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Ver Certificado
              </a>
            </div>

            <p className="cv-note" style={{ marginTop: 14 }}>
              El certificado corresponde a la formación práctica como{" "}
              <strong>Full Stack</strong>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
