import React, { Component } from 'react';
import Mensaje from './Mensaje';
import { Link } from 'react-router-dom';

class Formulario extends Component {

    nombreRef = React.createRef();    
    emailRef = React.createRef();    
    nombreUsuarioRef = React.createRef();    
    ciudadRef = React.createRef();    
    nombreEmpresaRef = React.createRef();    
    telefonoRef = React.createRef();    

    crearUser = (e) => {
        e.preventDefault();

        const user = {
            name: this.nombreRef.current.value,
            username: this.nombreUsuarioRef.current.value,
            email: this.emailRef.current.value,
            address: {
                street: '',
                suite: '',
                city: this.ciudadRef.current.value,
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            phone: this.telefonoRef.current.value,
            website: '',
            company: {
                name: this.nombreEmpresaRef.current.value,
                catchPhrase: '',
                bs: ''
            },
        }

        this.props.crearUser(user);

        e.currentTarget.reset();
        
    }
  render() {
      const { showMenssage } = this.props;
      let mensaje;
      if(showMenssage) {
            mensaje = <Mensaje />;
      } else {
            mensaje = '';
      }
    return (
        <div className="container">
            <div className="container-formulario">
                <div className="bg-formulario">
                    <h1>Agregar Usuario</h1>
                    {mensaje}
                </div>
                <form onSubmit={this.crearUser} className="form-crearuser">
                    <div className="bg-formulario2 mlado-left">    
                        
                        <h2 className="sec-nombre-form">Datos Usuario</h2>  
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" ref={this.nombreRef} className="form-control" id="nombre" placeholder="Ingrese Nombre..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" ref={this.emailRef} className="form-control" id="exampleInputEmail1" placeholder="Ingrese email..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombreusuario">Nombre de usuario</label>
                            <input type="text" ref={this.nombreUsuarioRef} className="form-control" id="nombreusuario" placeholder="Ingrese Nombre Usuario..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ciudad">Ciudad</label>
                            <input type="text" ref={this.ciudadRef} className="form-control" id="ciudad" placeholder="Ingrese Ciudad..." />
                        </div>
                        
                    </div>
                    <div className="bg-formulario2 mlado-right">
                        
                        <h2 className="sec-nombre-form">Datos Empresa</h2>
                        <div className="form-group">
                            <label htmlFor="nombreempresa">Nombre Empresa</label>
                            <input type="text" ref={this.nombreEmpresaRef} className="form-control" id="nombreempresa" placeholder="Ingrese Nombre Empresa..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" ref={this.telefonoRef} className="form-control" id="telefono" placeholder="Ingrese Teléfono..." />
                        </div> 
                        <button type="submit" className="btn-crearuser">Crear Usuario</button>
                        
                    </div>
                </form>
                <Link to="/" className="btn-volver-home"><i className="fas fa-arrow-alt-circle-left"></i> Volver a Listado de usuarios</Link>
            </div>
        </div>
    )
  }
};

export default Formulario;
