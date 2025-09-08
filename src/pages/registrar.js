import Head from "next/head";
import Navegacion from "../components/Navegation/NavBarAvatar"
import FormularioRegistro from "@/components/FormularioRegistro"


export default function RegistrarPage() {
   

   return <>
      <Head>
         <meta name="description" content="Restaurante" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/logo.png" />
         <title>Sabores del Mundo</title>
      </Head>

      <header>
         <Navegacion />

      </header>

      <main>
         <FormularioRegistro/>
      </main>

   </>
}