import Link from "next/link";
import css from "@/components/Navegation/navegationAvatar.module.css";
import { Menu, Close } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navegacion = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("U");
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  // Solo en cliente
  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    const name = localStorage.getItem("userName");
    if (name) setUserName(name);
  }, []);

  if (!mounted) return null;

  const handleShowMenu = () => setShowMenu(prev => !prev);
  const toggleAvatarMenu = () => setShowAvatarMenu(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setShowAvatarMenu(false);
    router.push("/inicioSesion");
  };

  return (
    <nav className={css.navbar}>
      <button onClick={handleShowMenu} className={css.button_menu}>
        {showMenu ? <Close /> : <Menu />}
      </button>

      <div className={css.logo}>
        <img src="/logob.png" className={css.logo_img} alt="logo" />
        <h2 className={css.logo_text}>Sabores del Mundo</h2>
      </div>

      <div className={`${css.nav_links} ${showMenu ? css.show_menu : ""}`}>
        <Link href="/">Inicio</Link>
        <Link href="/reservar">Reservar Lugar</Link>
        <Link href="/contacto">Contacto</Link>
      </div>

      <div className={css.avatar_container}>
        <div className={css.avatar_circle} onClick={toggleAvatarMenu}>
          <span className={css.avatar_initial}>
            {isLoggedIn ? userName[0].toUpperCase() : "?"}
          </span>
        </div>
        
        <div
          className={css.avatarMenu}
          style={{ display: showAvatarMenu ? "block" : "none" }}
        >
          {isLoggedIn ? (
            <>
              <Link href="/perfil">Mi Perfil</Link>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
          ) : (
            <Link href="/inicioSesion">Iniciar Sesion</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
