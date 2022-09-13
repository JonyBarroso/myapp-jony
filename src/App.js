import './App.css';
import Navbar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



 function App() {
  return (
    <div className='container'>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
      
      <ItemCount  stock={5} initial={1} onAdd={0} />
      <hr />
      

    </div>      
  );
}

export default App; 

