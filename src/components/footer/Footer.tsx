import './Footer.css';
import logo from '../../assets/img/logo.png';
import { IonIcon } from '@ionic/react';
import { locationOutline, calendarNumberOutline, mailOutline } from "ionicons/icons";
import { useLanguage } from '../../context/LanguageContext';
interface Props {
    tipo: number;
}


const Footer: React.FC<Props> = (props) => {
    const { language } = useLanguage(); // Obtener el idioma actual

    // Objeto con traducciones
    const textData = {
        es: {
            año: "2025",
            titulo: "Congreso científico de Universidades Adventistas Latinoamericanas",
            descripcion: "Tecnología, ciencia e innovación contribuyendo a la misión",
            tituloDos: "III Encuentro Internacional de Semilleros de Investigación",
            descripcionDos: "De Universidades Adventistas Latinoamericanas",
            direccion: "Medellín, Colombia",
            direccionDetalle: "Carrera 84 #33AA-01",
            fechas: "13-17 Mayo 2025",
            fechasDos: "13 Mayo 2025",
            contacto: "Contáctenos",
            credito: "© 2024. Desarrollado por Hamilton Espinal para la Corporación Universitaria Adventista."
        },
        en: {
            año: "2025",
            titulo: "Scientific Congress of Adventist Universities in Latin America",
            descripcion: "Technology, science, and innovation contributing to the mission",
            tituloDos: "III International Meeting of Research Seedbeds",
            descripcionDos: "Of Latin American Adventist Universities",
            direccion: "Medellín, Colombia",
            direccionDetalle: "Carrera 84 #33AA-01",
            fechas: "May 13-17, 2025",
            fechasDos: "May 13, 2025",
            contacto: "Contact Us",
            credito: "© 2024. Developed by Hamilton Espinal for the Adventist University Corporation."
        },
    };

    return (
        <div className='Footer'>
            <div className="Footer_Content">
                <img src={logo} alt="" />
                <div className="Footer_Content--Texto">
                    <h2>{textData[language].año}</h2>
                    <h2>{props.tipo == 1 ? textData[language].titulo : textData[language].tituloDos}</h2>
                    <p>{props.tipo == 1 ? textData[language].descripcion : textData[language].descripcionDos}</p>
                </div>
                <div className="Footer_Content--Direccion">
                    <h2>{textData[language].direccion}</h2>
                    <p><IonIcon className="icono" icon={locationOutline} />{textData[language].direccionDetalle}</p>
                    <p><IonIcon className="icono" icon={calendarNumberOutline} />{props.tipo == 1 ? textData[language].fechas : textData[language].fechasDos}</p>
                    <h2>{textData[language].contacto}</h2>
                    <p><IonIcon className="icono" icon={mailOutline} />congresomedellin2025@unac.edu.co</p>
                </div>
            </div>
            <p className='FooterP'>{textData[language].credito}</p>
        </div>
    );
};

export default Footer;
