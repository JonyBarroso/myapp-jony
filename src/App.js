import './App.css';
import Navbar from './components/NavBar';
import Header from './components/Header';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';



 function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <ItemListContainer />
      <ItemCount  stock={5} initial={1} onAdd={0} />
      <hr />

    </div>      
  );
}

export default App; 

