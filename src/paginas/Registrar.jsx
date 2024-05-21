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

function Registrar() {
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="public/logo.png" class="img-fluid" alt="Logo" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Usuario' id='formControlLg' type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Correo electronico' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Repita la contraseña' id='formControlLg' type='password' size="lg"/>

          <Link to="/Login">
          <MDBBtn className="mb-4 w-100" size="lg">Registrarse</MDBBtn>
        </Link>
        <Link to="/Login">
          <MDBBtn className="mb-4 w-100" size="lg">Iniciar Sesión</MDBBtn>
        </Link>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Registrar;