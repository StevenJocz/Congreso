import './Objectivo.css';
import img9 from '../../assets/svg/innovation-animate.svg';
import { IonIcon } from '@ionic/react';
import { playCircleOutline, closeOutline } from "ionicons/icons";
import Video from '../videoPromocional/Video';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import icono1 from '../../assets/img/icono1.png';
import icono2 from '../../assets/img/icono2.png';
import icono3 from '../../assets/img/icono3.png';
import icono4 from '../../assets/img/icono4.png';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../model/routes';

interface Props {
    tipo: number;
}

const Objectivo: React.FC<Props> = (props) => {
    const [verVideo, setVerVideo] = useState(false);
    const { language } = useLanguage(); // Obtener el idioma actual

    // Objeto con traducciones
    const textData = {
        es: {
            titulo: "Objetivo del congreso",
            descripcion1: "Integrar las universidades de Interamérica y Suramérica alrededor de la investigación, la innovación y la creación artística y cultural en el primer congreso de investigación interdivisión.",
            descripcion2: "Consolidando la producción científica y académica de los investigadores en publicaciones científicas en las revistas de investigación de cada una de las universidades vinculadas.",
            tituloAlternativo: "IMPULSA TU TALENTO: PRESENTA TUS PROYECTOS",
            descripcionAlternativa: "Un espacio dedicado a estudiantes de pregrado para que presenten sus proyectos de investigación, impulsando su talento y promoviendo el desarrollo de la investigación formativa.",
            botonVerVideo: "Ver video promocional",
            icono1: "Difundir los trabajos de investigación, realizados por docentes y estudiantes en la comunidad académica de las dos Divisiones.",
            icono2: "Facilitar la integración de los investigadores alrededor de temas de interés académico de la Iglesia Adventista del Séptimo Día.",
            icono3: "Consolidar la producción científica y académica de los investigadores en publicaciones científicas en las revistas de investigación de cada una de las universidades vinculadas.",
            icono4: "Consolidar la producción científica y académica de los investigadores en publicaciones científicas en las revistas de investigación de cada una de las universidades vinculadas.",
        },
        en: {
            titulo: "Objective of the congress",
            descripcion1: "Integrate the universities of Inter-America and South America around research, innovation, and artistic and cultural creation in the first inter-division research congress.",
            descripcion2: "Consolidating the scientific and academic production of researchers in scientific publications in the research journals of each of the linked universities.",
            tituloAlternativo: "BOOST YOUR TALENT: PRESENT YOUR PROJECTS",
            descripcionAlternativa: "A space dedicated to undergraduate students to present their research projects, boosting their talent and promoting the development of formative research.",
            botonVerVideo: "Watch promotional video",
            icono1: "Disseminate research works carried out by teachers and students within the academic community of both Divisions.",
            icono2: "Facilitate the integration of researchers around topics of academic interest of the Seventh-day Adventist Church.",
            icono3: "Consolidate the scientific and academic production of researchers in scientific publications in the research journals of each linked university.",
            icono4: "Consolidate the scientific and academic production of researchers in scientific publications in the research journals of each linked university.",
        },
    };

    const handdleVerVideo = () => {
        setVerVideo(!verVideo);
    };

    return (
        <div className='Objectivo'>
            <div className='Objectivo_Content'>
                <div className='Objectivo_left'>
                    <img src={img9} alt="" />
                </div>
                <div className='Objectivo_right'>
                    {props.tipo === 1 ? (
                        <>
                            <h2>{textData[language].titulo}</h2>
                            <p>{textData[language].descripcion1}</p>
                            <p>{textData[language].descripcion2}</p>
                            <div className="Objectivo_BotonVideo" onClick={handdleVerVideo}>
                                {textData[language].botonVerVideo} <IonIcon className="icono" icon={playCircleOutline} />
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>{textData[language].tituloAlternativo}</h2>
                            <p>{textData[language].descripcionAlternativa}</p>
                            <div className="Objectivo_BotonVideo" onClick={handdleVerVideo}>
                                {textData[language].botonVerVideo} <IonIcon className="icono" icon={playCircleOutline} />
                            </div>
                        </>
                    )}
                </div>
                {verVideo && (
                    <div className='Objectivo_Video'>
                        <div className='Objectivo_Video--Content'>
                            <div className="Objectivo_Video--Content--header">
                                <IonIcon
                                    className="icono"
                                    onClick={handdleVerVideo}
                                    icon={closeOutline}
                                />
                            </div>
                            <Video tipo={2} />
                        </div>
                    </div>
                )}
            </div>
            {props.tipo == 1 &&
                <>
                    <div className='Objectivo_Iconos'>
                        <div>
                            <img src={icono1} alt="" />
                            <p>{textData[language].icono1}</p>
                        </div>
                        <div>
                            <img src={icono2} alt="" />
                            <p>{textData[language].icono2}</p>
                        </div>
                        <div>
                            <img src={icono3} alt="" />
                            <p>{textData[language].icono3}</p>
                        </div>
                        <div>
                            <img src={icono4} alt="" />
                            <p>{textData[language].icono4}</p>
                        </div>
                    </div>
                    <div className='Objectivo_verTerminos'>
                        <Link to={`${PublicRoutes.TerminosReferencia}`}>
                            Ver Términos de Referencia de Participación
                        </Link>

                    </div>
                </>
            }
        </div>
    );
}

export default Objectivo;
