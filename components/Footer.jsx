


const Footer = () => (
    <footer className="bg-dark text-light py-4 mt-5 border-top">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div>
                <span className="fw-bold">Progetto Finale</span> &copy; {new Date().getFullYear()}<br />
                <small className="text-secondary">Tutti i diritti riservati</small>
            </div>
            <div className="mt-3 mt-md-0">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                    <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
                </a>
                <a href="mailto:info@example.com" className="text-light me-3">
                    <i className="bi bi-envelope-fill" style={{ fontSize: "1.5rem" }}></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light">
                    <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
