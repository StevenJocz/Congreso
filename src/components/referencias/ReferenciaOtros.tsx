import './Referencia.css';
import { IonIcon } from '@ionic/react';
import { calendarOutline, personAddOutline, carOutline, ribbonOutline } from "ionicons/icons";
import { useLanguage } from '../../context/LanguageContext'; // Importa el contexto de idioma

const ReferenciaOtros = () => {
    const { language } = useLanguage(); // Obtén el idioma actual

    const textData = {
        es: {
            titulo: "Otros Términos",
            criterios: {
                titulo: "Los trabajos serán evaluados en función de los siguientes criterios",
                items: [
                    "Relevancia del tema respecto a los ejes temáticos del congreso",
                    "Originalidad e innovación en el enfoque.",
                    "Claridad en la exposición de ideas y resultados.",
                    "Rigor metodológico y científico.",
                    "Impacto potencial de la investigación."
                ]
            },
            cronograma: {
                titulo: "Cronograma",
                items: [
                    { subTitulo: "Apertura de convocatoria", fecha: "1 de noviembre de 2024" },
                    { subTitulo: "Fecha límite de entrega de short papers", fecha: "31 de marzo de 2025" },
                    { subTitulo: "Notificación de aceptación", fecha: "30 de abril de 2025" },
                    { subTitulo: "Realización del congreso", fecha: "14-17 de mayo de 2025" }
                ]
            },
            inscripcion: {
                titulo: "Inscripción",
                descripcion: "La participación en el congreso, tanto presencial como virtual, estará sujeta a una inscripción."
            },
            hospedaje: {
                titulo: "Hospedaje y Transporte",
                descripcion: "Los participantes presenciales serán responsables de organizar su propio alojamiento y transporte. La organización del congreso sugerirá opciones de hospedaje en Medellín."
            }
        },
        en: {
            titulo: "Other Terms",
            criterios: {
                titulo: "The works will be evaluated based on the following criteria",
                items: [
                    "Relevance of the topic concerning the thematic axes of the congress",
                    "Originality and innovation in the approach.",
                    "Clarity in the presentation of ideas and results.",
                    "Methodological and scientific rigor.",
                    "Potential impact of the research."
                ]
            },
            cronograma: {
                titulo: "Schedule",
                items: [
                    { subTitulo: "Call for Papers Opening", fecha: "November 1, 2024" },
                    { subTitulo: "Deadline for short paper submission", fecha: "March 31, 2025" },
                    { subTitulo: "Acceptance Notification", fecha: "April 30, 2025" },
                    { subTitulo: "Congress Dates", fecha: "May 14-17, 2025" }
                ]
            },
            inscripcion: {
                titulo: "Registration",
                descripcion: "Participation in the congress, both in-person and virtually, will be subject to a registration."
            },
            hospedaje: {
                titulo: "Accommodation and Transportation",
                descripcion: "In-person participants will be responsible for organizing their own accommodation and transportation. The congress organization will suggest lodging options in Medellín."
            }
        },
    };

    return (
        <div className="Referencia_Proceso">
            <h2>{textData[language].titulo}</h2>
            <div className="Referencia_Proceso--Content">
                <div>
                    <IonIcon className="icono" icon={personAddOutline} />
                    <h3>{textData[language].inscripcion.titulo}</h3>
                    <p>{textData[language].inscripcion.descripcion}</p>
                </div>
                <div>
                    <IonIcon className="icono" icon={ribbonOutline} />
                    <h3>{textData[language].criterios.titulo}</h3>
                    <ul>
                        {textData[language].criterios.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <IonIcon className="icono" icon={carOutline} />
                    <h3>{textData[language].hospedaje.titulo}</h3>
                    <p>{textData[language].hospedaje.descripcion}</p>
                </div>
                <div>
                    <IonIcon className="icono" icon={calendarOutline} />
                    <h3>{textData[language].cronograma.titulo}</h3>
                    <ul>
                        {textData[language].cronograma.items.map((item, index) => (
                            <div key={index}>
                                <h4>{item.subTitulo}</h4>
                                <li>{item.fecha}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ReferenciaOtros;
