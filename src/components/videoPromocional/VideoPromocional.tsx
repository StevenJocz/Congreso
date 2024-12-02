import Video from './Video';
import './VideoPromocional.css';
import { useLanguage } from '../../context/LanguageContext';

const VideoPromocional = () => {
    const { language } = useLanguage(); // Obtener el idioma actual

    // Objeto con traducciones
    const textData = {
        es: {
            titulo: "Video promocional del evento",
            descripcion: "Medellín, conocida como la “Ciudad de la Eterna Primavera”, es reconocida por su transformación social e innovación. Su infraestructura moderna, como el sistema de transporte Metrocable, conecta comunidades en las montañas con el centro de la ciudad. Además, la ciudad alberga importantes universidades y centros de investigación, convirtiéndose en un referente en la educación y la ciencia en América Latina.",
        },
        en: {
            titulo: "Promotional Video of the Event",
            descripcion: "Medellín, known as the 'City of Eternal Spring,' is recognized for its social transformation and innovation. Its modern infrastructure, such as the Metrocable transportation system, connects mountain communities with the city center. Additionally, the city is home to important universities and research centers, becoming a benchmark in education and science in Latin America.",
        },
    };

    return (
        <div className="VideoPromocional">
            <div className="VideoPromocional_Texto">
                <h2>{textData[language].titulo}</h2>
                <p>{textData[language].descripcion}</p>
            </div>
            <div className="VideoPromocional_Video">
                <Video tipo={1} />
            </div>
        </div>
    );
}

export default VideoPromocional;
