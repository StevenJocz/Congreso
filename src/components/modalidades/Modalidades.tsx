import './Modalidades.css';
import { IonIcon } from '@ionic/react';
import { bodyOutline, desktopOutline, earthOutline, personOutline } from "ionicons/icons";
import { useLanguage } from '../../context/LanguageContext';

interface Props {
    tipo: number;
}

const Modalidades: React.FC<Props> = (props) => {
    const { language } = useLanguage(); // Obtener el idioma actual
    console.log(props.tipo)
    // Objeto con traducciones
    const textData = {
        es: {
            inscribete: "¡INSCRÍBETE YA!",
            descripcion: "¡No te quedes fuera del <span>Congreso Científico 2025!</span> Te ofrecemos diferentes modalidades de inscripción para que elijas la que mejor se adapte a ti. Ya sea que prefieras vivir la experiencia en persona o disfrutarla desde la comodidad de tu hogar, tenemos opciones para todos.",
            asistentePresencial: {
                titulo: "Asistente Presencial",
                descripcion: "Inscríbete como Asistente Presencial si participarás de forma física en el evento.",
                precio: "$70 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2124"
            },
            asistenteVirtual: {
                titulo: "Asistente Virtual",
                descripcion: "Inscríbete como Asistente Virtual si participarás de manera online en el evento.",
                precio: "$30 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2126"
            },
            semilleroInvestigacion: {
                titulo: "Semillero de Investigación Virtual",
                descripcion: "Inscríbete a semillero de investigación virtual",
                precio: "$10 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2127"
            },
            asistenteInstitucion: {
                titulo: "Asistente Presencial pagado por tu institución",
                descripcion: "Inscríbete como Asistente Presencial si tu inscripción será cubierta por tu institución.",
                precio: "$0 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2134"
            },
            asistenteVritualInstitucion: {
                titulo: "Asistente Virtual pagado por tu institución",
                descripcion: "Inscríbete como Asistente Virtual si tu inscripción será cubierta por tu institución.",
                precio: "$0 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2130"
            },
            estudiantePresencial: {
                titulo: "Estudiante Presencial",
                descripcion: "Regístrate como Estudiante Presencial para acceder al evento a un precio especial.",
                precio: "$35 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2143"
            },
        },
        en: {
            inscribete: "REGISTER NOW!",
            descripcion: "Don't miss out on the <span>Scientific Congress 2025!</span> We offer different registration modalities for you to choose the one that best suits you. Whether you prefer to experience it in person or enjoy it from the comfort of your home, we have options for everyone.",
            asistentePresencial: {
                titulo: "In-Person Attendee",
                descripcion: "Register as an In-Person Attendee if you will participate physically in the event.",
                precio: "$70 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2124"
            },
            asistenteVirtual: {
                titulo: "Virtual Attendee",
                descripcion: "Register as a Virtual Attendee if you will participate online in the event.",
                precio: "$30 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2126"
            },
            semilleroInvestigacion: {
                titulo: "Virtual Research Seedbed",
                descripcion: "Register for the virtual research seedbed",
                precio: "$10 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2127"
            },
            asistenteInstitucion: {
                titulo: "In-person assistant paid by the institution",
                descripcion: "Register as an In-Person Attendee if your registration is covered by your institution.",
                precio: "$0 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2134"
            },
            asistenteVritualInstitucion: {
                titulo: "Virtual Assistant paid by the institution",
                descripcion: "Register as a Virtual Attendee if your registration is covered by your institution.",
                precio: "$0 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2130"
            },
            estudiantePresencial: {
                titulo: "In-Person Student",
                descripcion: "Register as an In-Person Student to access the event at a special rate.",
                precio: "$35 USD",
                enlace: "https://slies.unac.edu.co/Paginas/Informacion.aspx?Id=2143"
            },
        },
    };

    return (
        <div className='Modalidades' id='Inscripcion'>
            <div className='Modalidades_Content'>
                <div className='Modalidades_Content--Texto'>
                    <h2>{textData[language].inscribete}</h2>
                    <p dangerouslySetInnerHTML={{ __html: textData[language].descripcion }} />
                </div>
                <div className='Modalidades_Content--Inscripcion'>
                    <div className='Modalidades_Content--Inscripcion_Card'>
                        <IonIcon className="icono" icon={bodyOutline} />
                        <div>
                            <h3>{textData[language].asistentePresencial.titulo}</h3>
                            <p>{textData[language].asistentePresencial.descripcion}</p>
                            <h4>{textData[language].asistentePresencial.precio}</h4>
                            <a href={textData[language].asistentePresencial.enlace} target="_blank" rel="noopener noreferrer">Inscríbete</a>
                        </div>
                    
                    </div>
                    <div className='Modalidades_Content--Inscripcion_Card'>
                        <IonIcon className="icono" icon={desktopOutline} />
                        <div>
                            <h3>{textData[language].asistenteVirtual.titulo}</h3>
                            <p>{textData[language].asistenteVirtual.descripcion}</p>
                            <h4>{textData[language].asistenteVirtual.precio}</h4>
                            <a href={textData[language].asistenteVirtual.enlace} target="_blank" rel="noopener noreferrer">Inscríbete</a>
                        </div>

                    </div>
                    <div className='Modalidades_Content--Inscripcion_Card'>
                        <IonIcon className="icono" icon={earthOutline} />
                        <div>
                            <h3>{textData[language].semilleroInvestigacion.titulo}</h3>
                            <p>{textData[language].semilleroInvestigacion.descripcion}</p>
                            <h4>{textData[language].semilleroInvestigacion.precio}</h4>
                            <a href={textData[language].semilleroInvestigacion.enlace} target="_blank" rel="noopener noreferrer">Inscríbete</a>
                        </div>

                    </div>
                    <div className='Modalidades_Content--Inscripcion_Card'>
                        <IonIcon className="icono" icon={bodyOutline} />
                        <div>
                            <h3>{textData[language].asistenteInstitucion.titulo}</h3>
                            <p>{textData[language].asistenteInstitucion.descripcion}</p>
                            <h4></h4>
                            <a href={textData[language].asistenteInstitucion.enlace} target="_blank" rel="noopener noreferrer">Inscríbete</a>
                        </div>

                    </div>
                    <div className='Modalidades_Content--Inscripcion_Card'>
                        <IonIcon className="icono" icon={desktopOutline} />
                        <div>
                            <h3>{textData[language].asistenteVritualInstitucion.titulo}</h3>
                            <p>{textData[language].asistenteVritualInstitucion.descripcion}</p>
                            <h4></h4>
                            <a href={textData[language].asistenteVritualInstitucion.enlace} target="_blank" rel="noopener noreferrer">Inscríbete</a>
                        </div>

                    </div>
                    <div className='Modalidades_Content--Inscripcion_Card'>
                        <IonIcon className="icono" icon={personOutline} />
                        <div>
                            <h3>{textData[language].estudiantePresencial.titulo}</h3>
                            <p>{textData[language].estudiantePresencial.descripcion}</p>
                            <h4>{textData[language].estudiantePresencial.precio}</h4>
                            <a href={textData[language].estudiantePresencial.enlace} target="_blank" rel="noopener noreferrer">Inscríbete</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modalidades;
