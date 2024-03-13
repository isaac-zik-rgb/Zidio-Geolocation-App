
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import Register from './Components/Register';
import Profile from './Components/Profile';
import Home from './Components/Home';

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/register" component={<Register/>} />
        <Route path="/profile" component={Profile} />
        </Switch>
    </Router>
  );
}

export default App;
