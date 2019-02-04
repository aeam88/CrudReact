import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    muestraSearch = () => {
        const { showSearch } = this.props;
        
        this.props.muestraDos(!showSearch);

    };
    
    render() {
        return (
            <header className="menu-nav">
                <div className="container">
                    <nav className="main-nav">
                        <Link to="/">
                            <img src="../../images/logoDropDev.png" width="88" height="89" alt="" />
                        </Link>
                        <ul className="nav-links">
                            <li><Link to="/crear"><i className="fas fa-plus-circle fa-2x"></i></Link></li>
                            <li><a href="#!" onClick={this.muestraSearch}><i className="fas fa-search fa-2x"></i></a></li>
                        </ul>
                    </nav>
                </div>  
            </header>
          );
    }
  
}

export default Header;
