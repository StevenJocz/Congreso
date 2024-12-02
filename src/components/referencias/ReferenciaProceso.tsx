import './Referencia.css';
import { IonIcon } from '@ionic/react';
import { documentTextOutline, calendarOutline, clipboardOutline, checkmarkDoneOutline } from "ionicons/icons";
import { useLanguage } from '../../context/LanguageContext'; // Importa el contexto de idioma

const ReferenciaProceso = () => {
    const { language } = useLanguage(); // Obtén el idioma actual

    const textData = {
        es: {
            titulo: "Proceso de Inscripción y Presentación de Trabajos",
            plataforma: {
                titulo: "Plataforma",
                descripcion: "Los trabajos se recibirán exclusivamente a través de la plataforma OJS del congreso."
            },
            fechaLimite: {
                titulo: "Fecha límite de entrega",
                descripcion: "31 de marzo de 2025"
            },
            formato: {
                titulo: "Formato",
                shortPaper: {
                    titulo: "Short paper",
                    descripcion: "El artículo deberá tener entre 2,500 palabras, siguiendo las pautas de formato indicadas en el sitio web del congreso."
                },
                idioma: {
                    titulo: "Idioma",
                    descripcion: "Se aceptarán trabajos en español, portugués e inglés."
                }
            },
            evaluacion: {
                titulo: "Evaluación",
                descripcion: "Todos los trabajos serán evaluados por un comité de expertos. A los autores se les comunicará una de las siguientes decisiones: aceptado sin modificaciones, aceptado con modificaciones (requiriendo ajustes antes de la presentación) o rechazado. La decisión final sobre la participación en una ponencia será notificada a más tardar el 30 de abril de 2025."
            }
        },
        en: {
            titulo: "Registration and Submission Process",
            plataforma: {
                titulo: "Platform",
                descripcion: "Works will be received exclusively through the congress OJS platform."
            },
            fechaLimite: {
                titulo: "Submission Deadline",
                descripcion: "March 31, 2025"
            },
            formato: {
                titulo: "Format",
                shortPaper: {
                    titulo: "Short paper",
                    descripcion: "The article must have between 2,500 words, following the formatting guidelines indicated on the congress website."
                },
                idioma: {
                    titulo: "Language",
                    descripcion: "Works will be accepted in Spanish, Portuguese, and English."
                }
            },
            evaluacion: {
                titulo: "Evaluation",
                descripcion: "All works will be evaluated by a committee of experts. Authors will be informed of one of the following decisions: accepted without modifications, accepted with modifications (requiring adjustments before presentation), or rejected. The final decision on participation in a presentation will be notified by April 30, 2025."
            }
        },
    };

    return (
        <div className="Referencia_Proceso">
            <h2>{textData[language].titulo}</h2>
            <div className="Referencia_Proceso--Content">
                <div>
                    <IonIcon className="icono" icon={documentTextOutline} />
                    <h3>{textData[language].plataforma.titulo}</h3>
                    <p>{textData[language].plataforma.descripcion}</p>
                </div>
                <div>
                    <IonIcon className="icono" icon={calendarOutline} />
                    <h3>{textData[language].fechaLimite.titulo}</h3>
                    <p>{textData[language].fechaLimite.descripcion}</p>
                </div>
                <div>
                    <IonIcon className="icono" icon={clipboardOutline} />
                    <h3>{textData[language].formato.titulo}</h3>
                    <ul>
                        <h4>{textData[language].formato.shortPaper.titulo}</h4>
                        <li>{textData[language].formato.shortPaper.descripcion}</li>
                        <h4>{textData[language].formato.idioma.titulo}</h4>
                        <li>{textData[language].formato.idioma.descripcion}</li>
                    </ul>
                </div>
                <div>
                    <IonIcon className="icono" icon={checkmarkDoneOutline} />
                    <h3>{textData[language].evaluacion.titulo}</h3>
                    <p>{textData[language].evaluacion.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default ReferenciaProceso;
