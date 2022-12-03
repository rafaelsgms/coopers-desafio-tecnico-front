import ElderlyMan from '../../assets/main/elderly-guy.svg'
import FirstImg from '../../assets/main/first-img-guys.svg'
import GalleryBullets from '../../assets/main/gallery-bullets.svg'
import IconeCoopers from '../../assets/main/icone-coopers.svg'
import Sewing from '../../assets/main/sewing.svg'
import './style.css'

export default function Cards() {
    return (
        <div className='container-cards'>
            <div className='green-box'>
                <h1 className='good-things'>good things</h1>
            </div>
            <div className='space flex-center'>
                <div className='first-card flex-column'>
                    <img className='first-img' src={FirstImg} alt="img-guys-on-the-computer" />
                    <img className='icone-coopers' src={IconeCoopers} alt="company-icon" />
                    <div className='space-inside-cards flex-column'>
                        <button className='function-btn'>function</button>
                        <span className='cards-text'>Organize your daily job enhance your life performance</span>
                    </div>
                    <span className='read-more'>read more</span>
                </div>
                <div className='second-card flex-column'>
                    <img className='first-img' src={ElderlyMan} alt="img-guys-on-the-computer" />
                    <img className='icone-coopers' src={IconeCoopers} alt="company-icon" />
                    <div className='space-inside-cards flex-column'>
                        <button className='function-btn'>function</button>
                        <span className='cards-text'>Mark one activity as done makes your brain understands the power of doing.</span>
                    </div>
                    <span className='read-more'>read more</span>
                </div>
                <div className='third-card flex-column'>
                    <img className='first-img' src={Sewing} alt="img-guys-on-the-computer" />
                    <img className='icone-coopers' src={IconeCoopers} alt="company-icon" />
                    <div className='space-inside-cards flex-column'>
                        <button className='function-btn'>function</button>
                        <span className='cards-text'>Careful with missunderstanding the difference between a list of things and a list of desires.</span>
                    </div>
                    <span className='read-more'>read more</span>
                </div>
            </div>
            <img className='gallery-bullets' src={GalleryBullets} alt="gallery-bullets" />
        </div>
    )
}