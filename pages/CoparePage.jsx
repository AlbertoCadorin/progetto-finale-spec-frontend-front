import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const ComparePage = () => {
    // ottengo  gli id dei prodotti dai parametri dell'URL
    const { id1, id2 } = useParams();

    const { product: product1Data, loading: loading1, error: error1 } = useProduct(id1);
    const { product: product2Data, loading: loading2, error: error2 } = useProduct(id2);

    // gestisco gli stati di caricamento e errore
    if (loading1 || loading2) {
        return <p>Caricamento prodotti...</p>;
    }
    if (error1 || error2) {
        return <p>Errore nel caricamento: {(error1 && error1.message) || (error2 && error2.message) || 'Errore sconosciuto'}</p>;
    }

    if (!product1Data || !product2Data) {
        return <p>Prodotto non trovato</p>;
    }

    const product1 = product1Data.product;
    const product2 = product2Data.product;
    console.log(product1);
    console.log(product2);

    // estraggo le proprietà dei prodotti
    const productKey1s = Object.keys(product1);
    const productKey2s = Object.keys(product2);

    // trovo le chiavi comuni tra i due prodotti
    const commonKeys = productKey1s.filter(key => productKey2s.includes(key));
    // rimuovo le chiavi non rilevanti per il confronto
    const filteredKeys = commonKeys.filter(key =>
        key !== 'id' &&
        key !== 'title' &&
        key !== 'image' &&
        key !== 'createdAt' &&
        key !== 'updatedAt'
    );

    // funzione per formattare i nomi delle proprietà
    const formatKey = (key) => {
        return key
            .replace(/([A-Z])/g, ' $1') // aggiungo uno spazio prima delle lettere maiuscole
            .replace(/^./, str => str.toUpperCase()); // metto la prima lettera in maiuscolo
    }

    // ottengo il valore e l'unita di misura
    const getValueAndUnit = (product, key) => {
        const value = product[key];
        let unit = '';

        // determino l'unità di misura in base alla chiave
        switch (key) {
            case 'price':
                unit = '€';
                break;
            case 'memory':
                unit = 'GB';
                break;
            case 'ram':
                unit = 'GB';
                break;
            case 'battery':
                unit = 'mAh';
                break;
        }

        return { value, unit };
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Confronto Prodotti</h1>
            <div className="row mb-4">
                <div className="col-md-6 text-center">
                    <h4>{product1.title}</h4>
                    <img
                        src={product1.image}
                        alt={product1.title}
                        style={{
                            maxWidth: '180px',
                            maxHeight: '180px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            marginBottom: '10px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}
                    />
                </div>
                <div className="col-md-6 text-center">
                    <h4>{product2.title}</h4>
                    <img
                        src={product2.image}
                        alt={product2.title}
                        style={{
                            maxWidth: '180px',
                            maxHeight: '180px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            marginBottom: '10px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}
                    />
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered align-middle text-center shadow-sm">
                    <thead className="table-light">
                        <tr>
                            <th style={{ width: "30%" }}>Caratteristica</th>
                            <th style={{ width: "35%" }}>{product1.title}</th>
                            <th style={{ width: "35%" }}>{product2.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredKeys.map((key) => (
                            <tr key={key}>
                                <td style={{ fontWeight: 500 }}>{formatKey(key)}</td>
                                <td>
                                    {getValueAndUnit(product1, key).value} {getValueAndUnit(product1, key).unit}
                                </td>
                                <td>
                                    {getValueAndUnit(product2, key).value} {getValueAndUnit(product2, key).unit}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default ComparePage;