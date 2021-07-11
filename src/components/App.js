import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../css/App.css";
import React  from 'react';
import Header from "./Header";
import SimpleBottomNavigation from "./MainNav";
import Movies from "../Pages/Movies";
import Series from "../Pages/Series";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import { Container } from "@material-ui/core";
import Home from "../Pages/Home";
import Footer from "./Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
          <Route path="/" component={Home} exact />
            <Route path="/movies" component={Movies}/>  
            <Route path="/series" component={Series} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/login" component={Login} />
          </Switch>
        </Container>
        <hr/>
      </div>
      <SimpleBottomNavigation />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
