export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ===== Registro de usuario =====
export async function registerUser(data) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: data.nombre,
        email: data.email,
        contraseña: data.contraseña,
      }),
    });

    const resultado = await response.json();

      if (!response.ok) {
        return {error:resultado.mensaje || (resultado.errors && resultado.errors[0].msg) || "Error en el registro" };
      }


    return resultado;
  } catch (error) {
    console.error("Error en registerUser:", error);
    return { error: "Error al registrar usuario" };
  }
}

// ===== Login de usuario =====
export async function loginUser({email,  contraseña}) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email, contraseña: contraseña}),
    });

    return await res.json();
    
  } catch (error) {
    console.error("Error en loginUser:", error);
    return { error: "Error al iniciar sesión" };
  }
}

// ===== Crear reserva =====
export const crearReserva = async (reservaData) => {
  if (typeof window === "undefined") {
    throw new Error("No se puede crear reserva en SSR");
  }

  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Debes iniciar sesión para reservar");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(reservaData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.mensaje || data.error || "Error al crear reserva");
  }

  return data;
};

// ===== Obtener reservas del usuario logueado =====

export const obtenerReservas = async () => {
  if (typeof window === "undefined") return [];

  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Debes iniciar sesión para ver tus reservas");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservas`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.mensaje || data.error || "Error al obtener reservas");
  }

  return data; 
};

// ===== Actualizar reserva =====
export const actualizarReserva = async (id, updateData) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No autenticado");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(updateData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || "Error al actualizar reserva");
  return data;
};

// ===== Eliminar reserva =====
export const eliminarReserva = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No autenticado");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservas/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.mensaje || "Error al eliminar reserva");
  }
  return true;
};

// ===== Guardar token en localStorage =====
export function saveToken(token) {
  localStorage.setItem("token", token);
}

// ===== Obtener token desde localStorage =====
export function getToken() {
  return localStorage.getItem("token");
}
