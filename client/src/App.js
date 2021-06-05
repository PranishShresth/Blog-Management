import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BlogProvider } from "./context/BlogContext/BlogContext";
import { UserProvider } from "./context/UserContext/UserContext";
import AdminRoute from "./utils/routes/AdminRoute";
import { CircularProgress } from "@material-ui/core";

const Landing = lazy(() => import("./pages/Landing"));
const Blog = lazy(() => import("./pages/Blog"));
const Verify = lazy(() => import("./pages/Verify"));
const Post = lazy(() => import("./components/admin/PostBlog"));
const AdminLogin = lazy(() => import("./components/admin/Login"));
const AdminPost = lazy(() => import("./pages/admin/Post"));
function App() {
  return (
    <Router>
      <UserProvider>
        <BlogProvider>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/blog/:blogId" component={Blog} />
              <Route exact path="/verify/:token" component={Verify} />
              {/* admin routes below */}
              <Route exact path="/admin/login" component={AdminLogin}></Route>
              <AdminRoute
                exact
                path="/admin/addPost"
                component={Post}
              ></AdminRoute>
              <AdminRoute
                exact
                path="/admin/post"
                component={AdminPost}
              ></AdminRoute>
              <Route render={() => <h1>Not found</h1>} />
            </Switch>
          </Suspense>
        </BlogProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
