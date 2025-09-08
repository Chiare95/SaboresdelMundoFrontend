import Head from "next/head";
import HomeComponent from "@/components/Home/Home";
import Weather from "@/components/Clima.jsx";


export default function IndexPage() {

   return <>
      <Head>
         <title>Sabores del Mundo</title>
         <meta name="description" content="Restaurante" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="logo.png" />
      </Head>
      <header>
         <HomeComponent/>
      </header>
      <main>
         <div>
            <Weather />
         </div>
      </main>
   </>
}
