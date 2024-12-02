import './Lugar.css';
import { IonIcon } from '@ionic/react';
import { locationOutline, cloudDoneOutline } from "ionicons/icons";
import { useLanguage } from '../../context/LanguageContext';

const Lugar = () => {
    const { language } = useLanguage(); // Obtener el idioma actual

    // Objeto con traducciones
    const textData = {
        es: {
            campus: "CAMPUS UNAC",
            ciudad: "Medellín - Colombia",
            virtual: "VIRTUAL",
        },
        en: {
            campus: "UNAC CAMPUS",
            ciudad: "Medellín - Colombia",
            virtual: "VIRTUAL",
        },
    };

    return (
        <div className='Lugar'>
            <div className='Lugar_Content'>
                <div>
                    <IonIcon className="icono" icon={locationOutline} />
                    <div>
                        <h3>{textData[language].campus}</h3>
                        <h4>{textData[language].ciudad}</h4>
                    </div>
                </div>
                <div>
                    <IonIcon className="icono" icon={cloudDoneOutline} />
                    <div>
                        <h3>{textData[language].virtual}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lugar;
