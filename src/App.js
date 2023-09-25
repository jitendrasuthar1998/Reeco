import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import OrderDetails from './components/OrderDetails';
import OrderHeading from './components/OrderHeading';

function App() {
  return (
    <div>
      <Header/>
      <OrderHeading/>
      <OrderDetails/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
