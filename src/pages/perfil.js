import Head from "next/head";
import Navegacion from "../components/Navegation/NavBarAvatar"
import Perfil from "@/components/Perfil/Perfil.jsx";


export default function PerfilPage() {

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
         <Perfil/>
      </main>

   </>
}