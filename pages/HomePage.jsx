import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h1 className="display-4 fw-bold text-purple mb-3">Benvenuto su Progetto Finale</h1>
                    <p className="lead text-muted mb-4">
                        Trova, confronta e scegli i migliori prodotti elettronici in modo semplice e veloce.<br />
                        Usa la ricerca, salva i tuoi preferiti nella wishlist e confronta i dispositivi che ti interessano!
                    </p>
                    <div className="d-flex gap-3">
                        <Link to="/products" className="btn btn-purple btn-lg">
                            Vai ai prodotti
                        </Link>
                        <Link to="/about" className="btn btn-outline-purple btn-lg">
                            Scopri chi siamo
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <img
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
                        alt="Prodotti elettronici"
                        className="img-fluid rounded-4 shadow"
                        style={{ maxHeight: 340, objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;