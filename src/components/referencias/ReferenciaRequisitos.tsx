import './Referencia.css';
import { useLanguage } from '../../context/LanguageContext'; // Importa el contexto de idioma

const ReferenciaRequisitos = () => {
    const { language } = useLanguage(); // Obtén el idioma actual

    const textData = {
        es: {
            titulo: "Requisitos de Participación",
            elegibilidad: "Elegibilidad",
            elegibilidadDesc: "Podrán participar investigadores y docentes de Instituciones de Educación Superior o de universidades adventistas de América Latina. También se aceptan colaboraciones con investigadores externos, siempre que el trabajo presentado sea relevante para las áreas del congreso.",
            areasTematicas: "Áreas temáticas o del conocimiento",
            areas: [
                "Ciencias de la Educación",
                "Ciencias de la Salud",
                "Teología y Estudios Religiosos",
                "Ciencias Administrativas y Contables",
                "Ingeniería y Tecnología",
                "Artes y Humanidades",
                "Ciencias Sociales"
            ]
        },
        en: {
            titulo: "Participation Requirements",
            elegibilidad: "Eligibility",
            elegibilidadDesc: "Researchers and faculty from higher education institutions or Adventist universities in Latin America may participate. Collaborations with external researchers are also accepted, as long as the work presented is relevant to the congress areas.",
            areasTematicas: "Thematic Areas of Knowledge",
            areas: [
                "Education Sciences",
                "Health Sciences",
                "Theology and Religious Studies",
                "Administrative and Accounting Sciences",
                "Engineering and Technology",
                "Arts and Humanities",
                "Social Sciences"
            ]
        },
    };

    return (
        <div className="ReferenciaCongreso_Requisitos">
            <div className="ReferenciaCongreso_Requisitos--Content">
                <div className="ReferenciaCongreso_Requisitos--Content-Texto">
                    <h2>{textData[language].titulo}</h2>
                    <h3>{textData[language].elegibilidad}</h3>
                    <p>{textData[language].elegibilidadDesc}</p>
                    <h3>{textData[language].areasTematicas}</h3>
                </div>
                <div className='ReferenciaCongreso_Requisitos--Content-div'>
                    {textData[language].areas.map((area, index) => (
                        <div key={index} className='ReferenciaCongreso_Requisitos--Content-div_Card'>
                            <h3>{area}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReferenciaRequisitos;
