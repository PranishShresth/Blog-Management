import { createContext, useReducer } from "react";
import { initialState, BlogReducer } from "../../reducer/BlogReducer";

const BlogContext = createContext(null);

function BlogProvider(props) {
  const [state, dispatch] = useReducer(BlogReducer, initialState);
  return (
    <BlogContext.Provider value={{ blogState: state, blogDispatch: dispatch }}>
      {props.children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogProvider };
