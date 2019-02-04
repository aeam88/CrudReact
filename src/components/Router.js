import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Search from './Search';
import Users from './Users';
import Formulario from './Formulario';

class Router extends Component {
    state = {
        users: [],
        showSearch: false,
        showMenssage: false
    }

    componentDidMount() {
        this.obtenerUser();
    }

    obtenerUser = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.setState({
                    users: res.data,
                    showMenssage: false
                })
            })
    }

    borrarUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                if(res.status === 200) {
                    const users = [...this.state.users];
                    let resultado = users.filter(user => (
                        user.id !== id
                    ));
                    
                    this.setState({
                        users: resultado
                    });
                }
            })
    };

    crearUser = (user) => {
        axios.post(`https://jsonplaceholder.typicode.com/users/`, {user})
            .then(res => {
                if(res.status === 201) {
                    let userId = {id: res.data.id};
                    const nuevoUser = Object.assign({}, res.data.user, userId);

                    this.setState(prevState => ({
                        users: [...prevState.users, nuevoUser],
                        showMenssage: true
                    }))
                }
            })
    }

    muestraDos = (mostrar) => {

        this.setState({
            showSearch: mostrar
        })
    };
    
  render() {
    return (
      <BrowserRouter>
        <div>
            <Header 
                showSearch={this.state.showSearch}
                muestraDos={this.muestraDos}
            />
            {this.state.showSearch ? <Search /> : null}
            <Switch>
                <Route exact path="/" render={() => {
                    return(
                        <Users
                            users={this.state.users}
                            borrarUser={this.borrarUser}
                        />
                    )
                }} />
                <Route exact path="/crear" render={() => {
                    return(
                        <Formulario
                            crearUser={this.crearUser}
                            showMenssage={this.state.showMenssage}
                        />
                    )
                }} />    
            </Switch>
        </div> 
      </BrowserRouter>
    )
  }
};

export default Router;
