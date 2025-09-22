import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const ProductDetails = () => {
    // Ottengo l'ID del prodotto dai parametri dell'URL
    const { id } = useParams();

    const { product, loading, error } = useProduct(id);

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
        <div className="container mt-4">
            <img src={image} alt={title} style={{ maxWidth: '300px', marginBottom: '20px' }} />
            <h1>{title}</h1>
            <p>Prezzo: {price} €</p>
            <div>
                <h3>Dettagli del prodotto</h3>
                <ul>
                    <li><strong>Categoria:</strong> {category}</li>
                    <li><strong>Anno di rilascio:</strong> {releaseYear}</li>
                    <li><strong>Prezzo:</strong> {price} €</li>
                    <li><strong>Memoria:</strong> {memory} GB</li>
                    <li><strong>Colori:</strong> {colors}</li>
                    <li><strong>SIM:</strong> {sim}</li>
                    <li><strong>Sistema operativo:</strong> {system}</li>
                    <li><strong>Display:</strong> {display}</li>
                    <li><strong>RAM:</strong> {ram} GB</li>
                    <li><strong>Batteria:</strong> {battery} mAh</li>
                    <li><strong>Camera:</strong> {camera} MP</li>
                    <li><strong>Camera frontale:</strong> {camera1} MP</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;