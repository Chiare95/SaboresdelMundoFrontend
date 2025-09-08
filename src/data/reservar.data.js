import { useState } from "react";
import { crearReserva } from "@/services/api";

export default function Reservar() {
  const [nombre, setNombre] = useState("");
  const [mesa, setMesa] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nueva = await crearReserva({ nombre, mesa });
    console.log("Reserva creada:", nueva);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mesa"
        value={mesa}
        onChange={(e) => setMesa(e.target.value)}
      />
      <button type="submit">Reservar</button>
    </form>
  );
}
