import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/components/Perfil/perfil.module.css";
import { obtenerReservas, actualizarReserva, eliminarReserva } from "@/services/api";

export default function Perfil() {
  const [mounted, setMounted] = useState(false);
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/inicioSesion");
      return;
    }

    const fetchData = async () => {
      try {
        const data = await obtenerReservas();
        setReservas(data);
      } catch (err) {
        console.error("Error cargando reservas:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [router]);

  const handleEditar = async (id) => {
    const nuevaFecha = prompt("Ingresa la nueva fecha (YYYY-MM-DD):");
    const nuevaHora = prompt("Ingresa la nueva hora (HH:MM):");
    if (!nuevaFecha || !nuevaHora) return;

    try {
      await actualizarReserva(id, { fecha: nuevaFecha, hora: nuevaHora });
      setReservas((prev) =>
        prev.map((r) =>
          r._id === id ? { ...r, fecha: nuevaFecha, hora: nuevaHora } : r
        )
      );
      alert("Reserva actualizada ✅");
    } catch (err) {
      console.error(err);
      alert("Error al actualizar reserva ❌");
    }
  };

  const handleBorrar = async (id) => {
    if (!confirm("¿Seguro quieres borrar esta reserva?")) return;

    try {
      await eliminarReserva(id);
      setReservas((prev) => prev.filter((r) => r._id !== id));
      alert("Reserva eliminada ✅");
    } catch (err) {
      console.error(err);
      alert("Error al eliminar reserva ❌");
    }
  };

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <h1>Mis Reservas</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {reservas.length === 0 ? (
        <p>No tienes reservas.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Comensales</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva._id}>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.comensales}</td>
                <td className={styles.acciones}>
                  <button onClick={() => handleEditar(reserva._id)}>Editar</button>
                  <button onClick={() => handleBorrar(reserva._id)}>Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
