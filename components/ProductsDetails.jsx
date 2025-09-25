import { useParams, Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const ProductDetails = () => {
    // Ottengo l'ID del prodotto dai parametri dell'URL
    const { id } = useParams();

    const { product, loading, error } = useProduct(id);
    const { addToWishlist, removeFromWishlist, wishlist } = useContext(GlobalContext);

    // Gestione degli stati di caricamento e errore
    if (loading) return <p>Caricamento prodotto...</p>;
    if (error) return <p>Errore nel caricamento: {error.message || 'Errore sconosciuto'}</p>;
    if (!product) return <p>Prodotto non trovato</p>;

    console.log(product);

    // Estraggo le proprietà del prodotto
    const {
        title,
        category,
        releaseYear,
        price,
        memory,
        colors,
        sim,
        system,
        display,
        ram,
        battery,
        camera,
        camera1,
        image
    } = product.product;

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    {/* Bottone Torna alla lista */}
                    <Link to="/products" className="btn btn-outline-purple mb-3">
                        Torna alla lista
                    </Link>
                    <div className="card shadow-lg border-0 rounded-4 p-4">
                        <div className="text-center mb-4">
                            <img
                                src={image}
                                alt={title}
                                className="img-fluid rounded-3"
                                style={{ maxHeight: "300px", objectFit: "contain", background: "#f8f9fa" }}
                            />
                        </div>
                        <h2 className="text-center mb-3">{title}</h2>
                        <h4 className="text-center text-success mb-4">{price} €</h4>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Categoria:</strong> {category}</li>
                            <li className="list-group-item"><strong>Anno di rilascio:</strong> {releaseYear}</li>
                            <li className="list-group-item"><strong>Memoria:</strong> {memory} GB</li>
                            <li className="list-group-item"><strong>Colori:</strong> {colors}</li>
                            <li className="list-group-item"><strong>SIM:</strong> {sim}</li>
                            <li className="list-group-item"><strong>Sistema operativo:</strong> {system}</li>
                            <li className="list-group-item"><strong>Display:</strong> {display}</li>
                            <li className="list-group-item"><strong>RAM:</strong> {ram} GB</li>
                            <li className="list-group-item"><strong>Batteria:</strong> {battery} mAh</li>
                            <li className="list-group-item"><strong>Camera:</strong> {camera} MP</li>
                            <li className="list-group-item"><strong>Camera frontale:</strong> {camera1} MP</li>
                        </ul>
                        <div className="d-flex justify-content-center gap-3">
                            <button
                                className={`btn ${wishlist.find(p => p.id === product.id) ? 'btn-danger' : 'btn-primary'} mb-3`}
                                onClick={() => {
                                    if (wishlist.find(p => p.id === product.id)) {
                                        removeFromWishlist(product.id);
                                    } else {
                                        addToWishlist(product);
                                    }
                                }}
                            >
                                {wishlist.find(p => p.id === product.id) ? "Rimuovi dalla wishlist" : "Aggiungi alla wishlist"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;