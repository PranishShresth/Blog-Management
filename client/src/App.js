import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BlogProvider } from "./context/BlogContext/BlogContext";
const Landing = lazy(() => import("./pages/Landing/Landing"));
function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <BlogProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </BlogProvider>
      </Suspense>
    </Router>
  );
}

export default App;
