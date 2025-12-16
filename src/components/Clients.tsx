// Clients.optimized.tsx
import React from "react";
import "./Clients.css";

type Client = { name: string };

const clients: Client[] = [
  { name: "Organic Farms" },
  { name: "WeatherNow" },
  { name: "Maikode" },
  { name: "Veer Solutions" },
  { name: "RouterPro" },
  { name: "Fresh vegies" },
];

const ClientCard: React.FC<{ client: Client }> = React.memo(({ client }) => (
  <div className="client-card no-logo-card">
    <span className="client-name">{client.name}</span>
  </div>
));

const Clients: React.FC = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container text-center">
        <h2 className="section-title">Brands That Trust Us </h2>
        <p className="section-subtitle text">
          Trusted by brands and startups that rely on VertixSoft for maps, navigation, weather and mobile app solutions.
        </p>

        <div className="row g-4 mt-4 justify-content-center">
          {clients.map((client, i) => (
            <div className="col-6 col-md-4 col-lg-2" key={client.name + i}>
              <ClientCard client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Clients);
