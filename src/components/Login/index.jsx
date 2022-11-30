import Image1 from '../../assets/login/image1.svg';
import './style.css';

export default function Login({onClose = () => {}}) {

    return (

            <div className='login-div flex-column'>
                <div className="container-form">
                <button onClick={onClose}
                    className='close-btn'
                >
                    close
                </button>
                <div className='flex-center'>
                    <img className='image-left' src={Image1} alt="" />
                    <div className='right'>
                        <h1 className='sign-in'>Sign in</h1>
                        <h2 className='access'>to access your list</h2>
                        <form className='login-form flex-column'>
                            <label className='label-form'>User:</label>
                            <input className='input-form' type="text" name="" id="" />
                            <label className='label-form'>Password:</label>
                            <input className='input-form' type="password" name="" id="" />
                            <button className='sign-in-btn'>Sign in</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
    )
}