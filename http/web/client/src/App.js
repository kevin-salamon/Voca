import React, { Fragment} from 'react';
import "./style.css";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {

    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Homepage} />
        </Fragment>
      </Router>
    );

}

export default App;
