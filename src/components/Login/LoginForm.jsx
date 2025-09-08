import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/components/Login/loginForm.module.css";
import css_button from "@/styles/button.module.css"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contraseña }),
      });

      const data = await res.json();

      if (!res.ok) {
        // muestra error si email o contraseña no coinciden
        setError(data.mensaje || "Usuario o contraseña incorrectos");
        return;
      }

      // Login exitoso
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user?.nombre || "Usuario");
      router.push("/"); 
    } catch (err) {
      console.error(err);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <button type="submit" className={css_button.button_comprar} >Entrar</button>

        </form>

        {error && <p className={styles.error}>{error}</p>}

        <p>
          ¿No tienes cuenta?{" "}
          <Link href="/registrar" className={styles.registerLink}>
            Regístrate aquí
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
}
