import React, { useState } from "react";
import { projects } from "../data/projects";

export default function Proyectos() {
  const neonbyte = projects.find((p) => p.id === "neonbyte");
  const otherProjects = projects.filter((p) => p.id !== "neonbyte");

  const [selectedImage, setSelectedImage] = useState(
    neonbyte && neonbyte.images && neonbyte.images.length > 0
      ? neonbyte.images[0]
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

        <div className="project-actions" style={{ marginTop: 16 }}>
          <a
            href={neonbyte.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver online
          </a>

          <a
            href={neonbyte.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ver código
          </a>
        </div>

        {neonbyte.images && neonbyte.images.length > 0 && (
          <div className="project-gallery">
            {selectedImage && (
              <div className="project-gallery-main">
                <img
                  src={selectedImage}
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
                    (selectedImage === src
                      ? " project-gallery-thumb--active"
                      : "")
                  }
                  onClick={() => setSelectedImage(src)}
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

      <section className="section">
        <header className="section-header">
          <h2>Otros proyectos</h2>
          <p>
            Algunos proyectos adicionales que estoy desarrollando o usando
            como práctica para seguir mejorando el stack.
          </p>
        </header>

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
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
