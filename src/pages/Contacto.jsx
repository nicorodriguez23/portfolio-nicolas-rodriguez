import React, { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contacto desde el portfolio");
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`
    );

    window.location.href = `mailto:nicolas.rodriguezdev@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page">
      <section className="section">
        <header className="section-header">
          <h1>Contacto</h1>
          <p>
            Si te interesa mi perfil o querés hablar sobre alguna oportunidad,
            podés escribirme directamente desde este formulario o por los
            medios de contacto que ves al final.
          </p>
        </header>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 style={{ marginTop: 0 }}>Enviame un mensaje</h2>

            <label>
              Nombre
              <input
                type="text"
                name="nombre"
                placeholder="¿Cómo te llamás?"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="tu-correo@ejemplo.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Mensaje
              <textarea
                name="mensaje"
                rows="5"
                placeholder="Contame brevemente sobre la posición o el proyecto."
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Enviar mensaje
            </button>

            <p className="cv-note" style={{ marginTop: 10 }}>
              El formulario abre tu cliente de correo con el mensaje preparado
              para que lo revises y lo envíes.
            </p>
          </form>

          <aside className="contact-side">
            <h2>Otros medios de contacto</h2>
            <p>
              También podés escribirme directo por mail o ver más sobre mi
              perfil profesional en LinkedIn y GitHub.
            </p>

            <a href="mailto:nicolas.rodriguezdev@outlook.com">
              <span>📧</span> Enviar email directo
            </a>

            <a
              href="https://www.linkedin.com/in/nicolas-rodriguez-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💼</span> Ver perfil de LinkedIn
            </a>

            <a
              href="https://github.com/nicorodriguez23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💻</span> Ver repositorios en GitHub
            </a>

            <a
              href="https://neonbyte-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>🛒</span> Ver NeonByte en producción
            </a>

            <a
              href="https://el-siguiente.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📅</span> Ver El Siguiente en producción
            </a>

            <p style={{ marginTop: 16, color: "var(--text-soft)" }}>
              Respondo especialmente a mensajes relacionados con oportunidades
              como <strong>trainee / junior</strong> en desarrollo web, proyectos
              freelance y colaboraciones vinculadas al stack MERN.
            </p>
          </aside>
        </div>
      </section>
    </section>
  );
}
