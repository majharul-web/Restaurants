import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css";
import Foods from "./components/Foods/Foods";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MealDetails from "./components/MealDetails/MealDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/foods'>
            <Foods></Foods>
          </Route>
          <Route exact path='/food/:mealId'>
            <MealDetails></MealDetails>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
