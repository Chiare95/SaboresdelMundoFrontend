import Head from "next/head";
import Reservar from "@/components/Reservar.jsx";

export default function ReservarPage() {

   return <>
      <Head>
         <meta name="description" content="Reservá tu mesa en Sabores del Mundo" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/logo.png"/>
      </Head>

      <main>
         <h1 style={{ textAlign: "center", marginTop: "20px" }}>Reservar Lugar</h1>
         <Reservar/>
      </main>

   </>
}