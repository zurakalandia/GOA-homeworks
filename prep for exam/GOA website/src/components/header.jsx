import './header.css'

export default function Header() {
    return(
        <div className='header darkGrey'>
            <p className='logo'>G<span>O</span>A</p>
            <nav>
                
                
                <a href=""><p>Home</p></a>
                <a href=""><p>Courses</p></a>
                
                <a href=""><p>About</p></a>
                
                <a href=""><p>Contact</p></a>

            </nav>
            <button>Let's Talk</button>
        </div>
    )
}