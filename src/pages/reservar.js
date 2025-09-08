import Head from "next/head";
import Navegacion from "../components/Navegation/NavBarAvatar"
import Reservar from "@/components/Reservar.jsx";
import Footer from "@/components/Footer.jsx";


export default function ReservarPage() {

   return <>
      <Head>
         <meta name="description" content="Reservá tu mesa en Sabores del Mundo" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/logo.png"/>
      </Head>

      <header>
         <Navegacion />
      </header>

      <main>
         <h1 style={{ textAlign: "center", marginTop: "20px" }}>Reservar Lugar</h1>
         <Reservar/>
      </main>

   </>
}