import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";


const App = () => {
  const [isOpen, setOpen] = useState(false)

  return <main className='min-h-screen flex flex-col justify-start overflow-hidden'>
    <Nav isOpen={isOpen} setOpen={setOpen} />
    <div className={`duration-300 shadow-2xl ${isOpen ? 'ml-[15rem]' : ''}`}>
      <Outlet />
      <Footer />
    </div>
  </main>;
};

export default App;
