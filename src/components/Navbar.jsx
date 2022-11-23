import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
  return ( 
    <header>
      <div className='title-container'>
        <Link to='/' className='home'>🏠 Home</Link>
        <Link to='/contacto' className='contact'>📒 Contacto</Link>
      </div>
      <h2>Happy Cake 🍰</h2>
    </header>
   );
}
 
export default Navbar;