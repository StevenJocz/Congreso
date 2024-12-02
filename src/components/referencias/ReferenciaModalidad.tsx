import './Referencia.css'
import { IonIcon } from '@ionic/react';
import { documentTextOutline, micOutline } from "ionicons/icons";
import { useLanguage } from '../../context/LanguageContext'; // Importa el contexto de idioma

const ReferenciaModalidad = () => {
    const { language } = useLanguage(); // Obtén el idioma actual

    const textData = {
        es: {
            titulo: "Modalidades de Participación",
            shortPaper: "Short Paper",
            shortPaperDesc: "Los participantes deberán entregar un artículo breve (short paper) a través de la plataforma OJS del congreso. Este artículo será sometido a evaluación editorial, y si es aceptado, el autor será programado para una ponencia.",
            ponencia: "Ponencia",
            ponenciaDesc: "Los autores de short papers aceptados presentarán sus trabajos en modalidad presencial o sincrónica virtual, según la opción seleccionada al momento de la inscripción. Las ponencias estarán organizadas en sesiones temáticas de acuerdo con las áreas del congreso.",
            ojs: "OJS del congreso"
        },
        en: {
            titulo: "Participation Modalities",
            shortPaper: "Short Paper",
            shortPaperDesc: "Participants must submit a short paper through the congress's OJS platform. This paper will be submitted for editorial review, and if accepted, the author will be scheduled for a presentation.",
            ponencia: "Presentation",
            ponenciaDesc: "Authors of accepted short papers will present their work in person or synchronously online, depending on the option selected at registration. Presentations will be organized into thematic sessions according to the congress areas.",
            ojs: "congress's OJS platform"
        },
    };

    return (
        <div className="ReferenciaCongreso_Modalidades">
            <h2>{textData[language].titulo}</h2>
            <div className="ReferenciaCongreso_Modalidades--Iconos">
                <div>
                    <IonIcon className="icono" icon={documentTextOutline} />
                    <h3>{textData[language].shortPaper}</h3>
                    <p>{textData[language].shortPaperDesc}</p>
                    <a href="https://revistas.unac.edu.co/ojs/index.php/congreso2025/index" target="_blank">{textData[language].ojs}</a>
                </div>
                <div>
                    <IonIcon className="icono" icon={micOutline} />
                    <h3>{textData[language].ponencia}</h3>
                    <p>{textData[language].ponenciaDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default ReferenciaModalidad;
