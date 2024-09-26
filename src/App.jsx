import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Liderazgo from './components/Liderazgo';

const App = () => {
  return (
    <Router>
      <div className="home">
        <h1>Bienvenido a la página principal</h1>
      </div>
      <Header />
      <Switch>
        <Route path="/liderazgo">
          <Liderazgo />
        </Route>
        <Route path="/">
          {/* El componente de bienvenida ya está arriba, no es necesario duplicarlo aquí */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;