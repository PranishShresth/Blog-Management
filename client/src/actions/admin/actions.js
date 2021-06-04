import { POST_BLOG, GET_ALL_BLOGS } from "../../reducer/constants";

export const postBlogSuccess = (blog) => ({
  type: POST_BLOG,
  payload: blog,
});

export const getAllBlogs = (blogs) => ({
  type: GET_ALL_BLOGS,
  payload: blogs,
});
