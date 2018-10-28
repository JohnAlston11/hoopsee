import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({loggedin}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#2b669a'}}>
            <Link className="navbar-brand" to="/"><img className="logo" src={require("../../images/logo.png")} alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to='/courts' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Play Ball
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/courts">All of NYC</Link>
                            <Link className="dropdown-item" to="/courts/X">Bronx</Link>
                            <Link className="dropdown-item" to="/courts/B">Brooklyn</Link>
                            <Link className="dropdown-item" to="/courts/M">Manhattan</Link>
                            <Link className="dropdown-item" to="/courts/Q">Queens</Link>
                            <Link className="dropdown-item" to="/courts/R">Staten Island</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/events'>Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/permits'>Start A Tournament</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/about'>About</Link> 
                    </li>
                    {!loggedin?
                    <Link className='nav-link' to='/login'>Log In</Link>
                    :
                    <Link className='nav-link' to='/logout'>Log Out</Link>
                    }
                    {!loggedin?
                    <Link className='nav-link' to='/signup'>Sign Up</Link>
                    :
                    null
                    }
                </ul> 
            </div>
        </nav>
    )
}

export default Nav;