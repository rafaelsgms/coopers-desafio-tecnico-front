import GetInTouch from '../../assets/formsection/get-in-touch.svg'
import WomanImg from '../../assets/formsection/woman-img.svg'
import './style.css'

export default function FormSpace() {
    return (
            <div className='form-section'>
                <img className='woman-img' src={WomanImg} alt="" />
                <form className='form-spaces flex-column'>
                    <img className='get-in-touch' src={GetInTouch} alt="" />
                    <label className='label-input'>Your name</label>
                    <input className='form-input' type="text" name="" id="" placeholder='type your name here' />
                    <div className='form-section-midlle flex-center'>
                        <div className='flex-column'>
                            <label className='label-input'>Email*</label>
                            <input className='form-input-middle' type="text" name="" id="" placeholder='example@example.com' />
                        </div>
                        <div className='flex-column'>
                            <label className='label-input'>Telephone*</label>
                            <input className='form-input-middle' type="number" name="" id="" placeholder='(  ) ____-____' />
                        </div>
                    </div>
                    <label className='label-input'>Message*</label>
                    <input className='form-input-message' type="text" name="" id="" placeholder='Type what you want to say to us' />
                    <button className='send-btn'>SEND NOW</button>
                </form>
            </div>
    )
}