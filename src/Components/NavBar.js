import HeaderLogo from '../Images/header-logo.png'
import '../Styles/NavBar.css'
const NavBar = () => {
    return (
        <div className='main-nav-bar'>
        <ul>
          <li><img src={HeaderLogo} alt="" /></li>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    )
}
export default NavBar