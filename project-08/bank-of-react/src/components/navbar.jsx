import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ZipCodeFetch from "./zipcode";
import CityFetch from "./city";

function Index() {
    return (
        <div className="CardContainer">
        <h2>Pages</h2>
        <div className='wrapper wrapper-home'>
          <div className='inner-card-div'>
          <ul className='inline'>
            <li>
              <button>
                <Link to="/City/">City</Link>
              </button>
            </li>
            <li>
              <button>
              <Link to="/ZipCode/">ZipCode</Link>
              </button>
            </li>
          </ul>
          </div>
        </div>
    </div>
    );
}


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/City/">City</Link>
            </li>
            <li>
              <Link to="/ZipCode/">ZipCode</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/City/" component={CityFetch} />
        <Route path="/ZipCode/" component={ZipCodeFetch} />
      </div>
    </Router>
  );
}

export default AppRouter;

