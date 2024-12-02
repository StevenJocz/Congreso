import './Organiza.css';
import logo1 from '../../assets/img/IASD.png';
import logo2 from '../../assets/img/DSA.png';
import logo3 from '../../assets/img/logo-unac.png';
import logo4 from '../../assets/img/medellin.png';
import logo5 from '../../assets/img/bureau.png';
import logo6 from '../../assets/img/alcaldia.png';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
    tipo: number;
} 

const Organiza: React.FC<Props> = (props) => {
    const { language } = useLanguage(); // Obtener el idioma actual

    // Objeto con traducciones
    const textData = {
        es: {
            organizadores: "Organizado por",
            sponsors: "Sponsors",
            apoya: "Apoya",
        },
        en: {
            organizadores: "Organized by",
            sponsors: "Sponsors",
            apoya: "Supports",
        },
    };

    const texto = props.tipo === 1 ? textData[language].sponsors : textData[language].apoya;

    return (
        <div className="Organiza">
            <div className="Organiza_Content">
                <div className="Organiza_Content_img">
                    <h2>{textData[language].organizadores}</h2>
                    <div>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                    </div>
                </div>
                <div className="Organiza_Content_img">
                    <h2>{texto}</h2>
                    <div>
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                        <img src={logo6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Organiza;
