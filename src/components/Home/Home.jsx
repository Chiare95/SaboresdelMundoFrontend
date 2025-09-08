import React from "react";
import styles from "@/components/Home/home.module.css";

export default function Home() {
return (
    <div className={styles.home_container}>
    <div className={styles.overlay}>
        <div className={styles.content}>
            <h2>Bienvenid@ a Nuestro Restaurante Sabores del Mundo</h2>
            <p>Disfrutá de la mejor comida y reservá tu mesa fácilmente.</p>
        </div>
    </div>
    </div>
    );
}
