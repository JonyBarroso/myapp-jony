import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import Header from './components/header';
import Item from './components/ItemListContainer/Item';
import Titulo from './components/ItemListContainer/Titulo';
import Input from './components/ItemListContainer/Input';
import Prefooter from './components/Prefooter';

const lista = ["Mates", "Cazuelas"];
 let titulo = "Productos";
const productos = [
  {id:1, nombre:"Mate Geometrico ", precio:"1200"},
  {id:2, nombre:"Mate Perita", precio:"1100"},
  {id:3, nombre:"Mate Perita Fino", precio:"1100"},
  {id:4, nombre:"Cazuela", precio:"2000"}
];
 
 function App() {
  return (
    <div>
      <NavBar />
      <h3>{titulo}</h3>
      <ul>{productos.map(item => (
          <li key= {item.id} >{item.nombre} - ${item.precio}</li>))}
      </ul>
      
      
     
      <div className='container'>
      <Header curso="Mates" tipo="Artesanales" />
      <main className='py-3'>
        <Titulo valor="Mates Artesanales" />
        <ul>{lista.map(items => (
            <Item valor={items} />
          ))}
        </ul>
        <Titulo valor="Formulario de Contacto para consultas" />
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <Input valor="Nombre" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <Input valor="Email" />
          </div>
          <button type="button" className="btn btn-primary">Enviar</button>
        </form>
      </main>
      <Prefooter />
      <Footer ubicacion="La Rioja - Argentina" anio="2022" />
    </div>
    </div>
  );
}

export default App; 

