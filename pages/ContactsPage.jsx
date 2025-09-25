
const ContactsPage = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center text-primary">Contattaci</h1>
            <p className="text-center text-muted mb-4">
                Hai domande o richieste? Compila il modulo qui sotto o scrivici ai nostri recapiti!
            </p>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <form className="bg-white p-4 rounded-4  mb-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="name" placeholder="Il tuo nome" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="nome@email.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Messaggio</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Scrivi qui il tuo messaggio..." required></textarea>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-lg">Invia messaggio</button>
                        </div>
                    </form>
                    <div className="bg-light p-4 rounded-4 text-center">
                        <p className="mb-1">
                            <i className="bi bi-envelope-fill me-2"></i>
                            <a href="mailto:info@example.com" className="text-decoration-none">info@example.com</a>
                        </p>
                        <p className="mb-1">
                            <i className="bi bi-telephone-fill me-2"></i>
                            <a href="tel:+39123456789" className="text-decoration-none">+39 123 456 789</a>
                        </p>
                        <p>
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            Via Esempio 123, 00100 Roma
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;