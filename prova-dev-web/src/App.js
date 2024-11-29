import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header>MyFinance</Header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/transaction' element={<Transaction />} />
      </Routes>
      <Footer>Desenvolvido por: Bruno Lazzari Meredyk</Footer>
    </Router>  
  );
}

export default App;