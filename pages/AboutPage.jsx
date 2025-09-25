
const AboutPage = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4 text-primary text-center">Chi siamo</h1>
            <p className="lead text-center mb-4">
                Benvenuto su <strong>Progetto Finale</strong>! Siamo appassionati di tecnologia e il nostro obiettivo è aiutarti a trovare, confrontare e scegliere i migliori prodotti elettronici in modo semplice e veloce.
            </p>
            <hr />
            <h4 className="mb-3">Cosa offriamo</h4>
            <ul className="mb-4">
                <li>Ricerca e confronto tra centinaia di prodotti</li>
                <li>Wishlist personale per salvare i tuoi preferiti</li>
                <li>Filtri avanzati per trovare ciò che cerchi</li>
                <li>Design moderno e navigazione intuitiva</li>
            </ul>
            <h4 className="mb-3">Il nostro team</h4>
            <p>
                Siamo un piccolo gruppo di sviluppatori e designer con la passione per l’innovazione e la user experience. Crediamo che scegliere il prodotto giusto debba essere facile e piacevole!
            </p>
            <div className="text-center mt-4">
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                    alt="Team"
                    className="rounded-circle shadow"
                    style={{ width: 120, height: 120, objectFit: "cover" }}
                />
            </div>
            <hr className="my-4" />
            <div className="text-center text-muted">
                <small>
                    Progetto sviluppato per scopi didattici. <br />
                    © {new Date().getFullYear()} Progetto Finale
                </small>
            </div>
        </div>
    );
};

export default AboutPage;