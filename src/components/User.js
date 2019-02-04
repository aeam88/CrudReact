import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
    state = {
        toggleInfo: false
    }

    toggleUno = () => {
        const {toggleInfo} = this.state;

        this.setState({
            toggleInfo: !toggleInfo
        });
    }

  render() {
      const { id, name, email, username, address, phone, company } = this.props.info;
      const { toggleInfo } = this.state;
    return (
        <div className="card-user">
            <div className="card-user_header">
                <img src="../../images/user.png" className="user-img" alt="User" />
                <div className="cont-info_user">
                    <h5 className="firstName-user">{name}</h5>
                    <h4>{email}</h4>
                    <div className="btns-info">
                        <p className="btn-user">{username}</p>
                        <p className="btn-city">{address.city}</p>
                    </div>
                </div>
                <div className="btn-expand-info" onClick={this.toggleUno}>
                    <i className="fas fa-sort-down fa-lg"></i>
                </div>
            </div>
            { toggleInfo ? (
                <div className="card-user-body">
                    <div className="left-datos">
                        <h6>Datos compañía</h6>
                        <p>{company.name}</p>
                        <p>{phone}</p>
                    </div>
                    <div className="right-datos">
                        <Link to={`/user/${id}`} className="btn-editar">Editar</Link>
                        <button onClick={() => this.props.borrarUser(id)} type="button" className="btn-eliminar">Eliminar</button>
                    </div>
                </div>
            ) : null }
            
        </div>
    )
  }
};

export default User;
