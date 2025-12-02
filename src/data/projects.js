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
    id: "gestor-turnos",
    name: "Gestor de turnos",
    role: "Web app en desarrollo",
    description:
      "Aplicación para gestionar turnos entre profesionales y clientes, con registro de usuarios con distintos roles, creación y cancelación de turnos y práctica de modelos en MongoDB y endpoints en Node/Express.",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
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
