import {
  BLOGS_LOADED,
  BLOG_LOADED,
  BLOG_ERROR,
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  USER_ERROR,
} from "../reducer/constants";

export const fetchBlogsSuccess = (blogs) => ({
  type: BLOGS_LOADED,
  payload: blogs,
});

export const fetchBlogSuccess = (blog) => ({
  type: BLOG_LOADED,
  payload: blog,
});

export const blogError = (error) => ({
  type: BLOG_ERROR,
  payload: error,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER,
  payload: user,
});
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER,
  payload: user,
});
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER,
  payload: user,
});
export const userError = (error) => ({
  type: USER_ERROR,
  payload: error,
});

export const logOutSuccess = () => ({
  type: LOGOUT_USER,
});
