import { createContext } from "react";

const BlogContext = createContext(null);

function BlogProvider(props) {
  return <BlogContext.Provider>{props.children}</BlogContext.Provider>;
}

export { BlogContext, BlogProvider };
