import './App.css';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/footer';
import ItemCount from './components/ItemCount';



 function App() {
  return (
    <div>
      <Navbar />
      <Header />
      
      <ItemCount  stock={5} initial={1} onAdd={0} />
      <hr />
      <Footer />
    </div>      
  );
}

export default App; 

