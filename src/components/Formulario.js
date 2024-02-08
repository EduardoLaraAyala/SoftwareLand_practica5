import React, { useState } from "react";
import "../formulario.css";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CustomInput,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const RegistroForm = () => {
  // Estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState(0);
  const [genero, setGenero] = useState("");
  const [rol, setRol] = useState("Estudiante");
  const [notas, setNotas] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [modal, setModal] = useState(false);
  const [emailError, setEmailError] = useState("");


  const handleReset = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setPassword("");
    setEdad("");
    setGenero("");
    setRol("Estudiante");
    setNotas("");
    setFechaRegistro("");
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    // ceros
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
  
    return `${year}-${month}-${day}`;
  };
  

 
  const handleNombreChange = (event) => {
    const inputValue = event.target.value;
    if (/^[a-zA-Z]+$/.test(inputValue) || inputValue === "") {
      setNombre(inputValue);
    }
  };

  const handleApellidoChange = (event) => {
    const inputValue = event.target.value;
    if (/^[a-zA-Z]+$/.test(inputValue) || inputValue === "") {
      setApellido(inputValue);
    }
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    if (!/\S+@\S+\.\S+/.test(inputValue) && inputValue !== "") {
      setEmailError("El formato del correo electrónico es inválido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEdadChange = (event) => {
    const inputValue = event.target.value;
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
      setEdad(inputValue);
    }
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  const handleNotasChange = (event) => {
    setNotas(event.target.value);
  };

  const handleFechaRegistroChange = (event) => {
    const inputValue = event.target.value;
    const currentDate = new Date();
    const selectedDate = new Date(inputValue);
    if (selectedDate >= currentDate) {
      setFechaRegistro(inputValue);
    }
  };
  

  const handleAceptaTerminosChange = (event) => {
    setAceptaTerminos(event.target.checked);
  };

  const toggleModal = () => setModal(!modal);


  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <Container style={{ maxWidth: "900px" }}>
      <h2>Formulario de Registro</h2>
      <Form>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                style={{ maxWidth: "300px", margin: "auto" }}
                value={nombre}
                onChange={handleNombreChange}
                pattern="[A-Za-z]+"
                title="Solo se aceptan letras"
                valid={nombre.length > 0}
                invalid={!/^[A-Za-z]+$/.test(nombre)}
                required
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="apellido">Apellido</Label>
              <Input
                type="text"
                name="apellido"
                id="apellido"
                placeholder="Apellido"
                style={{ maxWidth: "300px", margin: "auto" }}
                value={apellido}
                onChange={handleApellidoChange}
                pattern="[A-Za-z]+"
                title="Solo se aceptan letras"
                required
                valid={apellido.length > 0}
                invalid={!/^[A-Za-z]+$/.test(apellido)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Correo Electrónico"
                style={{ maxWidth: "400px", margin: "auto" }}
                value={email}
                onChange={handleEmailChange}
                title="Formato de correo electrónico inválido"
                required
                valid={/\S+@\S+\.\S+/.test(email)}
                invalid={!/\S+@\S+\.\S+/.test(email)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                style={{ maxWidth: "300px", margin: "auto" }}
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="edad">Edad</Label>
              <Input
                type="number"
                name="edad"
                id="edad"
                placeholder="Edad"
                style={{ maxWidth: "300px", margin: "auto" }}
                value={edad}
                onChange={handleEdadChange}
                min="0"
                max="100"
                title="Edad debe ser un número entre 1 y 100"
                required
                valid={edad > 0 && edad <= 100}
                invalid={isNaN(edad) || edad <= 0 || edad > 100}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label for="Genero">Género</Label>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="genero"
                    vale="masculino"
                    checked={genero === "masculino"}
                    onChange={handleGeneroChange}
                  />{" "}
                  Masculino
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="genero"
                    vale="femenino"
                    checked={genero === "femenino"}
                    onChange={handleGeneroChange}
                  />{" "}
                  Femenino
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label for="rol">Rol</Label>
              <Input
                type="select"
                name="rol"
                id="rol"
                style={{ maxWidth: "300px", margin: "auto" }}
                value={rol}
                onChange={handleRolChange}
              >
                <option>Estudiante</option>
                <option>Profesor</option>
                <option>Administrador</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="notas">Notas</Label>
              <Input
                type="textarea"
                name="notas"
                id="notas"
                style={{ maxWidth: "500px", margin: "auto" }}
                value={notas}
                onChange={handleNotasChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label for="fechaRegistro">Fecha Registro</Label>
              <Input
                type="date"
                name="fechaRegistro"
                id="fechaRegistro"
                style={{ maxWidth: "300px", margin: "auto" }}
                value={fechaRegistro}
                onChange={handleFechaRegistroChange}
                min={getCurrentDate()}
                required
                title="Fecha de registro inválida"
                valid={
                  new Date(fechaRegistro) >= new Date().setHours(0, 0, 0, 0)
                }
                invalid={
                  new Date(fechaRegistro) < new Date().setHours(0, 0, 0, 0)
                }
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup check>
              <Label check className="small">
                <Input
                  type="checkbox"
                  name="aceptaTerminos"
                  checked={aceptaTerminos}
                  onChange={handleAceptaTerminosChange}
                />{" "}
                Acepto los términos y condiciones
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <br></br>
        <Button color="primary" onClick={toggleModal}>
          Mostrar
        </Button>
        <br></br>
        <br></br>
        <Button color="secondary" onClick={handleReset}>
          Reiniciar
        </Button>
      </Form>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Información Registrada</ModalHeader>
        <ModalBody>
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Email: {email}</p>
          <p>Contraseña: {password}</p>
          <p>Edad: {edad}</p>
          <p>Genero: {genero}</p>
          <p>Rol: {rol}</p>
          <p>Notas: {notas}</p>
          <p>Fecha: {fechaRegistro}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default RegistroForm;
