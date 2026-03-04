export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} · Nicolás Rodríguez</span>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/nicolas-rodriguez-tech"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nicorodriguez23"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:nicorodriguez953@gmail.com">
            nicorodriguez953@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}