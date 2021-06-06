import React, { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { fetchBlogsSuccess, blogError } from "../actions/actions";
import { BlogContext } from "../context/BlogContext/BlogContext";
import { Grid, Container } from "@material-ui/core";
import axios from "../utils/axios";
import { Pagination } from "@material-ui/lab";

function Landing() {
  const { blogState, blogDispatch } = useContext(BlogContext);
  async function fetchBlogs(page, per_page) {
    try {
      const blogs = await axios.get(
        `/api/blogs?page=${page}&per_page=${per_page}&sort=DESC`
      );
      blogDispatch(fetchBlogsSuccess(blogs.data));
    } catch (err) {
      blogDispatch(blogError(err));
    }
  }
  useEffect(() => {
    fetchBlogs(1, 3);
    // eslint-disable-next-line
  }, []);

  const handlePagination = (ev, page) => {
    fetchBlogs(page, 3);
  };

  return (
    <>
      <Header />
      <Container style={{ marginTop: 100 }} maxWidth="lg">
        <h1>Trending Blogs</h1>

        <Grid container spacing={3}>
          {blogState.blogs?.blogs?.map((blog) => {
            return (
              <Grid item md={4} xs={12} sm={6} key={blog._id}>
                <BlogCard
                  blogTitle={blog.title}
                  blogCategory={blog.category}
                  blogId={blog._id}
                />
              </Grid>
            );
          })}
        </Grid>

        <h1>Latest Blogs</h1>
        <Grid container spacing={3}>
          {blogState.blogs?.blogs?.map((blog) => {
            return (
              <Grid item md={4} xs={12} sm={6} key={blog._id}>
                <BlogCard
                  blogTitle={blog.title}
                  blogCategory={blog.category}
                  blogId={blog._id}
                />
              </Grid>
            );
          })}
        </Grid>
        <div style={{ padding: "30px 0" }}>
          <Pagination
            count={Math.ceil(blogState.blogs?.totalBlogs / 3)}
            color="primary"
            onChange={handlePagination}
          ></Pagination>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Landing;
