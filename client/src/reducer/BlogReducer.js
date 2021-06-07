import {
  BLOGS_LOADED,
  BLOG_ERROR,
  BLOG_LOADED,
  POST_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  GET_REVIEWS,
  BLOG_UPDATE,
  BLOG_UNLOADED,
  GET_ALL_BLOGS,
} from "./constants";
const initialState = {
  blogs: [],
  blog: {},
  reviews: null,
  loading: true,
  error: null,
};
function BlogReducer(state, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, reviews: action.payload };
    case GET_ALL_BLOGS:
    case BLOGS_LOADED:
      return { ...state, blogs: action.payload, loading: false };
    case POST_BLOG:
      return { ...state, blog: action.payload };
    case BLOG_LOADED:
      return { ...state, blog: action.payload, loading: false };
    case BLOG_UNLOADED:
      return { ...state, blog: null, loading: true };
    case BLOG_UPDATE:
      console.log(action.payload._id);
      const idx = state.blogs.findIndex(
        (blog) => blog._id === action.payload._id
      );
      const updatedState = [...state.blogs];
      updatedState[idx] = action.payload;
      return { ...state, blog: null, loading: false, blogs: updatedState };
    case BLOG_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export { initialState, BlogReducer };
