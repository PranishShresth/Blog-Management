import React, { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { fetchBlogSuccess, blogError } from "../actions/actions";
import { BlogContext } from "../context/BlogContext/BlogContext";
import axios from "../utils/axios";

function Blog() {
  const { blogState, blogDispatch } = useContext(BlogContext);
  const params = useParams();

  useEffect(() => {
    async function getBlogById() {
      try {
        const blog = await axios.get(`/api/blog/${params.blogId}`);
        blogDispatch(fetchBlogSuccess(blog.data));
      } catch (err) {
        blogDispatch(blogError(err));
      }
    }
    getBlogById();
  }, []);
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: 100 }}>
        {blogState.blog?.content}
      </Container>
      <Footer />
    </>
  );
}

export default Blog;