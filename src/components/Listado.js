import React, { Component } from 'react';
import User from './User';

class Listado extends Component {

    mostrarUsers = () => {
        const users = this.props.users;

        if(users.length === 0) return null;

        return (
            <React.Fragment>
                {Object.keys(users).map(user => (
                    <User
                        key={user}
                        info={this.props.users[user]}
                        borrarUser={this.props.borrarUser}
                    />
                ))}
            </React.Fragment>
        );
    }

  render() {
    return (
        <div className="cont-cards">
            { this.mostrarUsers() }
        </div>
    )
  }
};

export default Listado;
