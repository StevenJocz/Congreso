import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
    language: 'es' | 'en';
    toggleLanguage: (lang: 'es' | 'en') => void; // Acepta un argumento
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<'es' | 'en'>('es');

    const toggleLanguage = (lang: 'es' | 'en') => {
        setLanguage(lang); // Establece el idioma basado en el argumento
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
