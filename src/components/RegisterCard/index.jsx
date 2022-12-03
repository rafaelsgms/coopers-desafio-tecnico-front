import { Link, useNavigate } from "react-router-dom";
import Image1 from '../../assets/login/image1.svg';
import './style.css';

export default function Register() {
    const Navigate = useNavigate();

    return (

        <div className='login-div-register flex-column'>
            <div className="container-form">
                <div className='flex-center'>
                    <img className='image-left' src={Image1} alt="" />
                    <div className='right'>
                        <h1 className='sign-in'>Register</h1>
                        <h2 className='access'>to access your list</h2>
                        <form className='login-form flex-column'>
                            <label className='label-form'>Name:</label>
                            <input className='input-form' type="text" name="" id="" />
                            <label className='label-form'>Email:</label>
                            <input className='input-form' type="text" name="" id="" />
                            <label className='label-form'>Password:</label>
                            <input className='input-form' type="password" name="" id="" />
                            <button className='sign-in-btn'>Register</button>
                            <span className="redirect-register">
                                Acesse sua{" "}
                                <Link to={"/"} className="register-link">
                                    <span className="">conta</span>
                                </Link>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}