import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";


const ProductCard = ({ searchTerm }) => {
    //  accedo al contesto globale per ottenere i prodotti
    const { products } = useContext(GlobalContext);

    // filtro i prodotti in base al titolo 
    const filteredProducts = (products || []).filter(product =>
        product.title.toLowerCase().includes((searchTerm || "").toLowerCase())
    );

    return (
        // visualizzo i prodotti in una griglia
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {filteredProducts.map(product => (
                <div className="col" key={product.id}>
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.category}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;