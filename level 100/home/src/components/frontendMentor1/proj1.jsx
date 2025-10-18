import './proj1.css';

function Proj1() {
    return(
        <div className='wrapper bgGrey900 inter'>
            <div className='proj1-container bgGrey800'>
                <img className='proj1-img' src="/images/avatar-jessica.jpeg" alt="Error" />
                <div className='proj1-info'>
                    <p className='proj1-name textWhite'>Jessica Randall</p>
                    <p className='textGreen'>London, United Kingdom</p>
                </div>
                <p className='proj1-desc'>
                    "Front-end developer and avid reader."
                </p>
                <div className='proj1-buttons'>
                    <button className='bgGrey700 textWhite'>GitHub</button>
                    <button className='bgGrey700 textWhite'>Frontend Mentor</button>
                    <button className='bgGrey700 textWhite'>LinkedIn</button>
                    <button className='bgGrey700 textWhite'>Twitter</button>
                    <button className='bgGrey700 textWhite'>Instagram</button>
                </div>
            </div>
        </div>
    )
}

export default Proj1;