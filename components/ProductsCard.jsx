import { useContext } from "react";
import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { GlobalContext } from "../context/GlobalContext";

const ProductCard = ({ productId, isCompared, toggleCompare }) => {
    const { product, loading, error } = useProduct(productId);
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(GlobalContext);

    if (loading) return <p>Caricamento prodotto...</p>;
    if (error) return <p>Errore nel caricamento: {error.message || 'Errore sconosciuto'}</p>;
    if (!product || !product.product) return <p>Prodotto non trovato</p>;

    const inWishlist = wishlist.find(p => p.id === productId);

    return (
        <div className="card mb-3">
            <Link to={`/products/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                    src={product.product.image}
                    className="card-img-top"
                    style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "scale-down",
                        objectPosition: "center"
                    }}
                    alt={product.product.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.product.title}</h5>
                    <p className="card-text">{product.product.category}</p>
                </div>
            </Link>
            <div className="card-body d-flex gap-2">
                <button
                    onClick={() =>
                        inWishlist
                            ? removeFromWishlist(productId)
                            : addToWishlist(product.product)
                    }
                    className={`btn ${inWishlist ? 'btn-danger' : 'btn-purple'}`}
                >
                    {inWishlist
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>}
                </button>
                {toggleCompare && (
                    <button
                        className={`btn btn-outline-purple ${isCompared ? "active" : ""}`}
                        onClick={() => toggleCompare(product.product)}
                    >
                        {isCompared ? "Rimuovi dal confronto" : "Confronta"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;