import React, { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, TextField, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { fetchBlogSuccess, blogError } from "../actions/actions";
import { BlogContext } from "../context/BlogContext/BlogContext";
import { UserContext } from "../context/UserContext/UserContext";

import axios from "../utils/axios";

function Blog() {
  const { userState, userDispatch } = useContext(UserContext);
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

    return () => {
      blogDispatch({ type: "BLOG_UNLOADED" });
    };
  }, [blogDispatch, params.blogId]);

  const handleReviewSubmit = async (ev) => {
    try {
    } catch (err) {}
  };
  return (
    <div className="blog">
      <Header />
      <Container maxWidth="lg" style={{ marginTop: 100 }}>
        {blogState.loading && <div>Loading...</div>}
        <div className="blogContainer">
          <div
            dangerouslySetInnerHTML={{ __html: blogState.blog?.content }}
          ></div>
        </div>

        {userState.authenticated && (
          <form onSubmit={handleReviewSubmit}>
            <TextField
              id="review"
              label="Review"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              gutterBottom
            />
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "30px 0" }}
            >
              Add Review
            </Button>
          </form>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;
