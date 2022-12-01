import { useState } from 'react'
import Modal from "react-modal"
import Footer from '../assets/home/footer.svg'
import HomeImage from '../assets/home/home-picture.svg'
import Logo from '../assets/home/logo-home.svg'
import SideArrow from '../assets/home/side-arrow.svg'
import ToDoListSpace from '../assets/home/to-do-list-band.svg'
import Cards from '../components/Cards'
import FormSpace from '../components/FormSpace'
import Login from '../components/Login'
import ToDoDone from '../components/ToDoDone'
import './style.css'
import { useNavigate } from "react-router-dom";

// Modal.setAppElement("#root");

export default function MainSection() {
  const [modalLoginOpen, setModalIsOpen] = useState(false);
//   // const Navigate = useNavigate();
//   const [loginIsOpen, setIsOpen] = useState(false);
//   function handleOpenLogin() {
//     setIsOpen(true);
//   }

//   function handleCloseLogin() {
//     setIsOpen(false);
//   }

  // const redirectTo = () => {
  //   Navigate("/tododone");
  // };

  return (
    <div className='container-home'>
      <div className="header flex-center">
        <img src={Logo} alt="logo" />
        <button onClick={() => setModalIsOpen (true)}
          className='btn-login'
          // onClick={handleOpenLogin}
        >
          Entrar
        </button>
     {modalLoginOpen ? (
     <Login
     onClose={() => setModalIsOpen(false)}
     />
     ) : null}
      </div>
      <div className='organize-text flex-column'>
        <h1 className='organize-txt'>Organize</h1>
        <h2 className='daily-jobs'>your daily jobs</h2>
        <h3 className='get-this-done'>The only way to get things done</h3>
        <button 
        className='to-do-list-btn'
        >Go to To-do list</button>
      </div>
      <div className='side-arrow flex-center'>
        <img className='side-arrow-img' src={SideArrow} alt="side-arrow" />
        <img className='home-picture' src={HomeImage} alt="home-picture" />
      </div>
      <div className='to-do-list-band'>
        <img src={ToDoListSpace} alt="to-do-list" />
      </div>

      <main>
        <ToDoDone />
        <Cards />
        <FormSpace />
      </main>
      <img className='footer' src={Footer} alt="" />
    </div>
  )
}

