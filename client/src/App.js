import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BlogProvider } from "./context/BlogContext/BlogContext";
import { UserProvider } from "./context/UserContext/UserContext";

const Landing = lazy(() => import("./pages/Landing"));
const Blog = lazy(() => import("./pages/Blog"));
function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UserProvider>
          <BlogProvider>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/blog/:blogId" component={Blog} />
            </Switch>
          </BlogProvider>
        </UserProvider>
      </Suspense>
    </Router>
  );
}

export default App;
