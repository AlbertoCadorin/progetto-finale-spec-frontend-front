import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";


const ProductCard = ({ productId }) => {

    // uso l'hook personalizzato per ottenere i dettagli del prodotto
    const { product, loading, error } = useProduct(productId);
    // prendo la wishlist e le funzioni per aggiungere/rimuovere dalla wishlist dal contesto globale
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(GlobalContext);
    // prendo la lista di confronto e la funzione per aggiungere/rimuovere dal confronto dal contesto globale
    const { compare, toggleCompare } = useContext(GlobalContext);

    // funzione per gestire il click sul pulsante "Aggiungi alla wishlist"
    const handleWishlistClick = () => {
        if (wishlist.find(p => p.id === productId)) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(product.product);
        }
    }

    // gestisco i vari stati di caricamento, errore e prodotto non trovato
    if (loading) return <p>Caricamento prodotto...</p>;
    if (error) return <p>Errore nel caricamento: {error.message || 'Errore sconosciuto'}</p>;
    if (!product || !product.product) return <p>Prodotto non trovato</p>;


    return (

        <div className="col">
            <div className="card" >
                <Link to={`/products/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={product.product.image} className="card-img-top" style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "scale-down",
                        objectPosition: "center"
                    }} alt={product.product.title} />
                    <div className="card-body">
                        <h5 className="card-title">{product.product.title}</h5>
                        <p className="card-text">{product.product.category}</p>
                    </div>
                </Link>
                <div className="card-body ">
                    <button onClick={handleWishlistClick} className={`btn ${wishlist.find(p => p.id === productId) ? 'btn-danger' : 'btn-primary'}`}>
                        {wishlist.find(p => p.id === productId)
                            ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>}
                    </button>
                    <button
                        onClick={() => toggleCompare(product.product)}
                        className={`btn btn-outline-warning ms-2`}
                    >
                        confronta
                    </button>
                </div>
            </div>
        </div>


    );
};

export default ProductCard;