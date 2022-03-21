import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
      <Link className='navbar-brand text-white' to='/movie'>
        Movie App
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-item nav-link text-white active' to='/movie'>
            Movie
          </Link>
          <Link className='nav-item nav-link text-white' to='/tic'>
            Tic-Tac-Toe
          </Link>
        </div>
      </div>
    </nav>
  );
}
