// src/pages/Proyectos.jsx
import React, { useState } from "react";
import { projects } from "../data/projects";

export default function Proyectos() {
  const neonbyte = projects.find((p) => p.id === "neonbyte");
  const otherProjectsRaw = projects.filter((p) => p.id !== "neonbyte");

  // Proyecto "Gestor de turnos · El Siguiente"
  const elSiguiente = otherProjectsRaw.find((p) => p.id === "gestor-turnos");
  const otherProjects = otherProjectsRaw.filter(
    (p) => p.id !== "gestor-turnos"
  );

  // Imagen seleccionada para NeonByte
  const [selectedNeonImage, setSelectedNeonImage] = useState(
    neonbyte && neonbyte.images && neonbyte.images.length > 0
      ? neonbyte.images[0]
      : null
  );

  // Imagen seleccionada para El Siguiente
  const [selectedTurnosImage, setSelectedTurnosImage] = useState(
    elSiguiente && elSiguiente.images && elSiguiente.images.length > 0
      ? elSiguiente.images[0]
      : null
  );

  if (!neonbyte) {
    return (
      <section className="page">
        <section className="section">
          <header className="section-header">
            <h1>Proyectos</h1>
            <p>No se encontró la información del proyecto NeonByte.</p>
          </header>
        </section>
      </section>
    );
  }

  return (
    <section className="page">
      {/* Proyecto destacado: NeonByte */}
      <section className="section">
        <header className="section-header">
          <p className="hero-kicker">{neonbyte.role}</p>
          <h1>{neonbyte.name}</h1>
          <p className="project-description">{neonbyte.description}</p>
        </header>

        {neonbyte.stack && (
          <div className="project-tags">
            {neonbyte.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}


        {neonbyte.images && neonbyte.images.length > 0 && (
          <div className="project-gallery">
            {selectedNeonImage && (
              <div className="project-gallery-main">
                <img
                  src={selectedNeonImage}
                  alt="Vista principal de NeonByte"
                />
              </div>
            )}

            <div className="project-gallery-thumbs">
              {neonbyte.images.map((src, index) => (
                <button
                  key={index}
                  type="button"
                  className={
                    "project-gallery-thumb" +
                    (selectedNeonImage === src
                      ? " project-gallery-thumb--active"
                      : "")
                  }
                  onClick={() => setSelectedNeonImage(src)}
                  onMouseEnter={() => setSelectedNeonImage(src)}
                >
                  <img
                    src={src}
                    alt={`Captura ${index + 1} de NeonByte`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Otros proyectos: acá entra El Siguiente y el resto */}
      <section className="section">
        <header className="section-header">
          <h2>Otros proyectos</h2>
          <p>
            Algunos proyectos adicionales que estoy desarrollando o usando
            como práctica para seguir mejorando el stack.
          </p>
        </header>

        {/* Card especial con galería para "Gestor de turnos · El Siguiente" */}
        {elSiguiente && (
          <article
            className="project-card"
            style={{ marginBottom: "32px" }}
          >
            <p className="project-badge">{elSiguiente.role}</p>
            <h3 style={{ marginTop: 0 }}>{elSiguiente.name}</h3>
            <p className="project-description">
              {elSiguiente.description}
            </p>

            {elSiguiente.stack && (
              <div className="project-tags" style={{ marginTop: 10 }}>
                {elSiguiente.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}

            {elSiguiente.images && elSiguiente.images.length > 0 && (
              <div className="project-gallery" style={{ marginTop: 16 }}>
                {selectedTurnosImage && (
                  <div className="project-gallery-main">
                    <img
                      src={selectedTurnosImage}
                      alt="Vista principal de El Siguiente"
                    />
                  </div>
                )}

                <div className="project-gallery-thumbs">
                  {elSiguiente.images.map((src, index) => (
                    <button
                      key={index}
                      type="button"
                      className={
                        "project-gallery-thumb" +
                        (selectedTurnosImage === src
                          ? " project-gallery-thumb--active"
                          : "")
                      }
                      onClick={() => setSelectedTurnosImage(src)}
                      onMouseEnter={() => setSelectedTurnosImage(src)}
                    >
                      <img
                        src={src}
                        alt={`Captura ${index + 1} de El Siguiente`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {(elSiguiente.liveUrl || elSiguiente.repoUrl) && (
              <div className="project-actions" style={{ marginTop: 16 }}>
                {elSiguiente.liveUrl && (
                  <a
                    href={elSiguiente.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Ver online
                  </a>
                )}

                {elSiguiente.repoUrl && (
                  <a
                    href={elSiguiente.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Ver código
                  </a>
                )}
              </div>
            )}
          </article>
        )}

        {/* Resto de proyectos (por ahora, el portfolio) */}
        <div className="projects-grid">
          {otherProjects.map((project) => (
            <article key={project.id} className="project-card">
              <p className="project-badge">{project.role}</p>
              <h3 style={{ marginTop: 0 }}>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              {project.stack && (
                <div className="project-tags" style={{ marginTop: 10 }}>
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}

              {(project.liveUrl || project.repoUrl) && (
                <div className="project-actions" style={{ marginTop: 16 }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Ver online
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
