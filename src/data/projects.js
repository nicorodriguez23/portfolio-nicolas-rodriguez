// src/data/projects.js

// Imágenes de NeonByte
import neonbyteHome from "../assets/neonbyte-preview-home.png";
import neonbyteProduct from "../assets/neonbyte-product-desktop.png";
import neonbyteUsers from "../assets/neonbyte-users-desktop.png";
import neonbyteAdmin from "../assets/neonbyte-admin-desktop.png";
import neonbyteCart from "../assets/neonbyte-cart-desktop.png";
import neonbyteHomeMobile from "../assets/neonbyte-home-mobile.png";

// Imágenes de El Siguiente
import elSiguienteHome from "../assets/el-siguiente-home.png";
import elSiguienteProfesionales from "../assets/el-siguiente-profesionales.png";
import elSiguienteLogin from "../assets/el-siguiente-login.png";
import elSiguienteCodigo from "../assets/el-siguiente-codigo.png";

export const projects = [
  {
    id: "neonbyte",
    name: "NeonByte · E-commerce gamer",
    role: "Proyecto integrador MERN",
    description:
      "Tienda online de componentes gamer con autenticación por roles (cliente y administrador), panel de administración, carrito, creación de órdenes y deploy completo (frontend + backend).",
    stack: ["MERN", "JWT", "Panel admin", "Carrito", "Órdenes"],
    liveUrl: "https://neonbyte-one.vercel.app",
    repoUrl: "https://github.com/nicorodriguez23/Neonbyte",
    images: [
      neonbyteHome,
      neonbyteProduct,
      neonbyteCart,
      neonbyteAdmin,
      neonbyteUsers,
      neonbyteHomeMobile,
    ],
  },

  {
    id: "gestor-turnos",
    name: "Gestor de turnos · El Siguiente",
    role: "Web app en desarrollo",
    description:
      "Aplicación para gestionar turnos entre profesionales y pacientes, con registro de usuarios con distintos roles, creación y cancelación de turnos, consulta por código y backend en Node/Express con MongoDB.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "https://el-siguiente.vercel.app",
    repoUrl: "https://github.com/nicorodriguez23/el-siguiente-app",
    images: [
      elSiguienteHome,
      elSiguienteProfesionales,
      elSiguienteLogin,
      elSiguienteCodigo,
    ],
  },

  {
    id: "portfolio",
    name: "Portfolio personal",
    role: "Este sitio",
    description:
      "Portfolio desarrollado con React y Vite para presentar proyectos, CV y datos de contacto, con foco en una navegación simple para reclutadores.",
    stack: ["React", "Vite"],
    // Sin liveUrl ni repoUrl para que no se muestren los botones
    images: [],
  },
];
