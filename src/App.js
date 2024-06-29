import './App.css';
import ColorPicker from './page/ColorPicker';
import LogoChanger from './page/LogoChanger';
import Sidebar from './component/Sidebar';
import Header from './page/Header';
import Service from './component/Service';
import Contact from './component/Contact';

function App() {
  return (
    <div className="min-h-screen relative">
      <Sidebar>
        <ColorPicker />
        <LogoChanger />
      </Sidebar>
      <div className="p-4">
        <Header />
        <Service />
        <Contact />
        
      </div>
    </div>
  );
}

export default App;
