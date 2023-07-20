import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";
import StayTop from "./components/StayTop";
import Breadcrumb from "./components/TitleBar";
import TitleBar from "./components/TitleBar";


const App = () => {
  const [isOpen, setOpen] = useState(false)

  return <main className='min-h-screen flex flex-col overflow-hidden'>
    <StayTop />
    <Nav isOpen={isOpen} setOpen={setOpen} />
    {/* <TitleBar /> */}
    <div
      className={`min-h-screen flex flex-col min-w-full duration-300 
      ${isOpen ? 'ml-[15rem]' : ''}`}
    >
      <Outlet />
      <Footer />
    </div>
  </main>;
};

export default App;
