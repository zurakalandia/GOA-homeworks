import './proj3.css';

function Proj3() {
    return (
        <div className='wrapper bgBlue950'>
            <div className='project3-container bgBlue900 outfit'>
                <div className="project3-topImage">
                    <img className='project3-mainImage' src="/images/image-equilibrium.jpg" alt="Error" />
                    <div className="project3-overlay">
                        <img src="/images/icon-view.svg" alt="Error" className="project3-overlayImage" />
                    </div>
                </div>

                <div className="project3-desc">
                    <h4 className='textWhite'>Equilibrium #3429</h4>
                    <p className='textBlue500'>Our Equilibrium collection promotes balance and calm.</p>

                    <div className="project3-details">

                        <div className="project3-detail1">
                            <img src="/images/icon-ethereum.svg" alt="Error" />
                            <p className='textCyan400'>0.041 ETH</p>
                        </div>

                        <div className="project3-detail2">
                            <img src="/images/icon-clock.svg" alt="Error" />
                            <p className='textBlue500'>3 days left</p>
                        </div>

                    </div>
                </div>
                <div className="project3-credit">
                    <img src="/images/image-avatar.png" alt="" />
                    <p className='textBlue500'>Creation of <span className='textWhite'>Jules Wyven</span></p>
                </div>

            </div>

        </div>
    )
}

export default Proj3;