import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import { fetchBlogsSuccess, blogError } from "../../actions/actions";
import { BlogContext } from "../../context/BlogContext/BlogContext";
import { Grid, Container } from "@material-ui/core";
import axios from "../../utils/axios";

function Landing() {
  const { blogState, blogDispatch } = useContext(BlogContext);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogs = await axios.get("/api/blogs");
        blogDispatch(fetchBlogsSuccess(blogs.data));
      } catch (err) {
        blogDispatch(blogError(err));
      }
    }
    fetchBlogs();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <Container style={{ marginTop: 100 }} maxWidth="lg">
        <h1>Trending Blogs</h1>

        <Grid container spacing={3}>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
        </Grid>

        <h1>Latest Blogs</h1>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Landing;
