// src/data/projects.js

// NeonByte — imágenes actualizadas (versión nueva)
import neonbyteHome from "../assets/portfolio-neonbytehome.png";
import neonbyteProducts from "../assets/neonbyteproductos-portfolio.png";
import neonbyteProduct from "../assets/productoneonbyte-portfolio.png";
import neonbyteAdmin from "../assets/gestionproductos-portfolio.png";
import neonbyteUsers from "../assets/gestionusuarios-portfolio.png";
import neonbyteHomeMobile from "../assets/mobileneonbyte-portfolio.png";

// El Siguiente
import elSiguienteHome from "../assets/el-siguiente-home.png";
import elSiguienteProfesionales from "../assets/el-siguiente-profesionales.png";
import elSiguienteRegistro from "../assets/el-siguiente-formulario-paciente.png";
import elSiguienteLogin from "../assets/el-siguiente-inicio-de-sesion.png";

export const projects = [
  {
    id: "neonbyte",
    name: "NeonByte · E-commerce gamer",
    role: "Full Stack Developer · MERN",
    description:
      "E-commerce gamer de punta a punta. Frontend en React con diseño propio, variables CSS, animaciones RGB y Canvas API. Autenticación JWT con roles admin/cliente, panel de administración con CRUD, carrito en localStorage y flujo de órdenes hasta comprobante imprimible. API REST con Node.js/Express + MongoDB Atlas. Deploy en Vercel (frontend) y Render (backend).",
    stack: ["React", "Vite", "CSS3", "Canvas API", "Node.js", "Express", "MongoDB", "JWT", "Vercel", "Render"],
    liveUrl: "https://neonbyte-one.vercel.app",
    repoUrl: "https://github.com/nicorodriguez23/Neonbyte",
    images: [
      neonbyteHome,
      neonbyteProducts,
      neonbyteProduct,
      neonbyteAdmin,
      neonbyteUsers,
      neonbyteHomeMobile,
    ],
  },

  {
    id: "gestor-turnos",
    name: "Gestor de turnos · El Siguiente",
    role: "Web app en producción",
    description:
      "App responsive para gestionar turnos entre profesionales y pacientes. Login con JWT, roles de usuario, creación y cancelación de turnos, consulta por código. Backend en Node/Express + MongoDB. Deploy en Vercel + Render.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://el-siguiente.vercel.app",
    repoUrl: "https://github.com/nicorodriguez23/el-siguiente-app",
    images: [
      elSiguienteHome,
      elSiguienteProfesionales,
      elSiguienteRegistro,
      elSiguienteLogin,
    ],
  },

  {
    id: "portfolio",
    name: "Portfolio personal",
    role: "Este sitio",
    description:
      "Portfolio desarrollado con React y Vite. Presenta proyectos, CV descargable y contacto directo por Gmail. Deploy en Vercel.",
    stack: ["React", "Vite", "React Router", "Vercel"],
    liveUrl: "https://portfolio-nicolas-rodriguez.vercel.app",
    repoUrl: "https://github.com/nicorodriguez23/portfolio-nicolas-rodriguez",
    images: [],
  },
];