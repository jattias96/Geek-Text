import Auth from './Components/Auth/Auth'
import {Home} from './Components/Home/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Navigation} from './Components/Home/Navigation/Navigation'
import Ratings from './Components/Ratings'

function App() {
  return (
    <Router >
      <Navigation/>
      <Switch>
          <Route path = '/auth' exact = {true}>
              <Auth/>
          </Route>
          <Route path = '/' exact = {true}>
              <Home />
          </Route>
          <Route path = '/ratings' exact = {true}>
              <Ratings />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
