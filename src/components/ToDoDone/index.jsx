import Rectangle14 from '../../assets/main/rectangle14.svg'
import Rectangle from '../../assets/main/rectangle15.svg'
import './style.css'

export default function ToDoDone() {
    return (
        <div className='to-do-done-container flex-center'>
            <div className='to-do'>
                <img className='rectangle14' src={Rectangle14} alt="rectangle14-div" />
                <div className='to-do-content flex-column'>
                    <h1>To-do</h1>
                    <h4>Take a breath.<br />Start doing.</h4>
                    <form className='to-do-form'>
                        <label className='container'>
                            <input className='input' type="checkbox" checked />
                            this is a new task
                            <span className='checkmark'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" />
                            Develop the To-do list page
                            <span className='checkmark orange'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" />
                            Create the<br /> drag-and-drop<br /> function
                            <span className='checkmark orange'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" />
                            Add new tasks
                            <span className='checkmark orange'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" />
                            Delete itens
                            <span className='checkmark orange'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" />
                            Erase all
                            <span className='checkmark orange'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" />
                            Checked item<br /> goes to Done list
                            <span className='checkmark orange'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" />
                            This item label<br /> may be edited
                            <span className='checkmark orange'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" />
                            Editing an item
                            <span className='checkmark orange'></span>
                        </label>
                        <button className='erase-btn'>erase all</button>
                    </form>
                </div>
            </div>
            <div className='done'>
                <img className='rectangle15' src={Rectangle} alt="rectangle14-div" />
                <div className='done-content flex-column'>
                    <h1>Done</h1>
                    <h4>Congratulions!<br /><span className='bold-style'>You have done 5 tasks</span></h4>
                    <form className='done-form'>
                        <label className='container'>
                            <input className='input' type="checkbox" checked />
                            Get FTP credentials
                            <span className='checkmark'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" checked />
                            Home Page Design
                            <span className='checkmark'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" checked />
                            E-mail John about<br /> the deadline
                            <span className='checkmark'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" checked />
                            Create a Google<br /> Drive folder
                            <span className='checkmark'></span>
                        </label>
                        <label className='container'>
                            <input className='input' type="checkbox" checked />
                            Send a gift to the<br /> client
                            <span className='checkmark'></span>
                        </label>
                        <button className='erase-btn'>erase all</button>
                    </form>
                </div>
            </div>

        </div>
    )
}