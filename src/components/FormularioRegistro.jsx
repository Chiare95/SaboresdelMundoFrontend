import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/formularioRegistro.module.css";
import { registerUser } from "@/services/api";
import css_button from "../styles/button.module.css"

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
  });
  const [mensaje, setMensaje] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.contraseña) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await registerUser(formData);

      if (response.error) {
        setMensaje(response.error);
      } else {
        setMensaje("Registro exitoso 🎉");
        setFormData({ nombre: "", email: "", contraseña: "" });

      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      if (response.user?.nombre) {
        localStorage.setItem("userName", response.user.nombre);
      }

        setTimeout(() => {
          router.push("/inicioSesion");
        }, 0);
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error al registrar usuario");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
          />
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            placeholder="Contraseña"
            required
          />
          <button type="submit" className={css_button.button_comprar} >Registrarse</button>
        </form>

        {mensaje && <p className={styles.mensaje}>{mensaje}</p>}

        <p>
          ¿Ya tienes cuenta?{" "}
          <Link href="/inicioSesion" className={styles.registerLink}>
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormularioRegistro;
