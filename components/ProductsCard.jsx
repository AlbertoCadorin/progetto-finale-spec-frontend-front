
const ProductCard = ({ elements }) => {

    return (
        // visualizzo i prodotti in una griglia
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {(elements || []).map(product => (
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
};

export default ProductCard;