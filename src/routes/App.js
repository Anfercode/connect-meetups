import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Register from "../routes/Register";
import Events from "../routes/Events";
import EventsDetails from "../routes/EventsDetails";
import NotFound from "../components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:id" component={EventsDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
