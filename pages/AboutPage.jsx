
const AboutPage = () => {
    return (
        <div className="container py-5">
            <section className="surface-soft p-4 p-md-5">
                <h1 className="mb-3 text-center text-purple page-hero-title">Chi siamo</h1>
                <p className="lead text-center mb-4 hero-subtitle">
                    Benvenuto su <strong>Progetto Finale</strong>. Siamo appassionati di tecnologia e il nostro obiettivo e aiutarti a trovare, confrontare e scegliere i migliori prodotti elettronici in modo semplice e veloce.
                </p>
                <div className="row g-4 align-items-stretch">
                    <div className="col-lg-7">
                        <div className="info-surface p-4 h-100">
                            <h4 className="mb-3">Cosa offriamo</h4>
                            <ul className="mb-0">
                                <li>Ricerca e confronto tra centinaia di prodotti</li>
                                <li>Wishlist personale per salvare i tuoi preferiti</li>
                                <li>Filtri avanzati per trovare cio che cerchi</li>
                                <li>Design moderno e navigazione intuitiva</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="info-surface p-4 h-100">
                            <h4 className="mb-3">Il nostro team</h4>
                            <p className="mb-4">
                                Siamo un piccolo gruppo di sviluppatori e designer con la passione per l'innovazione e la user experience. Crediamo che scegliere il prodotto giusto debba essere facile e piacevole.
                            </p>
                            <div className="text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                                    alt="Team"
                                    className="rounded-circle shadow team-avatar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center mt-4 text-muted">
                <small>
                    Progetto sviluppato per scopi didattici. <br />
                    © {new Date().getFullYear()} Progetto Finale
                </small>
            </div>
        </div>
    );
};

export default AboutPage;