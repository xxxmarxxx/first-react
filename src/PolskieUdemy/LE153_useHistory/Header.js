import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Start page</Link>
                    </li>
                    <li>
                        <Link to="/react">React</Link>
                    </li>
                    <li>
                        <Link to="/redux">Redux</Link>
                    </li>
                    <li>
                        <Link to="/mobx">Mobx</Link>
                    </li>
                    <li>
                        <Link to="/typescript">TypeScript</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;