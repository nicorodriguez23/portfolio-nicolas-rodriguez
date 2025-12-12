import React from "react";

export default function SobreMi() {
  return (
    <section className="page">
      <section className="section">
        <header className="section-header">
          <h1>Sobre mí</h1>
          <p>
            Quién soy, de dónde vengo y qué puedo
            aportar a tu equipo de desarrollo.
          </p>
        </header>

        <div className="about-layout">
          <div className="about-text">
            <p>
              Soy <strong>Ignacio Nicolás Rodríguez</strong>, desarrollador{" "}
              <strong>Full Stack</strong>. Vengo del
              rubro comercio, donde colaboré en la dirección de equipos,
              coordinando objetivos y trabajando cara a cara con clientes.
            </p>

            <p>
              Esa experiencia me dio una base sólida de{" "}
              <strong>comunicación</strong>, <strong>organización</strong> y{" "}
              <strong>resolución de problemas</strong> bajo presión. Hoy
              estoy enfocado en aplicar esas habilidades al desarrollo de
              software: construir aplicaciones y páginas web claras,
              mantenibles y listas para uso real.
            </p>

            <p>
              Actualmente estoy ampliando mi experiencia con proyectos,
              como <strong>NeonByte</strong> (e-commerce gamer con roles, panel
              admin, carrito y órdenes) y un <strong>gestor de turnos</strong>{" "}
              para profesionales y clientes. Mi objetivo es dar un salto{" "}
              profesional en IT dentro de un equipo donde
              pueda seguir aprendiendo y aportar valor.
            </p>

            <p>
              Me siento cómodo trabajando con{" "}
              <strong>JavaScript/TypeScript</strong>,{" "}
              <strong>React + Vite</strong> en el frontend y{" "}
              <strong>Node.js/Express + MongoDB</strong> en el backend, pero
              también estoy abierto a aprender nuevas tecnologías según lo
              requiera cada proyecto.
            </p>

            <p>
              Si tu equipo busca a alguien responsable, con actitud de
              aprendizaje constante, me encantaría que conversemos.
            </p>
          </div>

          <aside>
            <h2 style={{ marginTop: 0 }}>En resumen</h2>
            <ul className="tags-list">
              <li>Stack MERN</li>
              <li>React &amp; Vite</li>
              <li>Node.js &amp; Express</li>
              <li>MongoDB &amp; Mongoose</li>
              <li>JWT &amp; autenticación</li>
              <li>Diseño responsive</li>
              <li>Git &amp; GitHub</li>
              <li>Trabajo en equipo</li>
              <li>Atención al detalle</li>
            </ul>

            <p style={{ color: "var(--text-soft)", marginBottom: "12px" }}>
              Podés ver el proyecto principal que estoy usando como carta de
              presentación profesional acá:
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
