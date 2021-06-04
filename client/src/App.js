import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BlogProvider } from "./context/BlogContext/BlogContext";
import { UserProvider } from "./context/UserContext/UserContext";
import AdminRoute from "./utils/routes/AdminRoute";

const Landing = lazy(() => import("./pages/Landing"));
const Blog = lazy(() => import("./pages/Blog"));
const Verify = lazy(() => import("./pages/Verify"));
const Post = lazy(() => import("./components/admin/PostBlog"));
const AdminLogin = lazy(() => import("./components/admin/Login"));
function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UserProvider>
          <BlogProvider>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/blog/:blogId" component={Blog} />
              <Route exact path="/verify/:token" component={Verify} />
              <AdminRoute
                exact
                path="/admin/addPost"
                component={Post}
              ></AdminRoute>
              <Route exact path="/admin/login" component={AdminLogin}></Route>

              <Route render={() => <h1>Not found</h1>} />
            </Switch>
          </BlogProvider>
        </UserProvider>
      </Suspense>
    </Router>
  );
}

export default App;
