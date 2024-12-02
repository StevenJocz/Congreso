import './Referencia.css';
import { IonIcon } from '@ionic/react';
import { videocamOutline, timeOutline, locationOutline } from "ionicons/icons";
import { useLanguage } from '../../context/LanguageContext'; // Importa el contexto de idioma

const ReferenciaPonencia = () => {
    const { language } = useLanguage(); // Obtén el idioma actual

    const textData = {
        es: {
            titulo: "Formato de las Ponencias",
            duracion: {
                titulo: "Duración",
                descripcion: "Las presentaciones tendrán una duración de 15 minutos, seguidas de una sesión de preguntas de 5 minutos."
            },
            presencial: {
                titulo: "Presencial",
                descripcion: "Los participantes que elijan la modalidad presencial deberán asistir a las sesiones en la sede del congreso en Medellín."
            },
            virtual: {
                titulo: "Virtual sincrónica",
                descripcion: "Los participantes que presenten virtualmente deberán estar disponibles para la transmisión en vivo durante las sesiones del congreso, a través de la plataforma Zoom."
            }
        },
        en: {
            titulo: "Presentation Format",
            duracion: {
                titulo: "Duration",
                descripcion: "Presentations will last 15 minutes, followed by a 5-minute Q&A session."
            },
            presencial: {
                titulo: "In-person",
                descripcion: "Participants choosing the in-person modality must attend the sessions at the congress venue in Medellín."
            },
            virtual: {
                titulo: "Synchronous Virtual",
                descripcion: "Participants presenting virtually must be available for the live broadcast during the congress sessions via the Zoom platform."
            }
        },
    };

    return (
        <div className="Referencia_Ponencia">
            <div className="Referencia_Ponencia--Content">
                <h2>{textData[language].titulo}</h2>
                <div className="Referencia_Ponencia--Content-Card">
                    <div>
                        <IonIcon className="icono" icon={timeOutline} />
                        <h3>{textData[language].duracion.titulo}</h3>
                        <p>{textData[language].duracion.descripcion}</p>
                    </div>
                    <div>
                        <IonIcon className="icono" icon={locationOutline} />
                        <h3>{textData[language].presencial.titulo}</h3>
                        <p>{textData[language].presencial.descripcion}</p>
                    </div>
                    <div>
                        <IonIcon className="icono" icon={videocamOutline} />
                        <h3>{textData[language].virtual.titulo}</h3>
                        <p>{textData[language].virtual.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferenciaPonencia;
