// src/data/projects.js

import neonbyteHome from "../assets/neonbyte-preview-home.png";
import neonbyteProduct from "../assets/neonbyte-product-desktop.png";
import neonbyteUsers from "../assets/neonbyte-users-desktop.png";
import neonbyteAdmin from "../assets/neonbyte-admin-desktop.png";
import neonbyteCart from "../assets/neonbyte-cart-desktop.png";
import neonbyteHomeMobile from "../assets/neonbyte-home-mobile.png";

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
    id: "el-siguiente",
    name: "El Siguiente · Sistema de turnos médicos",
    role: "Web app MERN desplegada",
    description:
      "Aplicación para gestionar turnos médicos entre pacientes y profesionales. Permite registrar usuarios por rol (paciente y profesional), iniciar sesión con JWT, crear y cancelar turnos, consultar reservas por código y recuperar la contraseña.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://el-siguiente.vercel.app", // cambiá esta URL si tu deploy tiene otro nombre
    repoUrl: "https://github.com/nicorodriguez23/el-siguiente-app",
    images: [],
  },

  {
    id: "portfolio",
    name: "Portfolio personal",
    role: "Este sitio",
    description:
      "Portfolio desarrollado con React y Vite para presentar proyectos, CV y datos de contacto, con foco en una navegación simple para reclutadores.",
    stack: ["React", "Vite"],
    liveUrl: "#",
    repoUrl: "#",
    images: [],
  },
];
