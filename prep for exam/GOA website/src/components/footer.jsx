import './footer.css'

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footer-left'>
                <p className='footer-heading'>GOA Academy © 2025</p>
                <p className='footer-desc'>Learn, Build, Grow</p>
                <div className="footer-contacts">
                    <a href="#" className='transform'><img src="../facebook.png" alt="" /></a>
                    <a href="#" className='transform'><img src="../youtube.png" alt="" /></a>
                    <a href="#" className='transform'><img src="../instagram.png" alt="" /></a>
                </div>
            </div>

            <img className='footer-logo' src="../goa.jpg" alt="" />
        </div>
    )
}