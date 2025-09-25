import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const CompareBar = () => {
    const { compare, removeFromCompare } = useContext(GlobalContext);

    if (!compare || compare.length === 0) return null;

    return (
        <div
            className="position-fixed bottom-0 start-50 translate-middle-x bg-white shadow rounded-top p-4"
            style={{ minWidth: 700, zIndex: 1050, left: "50%", transform: "translateX(-50%)" }}
        >
            <div className="d-flex align-items-center mb-3">
                <span className="fs-5 fw-semibold me-3">
                    <i className="bi bi-arrow-left-right me-2"></i>
                    Confronta i prodotti
                </span>
                <span className="text-muted">Selezionare 2 o più prodotti</span>
            </div>
            <div className="d-flex gap-3 mb-3 flex-wrap">
                {compare.map(p => (
                    <div key={p.id} className="border rounded p-2 d-flex flex-column align-items-center position-relative" style={{ width: 120 }}>
                        {p.image && (
                            <img
                                src={p.image}
                                alt={p.title}
                                className="img-fluid mb-2"
                                style={{ width: 70, height: 70, objectFit: "cover" }}
                            />
                        )}
                        <span className="small text-center">{p.title}</span>
                        <button
                            className="btn-close position-absolute top-0 end-0"
                            style={{ fontSize: "0.8rem" }}
                            onClick={() => removeFromCompare(p.id)}
                            aria-label={`Rimuovi ${p.title} dal confronto`}
                        />
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-end gap-2">
                {compare.length >= 2 ? (
                    <Link to={`/compare/${compare[0].id}/${compare[1].id}`}>
                        <button className="btn btn-dark">
                            Confronta
                        </button>
                    </Link>
                ) : (
                    <button className="btn btn-dark" disabled>
                        Confronta
                    </button>
                )}
            </div>
        </div>
    );
};

export default CompareBar;