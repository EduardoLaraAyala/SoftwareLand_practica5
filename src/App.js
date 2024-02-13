import logo from './logo.svg';
import './App.css';
import "./components/tabla.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistroForm from './components/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <RegistroForm></RegistroForm>    
      </header>
      
    </div>
  );
}

export default App;
