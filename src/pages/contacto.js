import Head from "next/head";
import Navegacion from "../components/Navegation/NavBarAvatar"
import Info from "@/components/Contacto";

export default function Contacto() {

   return <>
      <Head>
         <title>Sabores del Mundo</title>
         <meta name="description" content="Restaurante" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/logo.png" />
      </Head>

      <header>
         <Navegacion/>
      </header>

      <main>
      <Info/>
      </main>
   </>
}