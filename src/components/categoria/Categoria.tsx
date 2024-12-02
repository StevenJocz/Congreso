import './Categoria.css';
import { IonIcon } from '@ionic/react';
import { cloudDownloadOutline } from "ionicons/icons";
import { useLanguage } from '../../context/LanguageContext';
import icono5 from '../../assets/img/icono5.png';
import icono6 from '../../assets/img/icono6.png';
import icono7 from '../../assets/img/icono7.png';

const Categoria = () => {
    const { language } = useLanguage(); // Obtener el idioma actual

    // Objeto con traducciones
    const textData = {
        es: {
            titulo: "CATEGORÍAS Y ESPACIOS DE PARTICIPACIÓN DE PROYECTOS",
            propuestas: "Propuestas de investigación",
            investigacion: "Investigación en curso",
            proyecto: "Proyecto finalizado",
            requisitos: "Requisitos a tener en cuenta para la participación",
            requisitoUno: "La inscripción es individual por participante.",
            requisitoDos: "Diligenciar el formulario de inscripción de proyectos con la información allí requerida.",
            requisitoTres: "Subir el póster en formato PDF al formulario de inscripción de proyectos.",
            requisitoCuatro: "Verificar su enlace de conexión quince (15) minutos antes de la hora destinada para su participación, el cual se enviará con la programación.",
            descarga: "Descarga los términos de referencia",
        },
        en: {
            titulo: "CATEGORIES AND SPACES FOR PROJECT PARTICIPATION",
            propuestas: "Research Proposals",
            investigacion: "Ongoing Research",
            proyecto: "Completed Project",
            requisitos: "Requirements to be considered for participation",
            requisitoUno: "Registration is individual for each participant.",
            requisitoDos: "Fill out the project registration form with the required information.",
            requisitoTres: "Upload the poster in PDF format to the project registration form.",
            requisitoCuatro: "Verify your connection link fifteen (15) minutes before the scheduled time for your participation, which will be sent with the schedule.",
            descarga: "Download the terms of reference",
        },
    };

    return (
        <div className='Categoria'>
            <div className='Categoria_Content'>
                <h2>{textData[language].titulo}</h2>
                <div className='Categoria_Content_img'>
                    <div>
                        <img src={icono5} alt="" />
                        <h3>{textData[language].propuestas}</h3>
                    </div>
                    <div>
                        <img src={icono6} alt="" />
                        <h3>{textData[language].investigacion}</h3>
                    </div>
                    <div>
                        <img src={icono7} alt="" />
                        <h3>{textData[language].proyecto}</h3>
                    </div>
                </div>
                <div className='Categoria_Content_Requisitos'>
                    <h3>{textData[language].requisitos}</h3>
                    <ul>
                        <li><span>1-</span>{textData[language].requisitoUno}</li>
                        <li><span>2-</span>{textData[language].requisitoDos}</li>
                        <li><span>3-</span>{textData[language].requisitoTres}</li>
                        <li><span>4-</span>{textData[language].requisitoCuatro}</li>
                    </ul>
                    <div className='Categoria_Content_Requisitos--Referencia'>
                        <h3>{textData[language].descarga}</h3>
                        <a
                            href="https://docs.google.com/document/d/146E0aj54KxIygnt6WPC8vYCsnH-EcwRD/edit?usp=sharing&ouid=114926607155563781567&rtpof=true&sd=true" 
                            target="_blank"
                        >
                            <IonIcon className="icono" icon={cloudDownloadOutline} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categoria;
