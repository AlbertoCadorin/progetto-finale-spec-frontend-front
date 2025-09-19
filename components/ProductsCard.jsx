import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";



const ProductCard = ({ productId }) => {

    const { product, loading, error } = useProduct(productId);
    console.log(product, "prodotto in card");
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
            </div>
        </div>


    );
};

export default ProductCard;