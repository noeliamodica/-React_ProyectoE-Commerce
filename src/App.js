//import Product from './components.js/Product';
import './App.css';
import NavBar from './components.js/NavBar';
import Products from './components.js/Products';
import CheckOutPage from './components.js/CheckOutPage';

function App() {
  return (
    <div className="App">
      
       <NavBar />
        <CheckOutPage />
       <Products />
      {/*<Product /> */} 
    </div>
  );
}

export default App;
