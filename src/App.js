import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './pages/main';
import About from './pages/about';
import Software from './pages/software';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={() => <Main />} />
          <Route path='/about' exact component={() => <About />} />
          <Route exact path='/software' component={() => <Software />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;