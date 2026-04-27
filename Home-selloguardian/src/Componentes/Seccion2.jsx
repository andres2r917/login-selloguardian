import "./Seccion2.css";
const reports = [
  {
    id: 1,
    title: "Perros abandonados en el parque El Virrey",
    date: "24 abr 2026",
    location: "Bogotá",
    status: "En proceso",
    statusColor: "yellow",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
  },
  {
    id: 2,
    title: "Gatos en condiciones precarias en bodega norte",
    date: "22 abr 2026",
    location: "Medellín",
    status: "Atendida",
    statusColor: "green",
    img: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&q=80",
  },
  {
    id: 3,
    title: "Animal herido encontrado en vía principal",
    date: "20 abr 2026",
    location: "Cali",
    status: "Urgente",
    statusColor: "red",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
  },
];
const Seccion2 = () => {
  return (
    <section className="sec2" id="denuncia">
      <div className="sec2__denuncia-banner">
        <div className="sec2__banner-text">
          <h2 className="sec2__banner-title">¿Ves maltrato animal?<br />¡Denúncialo ahora!</h2>
          <p className="sec2__banner-desc">
            Tu voz puede salvar una vida. Regístrate y realiza tu denuncia de forma anónima y segura.
          </p>
          <button className="sec2__banner-btn">Hacer denuncia</button>
        </div>
        <div className="sec2__banner-illustration">
        </div>
      </div>

      <div className="sec2__reports">
        <div className="sec2__reports-header">
          <h3 className="sec2__reports-title">Denuncias recientes</h3>
        </div>
        <div className="sec2__list">
          {reports.map((r) => (
            <div className="sec2__report-card" key={r.id}>
              <img src={r.img} alt={r.title} className="sec2__report-img" />
              <div className="sec2__report-body">
                <span className={`sec2__status sec2__status--${r.statusColor}`}>{r.status}</span>
                <h4 className="sec2__report-title">{r.title}</h4>
                <div className="sec2__report-meta">
                  <span>{r.location}</span>
                  <span>{r.date}</span>
                </div>
              </div>
              <button className="sec2__report-btn" aria-label="Ver denuncia">X</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Seccion2;