import './Conferencistas.css';
import conferencistaUno from '../../assets/conferencistas/DrWilliams.jpeg';
import conferencistaDos from '../../assets/conferencistas/GladysNMaquera.jpeg';
import conferencistaTres from '../../assets/conferencistas/SafaryWa-Mbaleka.jpeg';
import conferencistaCuatro from '../../assets/conferencistas/_JosueETurpo.jpeg';
import { useLanguage } from '../../context/LanguageContext';

const Conferencistas = () => {
    const { language } = useLanguage(); // Obtener el idioma actual

    // Objeto con traducciones
    const textData = {
        es: {
            title: "Conferencistas",
        },
        en: {
            title: "Speakers",
        },
    };

    return (
        <div className='Conferencistas'>
            <div className='Conferencistas_Content'>
                <h2>{textData[language].title}</h2>
                <div className='Conferencistas_Content--img'>
                    <div>
                        <img src={conferencistaUno} alt="Dr. Williams" />
                        <h3> DAVID RUDYARD WILLIAMS</h3>
                        <p>Docente, investigador en Harvard University</p>
                    </div>
                    <div>
                        <img src={conferencistaDos} alt="Gladys N. Maquera" />
                        <h3>GLADYS N. MAQUERA SOSA </h3>
                        <p>Docente investigadora en la Universidad Peruana Unión filial Juliaca. Presidenta de directorio (e) de Electro Puno S.A.A y CEO de Grupo INNOP </p>
                    </div>
                    <div>
                        <img src={conferencistaTres} alt="Safary Wa Mbaleka" />
                        <h3>SAFARY WA-MBALEKA</h3>
                        <p>Investigador y educador en la Universidad Adventista de África, Kenia</p>
                    </div>
                    <div>
                        <img src={conferencistaCuatro} alt="Josué E. Turpo" />
                        <h3>JOSUÉ E. TURPO</h3>
                        <p>Director de Investigación Escuela de Posgrado de la Universidad Peruana Unión.Director de revista de investigación Apuntes Universitarios.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conferencistas;
