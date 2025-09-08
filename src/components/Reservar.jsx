import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/reservar.module.css";

const Reservar = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    personas: 1,
    fecha: "",
    hora: ""
  });
  const [mensaje, setMensaje] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/inicioSesion");
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.telefono || !formData.personas || !formData.fecha || !formData.hora) {
      setMensaje("Por favor completa todos los campos");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMensaje("Debes iniciar sesión para reservar");
        router.push("/inicioSesion");
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMensaje(data.mensaje || "Error al realizar la reserva");
        return;
      }

      setMensaje("Reserva realizada con éxito 🎉");
      setFormData({
        nombre: "",
        telefono: "",
        personas: 1,
        fecha: "",
        hora: ""
      });

    } catch (error) {
      console.error(error);
      setMensaje("Error al realizar la reserva");
    }
  };

  return (
    <div className={styles.reservaContainer}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <h2>Reservá tu mesa</h2>

        <div className={styles.formGroup}>
          <label>Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" required />
        </div>

        <div className={styles.formGroup}>
          <label>Teléfono</label>
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Tu número" required />
        </div>

        <div className={styles.formGroup}>
          <label>Número de personas</label>
          <input type="number" name="personas" value={formData.personas} onChange={handleChange} min="1" required />
        </div>

        <div className={styles.formGroup}>
          <label>Fecha</label>
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Hora</label>
          <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
        </div>

        <button type="submit" className={styles.btnSubmit}>Reservar</button>
        {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
      </form>
    </div>
  );
};

export default Reservar;
