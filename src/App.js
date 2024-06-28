import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ColorContext } from './component/ColorProvider';
import ColorPicker from './page/ColorPicker';
import LogoChanger from './page/LogoChanger';
import Sidebar from './component/Sidebar';
import Header from './page/Header';
import Service from './component/Service';
import Contact from './component/Contact';

function App() {
  const { color } = useContext(ColorContext);
  return (
    <div className="min-h-screen">
      <Sidebar>
        <ColorPicker />
        <LogoChanger />
      </Sidebar>
      <div className="p-4">
        <Header />
        <Service />
        <Contact />
        <main className="mt-8">
          <h1 className="text-4xl font-bold" style={{ color: color }}>Welcome to My Website</h1>
          <p className="mt-4" style={{ color: color }}>This is a simple React app with Tailwind CSS and ShadCN.</p>
        </main>
        {/* <SubmitButton /> */}
      </div>
    </div>
  );
}

export default App;
