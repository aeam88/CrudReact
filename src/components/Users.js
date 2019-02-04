import React, { Component } from 'react';
import Listado from './Listado';

class Users extends Component {
  render() {
    return (
        <section className="content">
            <div className="container">
                <h1 className="tit-main">Usuarios</h1>
                <Listado
                    users={this.props.users}
                    borrarUser={this.props.borrarUser}
                />
            </div>
        </section>    
    )
  }
};

export default Users;
