import { useLanguage } from "../../context/LanguageContext";
import logo from '../../assets/svg/logo.svg';
import mapa from '../../assets/img/mapaBlanco.png';
import svgDos from '../../assets/svg/banner_shape.svg';
import './Referencia.css'
import { IonIcon } from '@ionic/react';
import { cloudDownloadOutline } from "ionicons/icons";
interface Props {
    tipo: number;
}
const ReferenciaHeader: React.FC<Props> = (props) => {
    const { language } = useLanguage();

    const textData = {
        es: {
            Titulo: "CONGRESO CIENTÍFICO DE UNIVERSIDADES ADVENTISTAS LATINOAMERICANAS",
            Texto: "Tecnología, ciencia e innovación contribuyendo a la misión",
            Fecha: "2025",
            TerminosReferencia: "Términos de Referencia de Participación"
        },
        en: {
            Titulo: "LATIN AMERICAN ADVENTIST UNIVERSITIES SCIENTIFIC CONGRESS",
            Texto: "Technology, science, and innovation contributing to the mission",
            Fecha: "2025",
            TerminosReferencia: "Terms of Reference for Participation"
        },
    };

    return (
        <>
            <div className="ReferenciaCongreso_Header">
                <div>
                    <h2>{textData[language].Fecha}</h2>
                    <h1>{textData[language].Titulo}</h1>
                    <h3>{textData[language].Texto}</h3>
                </div>
                <img src={logo} alt="logo" />
                <img className="mapa" src={mapa} alt="mapa" />
                <img className="svgDos" src={svgDos} alt="decorativo" />
            </div>

            {props.tipo == 1 &&
                <div className="ReferenciaCongreso_Titulo">
                    <div className="ReferenciaCongreso_Titulo--Content">
                        <h1>{textData[language].TerminosReferencia}</h1>
                        <h3>Descarga los términos de referencia</h3>
                        <a
                            href="https://docs.google.com/document/d/1oIJ_Odt3e00wql4WeeqtmdiyiUx0VQdA/edit?usp=sharing&ouid=114926607155563781567&rtpof=true&sd=true"
                            target="_blank"
                        >
                            <IonIcon className="icono" icon={cloudDownloadOutline} />
                        </a>
                    </div>

                </div>
            }
        </>
    )
}

export default ReferenciaHeader;
