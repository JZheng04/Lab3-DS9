import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';  
import { Link } from 'react-router-dom';

function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="public/logo.png" class="img-fluid" alt="Logo" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Correo electronico' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <Link to="/Recuperar">
            <a href="!#">Olvido la contraseña?</a>
            </Link>
          </div>
        <Link to="/">
          <MDBBtn className="mb-4 w-100" size="lg">Iniciar Sesión</MDBBtn>
        </Link>
        <Link to="/Registrar">
          <MDBBtn className="mb-4 w-100" size="lg">Registrarse</MDBBtn>
        </Link>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;