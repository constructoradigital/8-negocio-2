import './App.css';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </Router>
  ); 
}

export default App;
