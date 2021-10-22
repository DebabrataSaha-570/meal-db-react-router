
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurant from './Components/Restaurant/Restaurant';
import Meal from './Components/Meal/Meal';
import NotFound from './Components/NotFound/NotFound'
import Header from './Components/Header/Header';
import MealDetai from './Components/MealDetail/MealDetai';

function App() {
  return (
    <Router >

      <Switch>
        <Route path="/restaurant">
          <Restaurant></Restaurant>
        </Route>

        <Route path="/meal">
          <Meal></Meal>

        </Route>
        <Route path="/mealDetail/:id">
          <MealDetai></MealDetai>

        </Route>
        <Route exact path="/">
          <Restaurant></Restaurant>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
