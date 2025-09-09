import Head from "next/head";
import LoginForm from "@/components/Login/LoginForm"


export default function RegistrarPage() {
   

   return <>
      <Head>
         <title>Sabores del Mundo</title>
         <meta name="description" content="Restaurante" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/logo.png" />

      </Head>

      <main>
         <LoginForm/>
      </main>

   </>
}