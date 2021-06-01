import { BLOGS_LOADED, BLOG_LOADED, BLOG_ERROR } from "../reducer/constants";

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
