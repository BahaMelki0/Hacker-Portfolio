import React, { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import "./Contact.css";

const FORMSPREE = "https://formspree.io/f/mvzdoooy";

function SecHeader({ num, title, sub }) {
  return (
    <div className="mx-sec-header">
      <span className="mx-sec-num">/{num}</span>
      <h2 className="mx-sec-title">{title}</h2>
      <span className="mx-sec-sub">{sub}</span>
    </div>
  );
}

function Contact() {
  const { data: PORTFOLIO } = usePortfolio();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [sentEmail, setSentEmail] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setSentEmail(form.email); setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const { contact } = PORTFOLIO;

  return (
    <div className="mx-section mx-section-tinted">
      <SecHeader num="04" title="contact" sub="// secure channel" />

      <div className="mx-grid-contact">
        {/* left: info */}
        <div className="mx-contact-info">
          <p className="mx-hl mx-contact-lead">Incoming transmissions welcome.</p>
          <p className="mx-contact-body" style={{ opacity: 0.85 }}>
            For engagements, research collaboration, or a coffee — send a packet.
            Responses within 48h. Encrypted mail preferred.
          </p>

          <div className="mx-contact-kv">
            <span className="mx-dim">mail</span>
            <a href={`mailto:${contact.email}`} className="mx-link">{contact.email}</a>
            <span className="mx-dim">git</span>
            <a href="https://github.com/BahaMelki0" target="_blank" rel="noreferrer" className="mx-link">{contact.github}</a>
            <span className="mx-dim">in</span>
            <a href="https://linkedin.com/in/bahaeddine-melki" target="_blank" rel="noreferrer" className="mx-link">{contact.linkedin}</a>
            <span className="mx-dim">pgp</span>
            <span className="mx-mono" style={{ fontSize: 12 }}>{contact.pgp}</span>
          </div>

          <div className="mx-contact-note">
            <div className="mx-hl" style={{ marginBottom: 6, fontSize: 11 }}>⚠ operational note</div>
            <p style={{ margin: 0, fontSize: 11, color: "var(--mx-green-dim)" }}>
              For sensitive disclosures, use PGP or Signal. Never send client data
              in cleartext. The system is listening.
            </p>
          </div>
        </div>

        {/* right: form */}
        <form className="mx-panel" onSubmit={onSubmit} noValidate>
          <div className="mx-panel-head">
            <span className="mx-panel-dots"><span /><span /><span /></span>
            <span>/bin/contact · TLS 1.3</span>
          </div>
          <div style={{ padding: "22px 24px" }}>
            {status === "success" ? (
              <div className="mx-contact-success">
                <div style={{ fontSize: 36, marginBottom: 12 }}>▶</div>
                <div className="mx-hl" style={{ fontSize: 18, marginBottom: 8 }}>Packet transmitted.</div>
                <div className="mx-dim" style={{ fontSize: 13 }}>
                  {">"} echo will reach you at {sentEmail || "—"}
                </div>
              </div>
            ) : (
              <>
                <div className="mx-field">
                  <label className="mx-field-label">
                    {">"} callsign <span className="mx-field-req">*</span>
                  </label>
                  <input className="mx-input" name="name" value={form.name} onChange={onChange}
                    required placeholder="your name" autoComplete="name" />
                </div>
                <div className="mx-field">
                  <label className="mx-field-label">
                    {">"} uplink <span className="mx-field-req">*</span>
                  </label>
                  <input className="mx-input" name="email" type="email" value={form.email}
                    onChange={onChange} required placeholder="you@domain.tld" autoComplete="email" />
                </div>
                <div className="mx-field">
                  <label className="mx-field-label">
                    {">"} payload <span className="mx-field-req">*</span>
                  </label>
                  <textarea className="mx-textarea" name="message" rows={5} value={form.message}
                    onChange={onChange} required placeholder="encrypted message..." />
                </div>

                <button
                  type="submit"
                  className="mx-btn mx-btn-primary"
                  style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "transmitting..." : "▶ TRANSMIT"}
                </button>

                {status === "error" && (
                  <p style={{ color: "var(--mx-red)", fontSize: 12, marginTop: 10, textAlign: "center" }}>
                    Transmission failed. Try direct mail.
                  </p>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
