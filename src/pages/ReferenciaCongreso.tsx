import { useEffect } from "react";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import ReferenciaHeader from "../components/referencias/ReferenciaHeader";
import ReferenciaModalidad from "../components/referencias/ReferenciaModalidad";
import ReferenciaRequisitos from "../components/referencias/ReferenciaRequisitos";
import ReferenciaProceso from "../components/referencias/ReferenciaProceso";
import ReferenciaPonencia from "../components/referencias/ReferenciaPonencia";
import ReferenciaOtros from "../components/referencias/ReferenciaOtros";

export const ReferenciaCongreso = () => {
    useEffect(() => {
        const mainContainer = document.getElementById('Scroll');
        if (mainContainer) {
            mainContainer.scrollTop = 0;
        }
    }, []);


    return (
        <div id='Scroll'>
            <Nav tipo={1} />
            <div className="ReferenciaCongreso">
                <ReferenciaHeader tipo={1}/>
                <ReferenciaModalidad />
                <ReferenciaRequisitos/>
                <ReferenciaProceso/>
                <ReferenciaPonencia/>
                <ReferenciaOtros/>
            </div>
            <Footer tipo={1} />
        </div>
    );
}
