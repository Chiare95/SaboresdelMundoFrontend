import "@/styles/variables.css"
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navegacion from "@/components/Navegation/NavBarAvatar";

export default function App({ Component, pageProps }) {
      return (
            <>
            <main>
                  <div>
                  <Navegacion /> 
                  <Component {...pageProps} /> ;
                  </div>
            </main>
            <Footer/>
            </>
      );
}








