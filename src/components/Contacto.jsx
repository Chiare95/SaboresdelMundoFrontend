import styles from "@/styles/contacto.module.css";

export default function Contacto() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado! Nos contactaremos pronto 📩");
  };

  return (
    <div className={styles.contactoContainer}>
      <h2>Contacto</h2>

      <div className={styles.infoMapa}>
        {/* Información */}
        <div className={styles.info}>
          <p><strong>Dirección:</strong> Av. Libertad 1234, Mendoza, Argentina</p>
          <p><strong>Teléfono:</strong> +54 11 1234-5678</p>
          <p><strong>Email:</strong> info@SaboresdelMundo.com</p>
          <p><strong>Horarios:</strong> L-V 10:00-23:00 | S 10:00-02:00 | D Cerrado </p>

          <div className={styles.botones}>
            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/tu_restaurante" target="_blank" rel="noopener noreferrer" className={styles.redes}>
              Instagram
            </a>
            <a href="https://www.facebook.com/tu_restaurante" target="_blank" rel="noopener noreferrer" className={styles.redes}>
              Facebook
            </a>
          </div>
        </div>

      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Asunto" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
