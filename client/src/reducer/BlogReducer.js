import {
  BLOGS_LOADED,
  BLOG_ERROR,
  BLOG_LOADED,
  POST_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  BLOG_UNLOADED,
  GET_ALL_BLOGS,
} from "./constants";
const initialState = {
  blogs: [],
  blog: {},
  loading: true,
  error: null,
};
function BlogReducer(state, action) {
  switch (action.type) {
    case GET_ALL_BLOGS:
    case BLOGS_LOADED:
      return { ...state, blogs: action.payload, loading: false };
    case POST_BLOG:
      return { ...state, blog: action.payload };
    case BLOG_LOADED:
      return { ...state, blog: action.payload, loading: false };
    case BLOG_UNLOADED:
      return { ...state, blog: null, loading: true };
    case BLOG_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export { initialState, BlogReducer };
