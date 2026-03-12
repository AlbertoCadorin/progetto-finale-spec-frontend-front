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

    // estraggo i dettagli dei prodotti
    const product1 = product1Data.product;
    const product2 = product2Data.product;


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

    const parseComparableValue = (value) => {
        if (value === null || value === undefined) return null;
        if (typeof value === "number") return value;
        const numeric = Number(String(value).replace(/[^\d.-]/g, ""));
        return Number.isNaN(numeric) ? null : numeric;
    }

    const getWinner = (key) => {
        const left = parseComparableValue(product1[key]);
        const right = parseComparableValue(product2[key]);

        if (left === null || right === null || left === right) return null;

        if (key === "price") {
            return left < right ? "left" : "right";
        }

        return left > right ? "left" : "right";
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
        <div className="container py-4">
            <div className="compare-shell">
                <h1 className="catalog-title mb-4">Confronto prodotti</h1>
                <div className="row mb-4 g-3">
                    <div className="col-md-6 text-center">
                        <div className="compare-head-card">
                            <h4 className="compare-product-title">{product1.title}</h4>
                            <img
                        src={product1.image}
                                alt={product1.title}
                                className="compare-product-image"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="compare-head-card">
                            <h4 className="compare-product-title">{product2.title}</h4>
                            <img
                        src={product2.image}
                                alt={product2.title}
                                className="compare-product-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered align-middle text-center shadow-sm compare-table mb-0">
                        <thead>
                            <tr>
                                <th style={{ width: "30%" }}>Caratteristica</th>
                                <th style={{ width: "35%" }}>{product1.title}</th>
                                <th style={{ width: "35%" }}>{product2.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredKeys.map((key) => {
                                const winner = getWinner(key);
                                const leftValue = getValueAndUnit(product1, key);
                                const rightValue = getValueAndUnit(product2, key);

                                return (
                                    <tr key={key}>
                                        <td className="compare-feature">{formatKey(key)}</td>
                                        <td className={winner === "left" ? "compare-winner" : ""}>
                                            {leftValue.value ?? "-"} {leftValue.unit}
                                        </td>
                                        <td className={winner === "right" ? "compare-winner" : ""}>
                                            {rightValue.value ?? "-"} {rightValue.unit}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default ComparePage;