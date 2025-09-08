import css from "../styles/footer.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram , faFacebook , faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <footer className={css.footer}>
        <div className={css.footer_content}>

            <div className={css.footer_social}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                < FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                < FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                < FontAwesomeIcon icon={faWhatsapp}/>
                </a>
            </div>
        </div>
        <p>© Sabores del Mundo. Todos los derechos reservados </p>

    </footer>
    </>
  )
}

export default Footer
