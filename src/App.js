import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil';
import Portofolio from './Pages/Portofolio';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';
import Apropos from './Pages/Apropos';
import Ereur from './Pages/Ereur';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Accueil/>}/>
           <Route path='/Portofolio' element={<Portofolio/>}/>
           <Route path='/Services' element={<Services/>}/>
           <Route path='/Apropos' element={<Apropos/>}/>
           <Route path='/Contacts' element={<Contacts/>}/>
           <Route path='*' element={<Ereur/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
