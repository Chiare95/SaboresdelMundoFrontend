import Head from "next/head";
import Navegacion from "../components/Navegation/NavBarAvatar"
import LoginForm from "@/components/Login/LoginForm"


export default function RegistrarPage() {
   

   return <>
      <Head>
         <title>Sabores del Mundo</title>
         <meta name="description" content="Restaurante" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/logo.png" />

      </Head>

      <header>
         <Navegacion />

      </header>

      <main>
         <LoginForm/>
      </main>

   </>
}