import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Landing = lazy(() => import("./pages/Landing/Landing"));
function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
