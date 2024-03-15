import './App.css'
import "./general.css"
import Input from './Input.jsx';
import './Products/products.js';
import products from './Products/products.js';
import ProCard from './components/ProCard.jsx';

function App() {

  return (
    <>
      <Input/>
      <ProCard products = {products}/>
    </>
  )
}

export default App