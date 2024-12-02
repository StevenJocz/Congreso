
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { RoutesWithNotFound } from './utilities'
import Home from './pages/Home'
import { PublicRoutes } from './model/routes'
import Semilleros from './pages/Semilleros'
import { LanguageProvider } from './context/LanguageContext'
import { ReferenciaCongreso } from './pages/ReferenciaCongreso'
// import Ponente from './pages/Ponente'


function App() {

  return (
    <>
      <BrowserRouter>
        <LanguageProvider>
          <RoutesWithNotFound>
            <Route path={`${PublicRoutes.Home}`} element={<Home />} />
            <Route path={`${PublicRoutes.Semilleros}`} element={<Semilleros />} />
            <Route path={`${PublicRoutes.TerminosReferencia}`} element={<ReferenciaCongreso />} />
            <Route path={`${PublicRoutes.Ponente}`} element={<ReferenciaCongreso />} />
          </RoutesWithNotFound>
        </LanguageProvider>
      </BrowserRouter>
    </>
  )
}

export default App
