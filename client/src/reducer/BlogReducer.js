import {
  BLOGS_LOADED,
  BLOG_ERROR,
  BLOG_LOADED,
  POST_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  GET_ALL_BLOGS,
} from "./constants";
const initialState = {
  blogs: [],
  blog: {},
  loading: false,
  error: null,
};
function BlogReducer(state, action) {
  switch (action.type) {
    case GET_ALL_BLOGS:
    case BLOGS_LOADED:
      return { ...state, blogs: action.payload };
    case POST_BLOG:
      return { ...state, blog: action.payload };
    case BLOG_LOADED:
      return { ...state, blog: action.payload };
    case BLOG_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export { initialState, BlogReducer };
